import { getStoredOnboardingUserDetail } from "@/utils/culturalValueOnboarding";
import chinaQuiz from "@/data/quiz_China.json";
import japanQuiz from "@/data/quiz_Japan_final.json";
import singaporeQuiz from "@/data/quiz_Singapore_final.json";

const countryQuizDataMap = {
  default: chinaQuiz,
  China: chinaQuiz,
  Japan: japanQuiz,
  Singapore: singaporeQuiz,
};

export const createOnboardingQuizQuestions = (country) => {
  const storedCountry = getStoredOnboardingUserDetail().country;
  const quizCountry = country || storedCountry || "default";
  const quizData = countryQuizDataMap[quizCountry] || countryQuizDataMap.default;

  return quizData.items || [];
};
