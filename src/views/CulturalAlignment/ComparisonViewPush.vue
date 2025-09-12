<template>
  <div class="page" style="position: relative">
    <div class="cover-container"></div>
    <div style="position: relative">
      <div class="culture-alignment-container main-container">
        <div>
          <div class="left">
            <div class="select-box cultural-alignment-select-box">
              <div class="select-box-item item">
                <span class="label">Model:</span>
                <div>
                  <el-select
                    class="cultural-alignment-el-select"
                    v-model="modelValue"
                    placeholder="Select a model"
                    popper-class="select-options-cultural"
                  >
                    <el-option
                      v-for="item in modelOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                      <div class="option-content">
                        <p>{{ item.value }}</p>
                        <span class="check-span">
                          <el-icon v-if="item.value == modelValue"
                            ><Check
                          /></el-icon>
                        </span>
                      </div>
                    </el-option>
                  </el-select>
                </div>
              </div>

              <div class="select-box-item item">
                <span class="label">Topic:</span>
                <div>
                  <el-select
                    class="cultural-alignment-el-select"
                    v-model="topicValue"
                    placeholder="Select a topic"
                    popper-class="select-options-cultural topic-select-options"
                    @change="topicSelectChange"
                  >
                    <template #label="{ label, value }">
                      <span
                        style="
                          font-weight: bold;
                          padding-right: 2em;
                          min-width: 5em;
                          box-sizing: border-box;
                          font-size: 1.125rem;
                        "
                        >{{ value.category }}</span
                      >
                      <span
                        style="
                          border-left: 1px solid rgba(102, 102, 102, 1);
                          padding-left: 0.6em;
                          font-size: 1.125rem;
                        "
                      >
                        {{ value.topic }}</span
                      >
                    </template>
                    <el-option-group
                      v-for="(value, groupKey, index) in topicOptions"
                      :key="groupKey"
                      :label="groupKey"
                    >
                      <el-option
                        v-for="(value, groupKey2, index) in topicOptions[
                          groupKey
                        ]"
                        :key="groupKey2"
                        :label="groupKey2"
                        :value="{ topic: groupKey2, category: groupKey }"
                      >
                        <div class="option-content">
                          <p>{{ groupKey2 }}</p>
                          <span class="check-span">
                            <el-icon v-if="groupKey2 == topicValue.topic"
                              ><Check
                            /></el-icon>
                          </span>
                        </div>
                      </el-option>
                    </el-option-group>
                  </el-select>
                </div>
              </div>

              <div class="select-box-item item">
                <span class="label">Question:</span>
                <div>
                  <el-select
                    class="Question-select cultural-alignment-el-select"
                    v-model="questionValue"
                    placeholder="Select a question"
                    popper-class="select-options-cultural Question-select-options"
                    ref="myQuestionSelect"
                    @visible-change="onVisibleChange"
                  >
                    <template #label="{ label, value }">
                      <div class="text-content">
                        <div>
                          <p>{{ value }}</p>
                        </div>
                      </div>
                    </template>
                    <el-option
                      v-for="item in questionOptions"
                      :key="item"
                      :label="item"
                      :value="item"
                    >
                      <div class="option-content">
                        <p>{{ item }}</p>
                        <span class="check-span">
                          <el-icon v-if="questionValue && item == questionValue"
                            ><Check
                          /></el-icon>
                        </span>
                      </div>
                    </el-option>
                  </el-select>
                </div>
              </div>

              <div class="btn-box">
                <el-button
                  type="primary"
                  color="rgba(11, 112, 195, 1)"
                  class="generate-answer-btn"
                  :class="!allSelected ? 'btnDisabled' : ''"
                  :loading="allSelected && isLoadingResult"
                  :disabled="allSelected && isLoadingResult"
                  @click="generateAnswers"
                  >generate answers</el-button
                >
              </div>
            </div>

            <div class="answer-box">
              <div class="title">
                <p>Answer Pool</p>
                <p>The maximum number of comparisons supported is 3</p>
              </div>

              <ul>
                <li class="Neutral">
                  <div class="content">
                    <div class="top">
                      <span class="type-span">Neutral</span>
                    </div>
                    <LoadingDots
                      class="select-tip"
                      style="justify-content: center"
                      v-if="isLoadingResult"
                      text="Generating"
                      :size="7"
                    />
                    <div v-else class="bottom">
                      <el-scrollbar v-if="answerNeutralAllCountries">
                        <p class="p-content">
                          {{ answerNeutralAllCountries.neutral }}
                        </p>
                      </el-scrollbar>
                      <p class="p-content" v-else>No result</p>
                    </div>
                  </div>
                </li>
                <li v-for="(item, index) in chooseCountriesList" :key="index">
                  <div class="content" v-if="item">
                    <div class="top">
                      <span
                        class="check-icon-span"
                        :style="{ color: getCountryColor(item.countryName) }"
                      >
                        <SvgIcon name="check" class="check-icon"></SvgIcon>
                      </span>

                      <span
                        class="country-span"
                        :style="{ color: getCountryColor(item.countryName) }"
                        >{{ item.countryName }}</span
                      >

                      <span class="type-span">Aligned</span>
                      <el-icon
                        class="close-icon"
                        @click="closeAnswer(item, index)"
                        ><Close
                      /></el-icon>
                    </div>
                    <div class="bottom">
                      <el-scrollbar>
                        <p
                          class="p-content"
                          :class="
                            'p_' +
                            item.countryName.toLowerCase().split(' ').join('_')
                          "
                        >
                          {{
                            answerAlignedAllCountries[item.countryValue]
                              ?.answer || "no result"
                          }}
                        </p>
                      </el-scrollbar>
                    </div>
                  </div>
                  <p v-else class="select-tip">
                    Select a country from the right →
                  </p>
                  <div
                    v-if="item && item.countryName == setHoverCountry"
                    class="background-container"
                    :style="{
                      'background-color': setOpacity(
                        getCountryColorSub(item.countryName),
                        0.3
                      ),
                    }"
                  ></div>
                </li>
              </ul>
            </div>
          </div>
          <div class="right" style="position: ">
            <div class="right-content">
              <img
                class="bg"
                src="@/assets//images/culturalBg.png"
                alt=""
                style="z-index: -1"
              />
            </div>
            <div class="country-list">
              <ul style="position: absolute; left: 0; top: 0">
                <li
                  v-for="(item, index) in allCountriesList"
                  :key="index"
                  @click="choseCountryToAnswerPool(item, index)"
                  @mouseenter="mouseenter(item.countryName)"
                  @mouseleave="mouseleave(item.countryName)"
                  :class="[
                    'li-country-' +
                      item.countryName.toLowerCase().split(' ').join('_'),
                    {
                      choosed: chooseCountriesList.some(
                        (c) => c?.countryName === item.countryName
                      ),
                    },
                  ]"
                  :style="{
                    'border-color': getCountryColorSub(item.countryName),
                  }"
                >
                  <div
                    class="border-container"
                    :style="{
                      'border-color': getCountryColor(item.countryName),
                    }"
                  ></div>
                  <div
                    class="background-container"
                    :style="{
                      'background-color': setOpacity(
                        getCountryColorSub(item.countryName),
                        0.3
                      ),
                    }"
                  ></div>
                  <div class="country-img">
                    <img
                      :src="getAssetsFile(getCountryIcon(item.countryName))"
                      alt=""
                    />
                  </div>
                  <div class="country-text">
                    <p class="country-name-p">
                      <!--  -->
                      <span
                        class="check-icon-span"
                        :style="{ color: getCountryColor(item.countryName) }"
                      >
                        <SvgIcon
                          name="checked-no-icon"
                          class="checked-no-icon"
                        ></SvgIcon>
                        <SvgIcon name="check" class="check-icon"></SvgIcon>
                      </span>

                      <span
                        class="country-span"
                        :style="{ color: getCountryColor(item.countryName) }"
                        >{{ item.countryName }}</span
                      >
                      <!--  -->
                    </p>

                    <LoadingDots
                      style="margin-top: 0.4em"
                      v-if="isLoadingResult"
                      text="Generating"
                      :size="7"
                    />

                    <template
                      v-else-if="
                        answerNeutralAllCountries && answerAlignedAllCountries
                      "
                    >
                      <p class="score-p">
                        <span>Neutral</span>
                        <span
                          class="score-span"
                          :style="{
                            background: getCountryColor(item.countryName),
                          }"
                          >{{
                            answerNeutralAllCountries[item.countryValue]
                              ?.score || 0
                          }}</span
                        >
                        <span
                          :style="{ color: getCountryColor(item.countryName) }"
                          >VS</span
                        >
                        <span>Aligned</span
                        ><span
                          class="score-span"
                          :style="{
                            background: getCountryColor(item.countryName),
                          }"
                          >{{
                            answerAlignedAllCountries[item.countryValue]
                              ?.score || 0
                          }}</span
                        >
                      </p>
                      <p class="culture-arena-p" @click="gotArenaPage(item)">
                        Culture Arena →
                      </p>
                      <el-icon
                        v-if="
                          chooseCountriesList.some(
                            (c) => c?.countryName === item.countryName
                          )
                        "
                        class="close-icon"
                        @click.stop="closeAnswerFromCountry(item.countryName)"
                        ><Close
                      /></el-icon>

                      <!-- <TipPopover
                    v-if="true"
                    arrow="down"
                    style="left: 0"
                  >
                    这是一个提示内容
                  </TipPopover> -->
                    </template>
                    <template v-else>
                      <p style="padding: 0.5em 0.5em 0">No result</p>
                    </template>
                  </div>

                  <TipPopover
                    v-if="showTopActiveIndex === index"
                    arrow="down"
                    style="left: 0px; font-size: 1.125em"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="competitive-btn" @click="gotArenaPage(null)">
      <div class="competitive-icon-box">
        <SvgIcon name="competitive1"></SvgIcon>
        <SvgIcon name="competitive2"></SvgIcon>
        <SvgIcon name="competitive1"></SvgIcon>
      </div>
      <div class="text">Culture arena</div>
      <div class="arrow-right-box">
        <SvgIcon name="arrow-right"></SvgIcon>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onActivated, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import {getAnswerInfo,getQuestionInfo} from "@/service/api"

