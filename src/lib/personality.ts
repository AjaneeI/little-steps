export type LearningStyle = "planner" | "connector" | "explorer";
export const STYLE_INFO = {
  planner: {
    name: "Thoughtful planner",
    emoji: "🧭",
    description:
      "You feel steadier with a clear plan. Take one practical step at a time, and leave room for your baby to surprise you.",
    encouragement: "One practical step at a time. You don’t have to have every answer today.",
  },
  connector: {
    name: "Caring connector",
    emoji: "💛",
    description:
      "You learn through connection and reassurance. Talking things through with your partner can make new routines feel less daunting.",
    encouragement: "Learning together counts. Share one thing you discovered with your partner.",
  },
  explorer: {
    name: "Curious explorer",
    emoji: "🌱",
    description:
      "You like understanding the why and trying things out. Follow your curiosity while keeping safety guidance at the center.",
    encouragement: "Stay curious. Small observations help you learn what works for your family.",
  },
};
export const PERSONALITY_QUESTIONS = [
  {
    question: "When something feels unfamiliar, what helps you most?",
    options: ["A clear checklist", "Talking it through with someone", "Understanding why it works"],
  },
  {
    question: "How would you prepare for your baby’s first night at home?",
    options: [
      "Set up a simple routine",
      "Agree how we’ll support each other",
      "Learn about newborn sleep cues",
    ],
  },
  {
    question: "When plans change, you tend to…",
    options: [
      "Find a new practical next step",
      "Check how everyone is feeling",
      "Try another approach and observe",
    ],
  },
  {
    question: "What makes a learning session satisfying?",
    options: [
      "Leaving with an action to take",
      "Feeling reassured and connected",
      "Discovering something new",
    ],
  },
  {
    question: "What would you bring to a parenting team?",
    options: [
      "Organization and preparation",
      "Empathy and encouragement",
      "Curiosity and flexibility",
    ],
  },
];
export function getLearningStyle(answers: number[]): LearningStyle {
  const counts = [0, 0, 0];
  for (const answer of answers)
    if (answer >= 0 && answer <= 2) counts[answer] = (counts[answer] ?? 0) + 1;
  const best = counts.indexOf(Math.max(...counts));
  return (["planner", "connector", "explorer"] as const)[best] ?? "planner";
}
