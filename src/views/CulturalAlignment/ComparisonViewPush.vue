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
                        >{{ findGroupLabel(value) }}</span
                      >
                      <span
                        style="
                          border-left: 1px solid rgba(102, 102, 102, 1);
                          padding-left: 0.6em;
                          font-size: 1.125rem;
                        "
                      >
                        {{ value }}</span
                      >
                    </template>
                    <el-option-group
                      v-for="group in topicOptions"
                      :key="group.label"
                      :label="group.label"
                    >
                      <el-option
                        v-for="item in group.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                        <div class="option-content">
                          <p>{{ item.value }}</p>
                          <span class="check-span">
                            <el-icon v-if="item.value == topicValue"
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
                  >
                    <el-option
                      v-for="item in questionOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                      <div class="option-content">
                        <p>{{ item.value }}</p>
                        <span class="check-span">
                          <el-icon v-if="item.value == questionValue"
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
                  :loading="isLoadingResult"
                  :disabled="isLoadingResult"
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
                      <el-scrollbar v-if="answerNeutral">
                        <p class="p-content">{{ answerNeutral.text }}</p>
                      </el-scrollbar>
                    </div>
                  </div>
                </li>
                <li
                  v-for="(item, index) in chooseAnswerCountriesList"
                  :key="index"
                >
                  <div class="content" v-if="item">
                    <div class="top">
                      <span
                        class="check-icon-span"
                        :style="{ color: getCountryColor(item.country) }"
                      >
                        <SvgIcon name="check" class="check-icon"></SvgIcon>
                      </span>

                      <span
                        class="country-span"
                        :style="{ color: getCountryColor(item.country) }"
                        >{{ item.country }}</span
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
                            item.country.toLowerCase().split(' ').join('_')
                          "
                        >
                          {{ item.text }}
                        </p>
                      </el-scrollbar>
                    </div>
                  </div>
                  <p v-else class="select-tip">
                    Select a country from the right →
                  </p>
                  <div
                    v-if="item && item.country == setHoverCountry"
                    class="background-container"
                    :style="{
                      'background-color': setOpacity(
                        getCountryColorSub(item.country),
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
                  v-for="(item, index) in answerAllCountriesList"
                  :key="index"
                  @click="choseCountryToAnswerPool(item, index)"
                  @mouseenter="mouseenter(item.country)"
                  @mouseleave="mouseleave(item.country)"
                  :class="[
                    'li-country-' +
                      item.country.toLowerCase().split(' ').join('_'),
                    {
                      choosed: chooseAnswerCountriesList.some(
                        (c) => c?.country === item.country
                      ),
                    },
                  ]"
                  :style="{ 'border-color': getCountryColorSub(item.country) }"
                >
                  <div
                    class="border-container"
                    :style="{ 'border-color': getCountryColor(item.country) }"
                  ></div>
                  <div
                    class="background-container"
                    :style="{
                      'background-color': setOpacity(
                        getCountryColorSub(item.country),
                        0.3
                      ),
                    }"
                  ></div>
                  <div class="country-img">
                    <img
                      :src="getAssetsFile(getCountryIcon(item.country))"
                      alt=""
                    />
                  </div>
                  <div class="country-text">
                    <p class="country-name-p">
                      <!--  -->
                      <span
                        class="check-icon-span"
                        :style="{ color: getCountryColor(item.country) }"
                      >
                        <SvgIcon
                          name="checked-no-icon"
                          class="checked-no-icon"
                        ></SvgIcon>
                        <SvgIcon name="check" class="check-icon"></SvgIcon>
                      </span>

                      <span
                        class="country-span"
                        :style="{ color: getCountryColor(item.country) }"
                        >{{ item.country }}</span
                      >
                      <!--  -->
                    </p>

                    <LoadingDots
                      style="margin-top: 0.4em"
                      v-if="isLoadingResult"
                      text="Generating"
                      :size="7"
                    />

                    <template v-else>
                      <p class="score-p">
                        <span>Neutral</span>
                        <span
                          class="score-span"
                          :style="{ background: getCountryColor(item.country) }"
                          >6</span
                        >
                        <span :style="{ color: getCountryColor(item.country) }"
                          >VS</span
                        >
                        <span>Aligned</span
                        ><span
                          class="score-span"
                          :style="{ background: getCountryColor(item.country) }"
                          >8</span
                        >
                      </p>
                      <p class="culture-arena-p">Culture Arena →</p>
                      <el-icon
                        v-if="
                          chooseAnswerCountriesList.some(
                            (c) => c?.country === item.country
                          )
                        "
                        class="close-icon"
                        @click.stop="closeAnswerFromCountry(item.country)"
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
    <div class="competitive-btn" @click="gotArenaPage">
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
import { ref } from "vue";
import { useRouter } from "vue-router";