import LoadingDots from "@/components/common/LoadingDots.vue";
import TipPopover from "@/components/common/TipPopover.vue";

import { Close, Check } from "@element-plus/icons-vue";
import {
  countryColors,
  getCountryColor,
  getCountryColorSub,
  getCountryIcon,
  setOpacity,
  modelsList,
  countriesList,
} from "@/utils/culturalAlignmentData.js";

import { useCulturalAlignmentStore } from "@/stores/culturalAlignmentStore";
const culturalAlignmentStore = useCulturalAlignmentStore();

const getAssetsFile = (url) => {
  return new URL(`../../assets/country/${url}`, import.meta.url).href;
};

let question_info_data = null;
let answer_info_data = null;

const isLoadingResult = ref(false);

const modelValue = ref("");
const modelOptions = ref(modelsList);

const topicValue = ref("");
const topicOptions = ref();

const questionValue = ref("");
const questionOptions = ref([]);

// 判断是否全部选择
const allSelected = computed(() => {
  return (
    modelValue.value != "" &&
    topicValue.value != "" &&
    questionValue.value != ""
  );
});

const answerNeutralAllCountries = ref(null);
const answerAlignedAllCountries = ref(null);

const allCountriesList = ref(countriesList);
const chooseCountriesList = ref([null, null, null]);

