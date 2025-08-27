<template>
  <div style="position: relative">
    <div class="culture-alignment-container main-container">
      <div class="top-select-container">
        <div class="select-box cultural-alignment-select-box">
          <div>
            <div class="select-box-item item" style="margin-bottom: 0.375em">
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
          </div>

          <div>
            <div class="select-box-item item">
              <span class="label">Model B:</span>
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
</template>
<script setup>
import { ref } from "vue";

import { Close, Check } from "@element-plus/icons-vue";
import { countryColors, getCountryColor } from "@/utils/countryColors.js";

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
</script>

<style scoped lang="scss">
.culture-alignment-container {
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

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

  .center-result-container{
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
</style>
