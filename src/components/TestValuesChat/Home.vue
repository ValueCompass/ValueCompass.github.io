<template>
  <div class="test-container">
    <div class="test-intro">
      <div>
        <h1>Welcome to Test Your Values</h1>
        <h3>Discover your core values through an AI-led conversation</h3>
        <ul>
          <li>
            You will have a 1-on-1 conversation with an AI interviewer (approx.
            15 rounds)
          </li>
          <li>A values report will be generated at the end</li>
          <li>No personal data will be collected</li>
          <li>There are no right or wrong answers—just be yourself</li>
          <li>Fully natural language input, no multiple choice</li>
        </ul>
      </div>

      <span @click="toTest" class="button github-btn" style="font-size: 1.5em"
        >Get Started <i class="icon"></i
      ></span>
      <!-- <div class="language-div">
        <div>
          <p>Select your language to begin</p>
          <p>Language cannot be changed during the assessment.</p>

          <div class="btn-container">
            <el-button @click="chooseLanguage('en-US')">English / 英文</el-button>
            <el-button @click="chooseLanguage('zh-CN')" class="chinese"
              >中文 / Chinese</el-button
            >
          </div>
        </div>
      </div> -->
    </div>
    <!-- <div class="img-div">
      <div class="testValues-img">
        <img src="@/assets/images/testValues/0.png" alt="test" />
        <img
          class="img img1"
          src="@/assets/images/testValues/1@2x.png"
          alt="test"
        />
        <img
          class="img img2"
          src="@/assets/images/testValues/2@2x.png"
          alt="test"
        />
        <img
          class="img img3"
          src="@/assets/images/testValues/3@2x.png"
          alt="test"
        />
        <img
          class="img img4"
          src="@/assets/images/testValues/4@2x.png"
          alt="test"
        />
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits, nextTick } from "vue";

onMounted(async () => {
  await nextTick(); // 确保DOM已经渲染完成
  setTimeout(() => {
    document.querySelector(".testValues-img").classList.add("animate-on-load");
  }, 100);
});

const emit = defineEmits(["chooseLanguage"]);
const chooseLanguage = (language) => {
  emit("chooseLanguage", language);
};

const toTest = () => {
  emit("toTest");
};
</script>

<style lang="scss" scoped>
.test-container {
  padding: 1em 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .test-intro {
    width: 50em;
    text-align: left;
    padding-right: 2em;
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 0.75em;
      h1 {
        font-size: 4em;
        font-weight: 400;
        line-height: 1.3;
        color: rgba(0, 79, 143, 1);
        font-style: italic;
        letter-spacing: -2px;
      }
      h3 {
        font-size: 2.25em;
        font-weight: 350;
        font-style: italic;
        line-height: 1.3;
      }
      ul {
        padding: 0 0.5em;
        li {
          font-size: 1.25em;
          line-height: 1.8;
          list-style: inside;
        }
      }
    }

    .language-div {
      display: flex;
      & > div {
        margin-top: 2.25em;
        background: rgba(214, 237, 255, 0.3);
        border-radius: 1em;
        padding: 2.25em 3em;
        p:nth-child(1) {
          font-size: 2em;
          line-height: 1.2;
        }
        p:nth-child(2) {
          font-size: 1.25em;
          line-height: 1.8;
          margin: 0.5em 0 1em;
        }
        .btn-container {
          display: flex;
          gap: 2.25em;
          button {
            height: 2.9em;
            background: var(--theme-color);
            padding: 0 1.2em;
            color: #fff;
            font-size: 1.25em;
            border-radius: 6px;
            margin: 0;
            cursor: pointer;
            &:hover {
              opacity: 0.9;
            }

            &.chinese {
              color: var(--theme-color);
              border: 2px solid var(--theme-color);
              background: #fff;
            }
          }
        }
      }
    }
  }
  .img-div {
    flex: 1;

    img {
      width: 100%;
    }
    .testValues-img {
      position: relative;
      .img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all 1s ease-out 0.1s;
      }

      .img1 {
        width: 100%;
        height: 100%;
      }
      .img2 {
        width: 10px;
        height: 10px;
      }
      .img3 {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        aspect-ratio: 1/1;
        margin-left: 20%;
      }
      .img4 {
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%) rotate(90deg);
        flex-shrink: 0;
        aspect-ratio: 1/1;
      }
      &.animate-on-load {
        .img {
          opacity: 1;
          width: 100%;
          height: 100%;
        }
        .img3 {
          margin-left: 0;
          transform: translate(-50%, -50%) rotate(0);
        }
        .img4 {
          transform: translate(-50%, -50%) rotate(0);
        }
      }
    }
  }

  .github-btn {
    margin-top: 2.5em;
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
}
</style>