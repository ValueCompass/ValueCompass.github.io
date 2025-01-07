<template>
  <div>
    <div class="main-14-container" v-show="!showTest">
      <div class="test-container">
        <ul>
          <li>
            <img src="@/assets/images/test_1.png" alt="test" />
            <p class="title">PVQ40 IVM</p>
            <p class="desc">
              Here we briefly describe some people.  Please read each
              description and think about how much each person is or is not like
              you.  Put an X in the box to the right that shows how much the
              person in the description is like you.
            </p>
            <button @click="toTest">Take the Test</button>
          </li>
          <li>
            <img src="@/assets/images/test_2.png" alt="test" />
            <p class="title">Moral Foundations Questionnaire</p>
            <p class="desc">
              The Moral Foundations Questionnaire is a reliable and
              theoretically grounded measureme of a full range of moral
              concerns. The MFQ was developed on the basis of a theoretical
              model of 5 universally available (but variably developed) sets of
              moral intuitions: Harm/Care, Fairness/Reciprocity,
              Ingroup/Loyalty, Authority/Respect, and Purity/Sanctity.
            </p>
            <button @click="toTest">Take the Test</button>
          </li>
          <li>
            <img src="@/assets/images/test_3.png" alt="test" />
            <p class="title">Survey</p>
            <p class="desc">
              This short value scale is a shortened version of Schwartz’s Value
              Survey (SVS), which includes 57value items that represent ten
              motivationally distinct values.
            </p>
            <button @click="toTest">Take the Test</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="chart-box" v-show="showTest">
      <div class="chart-tab">
        <div class="chart-tab-title">Test your values</div>
        <ul>
          <li
            :class="{ active: currentTab == index }"
            @click="tabSwitch(index)"
            v-for="(tab, index) in tabList"
            :key="tab"
          >
            <span></span>{{ tab }}
          </li>
        </ul>
      </div>
      <div class="test-main">
        <div v-if="currentTab == 0">
          <h2>Person Profiles IVM</h2>
          <p class="test-desc">
            {{ currentTest.description }}
          </p>
          <p class="test-desc">
            Check the circle that shows how much the person in the description
            is like you.  
          </p>
          <div class="progress">
            <p>
              <span>{{ startIndex }}</span
              >/{{ total }}
            </p>
            <el-progress
              :percentage="percentage"
              :show-text="false"
              color="#ffd000"
            />
          </div>
          <p class="q-t">
            {{ currentTest.questions[startIndex] }}
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
        <div v-if="currentTab == 1">
          <h2>Moral Foundations Questionnaire</h2>
          <p class="test-desc">
            {{ currentTest.description }}
          </p>
          <p class="test-desc">
            Check the circle that shows how much the person in the description
            is like you.  
          </p>
          <div class="progress">
            <p>
              <span>{{ startIndex }}</span
              >/{{ total }}
            </p>
            <el-progress
              :percentage="percentage"
              :show-text="false"
              color="#ffd000"
            />
          </div>
          <p class="q-t">
            {{ currentTest.questions[startIndex] }}
          </p>
          <div class="answer">
            <ul>
              <li
                :class="{ current: selectOptionIndex == index }"
                v-for="(item, index) in currentTest.answerList"
                :key="item"
                @click="select(item, index)"
              >
                <span></span>
                <p v-html="item"></p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="currentTab == 2">
          <h2>FULVA Questionnaire</h2>
          <p class="test-desc">
            Check the circle that shows how much the person in the description
            is like you.  
          </p>
          <div class="progress">
            <p>
              <span>{{ startIndex }}</span
              >/{{ total }}
            </p>
            <el-progress
              :percentage="percentage"
              :show-text="false"
              color="#ffd000"
            />
          </div>
          <p class="q-t">
            {{ currentTest[startIndex].question }}
          </p>
          <div class="q3">
            <ul>
              <li
                :class="{ current: selectOptionIndex == index }"
                v-for="(item, index) in currentTest[startIndex].options"
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
          <button>
            <SvgIcon class="pre-btn" name="pre-btn"></SvgIcon> Previous Question
          </button>
          <button>
            Next Question <SvgIcon class="next-btn" name="next-btn"></SvgIcon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import testData from "../utils/test-data.json";
