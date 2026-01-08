<template>
  <div class="background-spline">
    <spline-viewer
      id="spline-bg"
      url="https://prod.spline.design/GtV8BJ9KLc0qKOkL/scene.splinecode"
    />
  </div>

  <!-- 示例控制 -->
  <div class="controls">
    <button @click="setState('idle')">Idle</button>
    <button @click="setState('thinking')">Thinking</button>
    <button @click="setState('speaking')">Speaking</button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

/**
 * Vue 状态
 */
const splineState = ref('idle')

let viewerEl = null

/**
 * 状态 → Spline Event
 * ⚠️ 这些名字必须和 Spline Editor 里一致
 */
const playByState = (state) => {
  if (!viewerEl) return

  const map = {
    idle: 'playAnim1',
    thinking: 'playAnim2',
    speaking: 'playAnim3',
  }

  const eventName = map[state]
  if (!eventName) return

  // ✅ 正确方式：dispatch CustomEvent
  alert(eventName)
  viewerEl.dispatchEvent(
    new CustomEvent('spline-event', {
      detail: {
        name: eventName,
      },
    })
  )
}

/**
 * 修改状态（业务只调这个）
 */
const setState = (state) => {
  splineState.value = state
}

onMounted(() => {
  viewerEl = document.getElementById('spline-bg')

  // 等 Spline 内部 ready
  setTimeout(() => {
    playByState(splineState.value)
  }, 400)
})

watch(splineState, (newState) => {
  playByState(newState)
})
</script>

<style scoped>
.background-spline {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

.controls {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 10;
}

button {
  margin-right: 8px;
}
</style>
