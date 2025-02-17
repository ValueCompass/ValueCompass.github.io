<template>
  <div id="app" class="app-container">
    <Header class="header-component" style="" />
    <div id="content" style="">
      <router-view v-slot="{ Component }" style="min-height: calc(100% - 40px)">
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
      <Footer class="footer-component" />
    </div>
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
  overflow: hidden;
  position: relative;
  #content {
    padding-top: 6.375em;
    // padding-bottom: 40px;
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .header-component {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  .footer-component {
    // position: absolute;
    // bottom:0;
    // left:0;
    // z-index: 10;
  }
}
</style>
