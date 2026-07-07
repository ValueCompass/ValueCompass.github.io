import { getCalibrationQuiz } from "@/service/CulturalValueAnnotationApi";

/**
 * 从 API 获取 calibration quiz 数据。
 * @param {string} country - 国家
 * @param {string} language - 语言
 * @returns {Promise<Array>} quiz 题目列表
 */
export const fetchOnboardingQuizQuestions = async (country, language) => {
  const res = await getCalibrationQuiz({ country, language });
  const quiz = res?.data?.calibration_quiz;
  const items = quiz?.items || [];
  const moduleTitles = {};
  for (const key of Object.keys(quiz || {})) {
    const titleMatch = key.match(/^module(\d+)_title$/);
    if (titleMatch) {
      const modNum = titleMatch[1];
      if (!moduleTitles[modNum]) moduleTitles[modNum] = {};
      moduleTitles[modNum].title = quiz[key];
    }
    const descMatch = key.match(/^module(\d+)_description$/);
    if (descMatch) {
      const modNum = descMatch[1];
      if (!moduleTitles[modNum]) moduleTitles[modNum] = {};
      moduleTitles[modNum].description = quiz[key];
    }
  }
  console.log(items, moduleTitles);
  return { items, moduleTitles };
};
