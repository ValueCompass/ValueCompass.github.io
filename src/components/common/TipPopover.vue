<script setup>
const props = defineProps({
  arrow: { type: String, default: "up" }, // 箭头方向：up / down
  width: { type: String, default: "15em" }, // 提示框宽度
});
</script>

<template>
  <div class="tip-popover" :class="['arrow-' + arrow]" :style="{ width }">
    <p><b>You’ve reached the limit (3).</b></p>
    <p>Uncheck or click × to free a slot.</p>
  </div>
</template>

<style scoped lang="scss">
.tip-popover {
  position: absolute;
  background: rgba(245, 195, 68, 1);
  border: 1px solid rgba(245, 195, 68, 1);
  border-radius: 2px;
  padding: 10px;
  font-size: 1em;
  color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  p {
    line-height: 1.2;
  }
}

/* 箭头朝上 */
.arrow-up {
  bottom: 100%;
  margin-bottom: 8px;
}
.arrow-up::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  border-width: 8px;
  border-style: solid;
  border-color: rgba(245, 195, 68, 1) transparent transparent transparent;
  filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.1));
}

/* 箭头朝下 */
.arrow-down {
  top: 100%;
  margin-top: 8px;
}
.arrow-down::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100%;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent rgba(245, 195, 68, 1) transparent;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
}
</style>
