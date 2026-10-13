import { describe, expect, it } from "vitest";
import { ALL_LESSONS, STAGES } from "@/lib/lessons";
import { getLearningStyle } from "@/lib/personality";
import { scoreLesson, summarizeResults } from "@/lib/learning";

describe("Expanded parenting learning", () => {
  it("has more lessons than the original nine", () => {
    expect(ALL_LESSONS.length).toBeGreaterThan(9);
  });
  it("makes every lesson longer than the original three-question lessons", () => {
    expect(ALL_LESSONS.every((lesson) => lesson.questions.length > 3)).toBe(true);
  });
  it("uses weeks instead of month-based sections", () => {
    expect(
      STAGES.slice(1).every(
        (stage) => /^Weeks? /.test(stage.range) && !stage.range.includes("months"),
      ),
    ).toBe(true);
  });
  it("has longer explanations for every question", () => {
    expect(
      ALL_LESSONS.every((lesson) =>
        lesson.questions.every((question) => question.tip.length > 100),
      ),
    ).toBe(true);
  });
  it("provides an external HTTPS video resource for every lesson", () => {
    expect(
      ALL_LESSONS.every((lesson) =>
        lesson.resources.some(
          (resource) => resource.type === "video" && new URL(resource.url).protocol === "https:",
        ),
      ),
    ).toBe(true);
  });
  it("starts with a style reflection that produces an actionable result", () => {
    expect(getLearningStyle([1, 1, 0, 2, 1])).toBe("connector");
  });
  it("scores six correct answers at 35 XP", () => {
    const lesson = ALL_LESSONS.find((item) => item.id === "sleep");
    if (!lesson) throw new Error("Missing sleep lesson");
    expect(
      scoreLesson(
        lesson.id,
        lesson.questions.map((q) => q.answer),
      ),
    ).toEqual({ correct: 6, xp: 35 });
  });
  it("rejects incomplete submissions", () => {
    expect(() => scoreLesson("sleep", [1])).toThrow();
  });
  it("shares completed lessons without attributing partner XP to the other parent", () => {
    const results = [
      {
        user_id: "a",
        lesson_id: "sleep",
        xp: 35,
        correct: 6,
        completed_at: "2026-10-13T10:00:00Z",
      },
      {
        user_id: "b",
        lesson_id: "feeding",
        xp: 30,
        correct: 5,
        completed_at: "2026-10-13T10:00:00Z",
      },
    ];
    const summary = summarizeResults(results, "a", new Date("2026-10-13T12:00:00Z"));
    expect(summary.done).toEqual(["sleep", "feeding"]);
    expect(summary.xp).toBe(35);
  });
});
