<template>
  <div class="main-container">
    <div class="step-container">
      <div class="step step1">
        <h4>Step 1.Choose a topic to create value-laden query.</h4>
        <p>
          Note that the topic should be i)representative in your culure, instead
          of those unimportant and corner cases; and ii) somewhat unique to your
          culture, rather than a general issue shared across many cultures.
        </p>
        <p style="margin-top: 0.5em">
          We provide a two-level topic taxonomy for selection. If you think the
          following topics can not accurately define your question, your can
          create one from scratch.
        </p>
        <div class="input-container" style="padding: 1.5em 1em 0;">
              <span>Topic:</span>
              <el-select v-model="topicValue1" placeholder="Select" style="">
                <el-option
                  v-for="item in topicOptions1"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>

              <el-select v-model="topicValue2" placeholder="Select or input" filterable allow-create style="">
                <el-option
                  v-for="item in topicOptions2"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>

              <el-button>Submit</el-button>
            </div>
      </div>

      <div class="step step2">
        <h4>
          Step 2.List the most important value principles toward this topic in
          your culture.
        </h4>
        <p>
          Please list at least 3 most salient value principles, and at most 5
          principles. Write the most important principles first, so that the
          following order reflects the ranking of importance.
        </p>
        <div class="input-container">
          <div v-for="(principle, index) in principlesList" :key="index">
            <span>Principle {{ index + 1 }}:</span>
            <el-input
              v-model="principlesList[index]"
              style=""
              placeholder="Please input"
            />
          </div>
        </div>
        <el-button @click="submitStep2" :disabled="isSubmitStep2BtnDisabled || isLoadingStep2" :loading="isLoadingStep2" color="#0B70C3">Submit</el-button>
      </div>

      <div class="step step3">
        <h4>
          Step 3.Choose A task category and select/create a corresponding
          value-laden query, then annotate the answer to align with specific
          cultural values.
        </h4>
        <p>
          Note that we provide some example questions under this topic and task
          category, you can directly select one, refine base on it or create a
          new query by yourself.
        </p>

        <div class="input-container">
          <span>Task:</span>
          <el-select v-model="taskValue1" placeholder="Select" style="">
            <el-option
              v-for="item in taskOptions1"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
          <el-select v-model="taskValue2" placeholder="Select" style="">
            <el-option
              v-for="item in taskOptions2"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>

          <el-button>Submit</el-button>
        </div>

        <el-tabs v-model="activeNameSelect1" @tab-click="handleClick">
          <el-tab-pane
            label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select Existing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            name="Select Existing"
          >
            <div class="input-container">
              <span>Question:</span>

              <el-select v-model="questionValue" placeholder="Select" style="">
                <el-option
                  v-for="item in questionOptions"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>

              <el-button>Submit</el-button>
            </div>
          </el-tab-pane>

          <el-tab-pane
            label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Refine&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            name="Refine"
          >
            <div class="input-container">
              <span>Question:</span>
              <el-input
                v-model="questionValue"
                style=""
                placeholder="Please input"
              />

              <el-button>Submit</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane
            label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create New&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            name="Create New"
          >
            <div class="input-container">
              <span>Question:</span>
              <el-input
                v-model="questionValue"
                style=""
                placeholder="Please input"
              />

              <el-button>Submit</el-button>
            </div>
          </el-tab-pane>
        </el-tabs>

        <el-button @click="submitStep3" :disabled="isSubmitStep3BtnDisabled || isLoadingStep3" :loading="isLoadingStep3" color="#0B70C3">Submit</el-button>
        <div style="display: flex; flex-direction: column; gap: 0.2em">
          <p>
            Now carefully check and refine the answer to make it much better
            align with the {culture (用户在弹窗时 填写的Country)} culture. You
            should
          </p>
          <p>1.遍历所有的value cues,判断对应concept和value的代表性和正确性</p>
          <p>2.删除无关的片段、concept和value</p>
          <p>3.修改不够准确的片段、concept和value</p>
          <p>4.补充目前answer里缺失的concept+value,并写作片段</p>
        </div>

        <div class="answer-content">
          <div class="left">
            <div
              class="response-text"
              v-html="processedAnnotationDataResponse"
              @click="handleKeywordClick"
            ></div>
          </div>
          <div class="right">
            <div>
              <div>
                <p>Text fragment:</p>
                <el-input
                  v-model="currentCue"
                  style=""
                  placeholder="Please input"
                  :autosize="{ minRows: 3, maxRows: 3 }"
                  type="textarea"
                />
              </div>
              <div>
                <p>Value Concepts::</p>
                <el-input
                  v-model="currentConcept"
                  style=""
                  placeholder="Please input"
                  :autosize="{ minRows: 3, maxRows: 3 }"
                  type="textarea"
                />
              </div>
              <div class="button-container1">
                <el-button class="keep">Completely correct, keep</el-button>
                <el-button class="delete"
                  >Irrelevant or incorrect, delete</el-button
                >
                <el-button class="edit">Edit</el-button>
              </div>
            </div>
            <div class="button-container2">
              <el-button>Add new </el-button>
              <div>
                <el-button :disabled="currentCueIndex === 0" @click="previousCue"
                  >Previous</el-button
                >
                <el-button
                  :disabled="currentCueIndex === annotationData.highlight_cues.length - 1"
                  @click="nextCue"
                  >Next</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <UserDetail></UserDetail>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from "vue";
