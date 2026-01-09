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
          :annotationDataOrigin="annotationDataOrigin"
          ref="annotationComponentRef"
        ></AnnotationComponent>
        <div style="display: flex; justify-content: center; margin-top: 2em">
          <el-button
            color="#0B70C3"
            style="height: 3em"
            :disabled="isLoadingSubmitHighlightAndConcepts"
            :loading="isLoadingSubmitHighlightAndConcepts"
            @click="submitHighlightAndConcepts"
            >Submit</el-button
          >
        </div>
      </div>
    </div>

    <UserDetail @hideUsrerContainer="hideUsrerContainer"></UserDetail>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
const route = useRoute();
import { ElMessage, ElMessageBox } from "element-plus";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import UserDetail from "./UserDetail.vue";
import AnnotationComponent from "./Components/AnnotationComponent.vue";
import {
  getTopicTaskTaxonomy,
  getCandidateQuestions,
  getQuestionResponse,
  submitAnnotation,
} from "@/service/CulturalValueAnnotationApi";
import { Language } from "@amcharts/amcharts4/core";

let userDetail = JSON.parse(localStorage.getItem("userDetail") || "{}");

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
const principlesList = ref(["", "", "", "", ""]);

const topicOptions1 = ref([]);
const topicOptions2 = ref([]);

const taskValue1 = ref("");
const taskValue2 = ref("");
const questionValue = ref("");

const taskOptions1 = ref([]);
const taskOptions2 = ref([]);

const questionOptions = ref([]);

const hasClickedSaveAndGetQuestionListBtn = ref(false);
const hasClickedGetAnswerBtn = ref(false);

