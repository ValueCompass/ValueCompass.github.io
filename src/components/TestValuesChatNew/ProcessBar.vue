<template>
  <div class="process-bar">
    <ul class="process-box">
      <li
        v-for="(i, index) in 7"
        :key="index"
        class="star"
        :class="[getStarOnClass(i), getStarLightClass(i)]"
      >
        <div
          class="star-icon"
          :class="['star-icon-' + i, i == 7 ? 'star-icon-final' : '']"
        >
          <svgIcon v-if="i < 7" name="Star-Process"></svgIcon>
          <svgIcon v-else name="final_star"></svgIcon>

          <text>{{ chatProcessText[i - 1] }}</text>
        </div>
        <div v-if="i > 1" class="line-icon" :class="['line-icon-' + (i - 1)]">
          <div :style="getLineProgressStyle(i - 1)"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  currChatNum: {
    type: Number,
    default: 0,
  },
  chatCount: {
    type: Number,
    default: 15,
  },
});

const chatProcessText = ref([
  "Arrive",
  "Warm-up",
  "Connect",
  "Value",
  "Deep",
  "Share",
  "Reflect",
]);

// 计算进度分组
const calculateProgressGroups = () => {
  const Q = props.chatCount; // 15
  const segments = 6;
  const m = Math.floor(Q / segments); // 2
  const n = Q % segments; // 3
  const groups = [];
  for (let i = 0; i < segments; i++) {
    groups.push(i < n ? m + 1 : m); // [3,3,3,2,2,2]
  }
  return groups;
};

// 获取当前进度信息
const getCurrentProgressInfo = () => {
  const groups = calculateProgressGroups();
  let currentChat = props.currChatNum;
  let currentSegment = 0;
  let segmentProgress = 0;

  // 特殊处理：当完成所有聊天时
  if (currentChat >= props.chatCount) {
    return {
      groups,
      currentSegment: groups.length, // 设置为groups.length，对应最后一颗星星
      segmentProgress: 1,
      totalProgress: 1,
    };
  }

  for (let i = 0; i < groups.length; i++) {
    if (currentChat < groups[i]) {
      currentSegment = i;
      segmentProgress = groups[i] > 0 ? currentChat / groups[i] : 0;
      break;
    } else if (currentChat === groups[i]) {
      // 刚好完成一个分组，进入下一个分组
      currentSegment = i + 1;
      segmentProgress = 0;
      break;
    }
    currentChat -= groups[i];
    currentSegment = i + 1;
  }

  // 确保currentSegment不超过最大索引
  currentSegment = Math.min(currentSegment, groups.length - 1);

  return {
    groups,
    currentSegment,
    segmentProgress,
    totalProgress:
      props.chatCount > 0 ? props.currChatNum / props.chatCount : 0,
  };
};

// 获取线条进度样式
const getLineProgressStyle = (lineIndex) => {
  const progressInfo = getCurrentProgressInfo();
  const { currentSegment, segmentProgress, groups } = progressInfo;

  // 调整索引匹配，因为lineIndex从1开始，currentSegment从0开始
  const adjustedLineIndex = lineIndex - 1;

  // 特殊处理：当完成所有聊天时，所有线条都显示为100%
  if (currentSegment === groups.length) {
    return {
      height: "100%",
      // transition: "height 0.5s ease-in-out",
    };
  }

  if (adjustedLineIndex < currentSegment) {
    // 当前线段之前的线段，进度为100%
    return {
      height: "100%",
      transition: "height 0.5s ease-in-out",
    };
  } else if (adjustedLineIndex === currentSegment) {
    // 当前线段，进度为segmentProgress
    return {
      height: `${segmentProgress * 100}%`,
      transition: "height 0.5s ease-in-out",
    };
  } else {
    // 当前线段之后的线段，进度为0
    return {
      height: "0%",
      transition: "height 0.5s ease-in-out",
    };
  }
};

// 获取星星的on类
const getStarOnClass = (starIndex) => {
  const progressInfo = getCurrentProgressInfo();
  const { currentSegment, groups } = progressInfo;

  // 特殊处理：当完成所有聊天时，最后一颗星星是活动状态
  if (currentSegment === groups.length) {
    return starIndex === 7 ? "on" : "";
  }

  // 星星索引从1开始，当前线段从0开始，所以当前活动的星星是currentSegment + 1
  return starIndex === currentSegment + 1 ? "on" : "";
};

// 获取星星的light类
const getStarLightClass = (starIndex) => {
  const progressInfo = getCurrentProgressInfo();
  const { currentSegment, groups } = progressInfo;

  // 特殊处理：当完成所有聊天时，所有星星都点亮
  if (currentSegment === groups.length) {
    return "light";
  }

  // 星星索引从1开始，当前线段从0开始，所以已经点亮的星星是starIndex <= currentSegment + 1
  return starIndex <= currentSegment + 1 ? "light" : "";
};
</script>

