<script setup>
/**
 * LoadingDots.vue
 * 一个三个点依次放大闪烁的 loading 动画组件
 * 使用：<LoadingDots text="加载中..." color="#0f6cbd" />
 */
defineProps({
  text: {
    type: String,
    default: '' // 可选的文本，比如“加载中...”
  },
  color: {
    type: String,
    default: 'rgba(51, 51, 51, .5)' // 点的颜色
  },
  size: {
    type: Number,
    default: 4 // 点的大小(px)
  }
});
</script>

<template>
  <div class="loading-dots">
    <span
      v-for="i in 3"
      :key="i"
      :style="{
        width: size + 'px',
        height: size + 'px',
        background: color,
        animationDelay: (i - 1) * 0.2 + 's'
      }"
    ></span>
    <text v-if="text" class="loading-text">{{ text }}</text>
  </div>
</template>

<style scoped>
.loading-dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.loading-dots span {
  border-radius: 50%;
  animation: scaleBlink 1s infinite ease-in-out;
  opacity: 0.8;
}

.loading-text {
  margin-left: .2em;
  font-size: 1em;
  color: rgba(51, 51, 51, 1);
  line-height: 1.4;
}

@keyframes scaleBlink {
  0%, 80%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style>
