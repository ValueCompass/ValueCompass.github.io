<template>
  <div class="user-header main-container">
    <el-button
      style="height: 2.8em; font-size: 1em"
      @click="handleLogoutClick"
      >Logout</el-button
    >
    <div class="user-summary">
      <span>Name: {{ displayUserInfo.username || "-" }}</span>
      <span>Country: {{ displayUserInfo.country || "-" }}</span>
      <span>Language: {{ displayUserInfo.language || "-" }}</span>
        <span>Account Type: {{ displayAccountType }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";
import {
  clearCulturalValueAnnotationAdminSession,
  clearCulturalValueAnnotationAnnotatorSession,
  getCulturalValueAnnotationAdminDetail,
} from "../../../utils/culturalValueAnnotationAuth";

const props = defineProps({
  userInfo: {
    type: Object,
    default: null,
  },
});

const route = useRoute();

const isAdminPage = computed(() => {
  return route.path.startsWith("/CulturalValueAnnotation/admin");
});

const displayUserInfo = computed(() => {
  if (props.userInfo) {
    return props.userInfo;
  }
  if (isAdminPage.value) {
    return getCulturalValueAnnotationAdminDetail() || {};
  }
  return JSON.parse(localStorage.getItem("userDetail") || "{}");
});

const displayAccountType = computed(() => {
  const accountType = String(displayUserInfo.value?.account_type || "").trim();

  if (!accountType) {
    return "-";
  }

  return accountType.charAt(0).toUpperCase() + accountType.slice(1);
});

const handleLogoutClick = () => {
  if (isAdminPage.value) {
    clearCulturalValueAnnotationAdminSession();
  } else {
    clearCulturalValueAnnotationAnnotatorSession();
  }
  router.push("/CulturalValueAnnotation/Login");
};
</script>

<style scoped lang="scss">
.user-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;
  z-index: 2;

  .user-summary {
    display: flex;
    align-items: center;
    gap: 1.2em;
    font-size: 1em;
    line-height: 1.6;
    color: #1f2937;
    flex-wrap: wrap;
  }
}
</style>
