// annotator 登录信息统一存到 userDetail，便于和现有页面逻辑保持一致。
export const CULTURAL_VALUE_ANNOTATION_USER_STORAGE_KEY = "userDetail";
// admin 登录信息单独存储，避免和 annotator 登录态互相覆盖。
export const CULTURAL_VALUE_ANNOTATION_ADMIN_STORAGE_KEY =
  "culturalValueAnnotationAdminDetail";
// 记录“本次登录里教程视频是否已经自动弹过”的 session 标记。
export const CULTURAL_VALUE_ANNOTATION_TUTORIAL_AUTO_OPENED_SESSION_KEY =
  "culturalValueAnnotationTutorialAutoOpened";

// 安全解析本地存储中的 JSON，解析失败时直接返回 null，避免页面报错。
const parseStoredJson = (value: string | null) => {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

export const getCulturalValueAnnotationUserDetail = () => {
  return parseStoredJson(
    localStorage.getItem(CULTURAL_VALUE_ANNOTATION_USER_STORAGE_KEY),
  );
};

// 读取当前 admin 的本地登录信息。
export const getCulturalValueAnnotationAdminDetail = () => {
  return parseStoredJson(
    localStorage.getItem(CULTURAL_VALUE_ANNOTATION_ADMIN_STORAGE_KEY),
  );
};

// annotator 只要存在 username，就认为当前已登录。
export const hasCulturalValueAnnotationAnnotatorLogin = () => {
  const userDetail = getCulturalValueAnnotationUserDetail();
  return !!userDetail?.username;
};

// admin 只要存在 username，就认为当前已登录。
export const hasCulturalValueAnnotationAdminLogin = () => {
  const adminDetail = getCulturalValueAnnotationAdminDetail();
  return !!adminDetail?.username;
};

// ==================== Onboarding 三阶段完成状态 ====================
//
// Onboarding 分三个独立阶段，每个阶段有自己的完成标志：
//   Step 1 — 培训视频（studied_annotation_guidance） → hasStudiedCulturalValueAnnotationVideoGuidance()
//   Step 2 — 校准测验（passed_calibration_quiz）    → hasPassedCalibrationQuiz()
//   Step 3 — 问卷（survey，本地存储）               → hasCompletedOnboardingSurveys() / markOnboardingSurveysCompleted()
//
// 三个函数彼此独立，分别判断对应阶段是否完成。
// =================================================================

// 判断 Step 1 是否完成：是否已学习完 video guidance（培训视频）。
// 注意：这仅代表培训视频已看完，不代表整个 onboarding 流程已完成。
export const hasStudiedCulturalValueAnnotationVideoGuidance = () => {
  const userDetail = getCulturalValueAnnotationUserDetail();
  return userDetail?.studied_annotation_guidance === true;
};

// 判断 Step 2 是否完成：是否已通过校准测验（calibration quiz）。
// 这仅代表测验已通过，不代表整个 onboarding 流程已完成。
export const hasPassedCalibrationQuiz = () => {
  const userDetail = getCulturalValueAnnotationUserDetail();
  return userDetail?.passed_calibration_quiz === true;
};

// ==================== Step 3 问卷完成状态 ====================
//
// 问卷完成状态仅保存在本地 localStorage，不经过服务端。
// 格式：{ username: true }，每个用户只有一个布尔值。
// 用户点击 "start annotation" 按钮时调用 markOnboardingSurveysCompleted()。
// =================================================================

const SURVEY_COMPLETION_STORAGE_KEY =
  "culturalValueAnnotationOnboardingSurveyCompletion";

// 判断 Step 3 是否完成：当前用户的问卷是否已全部完成。
// 这仅代表问卷已完成，不代表整个 onboarding 流程已完成。
export const hasCompletedOnboardingSurveys = () => {
  const userDetail = getCulturalValueAnnotationUserDetail();
  const username = userDetail?.username?.trim() || "__anonymous__";
  try {
    const allStorage = JSON.parse(
      localStorage.getItem(SURVEY_COMPLETION_STORAGE_KEY) || "{}",
    );
    return allStorage[username] === true;
  } catch {
    return false;
  }
};

// 标记当前用户的问卷已完成（点击 "start annotation" 按钮时调用）。
export const markOnboardingSurveysCompleted = () => {
  const userDetail = getCulturalValueAnnotationUserDetail();
  const username = userDetail?.username?.trim() || "__anonymous__";
  let allStorage: Record<string, boolean> = {};
  try {
    allStorage = JSON.parse(
      localStorage.getItem(SURVEY_COMPLETION_STORAGE_KEY) || "{}",
    );
  } catch {
    allStorage = {};
  }
  allStorage[username] = true;
  localStorage.setItem(SURVEY_COMPLETION_STORAGE_KEY, JSON.stringify(allStorage));
};

// 判断当前这次 annotator 登录里，教程视频是否已经自动弹出过一次。
export const hasAutoOpenedCulturalValueAnnotationTutorialThisLogin = () => {
  return (
    sessionStorage.getItem(
      CULTURAL_VALUE_ANNOTATION_TUTORIAL_AUTO_OPENED_SESSION_KEY,
    ) === "true"
  );
};

// 在首次自动弹窗后写入标记，防止同一轮登录反复自动弹出教程视频。
export const markCulturalValueAnnotationTutorialAutoOpenedThisLogin = () => {
  sessionStorage.setItem(
    CULTURAL_VALUE_ANNOTATION_TUTORIAL_AUTO_OPENED_SESSION_KEY,
    "true",
  );
};

// 清除本次登录的自动弹窗标记，供重新登录或退出登录时复位使用。
export const resetCulturalValueAnnotationTutorialAutoOpenedState = () => {
  sessionStorage.removeItem(
    CULTURAL_VALUE_ANNOTATION_TUTORIAL_AUTO_OPENED_SESSION_KEY,
  );
};

// annotator 退出时清掉登录信息、编辑缓存和教程自动弹窗状态。
export const clearCulturalValueAnnotationAnnotatorSession = () => {
  localStorage.removeItem(CULTURAL_VALUE_ANNOTATION_USER_STORAGE_KEY);
  sessionStorage.removeItem("editCurrentQuestion");
  resetCulturalValueAnnotationTutorialAutoOpenedState();
};

// admin 退出时只清理自己的登录信息。
export const clearCulturalValueAnnotationAdminSession = () => {
  localStorage.removeItem(CULTURAL_VALUE_ANNOTATION_ADMIN_STORAGE_KEY);
};

// 保存 annotator 登录结果前，先清理 admin 会话，并重置本次登录的自动弹窗计数。
export const saveCulturalValueAnnotationUserDetail = (detail: any) => {
  clearCulturalValueAnnotationAdminSession();
  // 每次 annotator 登录成功都重置自动弹窗标记，确保“本次登录”重新开始计数。
  resetCulturalValueAnnotationTutorialAutoOpenedState();
  localStorage.setItem(
    CULTURAL_VALUE_ANNOTATION_USER_STORAGE_KEY,
    JSON.stringify({
      ...detail,
      account_type: "annotator",
    }),
  );
};

// 局部更新 annotator localStorage 中的指定字段，不覆盖已有字段。
// 用于 Onboarding 各阶段完成后单独更新对应的完成标志。
export const updateUserDetailFields = (fields: Record<string, any>) => {
  const stored = getCulturalValueAnnotationUserDetail() || {};
  localStorage.setItem(
    CULTURAL_VALUE_ANNOTATION_USER_STORAGE_KEY,
    JSON.stringify({
      ...stored,
      ...fields,
      account_type: "annotator",
    }),
  );
};

// 保存 admin 登录结果前，先清理 annotator 会话，避免两类账号并存。
export const saveCulturalValueAnnotationAdminDetail = (detail: any) => {
  clearCulturalValueAnnotationAnnotatorSession();
  localStorage.setItem(
    CULTURAL_VALUE_ANNOTATION_ADMIN_STORAGE_KEY,
    JSON.stringify({
      ...detail,
      account_type: "admin",
    }),
  );
};