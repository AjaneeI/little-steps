import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Users, Check, LockKeyhole, RefreshCw, Flame, Star, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STAGES, ALL_LESSONS, type Lesson } from "@/lib/lessons";
import { PersonalityQuiz } from "@/components/personality-quiz";
import { LessonQuiz } from "@/components/lesson-quiz";
import { LearningAccount } from "@/components/learning-account";
import { STYLE_INFO, type LearningStyle } from "@/lib/personality";
import { scoreLesson, summarizeResults, type Result } from "@/lib/learning";
import { completeLesson } from "@/lib/space.functions";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Little Steps — Learn parenting together, week by week" },
      {
        name: "description",
        content:
          "Prepare for parenthood with a parenting-style reflection, weekly baby-care lessons, expert videos and a shared partner learning space.",
      },
      { property: "og:title", content: "Little Steps — Learn parenting together" },
      {
        property: "og:description",
        content: "Deeper baby-care lessons and supportive shared learning, one week at a time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});
const GUEST_KEY = "little-steps-results";
const STYLE_KEY = "little-steps-style";
function Index() {
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [style, setStyle] = useState<LearningStyle | null>(null);
  const [guestResults, setGuestResults] = useState<Result[]>([]);
  const [active, setActive] = useState<Lesson | null>(null);
  const [accountOpen, setAccountOpen] = useState(false);
  const [stageId, setStageId] = useState("first");
  const [notice, setNotice] = useState("");
  const queryClient = useQueryClient();
  const submitLesson = useServerFn(completeLesson);
  async function refreshIdentity() {
    const { data } = await supabase.auth.getUser();
    const next = data.user?.id ?? null;
    if (next !== userId) {
      queryClient.removeQueries({ queryKey: ["learning-space"] });
      setUserId(next);
    } else await queryClient.invalidateQueries({ queryKey: ["learning-space"] });
  }
  useEffect(() => {
    let live = true;
    try {
      const savedStyle = localStorage.getItem(STYLE_KEY);
      if (savedStyle === "planner" || savedStyle === "connector" || savedStyle === "explorer")
        setStyle(savedStyle);
      const stored = JSON.parse(localStorage.getItem(GUEST_KEY) ?? "[]");
      if (Array.isArray(stored))
        setGuestResults(
          stored.filter(
            (r) =>
              typeof r.lesson_id === "string" &&
              typeof r.xp === "number" &&
              typeof r.completed_at === "string",
          ),
        );
    } catch {
      /* Corrupt guest storage starts with a clean session. */
    }
    void supabase.auth.getUser().then(({ data }) => {
      if (live) {
        setUserId(data.user?.id ?? null);
        setReady(true);
      }
    });
    const changed = () => {
      void supabase.auth.getUser().then(({ data }) => {
        if (live) {
          setUserId(data.user?.id ?? null);
          setActive(null);
        }
      });
    };
    window.addEventListener("little-steps-auth", changed);
    return () => {
      live = false;
      window.removeEventListener("little-steps-auth", changed);
    };
  }, []);
  const cloud = useQuery({
    queryKey: ["learning-space", userId],
    enabled: Boolean(userId),
    refetchInterval: 15000,
    queryFn: async () => {
      const { error: ensureError } = await supabase.rpc("ensure_learning_space");
      if (ensureError) throw ensureError;
      const [spaces, members, results, preferences] = await Promise.all([
        supabase.from("learning_spaces").select("id,owner_id,invite_code"),
        supabase.from("learning_members").select("user_id,space_id"),
        supabase.from("lesson_results").select("*"),
        supabase.from("learning_preferences").select("style").maybeSingle(),
      ]);
      for (const result of [spaces, members, results, preferences])
        if (result.error) throw result.error;
      return {
        space: spaces.data?.[0],
        members: members.data ?? [],
        results: results.data ?? [],
        style: preferences.data?.style,
      };
    },
  });
  const cloudStyle = cloud.data?.style;
  const effectiveStyle =
    cloudStyle === "planner" || cloudStyle === "connector" || cloudStyle === "explorer"
      ? cloudStyle
      : style;
  const results = userId ? (cloud.data?.results ?? []) : guestResults;
  const progress = summarizeResults(results, userId ?? "guest");
  const stage = STAGES.find((item) => item.id === stageId) ?? STAGES[0];
  async function saveStyle(nextStyle: LearningStyle) {
    if (userId) {
      const { error } = await supabase
        .from("learning_preferences")
        .upsert({ user_id: userId, style: nextStyle });
      if (error) {
        setNotice(
          "Your style could not be saved to your account. You can retry from your learning path.",
        );
      } else await queryClient.invalidateQueries({ queryKey: ["learning-space"] });
    }
    localStorage.setItem(STYLE_KEY, nextStyle);
    setStyle(nextStyle);
  }
  async function finish(lesson: Lesson, answers: number[]) {
    if (userId) {
      await submitLesson({ data: { id: lesson.id, answers } });
      await queryClient.invalidateQueries({ queryKey: ["learning-space"] });
    } else if (!guestResults.some((result) => result.lesson_id === lesson.id)) {
      const next = [
        ...guestResults,
        {
          user_id: "guest",
          lesson_id: lesson.id,
          ...scoreLesson(lesson.id, answers),
          completed_at: new Date().toISOString(),
        },
      ];
      localStorage.setItem(GUEST_KEY, JSON.stringify(next));
      setGuestResults(next);
    }
    setActive(null);
  }
  if (!ready || (userId && cloud.isPending))
    return (
      <main className="mx-auto flex min-h-screen max-w-lg items-center justify-center text-primary">
        Loading your Little Steps…
      </main>
    );
  if (!effectiveStyle)
    return (
      <PersonalityQuiz
        onDone={(nextStyle) => {
          void saveStyle(nextStyle);
        }}
      />
    );
  if (active)
    return (
      <LessonQuiz
        key={active.id}
        lesson={active}
        onExit={() => setActive(null)}
        onDone={(answers) => finish(active, answers)}
      />
    );
  const nextLesson = ALL_LESSONS.find((lesson) => !progress.done.includes(lesson.id));
  const partner = cloud.data?.members.find((member) => member.user_id !== userId);
  const ownCount = results.filter((result) => result.user_id === userId).length;
  const partnerCount = partner
    ? results.filter((result) => result.user_id === partner.user_id).length
    : 0;
  return (
    <main className="mx-auto min-h-screen max-w-xl px-5 pb-12">
      <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 bg-background/95 py-4 backdrop-blur">
        <h1 className="text-2xl text-primary">Little Steps</h1>
        <div className="flex items-center gap-3 text-sm font-bold">
          <span className="flex items-center gap-1 text-streak">
            <Flame className="size-4" /> {progress.streak}
          </span>
          <span className="flex items-center gap-1 text-accent-foreground">
            <Star className="size-4" /> {progress.xp}
          </span>
          <Button
            size="icon"
            variant="outline"
            aria-label={userId ? "Open partner space" : "Sign in and invite partner"}
            title="Partner space"
            onClick={() => setAccountOpen(!accountOpen)}
          >
            <Users />
          </Button>
        </div>
      </header>
      {accountOpen && (
        <LearningAccount
          userId={userId}
          members={cloud.data?.members.length ?? 0}
          inviteCode={
            cloud.data?.space?.owner_id === userId ? cloud.data.space.invite_code : undefined
          }
          onChanged={refreshIdentity}
          onClose={() => setAccountOpen(false)}
        />
      )}
      {cloud.isError && (
        <p className="my-4 text-sm text-destructive" role="alert">
          Shared progress could not load.{" "}
          <Button variant="link" onClick={() => void cloud.refetch()}>
            Try again
          </Button>
        </p>
      )}
      {notice && (
        <p className="my-3 text-sm" role="status">
          {notice}
        </p>
      )}
      <section className="border-b py-5">
        <div className="flex justify-between text-sm font-bold">
          <span>Today’s little step</span>
          <span>{Math.min(progress.todayXp, 30)}/30 XP</span>
        </div>
        <progress
          className="game-progress mt-3 w-full"
          value={Math.min(progress.todayXp, 30)}
          max={30}
        />
        <p className="mt-2 text-xs text-muted-foreground">One deeper lesson · 10–15 minutes</p>
        <p className="mt-4 text-sm leading-relaxed">{STYLE_INFO[effectiveStyle].encouragement}</p>
        <Button
          variant="link"
          className="h-auto px-0 pt-3 text-xs"
          onClick={() => {
            setNotice(STYLE_INFO[effectiveStyle].description);
          }}
        >
          Your style: {STYLE_INFO[effectiveStyle].name}
        </Button>
      </section>
      <section className="border-b py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg">{partner ? "Your parenting team" : "Better together"}</h2>
          <Button variant="ghost" size="sm" onClick={() => setAccountOpen(true)}>
            <Users />
            {partner ? "Shared space" : "Invite partner"}
          </Button>
        </div>
        {partner ? (
          <p className="mt-2 text-sm">
            You: {ownCount} lessons · Partner: {partnerCount} lessons · {progress.done.length}{" "}
            together
          </p>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">
            A shared path, with room for your own pace.
          </p>
        )}
        {!userId && (
          <p className="mt-2 text-xs text-muted-foreground">
            Guest progress stays in this browser. Signed-in learning saves to your account.
          </p>
        )}
      </section>
      <section className="py-6">
        <p className="text-xs font-bold uppercase text-primary">Your learning path</p>
        <h2 className="mt-1 text-2xl">Growing, week by week</h2>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Weeks are learning guides, not developmental deadlines. Start before birth or explore a
          week that fits your family.
        </p>
        <label className="mt-5 block text-sm font-bold">
          Learning week
          <select
            aria-label="Learning week"
            className="mt-2 h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground"
            value={stageId}
            onChange={(e) => setStageId(e.target.value)}
          >
            {STAGES.map((item) => (
              <option key={item.id} value={item.id}>
                {item.range} · {item.name}
              </option>
            ))}
          </select>
        </label>
        {stage && (
          <div className="mt-6">
            <div className="border-l-4 border-primary pl-4">
              <p className="text-sm font-bold text-primary">{stage.range}</p>
              <h3 className="text-xl">{stage.name}</h3>
            </div>
            <div className="mt-5 space-y-4">
              {stage.lessons.map((lesson) => {
                const done = progress.done.includes(lesson.id);
                return (
                  <article className="rounded-lg border bg-card p-5" key={lesson.id}>
                    <div className="flex gap-4">
                      <span
                        className={`node shrink-0 ${done ? "node-done" : "node-next"}`}
                        aria-hidden
                      >
                        {done ? <Check /> : <BookOpen />}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-xl">{lesson.title}</h3>
                        <p className="mt-1 text-xs text-muted-foreground">
                          6 questions · 10–15 min · Deeper-learning video
                        </p>
                        <p className="mt-3 text-sm leading-relaxed">{lesson.intro}</p>
                      </div>
                    </div>
                    <Button className="mt-5 h-11 w-full" onClick={() => setActive(lesson)}>
                      {done ? (
                        <>
                          <RefreshCw /> Review lesson
                        </>
                      ) : (
                        "Start lesson"
                      )}
                    </Button>
                  </article>
                );
              })}
            </div>
          </div>
        )}
        {nextLesson && !stage?.lessons.includes(nextLesson) && (
          <Button
            variant="link"
            className="mt-4 whitespace-normal"
            onClick={() => {
              const nextStage = STAGES.find((item) => item.lessons.includes(nextLesson));
              if (nextStage) setStageId(nextStage.id);
            }}
          >
            Next on your path: {nextLesson.title} →
          </Button>
        )}
      </section>
      <footer className="border-t pt-4 text-xs leading-relaxed text-muted-foreground">
        <LockKeyhole className="mb-2 size-4" />
        Educational content is not a substitute for medical advice. Content still needs professional
        review before wider use.
      </footer>
    </main>
  );
}
