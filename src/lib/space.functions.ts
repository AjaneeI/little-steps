import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { scoreLesson } from "./learning";

export const completeLesson = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string(), answers: z.array(z.number().int()) }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const score = scoreLesson(data.id, data.answers);
    // Only the authenticated, canonical scorer can award XP; direct client writes are denied.
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("lesson_results")
      .upsert(
        { user_id: context.userId, lesson_id: data.id, ...score },
        { onConflict: "user_id,lesson_id", ignoreDuplicates: true },
      );
    if (error) throw new Error("Your progress could not be saved. Please try again.");
    return score;
  });