import { ElMessage } from "element-plus";
import type { TabsPaneContext } from "element-plus";
import UserDetail from "./UserDetail.vue";
import { submitPrinciples,submitQuestion } from "@/service/CulturalValueAnnotationApi";

const userDetail = JSON.parse(localStorage.getItem("userDetail") || "{}");

// step2  annotations/principles, (如果前端可以存储的话，这一步不经过后端也可以)
// Input 字段：username(str), topic_1(str), topic_2(str), principles (a list of str)， timestamp
// Return 字段：不成功返回 error + 400， 成功返回 {“ok”: True}
const step2FormData = reactive({
  username: "",
  topic_1: "",
  topic_2: "",
  principles: [],
  timestamp: "",
});

const topicValue1 = ref("");
const topicValue2 = ref("");
const principlesList = ref<string[]>(["", "", "", "", ""]);

const topicOptions1 = ref([
  "placeholder1",
  "placeholder2",
  "placeholder3",
])
const topicOptions2 = ref([
  "placeholder4",
  "placeholder5",
  "placeholder6",
])


const isLoadingStep2 = ref(false);
const isSubmitStep2BtnDisabled = computed(() => {
  return (
    !topicValue1.value.trim() ||
    !topicValue2.value.trim() ||
    principlesList.value.filter((item: String) => item.trim() !== "").length < 3
  );
});
const submitStep2 = () => {
  if (isSubmitStep2BtnDisabled.value) {
    return;
  }
  
  if (!userDetail.username) {
    ElMessage.error("请先填写用户信息");
    return;
  }
  step2FormData.username = userDetail.username;
  step2FormData.topic_1 = topicValue1.value;
  step2FormData.topic_2 = topicValue2.value;
  step2FormData.principles = principlesList.value.filter((item) => item.trim() !== "");
  step2FormData.timestamp = new Date().toISOString();

  console.log(step2FormData);
  isLoadingStep2.value = true;
  
  // 如果前端可以存储的话，这一步不经过后端也可以
  submitPrinciples(step2FormData).then((res: any) => {
    console.log(res);
    if (res.data.ok) {
      ElMessage.success("提交成功");
    } else {
      ElMessage.error("提交失败");
    }
  }).catch((err: any) => {
    console.log(err);
    ElMessage.error("提交失败");
  }).finally(() => {
    isLoadingStep2.value = false;
  });
 
}

// step3 用户选定问题之后，点击 Generate，要求后端返回初步生成的数据
// Input 字段：task_1(str), task_2(str), question (str)
// Response 是一个 dict，如下，匹配 highlight_cues 的文字对 response 中相应的部分进行 highlight
const step3FormData = reactive({
  task_1: "",
  task_2: "",
  question: "",
})
const taskValue1 = ref("");
const taskValue2 = ref("");
const questionValue = ref("");

const taskOptions1 = ref([
  "placeholder1",
  "placeholder2",
  "placeholder3",
])

const taskOptions2 = ref([
  "placeholder4",
  "placeholder5",
  "placeholder6",
])

const questionOptions = ref([
  "question1",
  "question2",
  "question3",
])

const isLoadingStep3 = ref(false);
const isSubmitStep3BtnDisabled = computed(() => {
  return (
    !taskValue1.value.trim() ||
    !taskValue2.value.trim() ||
    !questionValue.value.trim()
  );
});

const submitStep3 = () => {
  if (isSubmitStep3BtnDisabled.value) {
    return;
  }
  if (!userDetail.username) {
    ElMessage.error("请先填写用户信息");
    return;
  }
  step3FormData.task_1 = taskValue1.value;
  step3FormData.task_2 = taskValue2.value;
  step3FormData.question = questionValue.value;

  console.log(step3FormData);
  isLoadingStep3.value = true;

  submitQuestion(step3FormData).then((res: any) => {
    console.log(res);
    if (res.data) {
      ElMessage.success("提交成功");
    } else {
      ElMessage.error("提交失败");
    }
  }).catch((err: any) => {
    console.log(err);
    ElMessage.error("提交失败");
  }).finally(() => {
    isLoadingStep3.value = false;
  });
}



