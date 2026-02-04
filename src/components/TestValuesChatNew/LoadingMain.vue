<template>
  <div class="loading-main">
    <p class="thanks">Thank you for your cooperation!</p>
    <img src="@/assets/images/loading.gif" alt="loading" />
    <p class="wait">Generating, please wait……</p>
  </div>
</template>


<style scoped lang="scss">
.loading-main {
  width: 800px;
  margin: 0 auto;
  padding: 1em 0 8em;
  text-align: center;
  .thanks {
    font-size: 2.25em;
    font-weight: 700;
  }
  img {
    width: 8em;
    margin: 5.75em auto 4em;
  }
  .wait {
    font-size: 1.25em;
  }
}
</style>