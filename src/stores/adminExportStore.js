import { defineStore } from "pinia";
import { getAdminAnnotationUsers } from "@/service/CulturalValueAnnotationApi";

const pendingRequests = {};

const getAnnotationList = (annotations) => {
  if (Array.isArray(annotations)) {
    return annotations.filter(Boolean);
  }

  if (annotations && typeof annotations === "object") {
    return Object.values(annotations).filter(Boolean);
  }

  return [];
};

const getQuestionTypeCounts = (annotations) => {
  return getAnnotationList(annotations).reduce(
    (counts, annotation) => {
      const action = String(annotation.question_action || "").trim().toLowerCase();

      if (action === "select existing") {
        counts.selectCount += 1;
      } else if (action === "refine") {
        counts.refineCount += 1;
      } else if (action === "create" || action === "create new") {
        counts.createCount += 1;
      }

      return counts;
    },
    {
      selectCount: 0,
      refineCount: 0,
      createCount: 0,
    },
  );
};

const normalizeAdminUsers = (responseUsers, fallbackCountry) => {
  if (Array.isArray(responseUsers)) {
    return responseUsers;
  }

  if (!responseUsers || typeof responseUsers !== "object") {
    return [];
  }

  return Object.entries(responseUsers).map(([username, annotations]) => {
    const annotationList = getAnnotationList(annotations);
    const questionTypeCounts = getQuestionTypeCounts(annotations);

    return {
      id: username,
      name: username,
      country: fallbackCountry,
      completedAnnotations: annotationList.length,
      annotations,
      ...questionTypeCounts,
    };
  });
};

export const useAdminExportStore = defineStore("adminExportStore", {
  state: () => ({
    usersByAdminKey: {},
    loadedByAdminKey: {},
    loadingByAdminKey: {},
  }),
  actions: {
    getAdminCacheKey(adminDetail = {}) {
      const username = String(adminDetail.username || "").trim();
      const country = String(adminDetail.country || "").trim();
      return `${username}__${country}`;
    },
    getCachedUsers(adminDetail = {}) {
      const cacheKey = this.getAdminCacheKey(adminDetail);
      return this.usersByAdminKey[cacheKey] || [];
    },
    isCacheLoading(adminDetail = {}) {
      const cacheKey = this.getAdminCacheKey(adminDetail);
      return this.loadingByAdminKey[cacheKey] === true;
    },
    async ensureAdminUsers(adminDetail = {}) {
      const cacheKey = this.getAdminCacheKey(adminDetail);

      if (this.loadedByAdminKey[cacheKey]) {
        return this.usersByAdminKey[cacheKey] || [];
      }

      if (pendingRequests[cacheKey]) {
        return pendingRequests[cacheKey];
      }

      this.loadingByAdminKey[cacheKey] = true;

      const adminCountry = String(adminDetail.country || "").trim();
      const adminToken = String(adminDetail.token || "").trim();

      pendingRequests[cacheKey] = getAdminAnnotationUsers(
        {
          country: adminCountry,
        },
        adminToken,
      )
        .then((res) => {
          if (!res.data?.ok) {
            throw new Error("Failed to load admin data");
          }

          const normalizedUsers = normalizeAdminUsers(
            res.data.all_user_annotations,
            adminCountry,
          );

          this.usersByAdminKey[cacheKey] = normalizedUsers;
          this.loadedByAdminKey[cacheKey] = true;

          return normalizedUsers;
        })
        .catch((error) => {
          if (error?.response?.status === 401) {
            const loginExpiredError = new Error("Login expired");
            loginExpiredError.i18nKey = "common.loginExpiredRelogin";
            throw loginExpiredError;
          }

          throw error;
        })
        .finally(() => {
          this.loadingByAdminKey[cacheKey] = false;
          delete pendingRequests[cacheKey];
        });

      return pendingRequests[cacheKey];
    },
  },
});
