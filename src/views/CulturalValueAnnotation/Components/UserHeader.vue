<template>
  <div class="user-header">
    <el-button
      style="height: 2.8em; font-size: 1em"
      @click="handleLogoutClick"
      >Logout</el-button
    >
    <div class="user-summary">
      <span>Name: {{ displayUserInfo.username || "-" }}</span>
      <span>Country: {{ displayUserInfo.country || "-" }}</span>
      <span>Language: {{ displayUserInfo.language || "-" }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import router from "@/router";

const props = defineProps({
  userInfo: {
    type: Object,
    default: null,
  },
});

const displayUserInfo = computed(() => {
  if (props.userInfo) {
    return props.userInfo;
  }
  return JSON.parse(localStorage.getItem("userDetail") || "{}");
});

const handleLogoutClick = () => {
  localStorage.removeItem("userDetail");
  sessionStorage.removeItem("editCurrentQuestion");
  window.location.reload();
};
</script>

<style scoped lang="scss">
.user-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;

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
