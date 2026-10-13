import { useState } from "react";
import { Sprout, Compass, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PERSONALITY_QUESTIONS,
  STYLE_INFO,
  getLearningStyle,
  type LearningStyle,
} from "@/lib/personality";

export function PersonalityQuiz({ onDone }: { onDone: (style: LearningStyle) => void }) {
  const [answers, setAnswers] = useState<number[]>([]);
  const [pick, setPick] = useState<number | null>(null);
  const question = PERSONALITY_QUESTIONS[answers.length];
  const style = getLearningStyle(answers);
  const info = STYLE_INFO[style];
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6 py-10">
      <p className="font-display text-2xl text-primary">Little Steps</p>
      {question ? (
        <>
          <Sprout className="mt-8 size-14 text-primary" aria-hidden />
          <p className="mt-5 text-sm font-bold text-primary">
            Your parenting style · {answers.length + 1} of 5
          </p>
          <h1 className="mt-2 text-3xl">{question.question}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            No right or wrong answers. A little reflection, not a psychological assessment.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {question.options.map((option, index) => (
              <Button
                key={option}
                variant="outline"
                aria-pressed={pick === index}
                className={`h-auto min-h-14 whitespace-normal justify-start p-4 text-left ${pick === index ? "border-primary bg-primary/10" : ""}`}
                onClick={() => setPick(index)}
              >
                {option}
              </Button>
            ))}
          </div>
          <Button
            className="mt-6 h-12"
            disabled={pick === null}
            onClick={() => {
              if (pick === null) return;
              setAnswers([...answers, pick]);
              setPick(null);
            }}
          >
            Continue
          </Button>
        </>
      ) : (
        <>
          {style === "planner" ? (
            <Compass className="mt-8 size-14 text-primary" />
          ) : style === "connector" ? (
            <Heart className="mt-8 size-14 text-primary" />
          ) : (
            <Sprout className="mt-8 size-14 text-primary" />
          )}
          <p className="mt-6 text-sm font-bold text-primary">Your starting style</p>
          <h1 className="mt-2 text-3xl">{info.name}</h1>
          <p className="mt-4 leading-relaxed">{info.description}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            This is a reflection of today’s preferences, not a fixed label or a measure of parenting
            ability.
          </p>
          <Button className="mt-8 h-12" onClick={() => onDone(style)}>
            Start my learning path
          </Button>
        </>
      )}
    </main>
  );
}
