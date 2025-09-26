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
      <div class="cultural-alignment-router-view">
        <RouterView v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </RouterView>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
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
</style>
