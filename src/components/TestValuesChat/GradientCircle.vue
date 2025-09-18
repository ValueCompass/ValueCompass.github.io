<template>
  <div class="process-template">
    <div class="progress-demo">
      <!-- 定义 SVG 渐变 -->
      <svg width="0" height="0">
        <defs>
          <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color: #ab70e6" />
            <stop offset="100%" style="stop-color: #0078d4" />
          </linearGradient>
        </defs>
      </svg>

      <!-- 环形进度条 -->
      <el-progress
        type="circle"
        :percentage="percentage"
        :stroke-width="10 + (30 * percentage) / 100"
        :color="customColor"
        :width="400 + ((30 * percentage) / 100) * 2"
        :show-text="false"
      />
    </div>
    <img class="bg" src="@/assets/images/border-dotted.png" alt="" />
    <img
      :style="{
        transform:
          'translateX(-50%) rotate(' + (360 * percentage) / 100 + 'deg)',
      }"
      class="compass-img"
      src="@/assets/images/compass-icon.png"
      alt=""
    />
  </div>
</template>
 
<script setup>
import {
  ref,
  reactive,
  watch,
  nextTick,
  computed,
  defineProps,
  onMounted,
} from "vue";
// 直接绑定渐变 ID
const customColor = "url(#myGradient)";

const props = defineProps({
  percentage: {
    type: Number,
    required: false,
    default: 0,
  },
});
</script>
 
<style lang="scss" scoped>
/* 强制覆盖进度条路径样式 */
:deep(.el-progress-circle__path) {
  stroke: v-bind(customColor) !important;
  stroke-linecap: round; /* 可选：圆角端点 */
}

:deep(.el-progress-circle__track) {
  stroke: transparent; /* 或者 rgba(0,0,0,0) */
}

.process-template {
  position: relative;
  .progress-demo {
    position: relative;
    z-index: 2;
  }
  .compass-img {
    top: 20%;
    height: 60%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.4s;
  }
  .bg {
    position: absolute;
    width: 410px;
    height: 410px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>