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

// 判断 annotator 是否已经完成过 onboarding，用于决定后续进入首页时的引导行为。
export const hasStudiedCulturalValueAnnotationGuidance = () => {
  const userDetail = getCulturalValueAnnotationUserDetail();
  return userDetail?.studied_annotation_guidance === true;
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