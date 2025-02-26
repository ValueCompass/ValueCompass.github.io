<template>
  <div class="main-container test-values-template" style="flex:1">
    <div v-show="showTest == 1">
      <div class="test-container">
        <div class="test-intro">
          <h1>Discover Your Core Values and Meet Your Perfect LLM Match</h1>
          <p>
            Ever wonder which values shape your worldview? In just 14 quick
            questions, uncover your core principles and reveal the LLM that best
            aligns with your way of thinking. Plus, you'll also receive a
            personalized card that highlights your unique value profile. Dive in
            for a fun and eye-opening experience!
          </p>
          <!-- <button @click="toTest">Take the Test</button> -->
          <span
            @click="toTest"
            class="button github-btn"
            style="font-size: 1.5em"
            >Take the Test <i class="icon"></i
          ></span>
        </div>
        <div class="img-div">
          <!-- <img src="@/assets/images/test-love.png" alt="test" /> -->
          <div class="testValues-img">
            <img src="@/assets/images/testValues/0.png" alt="test" />
            <img class="img img1" src="@/assets/images/testValues/1@2x.png" alt="test" />
            <img class="img img2" src="@/assets/images/testValues/2@2x.png" alt="test" />
            <img class="img img3" src="@/assets/images/testValues/3@2x.png" alt="test" />
            <img class="img img4" src="@/assets/images/testValues/4@2x.png" alt="test" />
          </div>
        </div>
      </div>
    </div>
    <div class="chart-box" v-show="showTest == 2">
      <div class="test-user-main">
        <div class="intro">
          <img src="@/assets/images/star.png" alt="" />
          <div>
            <p>
              To personalize your feedback, you may choose to provide your name
              or a nickname.
            </p>
          </div>
        </div>
        <div class="input-box">
          <p>Your Name (Optional)</p>
          <el-input
            v-model="input"
            class="input"
            placeholder="Please enter your name or nickname"
          ></el-input>
        </div>
        <div class="btn-box">
          <button @click="goTest">
            Skip
            <!-- <SvgIcon class="user-btn" name="next-btn"></SvgIcon> -->
          </button>
          <button class="blue" :class="{ disabled: !input }" @click="goTest">
            Next
          </button>
        </div>
        <p class="tip">
          Rest assured, all information will be kept confidential and used
          solely for this survey.
        </p>
      </div>
    </div>
    <div class="chart-box" v-show="showTest == 3">
      <div class="test-main">
        <h2>Person Profiles IVM</h2>
        <div
          v-show="showQuestionType != 2"
          style="width: 80%; max-width: 1200px; margin: 0 auto"
          class="person-profiles-ivm-tips"
          :class="showQuestionType == 1 ? 'show' : ''"
        >
          <p class="test-desc">
            {{ currentTest.description }}
          </p>
          <p class="test-desc">
            <el-icon class="icon" color="#666666"><CircleCheckFilled /></el-icon
            >Check the circle that shows how much the person in the description
            is like you.  
          </p>
          <div style="text-align: center; margin-top: 3em">
            <button style="font-size: 1.5em" @click="showQuestionType = 2">
              Get Started
            </button>
          </div>
        </div>
        <div v-show="showQuestionType == 2">
          <div class="progress">
            <p>
              <span>({{ startIndex + 1 }}/{{ total }})</span>
            </p>
            <!-- <el-progress
                :percentage="percentage"
                :show-text="false"
                color="#ffd000"
                aria-label="progress"
                :text-inside="true"
                :stroke-width="12"
              >
              <div class="process-point" :style="{'transform': 'translateX(45px)'}">
                <span >{{ startIndex+1 }}/{{ total }}</span>
                <span class="point"></span>
              </div>
              </el-progress> -->
          </div>
          <div
            style="
              background: #f5f5f5;
              border-radius: 1em;
              padding: 2em 3em;
              position: relative;
              overflow: hidden;
            "
          >
            <div
              style="
                height: 5px;
                width: 100%;
                background: #85c8ff;
                position: absolute;
                left: 0;
                top: 0px;
              "
            ></div>
            <p class="q-t">
              {{ currentTest.questions[startIndex].text }}
            </p>
            <p class="q-q">HOW MUCH LIKE YOU IS THIS PERSON?</p>
            <div class="answer">
              <ul>
                <li
                  :class="{ current: selectOptionIndex == index }"
                  v-for="(item, index) in currentTest.answerList"
                  :key="item"
                  @click="select(item, index)"
                >
                  <span></span>
                  <p>{{ item }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="test-btn">
            <button
              class="blue"
              @click="goPrev"
              :class="{ disabled: startIndex == 0 }"
            >
              <!-- <SvgIcon class="pre-btn" name="pre-btn"></SvgIcon>  -->
              Previous
            </button>
            <div>
              <button
                @click="goNext"
                v-show="!isLast"
                class="blue"
                :class="{ disabled: !isDisabled }"
              >
                Next
                <!-- <SvgIcon
                  class="next-btn"
                  name="next-btn"
                  :color="!isDisabled ? 'rgba(0, 0, 0, 0.15)' : '#fff'"
                ></SvgIcon> -->
              </button>
              <button
                v-show="isLast"
                @click="Submit"
                class="blue"
                :class="{ disabled: !isDisabled }"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chart-box" v-show="showTest == 4">
      <TestValuesResults ref="TestValuesResultsRef"></TestValuesResults>
    </div>
  </div>
</template>
<script setup>
import { CircleCheckFilled } from "@element-plus/icons-vue";

import TestValuesResults from "../components/TestValues/TestValuesResults.vue";
import { getKeyValue, mergeObj, getAvaData } from "../utils/common.js";
import { calculateHumanValue } from "@/service/api";

import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import axios from "axios";
import testData from "../utils/test-data2.json";

const tabList = ["PVQ40 IVM", "Moral Foundations Questionnaire", "Survey"];
const currentTest = ref(testData[tabList[0]]);

const showQuestionType = ref(0);
const startIndex = ref(0);
const total = ref(currentTest.value.questions.length);
currentTest.value.userAnswers = [];
currentTest.value.userAnswerIndex = [];
const percentage = ref(0);
const selectOptionIndex = ref(-1);
const showTest = ref(1);
const input = ref("");

const toTest = () => {
  showTest.value = 2;
};
const goTest = () => {
  showTest.value = 3;
  setTimeout(() => {
    showQuestionType.value = 1;
  }, 100);
};

const TestValuesResultsRef = ref(null);
const Submit = () => {
  let inputList = currentTest.value.userAnswerIndex;
  inputList = inputList.map((item) => item + 1);

  showTest.value = 4;
  // // sendData();
  // getData(inputList);

  TestValuesResultsRef.value.getData(inputList);
  TestValuesResultsRef.value.input = input.value;
};

const isFirst = computed(() => {
  return startIndex.value == 0;
});
const isLast = computed(() => {
  return startIndex.value >= total.value - 1;
});
const isDisabled = computed(() => {
  return currentTest.value.userAnswers[startIndex.value];
});

const timer = ref();
const select = (item, index) => {
  if (timer.value) {
    clearTimeout(timer.value);
    timer.value = null;
  }
  selectOptionIndex.value = index;
  percentage.value = ((startIndex.value + 1) / total.value) * 100;
  currentTest.value.userAnswers[startIndex.value] = item;
  currentTest.value.userAnswerIndex[startIndex.value] = index;
  if (!isLast.value) {
    // timer.value = setTimeout(() => {
    //   goNext();
    // }, 500);
  }

  console.log(currentTest.value);
};
const goPrev = () => {
  if (!isFirst.value) {
    startIndex.value--;
    selectOptionIndex.value =
      currentTest.value.userAnswerIndex[startIndex.value];
  }
};
const goNext = () => {
  if (timer.value) {
    clearTimeout(timer.value);
    timer.value = null;
  }
  if (!isLast.value) {
    startIndex.value++;
    if (currentTest.value.userAnswerIndex[startIndex.value]) {
      selectOptionIndex.value =
        currentTest.value.userAnswerIndex[startIndex.value];
    } else {
      selectOptionIndex.value = -1;
    }
  }
};
const chartDom = ref(null);
let chartInstance = null;

import Spearman from "spearman-rho";
onMounted(async () => {
  await nextTick(); // 确保DOM已经渲染完成
  document.querySelector('.testValues-img').classList.add('animate-on-load');
});
</script>

<style scoped lang="scss">
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
.test-values-template {
  min-height: inherit;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div {
    width: 100%;
  }
}
.test-container {
  padding: 3em 6em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .test-intro {
    width: 55%;
    text-align: left;
    h1 {
      font-size: 4em;
      font-weight: 400;
      line-height: 1.3;
      color: #9a3b74;
      font-style: italic;
    }
    p {
      font-size: 1.25em;
      line-height: 1.8;
      margin: 1em 0 2.4em;
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
  .img-div{
    flex: 1;
    padding-left: 2em;
    img{
      width: 100%;
    }
    .testValues-img{
      position: relative;
      .img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all 2s;
        
  
      }

      .img1{
          width: 100%;
          height: 100%;
          
        }
        .img2{
          width: 10px;
          height: 10px;
          
        }
        .img3{
          width: 100%;
          height: 100%;
          flex-shrink: 0;
          aspect-ratio: 1/1;
          margin-left: 20%;
        }
        .img4{
          width: 100%;
          height: 100%;
          transform: translate(-50%,-50%)  rotate(90deg);
          flex-shrink: 0;
          aspect-ratio: 1/1;
  
      }
      &.animate-on-load {
        .img {
          opacity: 1;
          width: 100%;
          height: 100%;
        }
        .img3{
          margin-left: 0;
          transform: translate(-50%,-50%) rotate(0);
        }
        .img4{
          transform: translate(-50%,-50%) rotate(0);
        }
      }
    }
  }
}
.chart-box {
  padding: 1em 0;
  margin: 0 auto;
  display: flex;
  .process-point {
    color: #000;
    span:nth-child(1) {
      font-size: 1.125em;
      font-weight: 600;
      display: inline-block;
      line-height: 20px;
      padding-left: 20px;
      background: url(@/assets/images/process-point.png) no-repeat left center;
      background-size: 16px auto;
    }
    .point {
      display: block;
      width: 18px;
      height: 18px;
      background: #ffd000;
      border-radius: 18px;
    }
  }
  .test-main {
    max-width: 1328px;
    width: 100%;
    margin: 0 auto;
    .person-profiles-ivm-tips {
      margin-top: 4em;
      transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
        opacity3s cubic-bezier(0.23, 1, 0.32, 1);
      opacity: 0;
      transform: scaleY(0);
      transform-origin: center top;
      width: fit-content;

      &.show {
        opacity: 1;
        transform: scaleY(1);
      }
    }
    h2 {
      font-size: 2.25em;
      font-weight: 700;
      line-height: 1.33em;
      text-align: center;
      padding-top: 1em;
      margin-bottom: 0.4em;
    }
    .test-desc {
      font-size: 2em;
      font-weight: 400;
      line-height: 1.3em;
      text-align: left;
      margin-bottom: 1em;
      margin-top: 1.6em;
      .icon {
        margin-right: 0.2em;
        transform: translateY(0.1em);
      }
    }
    .progress {
      margin-top: 0.2em;
      margin-bottom: 3em;
      p {
        font-size: 2.25em;
        font-weight: 700;
        line-height: 1.33em;
        margin-bottom: 0.22em;
        text-align: center;
        span {
          color: #1093ff;
        }
      }
    }
    .q-t {
      font-size: 2em;
      font-weight: 600;
      line-height: 1.33em;
      text-align: left;
      margin: 0 0 1em;
      min-height: 3em;
      padding: 0 1em;
    }
    .q-q {
      font-size: 1.25em;
      font-weight: 400;
      line-height: 1.33em;
      text-align: left;
      margin-bottom: 2.4em;
      padding: 0 1.6em;
    }
    .answer {
      ul {
        display: flex;
        justify-content: space-between;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          width: 16.6%;
          span {
            display: block;
            width: 2.625em;
            height: 2.625em;
            border-radius: 50%;
            border: 2px solid var(--text-color);
            box-sizing: border-box;
          }
          p {
            font-size: 1.25em;
            line-height: 1.29em;
            text-align: left;
            margin-top: 1.7em;
            min-width: 16.6%;
          }
          &.current {
            span {
              background: url(@/assets/images/answer-selected.svg) no-repeat;
              background-size: contain;
              border-color: #ffd000;
            }
          }
        }
      }
    }
    .q3 {
      ul {
        li {
          display: flex;
          flex-direction: row;
          align-items: center;
          cursor: pointer;
          margin: 1.625em 0;
          span {
            display: block;
            width: 2em;
            height: 2em;
            border-radius: 50%;
            border: 2px solid #fff;
            margin-right: 1.5em;
          }
          p {
            font-size: 1.25em;
            line-height: 1.29em;
            text-align: left;
          }
          &.current {
            span {
              background: url(@/assets/images/answer-selected.svg) no-repeat;
              background-size: contain;
              border-color: #ffd000;
            }
          }
        }
      }
    }
    .test-btn {
      width: 21.875em;
      margin: 0 auto;
      margin-top: 3em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      button {
        text-align: center;
        box-sizing: border-box;
        width: 6.35em;
        height: 2.9em;
        cursor: pointer;
        font-size: 1.25em;
        line-height: 1.57em;
        color: #0c76ce;
        // display: flex;
        align-items: center;
        border: 1px solid #0c76ce;
        background: transparent;
        &.blue {
          background: rgba(16, 147, 255, 1);
          border-color: rgba(16, 147, 255, 1);
          color: #fff;
          &:hover {
            opacity: 0.9;
          }
        }

        &.disabled {
          border-color: #c3c3c3;
          color: #565656;
          background: #d0d0d0;
          cursor: not-allowed;
          pointer-events: none;
        }

        .pre-btn {
          width: 1em;
          height: 1em;
          margin-right: 0.7em;
        }
        .next-btn {
          width: 1em;
          height: 1em;
          margin-left: 0.7em;
        }
      }
    }
  }
  .test-user-main {
    width: 80%;
    max-width: 1000px;
    padding: 3em;
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 8em;
    .intro {
      margin-bottom: 3em;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-start;
      img {
        width: 4.375em;
        margin-right: 1em;
        transform: translateY(-1em);
      }
      p {
        font-size: 1.6em;
        line-height: 1.4;
        margin-bottom: 0.2em;
      }
    }
    .input-box {
      width: 70%;
      margin: 0 auto;
      .input {
        font-size: 1.25em;
        height: 2.8em;
        --el-input-text-color: var(--text-color);
        --el-input-bg-color: var(--bg-color) !important;
        --el-input-border-color: rgba(194, 194, 194, 1) !important;
        --el-input-placeholder-color: rgba(194, 194, 194, 1) !important;
        --el-input-hover-border-color: rgba(194, 194, 194, 1) !important;
        --el-input-focus-border: rgba(194, 194, 194, 1) !important;
        --el-input-focus-border-color: rgba(194, 194, 194, 1) !important;
      }
      p {
        font-size: 1.25em;
        line-height: 1.3em;
        text-align: left;
        margin-bottom: 0.6em;
      }
    }
    .btn-box {
      width: 27em;
      margin: 0 auto;
      margin-top: 3em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        // width: 10em;
        // height: 2.29em;
        border: 1px solid #0c76ce;
        color: #0c76ce;
        background: transparent;
        font-size: 1.25em;
        display: flex;
        align-items: center;
        justify-content: center;
        &.blue {
          background: rgba(16, 147, 255, 1);
          border-color: rgba(16, 147, 255, 1);
          color: #fff;
          &:hover {
            opacity: 0.9;
          }
        }
        &.disabled {
          border-color: #c3c3c3;
          color: #565656;
          background: #d0d0d0;
          cursor: not-allowed;
          pointer-events: none;
        }
      }
      .user-btn {
        width: 1em;
        height: 1em;
        margin-left: 0.7em;
      }
    }
    .tip {
      font-size: 1.2em;
      color: #666;
      margin-top: 1.7em;
      text-align: center;
    }
  }
}

:deep(.i1) {
  font-style: normal;
  display: block;
  margin-top: 2em;
}

:deep(.el-progress) {
  .el-progress-bar__outer {
    background: rgba(194, 194, 194, 1);
    overflow: visible;
  }
  .el-progress-bar__innerText {
    transform: translateY(-25px);
    position: absolute;
    right: 0;
  }
}
</style>