onMounted(async () => {
  console.log("comparisonViewPush onMounted ");
  await fetchData()
  setOptionAndGenarateResult()
});

onActivated(() => {
  console.log("comparisonViewPush onActivated")
  setOptionAndGenarateResult()
});

const fetchData = async () => {
  if (culturalAlignmentStore.question_info_data && culturalAlignmentStore.answer_info_data) {
  } else {
    const question_info = await getQuestionInfo()
    const answer_info = await getAnswerInfo()
    
    culturalAlignmentStore.question_info_data = question_info.data;
    culturalAlignmentStore.answer_info_data = answer_info.data;
  }
  question_info_data = culturalAlignmentStore.question_info_data;
  answer_info_data = culturalAlignmentStore.answer_info_data;
  topicOptions.value = question_info_data;
};

const setOptionAndGenarateResult = ()=>{
  if(!culturalAlignmentStore.isComparesionPageUpdateData){
    return
  }

  console.log("setOptionAndGenarateResult")
  culturalAlignmentStore.isComparesionPageUpdateData = false
  
  const q = JSON.parse(sessionStorage.getItem("currentQuestion"));
  if (!q) return;
  topicValue.value = {
    category: q.category,
    topic: q.topic,
  };
  questionOptions.value = q.questionList;
  questionValue.value = q.currQuestion;
  modelValue.value = modelOptions.value[0].value;
  
  generateAnswers();
}

