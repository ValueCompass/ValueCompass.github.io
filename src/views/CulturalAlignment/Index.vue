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
      <div
        class="cultural-alignment-router-view"
        :class="$route.meta.animate ? 'profile-layout' : ''"
      >
        <RouterView v-slot="{ Component }">
          <Transition :name="transitionName" appear>
            <!-- 关键：用 route.fullPath 作为 key，保证首次切换触发动画 -->
            <keep-alive>
              <component
                :class="$route.meta.animate ? 'subpage' : ''"
                :is="Component"
                :key="route.fullPath"
              />
            </keep-alive>
          </Transition>

          <!-- <keep-alive v-else>
            <component :is="Component" :key="route.fullPath" />
          </keep-alive> -->
        </RouterView>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const router = useRouter();
const transitionName = ref("");

// 你需要的两个页面的 path
const pageA = "/CulturalAlignment/comparison";
const pageB = "/CulturalAlignment/arena";

// 记录上一次访问的页面
const lastPath = ref("");

// watch 路由变化，设置动画
watch(
  () => route.fullPath,
  (to) => {
    console.log("to=", to, "lastPath.value=", lastPath.value);
    if (lastPath.value === pageA && to === pageB) {
      transitionName.value = "slide-left"; // A -> B
    } else if (lastPath.value === pageB && to === pageA) {
      transitionName.value = "slide-right"; // B -> A
    } else if (lastPath.value === "" && to === pageB) {
      // 第一次从其他页面直接跳到 B
      transitionName.value = "slide-left";
    } else {
      transitionName.value = "";
    }

    lastPath.value = to;
  },
  { immediate: true }
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

.profile-layout {
  position: relative;
  min-height: calc(100vh - 6.375em - 40px);
  height: 58em;
  overflow: hidden;
}

.subpage {
  position: absolute !important;
  width: 100%;
  top: 50%;
  left: 0;
  height: 58em;
  margin-top: -29em;
}

/* 左滑进入 / 右滑离开 */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.5s ease;
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
  transition: transform 0.5s ease;
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
.slide-left-appear-active {
  transition: transform 0.5s ease;
}
.slide-left-appear-from {
  transform: translateX(100%);
}
.slide-left-appear-to {
  transform: translateX(0);
}
</style>
