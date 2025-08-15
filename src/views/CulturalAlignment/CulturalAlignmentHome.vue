<template>
  <div
    style="
      flex: 1 1 0%;
      display: flex;
      flex-direction: column;
      background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0.4) 26.74%,
        rgba(255, 255, 255, 0.9) 54.69%
      );
    "
  >
    <div
      class="cultural-alignment-template"
      style="flex: 1; position: relative; overflow: hidden"
    >
      <div class="leaderboard-router-view">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component
              :is="Component"
              :key="$route.name"
              v-if="$route.meta.keepAlive"
            />
          </keep-alive>
          <component
            :is="Component"
            :key="$route.name"
            v-if="!$route.meta.keepAlive"
          />
        </router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>

<style scoped lang="scss">
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
</style>
