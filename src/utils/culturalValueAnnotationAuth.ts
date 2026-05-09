export const CULTURAL_VALUE_ANNOTATION_USER_STORAGE_KEY = "userDetail";
export const CULTURAL_VALUE_ANNOTATION_ADMIN_STORAGE_KEY =
  "culturalValueAnnotationAdminDetail";

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

export const getCulturalValueAnnotationAdminDetail = () => {
  return parseStoredJson(
    localStorage.getItem(CULTURAL_VALUE_ANNOTATION_ADMIN_STORAGE_KEY),
  );
};

export const hasCulturalValueAnnotationAnnotatorLogin = () => {
  const userDetail = getCulturalValueAnnotationUserDetail();
  return !!userDetail?.username;
};

export const hasCulturalValueAnnotationAdminLogin = () => {
  const adminDetail = getCulturalValueAnnotationAdminDetail();
  return !!adminDetail?.username;
};

export const hasStudiedCulturalValueAnnotationGuidance = () => {
  const userDetail = getCulturalValueAnnotationUserDetail();
  return userDetail?.studied_annotation_guidance === true;
};

export const clearCulturalValueAnnotationAnnotatorSession = () => {
  localStorage.removeItem(CULTURAL_VALUE_ANNOTATION_USER_STORAGE_KEY);
  sessionStorage.removeItem("editCurrentQuestion");
};

export const clearCulturalValueAnnotationAdminSession = () => {
  localStorage.removeItem(CULTURAL_VALUE_ANNOTATION_ADMIN_STORAGE_KEY);
};

export const saveCulturalValueAnnotationUserDetail = (detail: any) => {
  clearCulturalValueAnnotationAdminSession();
  localStorage.setItem(
    CULTURAL_VALUE_ANNOTATION_USER_STORAGE_KEY,
    JSON.stringify({
      ...detail,
      account_type: "annotator",
    }),
  );
};

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