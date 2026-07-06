import { getCalibrationQuiz } from "@/service/CulturalValueAnnotationApi";

/**
 * 从 API 获取 calibration quiz 数据。
 * @param {string} country - 国家
 * @param {string} language - 语言
 * @returns {Promise<Array>} quiz 题目列表
 */
export const fetchOnboardingQuizQuestions = async (country, language) => {
  const res = await getCalibrationQuiz({ country, language });
  return res?.data?.calibration_quiz?.items || [];
};