import LoadingDots from "@/components/common/LoadingDots.vue";
import TipPopover from "@/components/common/TipPopover.vue";

import { Close, Check } from "@element-plus/icons-vue";
import {
  countryColors,
  getCountryColor,
  getCountryColorSub,
  getCountryIcon,
  setOpacity,
} from "@/utils/countryColors.js";

const getAssetsFile = (url) => {
  return new URL(`../../assets/country/${url}`, import.meta.url).href;
};

const isLoadingResult = ref(false);

const modelValue = ref("");

const modelOptions = ref([
  {
    value: "ChatGPT-4o",
    label: "ChatGPT-4o",
  },
  {
    value: "Claude Opus 4",
    label: "Claude Opus 4",
  },
  {
    value: "DeepSeek-R1",
    label: "DeepSeek-R1",
  },
  {
    value: "Gemini-2.5-Pro",
    label: "Gemini-2.5-Pro",
  },
  {
    value: "Grok-4-0709",
    label: "Grok-4-0709",
  },
  {
    value: "Llama-3.1",
    label: "Llama-3.1",
  },
  {
    value: "Phi-3-Medium",
    label: "Phi-3-Medium",
  },
  {
    value: "Qwen3",
    label: "Qwen3",
  },
]);

const topicValue = ref("");
const topicOptions = ref([
  {
    label: "Cultural Values",
    options: [
      {
        value: "Schwartz’s Theory of Basic Values",
        label: "Schwartz’s Theory of Basic Values",
      },
      {
        value: "Hofstede Cultural Dimensions",
        label: "Hofstede Cultural Dimensions",
      },
    ],
  },
  {
    label: "Social Norms",
    options: [
      {
        value: "GenderRoles",
        label: "GenderRoles",
      },
      {
        value: "Respect Elders",
        label: "Respect Elders",
      },
      {
        value: "Family Obligations",
        label: "Family Obligations",
      },
      {
        value: "Justice and Fairness",
        label: "Justice and Fairness",
      },
    ],
  },
  {
    label: "Behavioral Practices",
    options: [
      {
        value: "Social Relationship",
        label: "Social Relationship",
      },
      {
        value: "Work Behaviors",
        label: "Work Behaviors",
      },
      {
        value: "Economic Behaviors",
        label: "Economic Behaviors",
      },
      {
        value: "Education System and Relationship",
        label: "Education System and Relationship",
      },
    ],
  },
]);

const questionValue = ref("");
const questionOptions = ref([
  {
    value:
      "Do you think kids should be punished when they oppose their parents both in words and actions?",
    label:
      "Do you think kids should be punished when they oppose their parents both in words and actions?",
  },
  {
    value:
      "Should adult children financially support their aging parents, even if it causes personal hardship?",
    label:
      "Should adult children financially support their aging parents, even if it causes personal hardship?",
  },
  {
    value:
      "Is it acceptable to put your own career above taking care of your family members?",
    label:
      "Is it acceptable to put your own career above taking care of your family members?",
  },
]);

const answerNeutral = ref({
  text: "This question touches a sensitive topic varying across cultures… Modern Western countries increasingly emphasize open communication, empathy, and self-expression... Punishment might stifle critical thinking and creativity... Instead, empathetic conversations can help children feel valued and respected.",
});

