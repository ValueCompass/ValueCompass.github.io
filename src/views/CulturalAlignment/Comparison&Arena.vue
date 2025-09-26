<template>
  <div class="profile-layout">
    <div class="subpage page1" :class="pageIndex == 0 ? 'on' : 'off'">
      <ComparisonViewPush
        style="height: 100%"
        ref="ComparisonViewPushRef"
        @setPageIndex="setPageIndex"
      />
    </div>
    <div class="subpage page2" :class="pageIndex == 1 ? 'on' : 'off'">
      <Arena ref="ArenaRef" style="height: 100%" @setPageIndex="setPageIndex" />
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onActivated, watch, nextTick } from "vue";
import ComparisonViewPush from "./ComparisonViewPush.vue";
import Arena from "./Arena.vue";
const pageIndex = ref(0);
const ComparisonViewPushRef = ref();
const ArenaRef = ref();
const setPageIndex = (index) => {
  pageIndex.value = index;
  if (pageIndex == 0) {
    ComparisonViewPushRef.value.setOptionAndGenarateResult();
  } else {
    ArenaRef.value.setOptionAndGenarateResult();
  }
};

onActivated(() => {
  console.log("comparison&arena onActivated");

  pageIndex.value = 0;
  ComparisonViewPushRef.value.setOptionAndGenarateResult();
});

defineExpose({
  setPageIndex,
});
</script>

<style scoped lang="scss">
.profile-layout {
  position: relative;
  min-height: calc(100vh - 6.375em - 40px);
  height: 53.5em;
  overflow: hidden;

  .subpage {
    position: absolute !important;
    width: 100%;
    top: 50%;
    left: 0;
    height: 53.5em;
    margin-top: -25.5em;

    transition: transform 0.5s;
  }

  .page1 {
    &.on {
      transform: translateX(0);
    }
    &.off {
      transform: translateX(-100%);
    }
  }

  .page2 {
    &.on {
      transform: translateX(0);
    }
    &.off {
      transform: translateX(100%);
    }
  }
}
</style>
