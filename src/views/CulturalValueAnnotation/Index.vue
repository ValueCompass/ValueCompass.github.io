<template>
  <div class="main-container">
    <div style="display: flex; justify-content: flex-end">
      <el-button
        style="height: 2.8em; font-size: 1em"
        type="primary"
        color="#0B70C3"
        plain
        @click="handleTaskHistoryClick"
        >{{ t("common.taskHistory") }}</el-button
      >
    </div>
    <div class="step-container">
      <div class="step step1">
        <h4>{{ t("culturalValueAnnotation.step1.title") }}</h4>
        <p>
          {{ t("culturalValueAnnotation.step1.note") }}
        </p>
        <p style="margin-top: 0.5em">
          {{ t("culturalValueAnnotation.step1.customNote") }}
        </p>
        <div class="input-container" style="padding: 1.5em 1em 0">
          <span>{{ t("culturalValueAnnotation.step1.topic") }}</span>
          <el-select v-model="topicValue1" placeholder="Select" style="">
            <el-option
              v-for="item in topicOptions1"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>

          <el-select
            v-model="topicValue2"
            placeholder="Select or input"
            filterable
            allow-create
            style=""
          >
            <el-option
              v-for="item in topicOptions2"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </div>
      </div>

      <div class="step step2">
        <h4>
          {{ t("culturalValueAnnotation.step2.title") }}
        </h4>
        <p>
          {{ t("culturalValueAnnotation.step2.note") }}
        </p>
        <div class="input-container">
          <div v-for="(principle, index) in principlesList" :key="index">
            <span>{{
              t("culturalValueAnnotation.step2.principle", { index: index + 1 })
            }}</span>
            <el-input
              v-model="principlesList[index]"
              style=""
              placeholder="Please input"
            />
          </div>
        </div>
      </div>

      <div class="step step3">
        <h4>
          {{ t("culturalValueAnnotation.step3.title") }}
        </h4>
        <p>
          {{ t("culturalValueAnnotation.step3.note") }}
        </p>

        <div class="input-container">
          <span>{{ t("culturalValueAnnotation.step3.task") }}</span>
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
        </div>

        <div style="display: flex; margin: 2em 0">
          <el-button
            v-if="!hasClickedSaveAndGetQuestionListBtn"
            style="height: 2.8em; font-size: 1em"
            @click="handleSaveAndGetQuestionListBtnClick"
            :disabled="
              isSaveAndGetQuestionListBtnDisabled ||
              isLoadingSaveAndGetQuestionList
            "
            :loading="isLoadingSaveAndGetQuestionList"
            color="#0B70C3"
            >Save And Get QuestionList</el-button
          >
          <el-button
            v-else
            style="height: 2.8em; font-size: 1em"
            @click="handleGetAnswerBtnClick"
            :disabled="true"
            color="#0B70C3"
            >You has clicked Save And Get QuestionList</el-button
          >
        </div>

        <el-tabs v-model="activeNameSelect1" @tab-click="handleClick">
          <el-tab-pane
            :label="
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
              t('culturalValueAnnotation.step3.selectExisting') +
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
            "
            name="Select Existing"
          >
            <div class="input-container">
              <span>{{ t("culturalValueAnnotation.step3.question") }}</span>

              <el-select v-model="questionValue" placeholder="Select" style="">
                <el-option
                  v-for="item in questionOptions"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </div>
          </el-tab-pane>

          <el-tab-pane
            :label="
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
              t('culturalValueAnnotation.step3.refine') +
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
            "
            name="Refine"
          >
            <div class="input-container">
              <span>{{ t("culturalValueAnnotation.step3.question") }}</span>
              <el-input
                v-model="questionValue"
                style=""
                placeholder="Please input"
              />
            </div>
          </el-tab-pane>
          <el-tab-pane
            :label="
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
              t('culturalValueAnnotation.step3.createNew') +
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
            "
            name="Create New"
          >
            <div class="input-container">
              <span>{{ t("culturalValueAnnotation.step3.question") }}</span>
              <el-input
                v-model="questionValue"
                style=""
                placeholder="Please input"
              />
            </div>
          </el-tab-pane>
        </el-tabs>

        <div style="display: flex; margin-bottom: 2em">
          <el-button
            v-if="!hasClickedGetAnswerBtn"
            @click="handleGetAnswerBtnClick"
            :disabled="isGetAnswerBtnDisabled || isLoadingGetAnswer"
            :loading="isLoadingGetAnswer"
            color="#0B70C3"
            >Get Answer</el-button
          >
          <el-button
            v-else
            style="height: 2.8em; font-size: 1em"
            :disabled="true"
            color="#0B70C3"
            >You has clicked Get Answer</el-button
          >
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.2em">
          <p>
            {{
              t("culturalValueAnnotation.step3.checkAndRefine", {
                culture: "用户在弹窗时填写的Country",
              })
            }}
          </p>
          <p>{{ t("culturalValueAnnotation.step3.checkItem1") }}</p>
          <p>{{ t("culturalValueAnnotation.step3.checkItem2") }}</p>
          <p>{{ t("culturalValueAnnotation.step3.checkItem3") }}</p>
          <p>{{ t("culturalValueAnnotation.step3.checkItem4") }}</p>
        </div>

        <AnnotationComponent
          :annotationDataOrigin="annotationData"
        ></AnnotationComponent>
        <div style="display: flex; justify-content: center; margin-top: 2em">
          <el-button
            color="#0B70C3"
            style="height: 3em"
            @click="submitHighlightAndConcepts"
            >Submit</el-button
          >
        </div>
      </div>
    </div>

    <UserDetail></UserDetail>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