const topicSelectChange = (val) => {
  console.log("!!topicSelectChange", val);
  questionValue.value = "";
  questionOptions.value = question_info_data[val.category][val.topic];
};

const choseCountryToAnswerPool = (item, cuuentIndex) => {
  if (isLoadingResult.value || !answerAlignedAllCountries.value) {
    return;
  }
  console.log(item);
  // 判断数组中是否已有相同 id
  if (
    chooseCountriesList.value.some(
      (v) => v !== null && v.countryName === item.countryName
    )
  ) {
    console.log("已存在该项:", item);
    return;
  }
  // 找到第一个 null
  const index = chooseCountriesList.value.findIndex((v) => v === null);
  if (index !== -1) {
    chooseCountriesList.value[index] = item;
    console.log("添加成功:", chooseCountriesList.value);
  } else {
    console.log("数组已满，无法添加");
    toggleTip(cuuentIndex);
  }
};

const closeAnswer = (item, index) => {
  console.log(item, index);
  chooseCountriesList.value[index] = null;
};

const closeAnswerFromCountry = (country) => {
  const index = chooseCountriesList.value.findIndex(
    (item) => item && item.countryName === country
  );
  chooseCountriesList.value[index] = null;
};

const setHoverCountry = ref("");
const mouseenter = (country) => {
  setHoverCountry.value = country;
};
const mouseleave = (country) => {
  setHoverCountry.value = "";
};

// 出现最多添加3个country提示
const showTopActiveIndex = ref(null);
let timer = null;
function toggleTip(index) {
  // 如果点击同一个 li，则关闭
  if (showTopActiveIndex.value === index) {
    showTopActiveIndex.value = null;
    clearTimeout(timer);
    return;
  }

  // 打开新的提示框
  showTopActiveIndex.value = index;

  // 清除旧的定时器，重新计时
  clearTimeout(timer);
  timer = setTimeout(() => {
    showTopActiveIndex.value = null;
  }, 3000);
}

const router = useRouter();
const gotArenaPage = (country) => {
  sessionStorage.setItem(
    "currentQuestion",
    JSON.stringify({
      category: topicValue.value.category,
      topic: topicValue.value.topic,
      questionList: questionOptions.value, // 在topic下的question list
      currQuestion: questionValue.value, // 选中的question
    })
  );
  sessionStorage.setItem(
    "currentModel",
    JSON.stringify(modelValue.value || "")
  );
  sessionStorage.setItem("currentCountry", JSON.stringify(country || ""));
  
  culturalAlignmentStore.isArenaPageUpdateData = true
  router.push({
    path: "/CulturalAlignment/arena",
    // param: {
    //   topic: item.des,
    //   question: item.des,
    // },
    // query: {
    //   modelName: modelName,
    // },
  });
};

