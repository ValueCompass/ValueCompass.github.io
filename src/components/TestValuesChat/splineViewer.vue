<template>
 <div class="background-spline">
   <Vue3Spline :scene="scene" />
 </div>
</template>
<script setup>
const scene = { url: 'https://prod.spline.design/GtV8BJ9KLc0qKOkL/scene.splinecode' }
</script>
<style scoped>
background-spline {
 position: fixed;
 width: 100%;
 height: 100%;
 z-index: -1;
}
</style>