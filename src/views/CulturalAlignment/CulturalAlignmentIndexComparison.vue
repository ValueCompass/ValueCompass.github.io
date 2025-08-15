<template>
  <div class="culture-alignment-index">
    <div class="content-container">
      <img class="bg" src="@/assets//images/culturalBg.png" alt="" style="" />
    </div>

    <div class="left">
      <h1>As Culture Shifts, So Does AI</h1>
      <p>
        In a globally connected world, AI must navigate the nuances of diverse
        cultural values. Cultural alignment empowers language models to adapt
        their responses with sensitivity and relevance, fostering more
        meaningful and respectful human-AI interactions.
      </p>
      <span @click="toTest" class="button github-btn" style="font-size: 1.5em"
        >Get Started <i class="icon"></i
      ></span>
    </div>
    <div class="right">
      <div class="right-content">
        <img
          class="bg"
          src="@/assets//images/culturalBg.png"
          alt=""
          style="opacity: 0.1"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
</script>

<style scoped lang="scss">
.content-container {
  padding-top: 55%;
  position: relative;
  background: red;
  .bg {
    opacity: 0.8;
    position: absolute;
    width: 111%;
    right: 0;
    bottom: -2%;
  }
}

.github-btn {
  display: inline-block;
  position: relative;
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // line-height: ;
  .icon {
    margin-left: 0.5em;
    width: 1em;
    height: 1em;
    background: url(@/assets/images/arrow-right.png) no-repeat left center;
    background-size: 60% auto;
    display: inline-block;
    transform: translate(0, 0.1em);
    transition: all 0.2s;
  }
  &:hover {
    & > .icon {
      transform: translate(0.2em, 0.1em);
    }
  }
}

.culture-alignment-index {
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  .left {
    width: 49%;
    text-align: left;
    h1 {
      font-size: 4em;
      font-weight: 400;
      line-height: 1.3;
      color: rgba(0, 79, 143, 1);
      font-style: italic;
    }
    p {
      font-size: 1.25em;
      line-height: 1.8;
      margin: 1em 0 2.4em;
    }
    button {
      background: var(--theme-color);
      padding: 0 1.14em;
      height: 2.28em;
      color: #fff;
      font-size: 1.25em;
      font-weight: bold;
      cursor: pointer;
      margin-top: 3.43em;
      margin-bottom: 2em;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  .right {
    padding: 2em 0;
    width: 49%;
    .right-content {
      padding-top: 100%;
      position: relative;
      .bg {
        position: absolute;
        width: 224%;
        right: 0;
        top: 0;
      }
    }
  }
}
</style>