const generateAnswers = () => {
  // console.log("generateAnswers",allSelected.value);
  if (!allSelected.value) {
    return;
  }
  isLoadingResult.value = true;
  chooseCountriesList.value = [null, null, null];
  answerNeutralAllCountries.value = null;
  answerAlignedAllCountries.value = null;
  setTimeout(() => {
    isLoadingResult.value = false;
    answerNeutralAllCountries.value =
      answer_info_data[questionValue.value][modelValue.value];
    answerAlignedAllCountries.value =
      answer_info_data[questionValue.value][modelValue.value + "_aligned"];
  }, 200);
};

// 当topic切换的时候，question optionslist滚动到最顶部
const isScrollToTop = ref(true);
const myQuestionSelect = ref();
const raf = () => new Promise((r) => requestAnimationFrame(r));

async function resetDropdownScrollTop() {
  await nextTick();
  // 等到 DOM & 过渡测量都就绪（两帧更稳）
  await raf();
  await raf();

  const popper = myQuestionSelect.value?.popperRef;
  const wrap = popper?.querySelector(".el-select-dropdown__wrap");
  if (wrap) {
    wrap.scrollTop = 0;
  }

  // 保险：再来一次零延迟，覆盖“自动滚到选中项”的最后一次跳动
  setTimeout(() => {
    const _popper = myQuestionSelect.value?.popperRef;
    const _wrap = _popper?.querySelector(".el-select-dropdown__wrap");
    if (_wrap) _wrap.scrollTop = 0;
  }, 0);
}

function onVisibleChange(visible) {
  console.log("!!visible", visible);
  if (isScrollToTop.value) {
    resetDropdownScrollTop();
    isScrollToTop.value = false;
  }
}

watch(questionOptions, () => {
  isScrollToTop.value = true;
});
</script>

