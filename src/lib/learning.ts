import { ALL_LESSONS } from "./lessons";
export type Result = {
  user_id: string;
  lesson_id: string;
  xp: number;
  correct: number;
  completed_at: string;
};
export function scoreLesson(id: string, answers: number[]) {
  const lesson = ALL_LESSONS.find((item) => item.id === id);
  if (
    !lesson ||
    answers.length !== lesson.questions.length ||
    answers.some(
      (answer, i) =>
        !Number.isInteger(answer) ||
        answer < 0 ||
        answer >= (lesson.questions[i]?.options.length ?? 0),
    )
  )
    throw new Error("Please answer every question.");
  const correct = answers.filter((answer, i) => answer === lesson.questions[i]?.answer).length;
  return { correct, xp: correct * 5 + 5 };
}
export function summarizeResults(results: Result[], userId: string, now = new Date()) {
  const own = results.filter((result) => result.user_id === userId);
  const day = (value: Date) => `${value.getFullYear()}-${value.getMonth()}-${value.getDate()}`;
  const days = new Set(own.map((result) => day(new Date(result.completed_at))));
  let streak = 0;
  const cursor = new Date(now);
  if (!days.has(day(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (days.has(day(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return {
    done: [...new Set(results.map((result) => result.lesson_id))],
    xp: own.reduce((sum, result) => sum + result.xp, 0),
    todayXp: own
      .filter((result) => day(new Date(result.completed_at)) === day(now))
      .reduce((sum, result) => sum + result.xp, 0),
    streak,
  };
}
