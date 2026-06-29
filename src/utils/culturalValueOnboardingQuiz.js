import { getStoredOnboardingUserDetail } from "@/utils/culturalValueOnboarding";

const defaultQuizQuestions = [
  {
    id: "q1",
    order: 1,
    type: "single",
    title: "What is the best first action when starting an annotation task?",
    prompt:
      "You are about to start annotating a new batch of cultural value examples.",
    correctAnswer: "a",
    hintTitle: "Start From The Guideline",
    hint:
      "A stable annotation decision should first follow the guideline, examples, and criteria. Starting immediately or skipping uncertain samples reduces consistency.",
    options: [
      { value: "a", label: "Review guideline and examples first" },
      { value: "b", label: "Start labeling immediately" },
      { value: "c", label: "Skip uncertain samples" },
    ],
  },
  {
    id: "q2",
    order: 2,
    type: "multiple",
    title: "Which practices improve annotation quality?",
    prompt:
      "Choose the practices that help keep labels consistent across annotators.",
    correctAnswer: ["a", "c", "d"],
    hintTitle: "Quality Depends On Consistency",
    hint:
      "Good annotation quality comes from consistent criteria, careful handling of edge cases, and recording uncertainty. Personal preference should not drive labels.",
    options: [
      { value: "a", label: "Use consistent criteria" },
      { value: "b", label: "Rely on personal preference" },
      { value: "c", label: "Check edge cases carefully" },
      { value: "d", label: "Record uncertain examples" },
    ],
  },
  {
    id: "q3",
    order: 3,
    type: "single",
    title: "If you are unsure about a label, what should you do?",
    prompt:
      "An example is ambiguous and could fit more than one value category.",
    correctAnswer: "b",
    hintTitle: "Handle Uncertainty Explicitly",
    hint:
      "When a label is uncertain, use the guideline, mark or record the uncertainty, and avoid guessing or leaving the item blank without context.",
    options: [
      { value: "a", label: "Guess and continue" },
      { value: "b", label: "Follow guideline and mark uncertainty" },
      { value: "c", label: "Leave it blank" },
    ],
  },
];

const countryQuizQuestionMap = {
  default: defaultQuizQuestions,
  China: defaultQuizQuestions,
  Japan: defaultQuizQuestions,
  Korea: defaultQuizQuestions,
  "South Korea": defaultQuizQuestions,
  "Republic of Korea": defaultQuizQuestions,
};

export const createOnboardingQuizQuestions = (country) => {
  const storedCountry = getStoredOnboardingUserDetail().country;
  const quizCountry = country || storedCountry || "default";

  return countryQuizQuestionMap[quizCountry] || countryQuizQuestionMap.default;
};
