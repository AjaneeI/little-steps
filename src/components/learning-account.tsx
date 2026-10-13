import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { Copy, RefreshCw, Users, X } from "lucide-react";

export function LearningAccount({
  userId,
  inviteCode,
  members,
  onChanged,
  onClose,
}: {
  userId: string | null;
  inviteCode?: string | undefined;
  members: number;
  onChanged: () => Promise<void>;
  onClose: () => void;
}) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  async function run(action: () => Promise<void>) {
    setBusy(true);
    setMessage("");
    try {
      await action();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <section className="mt-5 border-y py-5">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xl">
          <Users /> Your shared space
        </h2>
        <Button size="icon" variant="ghost" aria-label="Close partner settings" onClick={onClose}>
          <X />
        </Button>
      </div>
      {!userId ? (
        <>
          <p className="mt-3 text-sm text-muted-foreground">
            Sign in to save your learning across devices and invite your partner.
          </p>
          <Button
            variant="outline"
            className="mt-4 h-11 w-full"
            disabled={busy}
            onClick={() =>
              run(async () => {
                const result = await lovable.auth.signInWithOAuth("google", {
                  redirect_uri: window.location.origin,
                });
                if (result.error) throw result.error;
                await onChanged();
              })
            }
          >
            Continue with Google
          </Button>
          <form
            className="mt-4 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              void run(async () => {
                if (mode === "signin") {
                  const { error } = await supabase.auth.signInWithPassword({ email, password });
                  if (error) throw error;
                  await onChanged();
                } else {
                  const { error, data } = await supabase.auth.signUp({
                    email,
                    password,
                    options: { emailRedirectTo: window.location.origin },
                  });
                  if (error) throw error;
                  if (!data.session)
                    setMessage("Check your email to confirm your account, then sign in.");
                  else await onChanged();
                }
              });
            }}
          >
            <label className="block text-sm">
              Email
              <Input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="block text-sm">
              Password
              <Input
                type="password"
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                minLength={8}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <Button className="h-11 w-full" disabled={busy}>
              {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
            </Button>
          </form>
          <Button
            variant="link"
            className="mt-2"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          >
            {mode === "signin" ? "New here? Create account" : "Already have an account? Sign in"}
          </Button>
        </>
      ) : (
        <>
          <p className="mt-3 text-sm">
            {members === 2
              ? "You and your partner are learning together 💛"
              : "Your space is ready. Invite your partner to join."}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Joining shares lesson completion and XP. Each partner keeps their own results.
          </p>
          {inviteCode && (
            <div className="mt-4">
              <label className="text-sm">
                Private invite code
                <Input
                  readOnly
                  aria-label="Your invite code"
                  value={inviteCode}
                  className="mt-1 text-xs"
                />
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    run(async () => {
                      await navigator.clipboard.writeText(inviteCode);
                      setMessage("Invite code copied. Share it privately with your partner.");
                    })
                  }
                >
                  <Copy /> Copy code
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    run(async () => {
                      const { error } = await supabase.rpc("rotate_learning_invite");
                      if (error) throw error;
                      await onChanged();
                      setMessage("Previous invitation replaced.");
                    })
                  }
                >
                  <RefreshCw /> Replace invite
                </Button>
              </div>
            </div>
          )}
          <form
            className="mt-5 space-y-2"
            onSubmit={(e) => {
              e.preventDefault();
              void run(async () => {
                if (!/^[0-9a-f-]{36}$/i.test(code.trim()))
                  throw new Error("Paste the full invite code from your partner.");
                const { error } = await supabase.rpc("join_learning_space", { code: code.trim() });
                if (error) throw error;
                await onChanged();
                setMessage("You’ve joined your partner’s space!");
                setCode("");
              });
            }}
          >
            <label className="text-sm">
              Have your partner’s code?
              <Input
                placeholder="Paste invite code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </label>
            <Button variant="outline" disabled={busy || !code.trim()}>
              Join partner’s space
            </Button>
          </form>
          <Button
            variant="ghost"
            className="mt-3"
            onClick={() =>
              run(async () => {
                await supabase.auth.signOut();
                await onChanged();
              })
            }
          >
            Sign out
          </Button>
        </>
      )}
      {message && (
        <p className="mt-3 text-sm" role="status">
          {message}
        </p>
      )}
    </section>
  );
}