// 处理response 并标注
const annotationData = reactive({
  response:
    "This is a placeholder response to the question: placeholder1,sss placeholder2,dsadasdasd placeholder3",
  highlight_cues: ["placeholder1", "placeholder2", "placeholder3"],
  key_concepts: ["concept1", "concept2", "concept3"],
});

const processedAnnotationDataResponse = computed(() => {
  let processedText = annotationData.response;

  annotationData.highlight_cues.forEach((cue, index) => {
    const regex = new RegExp(cue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    let replacement = `<span class="highlight-keyword" data-cue="${cue}" data-index="${index}" >${cue}</span>`;
    if(currentCueIndex.value === index) {
      replacement = `<span class="highlight-keyword current" data-cue="${cue}" data-index="${index}" >${cue}</span>`;
    }
    processedText = processedText.replace(regex, replacement);
  });

  return processedText;
});


const handleKeywordClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("highlight-keyword")) {
    const index = parseInt(target.getAttribute("data-index") || "0");
    // const concepts = annotationData.key_concepts[index] || "No concepts found";
    // alert(`Related key concepts: ${concepts}`);
    currentCueIndex.value = index;
  }
};

const currentCueIndex = ref(0);

const currentCue = computed(() => {
  return annotationData.highlight_cues[currentCueIndex.value] || "";
});

const currentConcept = computed(() => {
  return annotationData.key_concepts[currentCueIndex.value] || "";
});

const previousCue = () => {
  if (currentCueIndex.value > 0) {
    currentCueIndex.value--;
  }
};

const nextCue = () => {
  if (currentCueIndex.value < annotationData.highlight_cues.length - 1) {
    currentCueIndex.value++;
  }
};

// 
const activeNameSelect1 = ref("Select Existing");
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<style scoped lang="scss">
.step-container {
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  gap: 3.75em 0;
  .step {
    h4 {
      font-size: 1.2em;
      color: #05408c;
      font-weight: 600;
      font-style: italic;
      line-height: 1.5;
      margin-bottom: 1em;
    }
    p {
      line-height: 1.5;
      font-size: 1.125em;
    }
    .input-container {
      margin: 0.5em 0 1em;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.5em 0.5em;
      align-items: center;
      .el-button {
        align-self: flex-end;
        font-size: 0.9em;
        height: 2.4em;
        margin-left: 1em;
      }
      .el-input {
        width: 600px;
      }
      .el-select {
        width: 400px;
      }
    }
    &.step2 {
      .input-container {
        margin: 1.5em 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1em;
        span {
          margin-right: 1em;
        }
      }
    }
    &.step3 {
      .answer-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 2em;
        line-height: 1.5;
        & > div {
          width: 49%;
          border-radius: 8px;
          min-height: 300px;

          box-sizing: border-box;
          &.left {
            border: 1px solid #666;
            padding: 1em;
          }
          &.right {
            & > div:nth-child(1) {
              background: #f4f1d7;
              padding: 1em;
              border-radius: 8px;
              display: flex;
              flex-direction: column;
              gap: 1em;
              & > div {
                p {
                  font-size: 1em;
                  margin-bottom: 0.5em;
                }
                :deep(.el-input__inner) {
                  // --el-input-inner-height:5em;
                  // font-size: 1rem;
                }
              }
            }
            .button-container1 {
              display: flex;
              flex-direction: row;
              .el-button {
                height: 2.4em;
                font-size: 1em;
                width: 33%;
                &.keep {
                  border: 1px solid #228b22;
                  color: #228b22;
                }
                &.delete {
                  border: 1px solid #b22222;
                  color: #b22222;
                }
                &.edit {
                  border: 1px solid #0b70c3;
                  color: #0b70c3;
                }
              }
            }

            .button-container2 {
              margin-top: 1.5em;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              .el-button {
                border: 1px solid #0b70c3;
                color: #0b70c3;
                font-size: 1em;
                &:disabled {
                  border: none;
                  background: #c2c2c2;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }

  :deep(.el-select) {
    .el-select__wrapper {
      height: 2.5em;
      font-size: 1rem;
    }
  }
  :deep(.el-input__inner) {
    --el-input-inner-height: 2.5em;
    font-size: 1rem;
  }
  :deep(.el-tabs__header) {
    --el-color-primary: var(--theme-color);
    --el-font-size-base: 1em;

    .el-tabs__item {
      padding: 0;
      color: var(--sub-text-color);
      &.is-active {
        color: var(--theme-color);
      }
    }
  }
}

:deep(.el-dialog) {
  border-radius: 1.125rem !important;
  padding: 2.5em 3em;
}
</style>
