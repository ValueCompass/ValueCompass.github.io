<template>
  <div
    style="
      flex: 1 1 0%;
      display: flex;
      flex-direction: column;
      /* background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0.4) 26.74%,
        rgba(255, 255, 255, 0.9) 54.69%
      ); */
    "
  >
    <div
      class="cultural-alignment-template"
      style="flex: 1; position: relative; overflow: hidden"
    >
      <div class="cultural-alignment-router-view profile-layout">
        <router-view v-slot="{ Component, route }">
          <Transition v-if="route.meta.animate" :name="transitionName" appear>
            <component class="subpage" :is="Component" :key="route.fullPath" />
          </Transition>

          <component v-else :is="Component" :key="route.fullPath" />
        </router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const transitionName = ref("slide-left");

watch(
  () => route.meta.index,
  (to, from) => {
    if (from == null) return;
    transitionName.value = to > from ? "slide-left" : "slide-right";
  }
);
</script>

<style scoped>
.cultural-alignment-template {
  min-height: inherit;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div {
    width: 100%;
  }
}

.chart-box {
  padding: 1em 0;
  margin: 0 auto;
  display: flex;
}



/* 左滑进入 / 右滑离开 */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform .5s ease;
}
.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-enter-to {
  transform: translateX(0);
}
.slide-left-leave-from {
  transform: translateX(0);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}

/* 右滑进入 / 左滑返回 */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform .5s ease;
}
.slide-right-enter-from {
  transform: translateX(-100%);
}
.slide-right-enter-to {
  transform: translateX(0);
}
.slide-right-leave-from {
  transform: translateX(0);
}
.slide-right-leave-to {
  transform: translateX(100%);
}

/* appear 动画等价于 enter */
/* .slide-left-appear-active {
  transition: transform .5s ease;
}
.slide-left-appear-from {
  transform: translateX(100%);
}
.slide-left-appear-to {
  transform: translateX(0);
} */
</style>
