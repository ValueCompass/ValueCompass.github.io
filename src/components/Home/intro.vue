<template>
  <div class="home-template">
    <div class="home" style="padding: 0">
      <div class="top">
        <div class="intro">
          <div class="intro-container">
            <h2>Value Compass</h2>
            <h4>Aligning AI with Basic Human Values</h4>
            <p>
              To push the frontier of AI towards a human-machine symbiotic
              future, we propose the interdisciplinary value compass project,
              aiming to achieve LLM alignment based on the basic values from
              humanity and social science. Three parts are mainly explored:1)
              efficient and adaptive alignment algorithms; 2) reliable value
              evaluation systems; and 3) interdisciplinary studies on values and
              machine ethics. Hoping to create a new generation of AI systems
              that compatible with human values of various cultural contexts.
            </p>
            <div class="btn-container">
              <span
                class="btn contact-btn nav__item_email"
                @click="copyEmail('valuecompass@microsoft.com')"
                >Contact Us<span class="email_text" style="display: none"
                  >valuecompass@microsoft.com</span
                ></span
              >
              <a
                href="https://github.com/microsoft/ValueCompass.git"
                target="_blank"
                class="btn github-btn"
                >Github</a
              >
            </div>
          </div>
          <div class="right"></div>
        </div>
        <div class="bg-image">
          <img :src="getAssetsFile('bg/bg9.png')" alt="" />
        </div>
      </div>

      <div class="bottom">
        <div class="bg-image2">
          <img :src="getAssetsFile('bg/bg8.png')" alt="" />
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";

const getAssetsFile = (url: string) => {
  return new URL(`../../assets/${url}`, import.meta.url).href;
};
const copyEmail = (text: string) => {
  copyText(text);
  // ElMessage.success('"mailto: valuecompass@microsoft.com" copied to your clipboard')
  ElMessage({
    message: `"mailto: ${text}" copied to your clipboard`,
    type: "success",
    plain: true,
  });
};
const copyText = (text: string) => {
  var textareaC = document.createElement("textarea");
  textareaC.setAttribute("readonly", "readonly"); //设置只读属性防止手机上弹出软键盘
  textareaC.value = text;
  document.body.appendChild(textareaC); //将textarea添加为body子元素
  textareaC.select();
  var res = document.execCommand("copy");
  document.body.removeChild(textareaC); //移除DOM元素
  return res;
};
</script>
<style scoped lang="scss">
.home-template {
  overflow: hidden;
}
.home {
  max-width: 2800px;
  margin: 0 auto;
  overflow: hidden;
}
.top {
  display: flex;
  flex-direction: row;
}
.bg-image {
  flex: 1;
  background: #70bfff;
  align-items: stretch;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: -52%;
    height: 100%;
  }
}
.intro {
  position: relative;
  z-index: 10;
  padding: 6em 0 2em;
  background: radial-gradient(#b3ddff, #70bfff);
  width: 75%;
  position: relative;
  .intro-container {
    padding: 3.75em 0;
    width: 64%;
    max-width: 926px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
  }
  h2 {
    font-weight: 400;
    font-size: 4em;
    line-height: 1.4;
    font-style: italic;
  }
  h4 {
    font-weight: 350;
    font-size: 2.25em;
    font-style: italic;
    line-height: 1.4;
    margin: 0.5em 0 0.5em;
  }
  p {
    font-size: 1.25em;
    line-height: 1.8;
  }
  .btn-container {
    padding-top: 3.75em;
  }
  .btn {
    cursor: pointer;
    display: inline-block;
    margin-right: 1em;
    border-radius: 6px;
    font-size: 1.5em;
    padding: 0.5em 1em;
    border: 1px solid #1093ff;
    background: #fff;
    color: #1093ff;
    &.github-btn {
      border-color: #1093ff;
      color: #fff;
      background: #1093ff;
    }
  }
}

.bottom {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  .bg-image2 {
    height: 14em;
    width: 75%;
    position: relative;
    // overflow: hidden;
    img {
      width: 110%;
      position: absolute;
      top: -120%;
      right: 0;
      z-index: -1;
    }
  }
  .right {
    flex: 1;
    background: #1093ff;
  }
}
</style>