<style scoped lang="scss">
.process-bar {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.process-box {
  width: 100%;
  padding-bottom: 303%;
  // background: #ccc;
  position: relative;
  .light {
    .star-icon .svg-icon {
      color: #f9d672;
    }
    .line-icon {
      color: #f9d672;
    }
  }
  .on {
    .star-icon {
      .svg-icon {
        color: #f9d672;
        animation: starColorAnimation 1.7s ease-in-out infinite;
        animation-delay: 2s;
      }

      text {
        display: block;
      }
    }
    .star-icon-final {
      .svg-icon {
        animation: finnalStarColorAnimation 0.9s ease-in-out !important;
        animation-delay: 2s;
      }
    }
  }

  // 星星颜色动画
  @keyframes starColorAnimation {
    0% {
      color: #fce38e;
    }
    35% {
      color: #feefb4;
    }
    82% {
      color: #fce38e;
    }
    90% {
      color: #fce38e;
    }
  }

  // 最终星星颜色动画
  @keyframes finnalStarColorAnimation {
    0% {
      color: #afbec9; // 初始灰色
      transform: translate(-50%, -50%) scale(1);
    }
    30% {
      color: #afbec9; // 保持灰色（600ms quick阶段）
      transform: translate(-50%, -50%) scale(0.5);
    }
    100% {
      color: #fce38e; // 最终黄色（300ms ease in阶段）
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
  // 星星颜色动画
  @keyframes starColorAnimation {
    0% {
      color: #fce38e;
    }
    35% {
      color: #feefb4;
    }
    82% {
      color: #fce38e;
    }
    90% {
      color: #fce38e;
    }
  }

  // 最终星星颜色动画
  @keyframes finnalStarColorAnimation {
    0% {
      color: #afbec9; // 初始灰色
      transform: translate(-50%, -50%) scale(1);
    }
    30% {
      color: #afbec9; // 保持灰色（600ms quick阶段）
      transform: translate(-50%, -50%) scale(0.5);
    }
    100% {
      color: #fce38e; // 最终黄色（300ms ease in阶段）
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
  .star-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 20%;
    padding-bottom: 20%;
    text {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-52%, -120%);
      background: #0b70c3;
      color: #f5f5f5;
      padding: 0 0.4em;
      line-height: 1.6;
      border-radius: 2px;
      white-space: nowrap;
      display: none;
      z-index: 2;
      &::after {
        content: "";
        position: absolute;
        bottom: -22%;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 0.5em solid transparent;
        border-right: 0.5em solid transparent;
        border-top: 0.5em solid #0b70c3;
      }
    }
    & > .svg-icon {
      width: 80%;
      height: 80%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      color: #afbec9;
    }

    &.star-icon-final {
      width: 28.5%;
      padding-bottom: 28.5%;
      .svg-icon {
        width: 90%;
        height: 90%;
      }
    }
    &.star-icon-1 {
      left: 0%;
      top: 7%;
    }
    &.star-icon-2 {
      left: 58.2%;
      top: 0%;
    }
    &.star-icon-3 {
      right: 0%;
      top: 19.9%;
    }
    &.star-icon-4 {
      left: 27.7%;
      top: 31.65%;
    }
    &.star-icon-5 {
      left: 27.7%;
      top: 52.58%;
    }
    &.star-icon-6 {
      left: 32.03%;
      top: 73.26%;
    }
    &.star-icon-7 {
      right: 12.5%;
      bottom: 0%;
    }
  }
  .line-icon {
    // background: #DCDCDC;
    color: #afbec9;
    position: absolute;
    width: 6px;
    height: 16%;
    transform-origin: top center; /* 设置旋转中心为左上角 */
    background: #afbec9;
    & > div {
      position: absolute;
      width: 100%;
      height: 0;
      background: #f9d672;
      left: 0;
      top: 0;
    }
    &.line-icon-1 {
      left: 13%;
      top: 8%;
      transform: rotate(-103deg);
    }
    &.line-icon-2 {
      left: 67%;
      top: 6%;
      transform: rotate(-20deg);
    }
    &.line-icon-3 {
      right: 16%;
      top: 24.2%;
      transform: rotate(56deg);
    }
    &.line-icon-4 {
      left: 36%;
      top: 37%;
      // transform: rotate(56deg);
    }
    &.line-icon-5 {
      left: 36%;
      top: 58%;
      transform: rotate(-6deg);
    }
    &.line-icon-6 {
      left: 41%;
      top: 79%;
      transform: rotate(-30deg);
    }
  }
}


</style>