const route = useRoute();
import { ElMessage } from "element-plus";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import type { TabsPaneContext } from "element-plus";
import UserDetail from "./UserDetail.vue";
import AnnotationComponent from "./Components/AnnotationComponent.vue";
import {
  submitPrinciples,
  submitQuestion,
  submitAnnotation,
} from "@/service/CulturalValueAnnotationApi";
import { Language } from "@amcharts/amcharts4/core";

const userDetail = JSON.parse(localStorage.getItem("userDetail") || "{}");

const allFromData = reactive({
  username: "",
  country: "",
  language: "",
  topic_1: "",
  topic_2: "",
  principles: [],
  timestamp: "",
  task_1: "",
  task_2: "",
});

const topicValue1 = ref("");
const topicValue2 = ref("");
const principlesList = ref<string[]>(["", "", "", "", ""]);

const topicOptions1 = ref(["placeholder1", "placeholder2", "placeholder3"]);
const topicOptions2 = ref(["placeholder4", "placeholder5", "placeholder6"]);

const taskValue1 = ref("");
const taskValue2 = ref("");
const questionValue = ref("");

const taskOptions1 = ref(["placeholder1", "placeholder2", "placeholder3"]);
const taskOptions2 = ref(["placeholder4", "placeholder5", "placeholder6"]);

const questionOptions = ref(["question1", "question2", "question3"]);

const hasClickedSaveAndGetQuestionListBtn = ref(false);
const hasClickedGetAnswerBtn = ref(false);

const isLoadingSaveAndGetQuestionList = ref(false);
const isSaveAndGetQuestionListBtnDisabled = computed(() => {
  return (
    !topicValue1.value.trim() ||
    !topicValue2.value.trim() ||
    !taskValue1.value.trim() ||
    !taskValue2.value.trim() ||
    principlesList.value.filter((item: String) => item.trim() !== "").length < 3
  );
});
const handleSaveAndGetQuestionListBtnClick = () => {
  if (isSaveAndGetQuestionListBtnDisabled.value) {
    return;
  }

  if (!userDetail.username) {
    ElMessage.error("请先填写用户信息");
    return;
  }

  const inputObj = {
    username: userDetail.username.trim(),
    country: userDetail.country.trim(),
    language: userDetail.language.trim(),
    topic_1: topicValue1.value.trim(),
    topic_2: topicValue2.value.trim(),
    principles: principlesList.value.filter(
      (item: String) => item.trim() !== ""
    ),
    timestamp: new Date().toISOString(),
    task_1: taskValue1.value.trim(),
    task_2: taskValue2.value.trim(),
  };

  console.log(inputObj);
  isLoadingSaveAndGetQuestionList.value = true;

  // 如果前端可以存储的话，这一步不经过后端也可以
  Object.assign(allFromData, inputObj);
  submitPrinciples(inputObj)
    .then((res: any) => {
      console.log(res);
      if (res.data.ok) {
        ElMessage.success("提交成功");
        localStorage.setItem("inputObj", JSON.stringify(inputObj));
        hasClickedSaveAndGetQuestionListBtn.value = true;
      } else {
        ElMessage.error("提交失败");
      }
    })
    .catch((err: any) => {
      console.log(err);
      ElMessage.error("提交失败");
    })
    .finally(() => {
      isLoadingSaveAndGetQuestionList.value = false;
    });
};

