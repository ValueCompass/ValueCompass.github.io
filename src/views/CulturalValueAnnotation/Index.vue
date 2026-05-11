<template>
  <div class="cultural-value-annotation-home">
    <UserHeader  class="user-header" />
    <router-view />
    
    <el-dialog
      v-if="!isAdminPage"
      v-model="dialogTableVisible"
      title=""
      width="1376"
      :class="['onboarding-dialog', { 'onboarding-dialog--closing': isDialogClosing }]"
      :style="dialogAnimationStyle"
      align-center
      :before-close="handleTutorialDialogBeforeClose"
      @closed="handleTutorialDialogClosed"
    >
      <OnboardingDialog :visible="dialogTableVisible"></OnboardingDialog>
    </el-dialog>

    <div
      v-if="!isOnboardingPage && !isAdminPage"
      ref="tutorialButtonRef"
      class="View-tutorial-btn"
      @click="openTutorialDialog"
    ><svgIcon
              
                name="play-icon"
              ></svgIcon><span>View tutorial</span></div>
  </div>
</template>

<script setup>
import UserHeader from "./Components/UserHeader.vue";
import OnboardingDialog from "./OnboardingDialog.vue";

import { computed, nextTick, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import {
  hasAutoOpenedCulturalValueAnnotationTutorialThisLogin,
  hasCulturalValueAnnotationAnnotatorLogin,
  hasStudiedCulturalValueAnnotationGuidance,
  markCulturalValueAnnotationTutorialAutoOpenedThisLogin,
} from "../../utils/culturalValueAnnotationAuth";

const route = useRoute();
const dialogTableVisible = ref(false)
// 标记弹窗当前是否处于关闭动画阶段，用来切换退场样式。
const isDialogClosing = ref(false);
// 记录右侧 View tutorial 按钮的 DOM，用于计算弹窗收缩的目标位置。
const tutorialButtonRef = ref(null);
// 通过 CSS 变量把位移和缩放值传给弹窗样式，驱动退场动画。
const dialogAnimationStyle = ref({});
const TUTORIAL_CLOSE_ANIMATION_MS = 420;

const isOnboardingPage = computed(() => route.path === "/CulturalValueAnnotation/onboarding");
const isAdminPage = computed(() => route.path.startsWith("/CulturalValueAnnotation/admin"));

const openTutorialDialog = async () => {
  // 每次重新打开时清掉上一次关闭动画留下的状态。
  isDialogClosing.value = false;
  dialogAnimationStyle.value = {};
  dialogTableVisible.value = true;
  await nextTick();
};

const updateDialogCloseAnimationStyle = () => {
  const tutorialButtonElement = tutorialButtonRef.value;
  const dialogElement = document.querySelector(".onboarding-dialog");

  if (!tutorialButtonElement || !dialogElement) {
    return false;
  }

  const dialogRect = dialogElement.getBoundingClientRect();
  const buttonRect = tutorialButtonElement.getBoundingClientRect();
  // 计算弹窗中心点到按钮中心点的位移，让弹窗看起来是缩小吸附到按钮上。
  const translateX =
    buttonRect.left + buttonRect.width / 2 - (dialogRect.left + dialogRect.width / 2);
  const translateY =
    buttonRect.top + buttonRect.height / 2 - (dialogRect.top + dialogRect.height / 2);
  // 缩放比例以下限兜底，避免目标按钮过小时弹窗被瞬间压到不可见。
  const scaleX = Math.max(buttonRect.width / dialogRect.width, 0.12);
  const scaleY = Math.max(buttonRect.height / dialogRect.height, 0.08);

  dialogAnimationStyle.value = {
    "--tutorial-close-x": `${translateX}px`,
    "--tutorial-close-y": `${translateY}px`,
    "--tutorial-close-scale-x": `${scaleX}`,
    "--tutorial-close-scale-y": `${scaleY}`,
  };

  return true;
};

// 关闭时先播放缩小吸附动画，再真正销毁 el-dialog。
const handleTutorialDialogBeforeClose = (done) => {
  if (isDialogClosing.value) {
    return;
  }

  // 先写入本次动画需要的位移和缩放参数，再切换关闭态触发 CSS transition。
  updateDialogCloseAnimationStyle();
  isDialogClosing.value = true;

  window.setTimeout(() => {
    done();
  }, TUTORIAL_CLOSE_ANIMATION_MS);
};

const handleTutorialDialogClosed = () => {
  isDialogClosing.value = false;
  dialogAnimationStyle.value = {};
};

onMounted(async () => {
  await nextTick();

  // 只有 annotator 才需要自动补弹教程视频；admin 页面和 onboarding 页面都跳过。
  // 同时要求该 annotator 已经完成过 onboarding，避免首次培训流程被这个弹窗打断。
  // 最后再结合 sessionStorage 标记，保证同一次登录过程中只自动弹出一次。
  if (
    !isOnboardingPage.value &&
    !isAdminPage.value &&
    hasCulturalValueAnnotationAnnotatorLogin() &&
    hasStudiedCulturalValueAnnotationGuidance() &&
    !hasAutoOpenedCulturalValueAnnotationTutorialThisLogin()
  ) {
    // 满足条件后立刻写入“本次登录已自动弹过”的标记，防止用户在本轮登录里
    // 离开模块后再次进入时重复自动弹窗；手动点击 View tutorial 不受这个限制。
    markCulturalValueAnnotationTutorialAutoOpenedThisLogin();
    openTutorialDialog();
  }
});

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
width: 75%;
border-radius: 12px;
padding: 60px 120px;
/* 保持从中心点开始收缩，和后面计算的中心点位移形成连贯视觉效果。 */
transform-origin: center center;
will-change: transform, opacity;
transition:
  transform 420ms cubic-bezier(0.22, 0.8, 0.2, 1),
  opacity 420ms ease,
  filter 420ms ease;
}

:deep(.onboarding-dialog.onboarding-dialog--closing) {
opacity: 0;
filter: blur(1px);
/* 关闭时向右侧按钮方向移动并缩小，制造“吸附回按钮”的退场效果。 */
transform:
  translate3d(var(--tutorial-close-x, 0), var(--tutorial-close-y, 0), 0)
  scale(var(--tutorial-close-scale-x, 0.14), var(--tutorial-close-scale-y, 0.1));
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
  width: 14em;
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