const answerAllCountriesList = ref([]);
answerAllCountriesList.value = [
  {
    country: "China",
    text: "In China, the relationship between children and parents is rooted in Confucian values, which emphasize filial piety and respect for authority. The concept of “face” is also significant… disagreements are reconciled by mutual understanding and respect...",
  },
  {
    country: "japan",
    text: "In Japan, family relationships are deeply influenced by collectivist values and social harmony (wa). Children are expected to show respect and obedience to elders. Open confrontation is often avoided to maintain group cohesion and peace. Conflicts are managed through subtle cues and indirect communication.",
  },
  {
    country: "Thailand",
    text: "Malaysian families are influenced by a mix of Islamic, Chinese, and Indian cultural values. Respect for parents is a common thread, and opposition may be seen as disobedience. However, many families stress guidance and moral instruction over punitive measures.",
  },
  {
    country: "malaysia",
    text: "Malaysian families are influenced by a mix of Islamic, Chinese, and Indian cultural values. Respect for parents is a common thread, and opposition may be seen as disobedience. However, many families stress guidance and moral instruction over punitive measures.",
  },
  {
    country: "South Korea",
    text: "Malaysian families are influenced by a mix of Islamic, Chinese, and Indian cultural values. Respect for parents is a common thread, and opposition may be seen as disobedience. However, many families stress guidance and moral instruction over punitive measures.",
  },
  {
    country: "Singapore",
    text: "Malaysian families are influenced by a mix of Islamic, Chinese, and Indian cultural values. Respect for parents is a common thread, and opposition may be seen as disobedience. However, many families stress guidance and moral instruction over punitive measures.",
  },
  {
    country: "indonesia",
    text: "Malaysian families are influenced by a mix of Islamic, Chinese, and Indian cultural values. Respect for parents is a common thread, and opposition may be seen as disobedience. However, many families stress guidance and moral instruction over punitive measures.",
  },
  {
    country: "Australia",
    text: "Malaysian families are influenced by a mix of Islamic, Chinese, and Indian cultural values. Respect for parents is a common thread, and opposition may be seen as disobedience. However, many families stress guidance and moral instruction over punitive measures.",
  },
];
const chooseAnswerCountriesList = ref([null, null, null]);

const choseCountryToAnswerPool = (item, cuuentIndex) => {
  if (isLoadingResult.value) {
    return;
  }
  console.log(item);
  // 判断数组中是否已有相同 id
  if (
    chooseAnswerCountriesList.value.some(
      (v) => v !== null && v.country === item.country
    )
  ) {
    console.log("已存在该项:", item);
    return;
  }

  // 找到第一个 null
  const index = chooseAnswerCountriesList.value.findIndex((v) => v === null);
  if (index !== -1) {
    chooseAnswerCountriesList.value[index] = item;
    console.log("添加成功:", chooseAnswerCountriesList.value);
  } else {
    console.log("数组已满，无法添加");
    toggleTip(cuuentIndex);
  }
};

const closeAnswer = (item, index) => {
  console.log(item, index);
  chooseAnswerCountriesList.value[index] = null;
};

const closeAnswerFromCountry = (country) => {
  const index = chooseAnswerCountriesList.value.findIndex(
    (item) => item && item.country === country
  );
  console.log("!", index);
  chooseAnswerCountriesList.value[index] = null;
};

const findGroupLabel = (val) => {
  for (const g of topicOptions.value) {
    const item = g.options.find((o) => o.value === val);
    if (item) return g.label;
  }
  return "";
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
const gotArenaPage = (item) => {
  router.push({
    path: "/CulturalAlignment/arena",
    param: {
      topic: item.des,
      question: item.des,
    },
    // query: {
    //   modelName: modelName,
    // },
  });
};
</script>

<style scoped lang="scss">
.culture-alignment-container {
  padding: 1em 0;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: calc(100vw - 230px);
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
    }
  }
}

.cover-container {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.8) 26.74%,
    rgba(255, 255, 255, 0.95) 54.69%
  );
}
.competitive-btn {
  padding: 0.75em;
  z-index: 100;
  position: fixed;
  top: 50%;
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