// step3 用户选定问题之后，点击 Generate，要求后端返回初步生成的数据
// Input 字段：task_1(str), task_2(str), question (str)
// Response 是一个 dict，如下，匹配 highlight_cues 的文字对 response 中相应的部分进行 highlight
const step3FormData = reactive({
  task_1: "",
  task_2: "",
  question: "",
});

const isLoadingGetAnswer = ref(false);
const isGetAnswerBtnDisabled = computed(() => {
  return (
    !taskValue1.value.trim() ||
    !taskValue2.value.trim() ||
    !questionValue.value.trim()
  );
});

let annotationData = reactive({
  originalResponse:
    "This is a placeholder response to the question: placeholder1,sss placeholder2,dsadasdasd placeholder3",
  response:
    "This is a placeholder response to the question: placeholder1,sss placeholder2,dsadasdasd placeholder3",
  highlight_cues: ["placeholder1", "placeholder2", "placeholder3"],
  key_concepts: ["concept1", "concept2", "concept3"],
});
const handleGetAnswerBtnClick = () => {
  if (isGetAnswerBtnDisabled.value) {
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
  isLoadingGetAnswer.value = true;

  submitQuestion(step3FormData)
    .then((res: any) => {
      console.log(res);
      if (res.data) {
        ElMessage.success("提交成功");
        annotationData = res.data;
        // annotationData.response = res.data.response;
        // annotationData.highlight_cues = res.data.highlight_cues;
        // annotationData.key_concepts = res.data.key_concepts;
        hasClickedGetAnswerBtn.value = true;
      } else {
        ElMessage.error("提交失败");
      }
    })
    .catch((err: any) => {
      console.log(err);
      ElMessage.error("提交失败");
    })
    .finally(() => {
      isLoadingGetAnswer.value = false;
    });
};

const submitHighlightAndConcepts = () => {
  // console.log("Submit highlight and concepts",annotationData);

  // 过滤掉状态为'fail'的cue和concept
  const filteredHighlightCues = [];
  const filteredKeyConcepts = [];

  for (let i = 0; i < annotationData.highlight_cues.length; i++) {
    // 只保留状态为'pass'的项目，未标记的也保留
    if (keywordStatus.value[i] !== "fail") {
      filteredHighlightCues.push(annotationData.highlight_cues[i]);
      filteredKeyConcepts.push(annotationData.key_concepts[i]);
    }
  }

  const sendData = {
    username: userDetail.username,
    task_1: taskValue1.value,
    task_2: taskValue2.value,
    question: questionValue.value,
    response: {
      response: annotationData.response,
      highlight_cues: filteredHighlightCues,
      key_concepts: filteredKeyConcepts,
    },
    timestamp: new Date().toISOString(),
  };
  console.log(sendData);
  submitAnnotation(sendData)
    .then((res) => {
      console.log(res);
      ElMessage.success("Annotation submitted successfully");
    })
    .catch((err) => {
      console.log(err);
      ElMessage.error("Annotation submission failed");
    })
    .finally(() => {
      // 提交完成后，重置状态
    });
};

onMounted(() => {
  console.log("onMounted");
  console.log(route.params.id);
});

const handleTaskHistoryClick = () => {
  router.push({
    path: "/CulturalValueAnnotation/TaskHistory",
  });
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

.highlight-keyword {
  font-weight: bold;
  cursor: pointer;
  color: #1890ff;
}

.highlight-keyword.pass {
  background-color: red;
  color: white;
}

.highlight-keyword.fail {
  background-color: gray;
  color: white;
}
</style>