const isLoadingSaveAndGetQuestionList = ref(false);
const isSaveAndGetQuestionListBtnDisabled = computed(() => {
  return (
    !topicValue1.value.trim() ||
    !topicValue2.value.trim() ||
    !taskValue1.value.trim() ||
    !taskValue2.value.trim() ||
    principlesList.value.filter((item) => item.trim() !== "").length < 3
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
    // principles: principlesList.value.filter(
    //   (item: String) => item.trim() !== ""
    // ),
    timestamp: new Date().toISOString(),
    task_1: taskValue1.value.trim(),
    task_2: taskValue2.value.trim(),
  };

  console.log(inputObj);
  isLoadingSaveAndGetQuestionList.value = true;

  // 如果前端可以存储的话，这一步不经过后端也可以
  Object.assign(allFromData, inputObj);
  getCandidateQuestions(inputObj)
    .then((res) => {
      console.log(res);
      if (res.data && res.data["candidate_questions"]) {
        ElMessage.success("提交成功");
        localStorage.setItem("inputObj", JSON.stringify(inputObj));
        hasClickedSaveAndGetQuestionListBtn.value = true;
        questionOptions.value = res.data["candidate_questions"];
      } else {
        ElMessage.error("提交失败");
      }
    })
    .catch((err) => {
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

const isLoadingGetAnswer = ref(false);
const isGetAnswerBtnDisabled = computed(() => {
  return (
    !taskValue1.value.trim() ||
    !taskValue2.value.trim() ||
    !questionValue.value.trim()
  );
});

let annotationDataOrigin = reactive({
  originalResponse: "",
  response: "",
  highlight_cues: [],
  key_concepts: [],
});
const handleGetAnswerBtnClick = () => {
  if (isGetAnswerBtnDisabled.value) {
    return;
  }
  if (!userDetail.username) {
    ElMessage.error("请先填写用户信息");
    return;
  }

  const step3FormData = {
    task_1: taskValue1.value.trim(),
    task_2: taskValue2.value.trim(),
    question: questionValue.value.trim(),
  };

  console.log(step3FormData);
  isLoadingGetAnswer.value = true;

  getQuestionResponse(step3FormData)
    .then((res) => {
      console.log(res);
      if (res.data) {
        ElMessage.success("提交成功");
        annotationDataOrigin = res.data;
        // annotationDataOrigin.response = res.data.response;
        // annotationDataOrigin.highlight_cues = res.data.highlight_cues;
        // annotationDataOrigin.key_concepts = res.data.key_concepts;
        hasClickedGetAnswerBtn.value = true;
      } else {
        ElMessage.error("提交失败");
      }
    })
    .catch((err) => {
      console.log(err);
      ElMessage.error("提交失败");
    })
    .finally(() => {
      isLoadingGetAnswer.value = false;
    });
};

const annotationComponentRef = ref(null);

const isLoadingSubmitHighlightAndConcepts = ref(false);
const submitHighlightAndConcepts = () => {
  if (!annotationComponentRef.value) {
    ElMessage.error("请先完成注释");
    return;
  }
  ElMessageBox.confirm("请完成所有标注，确认提交吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    isLoadingSubmitHighlightAndConcepts.value = true;
    const annotationData = annotationComponentRef.value.annotationData;
    const keywordStatus = annotationComponentRef.value.keywordStatus;

    console.log(annotationData, keywordStatus);
    // 过滤掉状态为'fail'的cue和concept
    const filteredHighlightCues = [];
    const filteredKeyConcepts = [];

    for (let i = 0; i < annotationData.highlight_cues.length; i++) {
      // 只保留状态为'pass'的项目，未标记的也保留
      if (keywordStatus[i] !== "fail") {
        filteredHighlightCues.push(annotationData.highlight_cues[i]);
        filteredKeyConcepts.push(annotationData.key_concepts[i]);
      }
    }

    const sendData = {
      username: userDetail.username.trim(),
      // country: userDetail.country.trim(),
      // language: userDetail.language.trim(),
      topic_1: topicValue1.value.trim(),
      topic_2: topicValue2.value.trim(),
      principles: principlesList.value.filter(
        (item) => item.trim() !== ""
      ),
      task_1: taskValue1.value,
      task_2: taskValue2.value,
      question: questionValue.value,
      // response: {
      response: annotationData.response,
      highlight_cues: filteredHighlightCues,
      key_concepts: filteredKeyConcepts,
      // },
      timestamp: new Date().toISOString(),
    };
    if (editCurrentQuestionDetail.value) {
      sendData.index = editCurrentQuestionDetail.value.index;
    }
    console.log(sendData);
    submitAnnotation(sendData)
      .then((res) => {
        if (res.data && res.data.ok) {
          ElMessage.success("Annotation submitted successfully");
          router.push("/CulturalValueAnnotation/TaskHistory");
        } else {
          ElMessage.error("Annotation submission failed");
        }
      })
      .catch((err) => {
        console.log(err);
        ElMessage.error("Annotation submission failed");
      })
      .finally(() => {
        // 提交完成后，重置状态
        isLoadingSubmitHighlightAndConcepts.value = false;
      });
  });
};

const topicTaxonomy = ref([]);
const taskTaxonomy = ref([]);

const handleGetTopicTaskTaxonomy = async () => {
  const TopicTaskTaxonomy = sessionStorage.getItem("TopicTaskTaxonomy");
  if (TopicTaskTaxonomy) {
    topicTaxonomy.value = JSON.parse(TopicTaskTaxonomy).topic_taxonomy;
    taskTaxonomy.value = JSON.parse(TopicTaskTaxonomy).task_taxonomy;
    topicOptions1.value = Object.keys(topicTaxonomy.value);
    taskOptions1.value = Object.keys(taskTaxonomy.value);
    return;
  }
  getTopicTaskTaxonomy({
    username: userDetail.username,
    country: userDetail.country,
    language: userDetail.language,
  })
    .then((res) => {
      console.log(res);
      if (res.data) {
        console.log(res.data);

        sessionStorage.setItem("TopicTaskTaxonomy", JSON.stringify(res.data));
        topicTaxonomy.value = res.data.topic_taxonomy;
        taskTaxonomy.value = res.data.task_taxonomy;

        topicOptions1.value = Object.keys(topicTaxonomy.value);
        taskOptions1.value = Object.keys(taskTaxonomy.value);
      } else {
        ElMessage.error("获取失败");
      }
    })
    .catch((err) => {
      console.log(err);
      ElMessage.error("获取失败");
    })
    .finally(() => {
      // 提交完成后，重置状态
    });
};

watch(topicValue1, (newValue) => {
  if (newValue) {
    topicOptions2.value = topicTaxonomy.value[newValue];
    topicValue2.value = "";
  }
});
watch(taskValue1, (newValue) => {
  if (newValue) {
    taskOptions2.value = taskTaxonomy.value[newValue];
    taskValue2.value = "";
  }
});

const editCurrentQuestionDetail = ref(null);
onMounted(async () => {
  if (!userDetail.username || !userDetail.country || !userDetail.language) {
    return;
  }
  console.log("onMounted");
  console.log(route.params.id);

  await handleGetTopicTaskTaxonomy();

  const editCurrentQuestion = sessionStorage.getItem("editCurrentQuestion");
  if (route.params.id && editCurrentQuestion) {
    const question = JSON.parse(editCurrentQuestion);
    editCurrentQuestionDetail.value = question;
    hasClickedGetAnswerBtn.value = true;
    hasClickedSaveAndGetQuestionListBtn.value = true;
    console.log("要编辑的question信息", question);
    // 填充表单数据
    questionValue.value = question.question;
    topicValue1.value = question.topic_1;
    setTimeout(() => {
      topicValue2.value = question.topic_2;
    }, 100);
    principlesList.value = question.principles;
    taskValue1.value = question.task_1;
    setTimeout(() => {
      taskValue2.value = question.task_2;
    }, 100);
    annotationDataOrigin = {
      originalResponse: question.response,
      response: question.response,
      highlight_cues: question.highlight_cues,
      key_concepts: question.key_concepts,
    };
  }
});

const hideUsrerContainer = () => {
  userDetail = JSON.parse(localStorage.getItem("userDetail") || "{}");
  handleGetTopicTaskTaxonomy();
};
const handleTaskHistoryClick = () => {
  router.push({
    path: "/CulturalValueAnnotation/TaskHistory",
  });
};

//
const activeNameSelect1 = ref("Select Existing");
const handleClick = (tab, event) => {
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
