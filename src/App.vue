<template>
  <div id="app">
    <Header />
    <div id="content">
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
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { provide, nextTick, ref } from "vue";
import Header from "./components/navBarNew.vue";
import Footer from "./components/Footer.vue";

const isRouterActive = ref(true);
provide("reload", () => {
  isRouterActive.value = false;
  nextTick(() => {
    isRouterActive.value = true;
  });
});
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  #content {
    min-height: calc(100vh - 6.375em - 40px);
}
}
</style>
