import { useState } from "react";
import { X, Play, ExternalLink, RotateCcw, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Lesson } from "@/lib/lessons";
import { scoreLesson } from "@/lib/learning";

export function LessonQuiz({
  lesson,
  onDone,
  onExit,
}: {
  lesson: Lesson;
  onDone: (answers: number[]) => Promise<void>;
  onExit: () => void;
}) {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);
  const [pick, setPick] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const question = lesson.questions[step];
  const finished = step >= lesson.questions.length;
  const score = finished ? scoreLesson(lesson.id, answers) : null;
  const correctSoFar =
    answers.filter((answer, i) => answer === lesson.questions[i]?.answer).length +
    (pick !== null && pick === question?.answer ? 1 : 0);
  return (
    <main className="mx-auto min-h-screen max-w-lg px-5 py-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" aria-label="Close lesson" onClick={onExit}>
          <X />
        </Button>
        <progress
          className="game-progress flex-1"
          max={lesson.questions.length}
          value={Math.max(0, step)}
        />
        <span className="text-sm font-bold text-primary">
          {Math.min(Math.max(step, 0), lesson.questions.length)}/{lesson.questions.length}
        </span>
      </div>
      <p className="mt-7 text-sm font-bold text-muted-foreground">
        {lesson.title} · {lesson.minutes}–15 min
      </p>
      {step === -1 ? (
        <>
          <h1 className="mt-3 text-3xl">A little knowledge, a little confidence.</h1>
          <p className="mt-5 leading-relaxed">{lesson.intro}</p>
          <p className="mt-5 text-sm text-muted-foreground">
            General education, not medical advice. Seek professional help for health concerns.
          </p>
          <Resources lesson={lesson} />
          <Button className="mt-7 h-12 w-full" onClick={() => setStep(0)}>
            Begin lesson · {lesson.questions.length} questions
          </Button>
        </>
      ) : finished && score ? (
        <>
          <div className="mt-10 text-center">
            <PartyPopper className="mx-auto size-14 text-primary" aria-hidden />
            <h1 className="mt-4 text-3xl text-primary">Lesson complete!</h1>
            <p className="mt-3">
              {score.correct}/{lesson.questions.length} correct · +{score.xp} XP
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              First completion earns XP. Reviews keep your knowledge fresh.
            </p>
          </div>
          {score.correct < lesson.questions.length && (
            <section className="mt-6">
              <h2 className="text-xl">A quick recap</h2>
              {lesson.questions.map((q, i) =>
                answers[i] !== q.answer ? (
                  <div className="mt-4 border-b pb-4" key={q.q}>
                    <p className="font-bold">{q.options[q.answer]}</p>
                    <p className="mt-2 text-sm leading-relaxed">{q.tip}</p>
                  </div>
                ) : null,
              )}
            </section>
          )}
          <p className="mt-6 rounded-lg bg-accent p-4 text-sm leading-relaxed text-accent-foreground">
            {lesson.practice}
          </p>
          <Resources lesson={lesson} />
          {error && (
            <p role="alert" className="mt-4 text-sm text-destructive">
              {error}
            </p>
          )}
          <Button
            className="mt-6 h-12 w-full"
            disabled={saving}
            onClick={async () => {
              setSaving(true);
              setError("");
              try {
                await onDone(answers);
              } catch (e) {
                setError(e instanceof Error ? e.message : "Please try saving again.");
              } finally {
                setSaving(false);
              }
            }}
          >
            {saving ? "Saving…" : "Save & continue"}
          </Button>
          <Button
            variant="ghost"
            className="mt-2 w-full"
            onClick={() => {
              setStep(-1);
              setAnswers([]);
              setPick(null);
            }}
          >
            <RotateCcw /> Review again
          </Button>
        </>
      ) : question ? (
        <>
          <h1 className="mt-3 text-2xl">{question.q}</h1>
          <div className="mt-6 flex flex-col gap-3">
            {question.options.map((option, index) => (
              <Button
                key={option}
                variant="outline"
                disabled={pick !== null}
                className={`h-auto min-h-14 justify-start whitespace-normal p-4 text-left disabled:opacity-100 ${pick !== null && index === question.answer ? "border-success bg-success/10 text-success" : pick === index ? "border-destructive bg-destructive/10 text-destructive" : ""}`}
                onClick={() => setPick(index)}
              >
                {option}
              </Button>
            ))}
          </div>
          {pick !== null && (
            <section
              className={`mt-6 rounded-lg p-4 ${pick === question.answer ? "bg-success/10" : "bg-accent"}`}
            >
              <h2 className="text-lg">
                {pick === question.answer ? "Nice work!" : "A useful thing to learn"}
              </h2>
              <p className="mt-2 text-sm leading-relaxed">{question.tip}</p>
            </section>
          )}
          <p className="mt-4 text-xs text-muted-foreground">
            {correctSoFar} correct so far · Every question is a chance to learn.
          </p>
          <Button
            className="mt-6 h-12 w-full"
            disabled={pick === null}
            onClick={() => {
              if (pick === null) return;
              setAnswers([...answers, pick]);
              setPick(null);
              setStep(step + 1);
            }}
          >
            {step === lesson.questions.length - 1 ? "Finish lesson" : "Continue"}
          </Button>
        </>
      ) : null}
    </main>
  );
}
function Resources({ lesson }: { lesson: Lesson }) {
  return (
    <section className="mt-7 border-t pt-5">
      <h2 className="text-lg">Dive deeper</h2>
      {lesson.resources.map((resource) => (
        <Button
          key={resource.url}
          asChild
          variant="outline"
          className="mt-3 h-auto w-full justify-start whitespace-normal p-4 text-left"
        >
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            <Play className="text-primary" />
            <span className="flex-1">
              {resource.title}
              <span className="mt-1 block text-xs font-normal text-muted-foreground">
                External video or video collection
              </span>
            </span>
            <ExternalLink />
          </a>
        </Button>
      ))}
    </section>
  );
}
