<template>
  <div class="cultural-value-annotation-home">
    <UserHeader  class="user-header" />
    <router-view />
    
    <el-dialog v-model="dialogTableVisible" title="" width="1376" class="onboarding-dialog" align-center>
      <OnboardingDialog :visible="dialogTableVisible"></OnboardingDialog>
    </el-dialog>

    <div v-if="!isOnboardingPage" class="View-tutorial-btn" @click="dialogTableVisible = true"><svgIcon
              
                name="play-icon"
              ></svgIcon><span>{{isOnboardingPage}}View tutorial</span></div>
  </div>
</template>

<script setup>
import UserHeader from "./Components/UserHeader.vue";
import OnboardingDialog from "./OnboardingDialog.vue";

import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const dialogTableVisible = ref(false)
const isOnboardingPage = computed(() => route.path === "/CulturalValueAnnotation/onboarding");

</script>

<style scoped lang="scss">
.cultural-value-annotation-home {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  .user-header{
    position: absolute;
    top: 1em;
    left: 50%;
    transform: translateX(-50%);
  }
}

:deep(.onboarding-dialog) {
max-width: 1376px;
width: 70%;
border-radius: 12px;
padding: 60px 120px;
}
:deep(.el-overlay){
  z-index: 9999 !important;
}

.View-tutorial-btn {
  position: fixed;
  
  cursor: pointer;
  z-index: 5;
  right: -4.5em;
  top: 45%;
  transform: rotate(90deg);
  background-color: rgba(245, 195, 68, 1);
  padding: 0.5em 1.5em;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  height: 3em;
  width: 13em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #000;
  border: none;
  text-transform: uppercase;

  .svg-icon {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.5em;
    color: #000;
  }
}
</style>