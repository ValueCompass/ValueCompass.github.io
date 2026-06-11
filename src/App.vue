<template>
  <div id="app" class="app-container">
    <Header v-if="!hideAppChrome" class="header-component" style="" />
    <div id="content" :class="{ 'content-without-chrome': hideAppChrome }" style="">
      <div
        style="
          min-height: calc(100% - 40px);
          display: flex;
          flex-direction: column;
        "
      >
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
      <Footer v-if="!hideAppChrome" class="footer-component" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, provide, nextTick, ref } from "vue";
import { useRoute } from "vue-router";
import Header from "./components/navBarNew.vue";
import Footer from "./components/Footer.vue";

const isRouterActive = ref(true);
const route = useRoute();
const hideAppChrome = computed(() => route.meta.hideAppChrome === true);

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

    &.content-without-chrome {
      padding-top: 0;
    }
  }
  .header-component {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2003;
  }
}
</style>