<style scoped lang="scss">
.culture-alignment-container {
  padding: 1.2em 0 1em;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: calc(100vw - 230px);
    min-width: 1000px;
    margin: 0 auto;
  }
  .left {
    width: 49%;
    .select-box {
      background: #fff;
      box-shadow: 0px 0px 12px 0px rgba(133, 200, 255, 0.4);
      border-radius: 1em;
      padding: 1em 1.5em;
      display: flex;
      flex-direction: column;
      gap: 0.75em;
    }

    .answer-box {
      background: #fff;
      margin-top: 0.75em;
      box-shadow: 0px 0px 12px 0px rgba(133, 200, 255, 0.4);
      border-radius: 1em;
      padding: 1em 1.5em;
      .title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
        p:nth-child(1) {
          font-size: 2em;
          font-weight: 700;
          color: rgba(61, 61, 61, 1);
          line-height: 120%;
        }
        p:nth-child(2) {
          color: rgba(102, 102, 102, 1);
          line-height: 1.375;
        }
      }
      ul {
        margin-top: 0.75em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.75em;
        li {
          box-sizing: border-box;
          width: calc(50% - 0.375em);
          border: 2px dashed rgba(194, 194, 194, 1);
          border-radius: 0.375em;
          height: 15.625em;
          padding: 0.625em 0;
          position: relative;
          &:nth-child(1) {
            border: 2px solid rgba(0, 0, 0, 1);
          }

          .select-tip {
            color: rgba(194, 194, 194, 1);
            font-size: 0.975em;
            position: absolute;
            text-align: center;
            width: 90%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .background-container {
            position: absolute;
            left: 0px;
            top: 0px;
            right: 0px;
            bottom: 0px;
            transition: all 0.2s;
            border-radius: 0.3em;
            z-index: 1;
          }

          & > div.content {
            position: relative;
            z-index: 2;
            font-size: 1em;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 12px;
            .top {
              padding: 0 0.625em;
              box-sizing: border-box;
              width: 100%;
              position: relative;
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 0.375em;
              .check-icon-span {
                padding: 2px;
                display: inline-block;
                display: flex;
                .check-icon {
                  width: 1.25em;
                  height: 1.25em;
                }
              }

              .country-span {
                font-size: 1.125em;
                font-weight: bold;
                line-height: 120%;
                color: rgba(128, 0, 0, 1);
                text-transform: uppercase;
              }

              .type-span {
                font-size: 0.75em;
                color: rgba(61, 61, 61, 1);
                font-weight: bold;
                border: 1px solid rgba(61, 61, 61, 1);
                border-radius: 0.333em;
                padding: 0.333em;
              }

              .close-icon {
                font-size: 1em;
                position: absolute;
                right: 0.625em;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
              }
            }

            .bottom {
              flex: 1;
              overflow: hidden;
              line-height: 1.333;
              font-size: 1.125em;

              .p-content {
                padding: 0 0.625em;
              }
              .p_china {
                color: rgb(128, 0, 0);
              }
              .p_south_korea {
                color: rgb(153, 92, 78);
              }
              .p_japan {
                color: rgb(204, 103, 16);
              }
              .p_thailand {
                color: rgb(41, 153, 198);
              }
              .p_malaysia {
                color: rgb(9, 114, 130);
              }
              .p_singapore {
                color: rgb(48, 84, 142);
              }
              .p_indonesia {
                color: rgb(37, 21, 146);
              }
              .p_australia {
                color: rgb(120, 0, 150);
              }
            }
          }
        }
      }
    }
  }
  .right {
    position: relative;
    width: 49%;
    // align-self: flex-start;
    margin-top: -8em;
    .right-content {
      padding-top: 100%;
      // background: rgba(0, 0, 0, 0.2);
      position: relative;
      .bg {
        position: absolute;
        width: 414.286%;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .country-list {
      ul {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        li {
          cursor: pointer;
          min-height: 4.9em;
          box-sizing: border-box;
          border: 1px solid rgba(128, 0, 0, 1);
          border-radius: 0.25em;
          padding: 0.7em;
          display: flex;
          flex-direction: row;
          position: relative;
          position: absolute;
          // right: 0;
          // bottom: 0;
          background: #fff;

          .border-container {
            position: absolute;
            left: -1px;
            top: -1px;
            right: -1px;
            bottom: -1px;
            border: 2px solid rgba(128, 0, 0, 1);
            box-shadow: 0px 0px 12px 0px rgba(114, 114, 114, 0.2);
            transition: all 0.2s;
            opacity: 0;
            border-radius: 0.3em;
          }
          .background-container {
            position: absolute;
            left: 0px;
            top: 0px;
            right: 0px;
            bottom: 0px;
            transition: all 0.2s;
            opacity: 0;
            opacity: 0;
            border-radius: 0.3em;
          }

          &:hover {
            border-color: transparent;
            .border-container {
              opacity: 1;
            }
          }
          &.choosed {
            align-items: flex-end;
            cursor: auto;
            padding-bottom: 0;
            border-color: transparent;
            .border-container {
              opacity: 1;
            }
            .country-text {
              p.culture-arena-p {
                display: block;
              }
              p.country-name-p {
                .check-icon-span .check-icon {
                  opacity: 1;
                }
              }
            }
            .country-img {
              display: block;
            }
            &:hover {
              .background-container {
                opacity: 1;
              }
            }
          }

          .country-img {
            display: none;
            position: relative;
            img {
              width: 5.625em;
              display: block;
              transform: translateY(-1px);
            }
          }
          .country-text {
            position: relative;
            min-width: 13.9375em;
            display: flex;
            flex-direction: column;
            // gap: 0.374em;
            p.country-name-p {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 0.375em;
              .check-icon-span {
                width: 1.5em;
                height: 1.5em;
                position: relative;
                display: inline-block;
                display: flex;
                align-items: center;
                justify-content: center;
                .check-icon {
                  width: 83.333%;
                  height: 83.333%;
                  opacity: 0;
                }
                .checked-no-icon {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  left: 0;
                  top: 0;
                }
              }
              .country-span {
                font-size: 1.125em;
                font-weight: bold;
                line-height: 120%;
                color: rgba(128, 0, 0, 1);
                text-transform: uppercase;
              }
            }
            p.score-p {
              height: 1.667em;
              font-size: 1.125em;
              font-weight: 700;
              line-height: 1.2;
              display: flex;
              flex-direction: row;
              gap: 0.333em;
              align-items: center;
              .score-span {
                font-size: 1.11em;
                color: #fff;
                padding: 0 0.3em;
                line-height: 1.3em;
                display: inline-block;
                height: 1.3em;
                border-radius: 4px;
              }
            }
            p.culture-arena-p {
              display: none;
              font-size: 1.125em;
              color: rgba(11, 112, 195, 1);
              line-height: 1.2;
              padding: 0.2em 0 0.4em;
              cursor: pointer;
            }
            .close-icon {
              font-size: 1em;
              position: absolute;
              right: 0;
              top: 0;
              cursor: pointer;
            }
          }
        }
        li.li-country-china {
          bottom: 82%;
          right: 47.5%;
        }
        .li-country-japan {
          left: 53%;
          top: 14.5%;
        }
        .li-country-south_korea {
          left: 53%;
          bottom: 86%;
        }
        .li-country-thailand {
          left: 0;
          bottom: 50%;
        }
        .li-country-malaysia {
          top: 51.4%;
          left: 17.5%;
          &.choosed {
            & ~ .li-country-singapore {
              transform: translateY(1.3em);
            }
          }
        }
        .li-country-singapore {
          top: calc(52% + 5em);
          right: calc(82.5% - 15.5625em);
        }
        .li-country-indonesia {
          top: 66.5%;
          left: calc(18% + 15.5625em);
        }
        .li-country-australia {
          right: 16%;
          bottom: -7.5%;
        }
      }
    }
  }
  .btn-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    .generate-answer-btn {
      font-size: 1.25em;
      height: 2em;
      text-transform: capitalize;
      width: 10.5em;
      border: 0;
      &.btnDisabled {
        background: rgba(194, 194, 194, 1);
      }
    }
  }
}

