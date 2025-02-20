<template>
  <div class="home-template main-container">
    <div class="test-container">
      <div class="test-intro">
        <h1>Value Compass</h1>
        <h2>Aligning AI with Basic Human Values</h2>
        <div>
          <p>
            To advance AI towards a human-machine symbiotic future, we introduce
            the Value Compass Project—an interdisciplinary initiative that
            integrates social science, ethics, and human values to redefine LLM
            alignment. Our approach is grounded in universal human values while
            ensuring adaptability across cultural contexts. Our research focuses
            on three core areas:
          </p>
          <p>
            1.     Effective and Adaptive Alignment Algorithms 2.     Reliable
            value evaluation system 3.     Interdisciplinary Studies on Values
            and Machine Ethics
          </p>
          <p>
            Unlike existing benchmarks, our platform quantifies alignment as a
            weighted spectrum, allowing users to prioritize values based on
            individual, organizational, or cultural needs. Through this
            initiative, we aim to shape the next generation of AI
            systems—ensuring they are not only technically advanced but also
            aligned with diverse human values.
          </p>
        </div>
        <div>
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
  }, 200);
});
</script>
<style scoped lang="scss">
.test-container {
  padding: 2em 6em 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .test-intro {
    width: 58%;
    text-align: left;
    h1 {
      font-size: 4em;
      font-weight: 400;
      line-height: 1.3;
      color: #004f8f;
      font-style: italic;
    }
    h2 {
      margin: 0.67em;
      color: #004f8f;
      font-size: 2.25em;
      font-style: italic;
      font-weight: 350;
      line-height: normal;
    }
    p {
      font-size: 1.25em;
      line-height: 1.6;
      margin: 0.6em 0;
    }
    button {
      background: rgba(16, 147, 255, 1);
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
    padding-left: 2em;
    img {
      width: 100%;
    }
    .home-animate-img {
      position: relative;
      img {
        transition: all 2s;
      }
      .img2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 2s;
      }
      .img1 {
        transform: rotate(-75deg);
      }
      .img2 {
        transform: translate(-50%, -50%) rotate(120deg);
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
    margin-top: 2em;
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
}
</style>
