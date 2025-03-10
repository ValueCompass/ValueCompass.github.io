<template>
  <div class="home-template">
    <div class="test-container main-container">
      <div class="home-intro-div">
        <h1>Value Compass</h1>
        <h2>Aligning AI with Basic Human Values</h2>
        <div>
          <p>
            To advance AI towards a human-machine symbiotic future, we introduce the <b>Value Compass Project</b>—an interdisciplinary initiative that integrates social science, ethics, and human values to redefine LLM alignment. Grounded in universal, pluralistic and adaptive human values, our research focuses on three core areas:
          </p>
          <b
            ><p>
              1.     Effective and Adaptive Alignment Algorithms <br />2.    
              Reliable and Validated Value Evaluation <br />3.    
              Interdisciplinary Studies on AI Values and Machine Ethics
            </p></b
          >

          <p>
            We aim to shape the next generation of AI systems that are not only
            technically advanced but also aligned with diverse human values.
          </p>
        </div>
        <div>
          <div class="btn-container">
            <!-- <span
              class="btn contact-btn nav__item_email"
              @click="copyEmail('valuecompass@microsoft.com')"
              >Contact Us<span class="email_text" style="display: none"
                >valuecompass@microsoft.com</span
              ></span
            > -->
            <a href="mailto:valuecompass@microsoft.com"><span class="btn contact-btn nav__item_email">Contact Us</span></a>
            <a
              href="https://github.com/microsoft/ValueCompass.git"
              target="_blank"
              class="btn github-btn"
              >Github</a
            >
          </div>
        </div>
      </div>
      <div class="img-div">
        <!-- <img src="@/assets/images/test-love.png" alt="test" /> -->
        <div class="home-animate-img">
          <img
            class="img img1"
            src="@/assets/images/testValues/home_2@2x.png"
            alt="test"
          />
          <img
            class="img img2"
            src="@/assets/images/testValues/home_4@2x.png"
            alt="test"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { onMounted, nextTick } from "vue";

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

onMounted(async () => {
  await nextTick(); // 确保DOM已经渲染完成
  setTimeout(() => {
    document
      .querySelector(".home-animate-img")!
      .classList.add("animate-on-load");
    document.querySelector(".home-intro-div")!.classList.add("animate-on-load");
  }, 200);
});
</script>
<style scoped lang="scss">
.home-template{
  background: #f9f9f9;
}
.test-container {
  background: #f9f9f9;
  overflow: hidden;
  padding: 3.75em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .home-intro-div {
    width: 65.25%;
    padding-right: 0.75em;
    box-sizing: content-box;
    text-align: left;
    transform: translateY(30%);
    position: relative;
    opacity: 0;
    transition: all 1s ease-out 0.1s;
    &.animate-on-load {
      opacity: 1;
      transform: translateY(0%);
      h2{
        margin: .33em 0;
        transition: all 1s ease-out 0.1s;
      }
      p,.btn-container{
        margin: 0.6em 0;
        transition: all 1s ease-out 0.1s;
      }
    }
    h1 {
      font-size: 4em;
      font-weight: 400;
      line-height: normal;
      color: #004f8f;
      font-style: italic;
    }
    h2 {
      margin: .66em 0;
      color: #004f8f;
      font-size: 2.25em;
      font-style: italic;
      font-weight: 350;
      line-height: normal;
    }
    p {
      font-size: 1.25em;
      line-height: 1.6;
      margin: 1.2em 0;
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
  .img-div {
    flex: 1;
    padding-left: 0.75em;
    padding-right: 2em;
    img {
      width: 100%;
    }
    .home-animate-img {
      position: relative;
      img {
        transition: all 1s ease-out 0.1s;
      }
      .img2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 1s ease-out 0.1s;
      }
      .img1 {
        transform: rotate(-35deg);
      }
      .img2 {
        transform: translate(-50%, -50%) rotate(20deg);
      }

      &.animate-on-load {
        .img1 {
          transform: rotate(0deg);
        }
        .img2 {
          transform: translate(-50%, -50%) rotate(0deg);
        }
      }
    }
  }
  .btn-container {
    margin-top: 4em;
    .btn {
      cursor: pointer;

      display: inline-block;

      margin-right: 1em;

      border-radius: 6px;

      font-size: 1.25em;

      width: 7.45em;
      height: 2.9em;
      line-height: 2.9em;
      text-align: center;
      box-sizing: border-box;

      border: 2px solid var(--theme-color);

      background: #fff;

      color: var(--theme-color);
      &:hover {
        opacity: 0.8;
        transition: all 0.2s;
      }

      &.github-btn {
        border-color: var(--theme-color);

        color: #fff;

        background: var(--theme-color);
      }
    }
  }
}
</style>
