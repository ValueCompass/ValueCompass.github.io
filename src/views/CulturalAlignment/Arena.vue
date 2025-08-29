<template>
  <div class="page">
    <div style="position: relative">
      <div class="culture-alignment-container main-container">
        <div>
          <div class="top-select-container">
            <div class="select-box cultural-alignment-select-box">
              <div>
                <div
                  class="select-box-item item"
                  style="margin-bottom: 0.375em"
                >
                  <span class="label">Culture:</span>
                  <div>
                    <el-select
                      class="cultural-alignment-el-select country-select"
                      v-model="countryValue"
                      placeholder="Select a country"
                      popper-class="select-options-cultural"
                    >
                      <template #label="{ label, value }">
                        <p class="country-p">
                          <span
                            :style="{ background: getCountryColor(value) }"
                            class="dot"
                          ></span>
                          <span :style="{ color: getCountryColor(value) }">{{
                            value
                          }}</span>
                        </p>
                      </template>
                      <el-option
                        v-for="item in countryList"
                        :key="item.countryName"
                        :label="item.countryName"
                        :value="item.countryName"
                      >
                        <div class="option-content">
                          <p class="country-p">
                            <span
                              class="dot"
                              :style="{
                                background: getCountryColor(item.countryName),
                              }"
                            ></span>
                            <span
                              :style="{
                                color: getCountryColor(item.countryName),
                              }"
                              >{{ item.countryName }}</span
                            >
                          </p>
                          <span class="check-span">
                            <el-icon v-if="item.countryName == countryValue"
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
              </div>

              <div>
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
              </div>

              <div>
                <div class="select-box-item item">
                  <span class="label">Model A:</span>
                  <div>
                    <el-select
                      class="cultural-alignment-el-select"
                      v-model="modelAValue"
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
                            <el-icon v-if="item.value == modelAValue"
                              ><Check
                            /></el-icon>
                          </span>
                        </div>
                      </el-option>
                    </el-select>
                  </div>
                </div>
              </div>

              <div>
                <div class="select-box-item item">
                  <span class="label">Model B:</span>
                  <div>
                    <el-select
                      class="cultural-alignment-el-select"
                      v-model="modelBValue"
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
                            <el-icon v-if="item.value == modelBValue"
                              ><Check
                            /></el-icon>
                          </span>
                        </div>
                      </el-option>
                    </el-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-box">
              <el-button
                type="primary"
                color="rgba(11, 112, 195, 1)"
                class="generate-answer-btn"
                >generate answers</el-button
              >
            </div>
          </div>

          <div class="center-result-container">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="competitive-btn" @click="goBack">
      <div class="competitive-icon-box">
        <SvgIcon name="culture-map"></SvgIcon>
      </div>
      <div class="text">Culture Map</div>
      <div class="arrow-right-box">
        <SvgIcon name="arrow-right"></SvgIcon>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { Close, Check } from "@element-plus/icons-vue";
import {
  countryColors,
  getCountryColor,
  getCountryColorSub,
  getCountryIcon,
  setOpacity,
} from "@/utils/countryColors.js";

const countryValue = ref("");
const countryList = ref([
  {
    countryName: "china",
  },
  {
    countryName: "Japan",
  },
  {
    countryName: "south Korea",
  },
  {
    countryName: "Thailand",
  },
  {
    countryName: "malaysia",
  },
  {
    countryName: "Singapore",
  },
  {
    countryName: "indonesia",
  },
  {
    countryName: "Australia",
  },
]);

const modelAValue = ref("");
const modelBValue = ref("");

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

const choseCountryToAnswerPool = (item) => {
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
  }
};

const closeAnswer = (item, index) => {
  console.log(item, index);
  chooseAnswerCountriesList.value[index] = null;
};

const findGroupLabel = (val) => {
  for (const g of topicOptions.value) {
    const item = g.options.find((o) => o.value === val);
    if (item) return g.label;
  }
  return "";
};

const router = useRouter();
const goBack = () => {
  router.go(-1); // 或者使用 router.back();
};
</script>

<style scoped lang="scss">
.culture-alignment-container {
  padding: 1em 0;
  & > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: calc(100vw - 230px);
    margin: 0 auto;
  }

  .top-select-container {
    width: 100%;
    .select-box.cultural-alignment-select-box {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.5em;
      & > div {
        width: calc(50% - 0.75em);
      }

      :deep(.el-select) {
        &.Question-select {
          .el-select__wrapper {
            min-height: 5.1em;
          }
        }
      }
    }
  }

  .btn-box {
    margin-top: 1.5em;
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

  .center-result-container {
    margin-top: 1.5em;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5em;
    & > div {
      box-sizing: border-box;
      width: calc(50% - 0.75em);
      height: 35em;
      border: 1px solid rgba(194, 194, 194, 1);
      border-bottom-left-radius: 1em;
      border-bottom-right-radius: 1em;
      border-top: 4px solid rgba(154, 105, 181, 1);
    }
  }
}

.competitive-btn {
  padding: 0.75em;
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 0;
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
      height: 1.25em;
    }
  }

  .arrow-right-box {
    height: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotateY(180deg);
    svg {
      color: rgba(5, 64, 140, 1);
      width: 0.8em;
      height: 0.8em;
    }
  }

  &:hover {
    .competitive-icon-box {
      & > svg:nth-child(1) {
        transform: scaleX(1.25);
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