.cover-container {
  position: fixed;
  left: 0px;
  width: 100vw;
  height: 200vh;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.8) 26.74%,
    rgba(255, 255, 255, 0.95) 54.69%
  );
}
.competitive-btn {
  padding: 0.75em;
  z-index: 100;
  position: absolute;
  top: 45%;
  right: 0;
  transform: translate(0%, -50%);
  background: linear-gradient(180deg, #ccf0fc 0%, #9bddf9 100%);
  // border: 2px solid;

  // border-image-source: linear-gradient(180deg, #CCF0FC 0%, #9BDDF9 100%);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25em 0;
  color: rgba(5, 64, 140, 1);
  border-radius: 0.375em;
  .text {
    line-height: 1.375;
  }
  svg {
    transition: all 0.3s ease-out;
  }

  .competitive-icon-box {
    height: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    & > svg:nth-child(1) {
      width: 1em;
      height: 1em;
    }
    & > svg:nth-child(2) {
      width: 0.4em;
      height: 0.4em;

      transform: translateY(-0.65em);
    }
    & > svg:nth-child(3) {
      width: 1em;
      height: 1em;
      transform: rotateY(180deg);
    }
  }

  .arrow-right-box {
    height: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: rgba(5, 64, 140, 1);
      width: 0.8em;
      height: 0.8em;
    }
  }

  &:hover {
    .competitive-icon-box {
      & > svg:nth-child(1) {
        transform: translateX(0.2em);
      }
      & > svg:nth-child(2) {
        transform: scale(1.2) translateY(-0.65em);
      }
      & > svg:nth-child(3) {
        transform: translateX(-0.2em) rotateY(180deg);
      }
    }

    .arrow-right-box {
      svg {
        transform: translateX(0.3em);
      }
    }
  }
}
</style>
