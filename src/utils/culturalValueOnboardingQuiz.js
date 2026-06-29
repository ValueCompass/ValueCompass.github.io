import { getStoredOnboardingUserDetail } from "@/utils/culturalValueOnboarding";
import chinaQuiz from "@/data/quiz_China.json";

const countryQuizDataMap = {
  default: chinaQuiz,
  China: chinaQuiz,
};

export const createOnboardingQuizQuestions = (country) => {
  const storedCountry = getStoredOnboardingUserDetail().country;
  const quizCountry = country || storedCountry || "default";
  const quizData = countryQuizDataMap[quizCountry] || countryQuizDataMap.default;

  return quizData.items || [];
};