const tabList = ["PVQ40 IVM", "Moral Foundations Questionnaire", "Survey"];
const currentTab = ref(0);
const currentTest = ref(testData[tabList[currentTab.value]]);
const startIndex = ref(0);
const total = ref(currentTest.value.questions.length);
currentTest.value.userAnswers = [];
const percentage = ref(0);
const selectOptionIndex = ref(-1);
const testNumber = ref(0);
const showTest = ref(false);
const tabSwitch = (index) => {
  currentTab.value = index;
  startIndex.value = 0;
  percentage.value = 0;
  if (index == 0) {
    currentTest.value = testData[tabList[currentTab.value]];
    total.value = currentTest.value.questions.length;
  } else if (index == 1) {
    currentTest.value = testData[tabList[currentTab.value]][0];
    total.value = currentTest.value.questions.length;
  } else {
    currentTest.value = testData[tabList[currentTab.value]];
    total.value = currentTest.value.length;
  }
  if (!currentTest.value.userAnswers) {
    currentTest.value.userAnswers = [];
  }
};
const toTest = () => {
  testNumber.value = 0;
  showTest.value = true;
};
const select = (item, index) => {
  console.log(index);
  selectOptionIndex.value = index;
  percentage.value = ((startIndex.value + 1) / total.value) * 100;
  currentTest.value.userAnswers[startIndex.value] = item;
  console.log(currentTest.value.userAnswers);
  setTimeout(() => {
    startIndex.value++;
    selectOptionIndex.value = -1;
  }, 500);
};
</script>

<style scoped lang="scss">
.test-container {
  margin-top: 6em;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      width: 26em;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        display: block;
        width: 7.5em;
        margin: 0.42em auto;
      }
      .title {
        font-size: 1.5em;
        font-weight: 700;
        line-height: 1.33em;
        text-align: center;
        color: #fff;
        margin: 0.42em 0;
      }
      .desc {
        font-size: 1em;
        line-height: 1.5em;
        text-align: left;
        color: rgba(255, 255, 255, 0.8);
        height: 10.5em;
        margin: 0.42em 0;
      }
      button {
        background: rgba(16, 147, 255, 1);
        padding: 0 1.14em;
        height: 2.28em;
        color: #fff;
        font-size: 0.875em;
        cursor: pointer;
        margin-top: 3.43em;
        &:hover {
          background: #50b8ff;
        }
      }
    }
  }
}
.chart-box {
  margin-top: 3em;
  padding: 0 4em 4.5em;
  display: flex;
  .chart-tab {
    width: calc(calc(100% - 800px) / 2);
    min-width: 13.125em;
    margin-top: 2.5em;
    .chart-tab-title {
      font-size: 1em;
      font-weight: 700;
      color: #fff;
    }
    ul {
      li {
        font-size: 1em;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 1.5em;
        display: flex;
        align-items: center;
        cursor: pointer;
        span {
          width: 0.6875em;
          height: 1.125em;
          display: inline-block;
          margin-right: 1em;
        }
        &.active {
          font-weight: 700;
          color: rgba(16, 147, 255, 1);
          span {
            background: url(@/assets/images/right-arrow.svg) no-repeat;
            background-size: contain;
          }
        }
      }
    }
  }
  .test-main {
    width: 800px;
    color: #fff;
    h2 {
      font-size: 1.8em;
      font-weight: 700;
      line-height: 1.33em;
      text-align: center;
      margin-bottom: 2.2em;
    }
    .test-desc {
      font-size: 1.125em;
      font-weight: 400;
      line-height: 1.3em;
      text-align: left;
      color: rgba(255, 255, 255, 0.8);
    }
    .progress {
      margin-top: 3em;
      p {
        font-size: 1em;
        font-weight: 600;
        line-height: 1.33em;
        margin-bottom: 0.22em;
        span {
          color: #ffd000;
        }
      }
    }
    .q-t {
      font-size: 1.375em;
      font-weight: 600;
      line-height: 1.33em;
      text-align: left;
      margin: 2.5em 0;
    }
    .q-q {
      font-size: 1.125em;
      font-weight: 400;
      line-height: 1.33em;
      text-align: left;
      margin-bottom: 2.4em;
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
            border: 2px solid #fff;
          }
          p {
            font-size: 0.875em;
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
      margin-top: 6em;
      display: flex;
      gap: 6em;
      align-items: center;
      justify-content: center;
      button {
        cursor: pointer;
        font-size: 0.875em;
        line-height: 1.57em;
        color: #fff;
        display: flex;
        align-items: center;
        border: 1px solid #fff;
        background: transparent;

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
}
:deep(.i1) {
  font-style: normal;
  display: block;
  margin-top: 2em;
}
</style>
