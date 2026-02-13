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
        <div class="intro-container">
          <h4>{{ t("culturalValueAnnotation.step1.title") }}</h4>
          <p>
            {{ t("culturalValueAnnotation.step1.note") }}
          </p>
          <div>
            <p>{{ t("culturalValueAnnotation.step1.selectionCriteria") }}</p>
            <ul>
              <li>
                {{ t("culturalValueAnnotation.step1.selectionCriteria1") }}
              </li>
              <li>
                {{ t("culturalValueAnnotation.step1.selectionCriteria2") }}
              </li>
              <li>
                {{ t("culturalValueAnnotation.step1.selectionCriteria3") }}
              </li>
              <li>
                {{ t("culturalValueAnnotation.step1.selectionCriteria4") }}
              </li>
            </ul>
          </div>
          <p>
            {{ t("culturalValueAnnotation.step1.customNote") }}
          </p>
        </div>
        <div class="input-container">
          <span>{{ t("culturalValueAnnotation.step1.topic") }}</span>
          <el-select
            v-model="topicValue1"
            placeholder="Select"
            :disabled="hasClickedSaveAndGetQuestionListBtn"
          >
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
            ref="selectRef"
            @blur="handleBlur"
            :disabled="hasClickedSaveAndGetQuestionListBtn"
            @change="handleTopicValue2Change"
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
        <div class="intro-container">
          <h4>
            {{ t("culturalValueAnnotation.step2.title") }}
          </h4>
          <p v-html="t('culturalValueAnnotation.step2.note')"></p>
          <ul>
            <li>
              <p>
                {{ t("culturalValueAnnotation.step2.templateReference") }}
              </p>
              <ul>
                <li>{{ t("culturalValueAnnotation.step2.template1") }}</li>
                <li>{{ t("culturalValueAnnotation.step2.template2") }}</li>
                <li>{{ t("culturalValueAnnotation.step2.template3") }}</li>
                <li>
                  {{ t("culturalValueAnnotation.step2.template4") }}
                </li>
                <li>{{ t("culturalValueAnnotation.step2.template5") }}</li>
              </ul>
            </li>
            <li>
              <p>
                <span
                  v-html="t('culturalValueAnnotation.step2.instruction2')"
                ></span>
              </p>
            </li>
            <li>
              <p>{{ t("culturalValueAnnotation.step2.instruction3") }}</p>
            </li>
          </ul>
          <div
            style="
              min-height: 6em;
              border: 1px solid #d9d9d9;
              border-radius: 24px;
              padding: 1em;
              line-height: 1.5;
            "
          >
            <p>
              {{ t("culturalValueAnnotation.step2.noteExampleText") }}
            </p>
            <p v-for="(example, index) in principleExample" :key="index">
              {{ index + 1 }}: {{ example }}
            </p>
          </div>
        </div>
        <div class="input-container">
          <div
            v-for="(principle, index) in principlesList"
            :key="index"
            class="principle-item"
          >
            <span>{{
              t("culturalValueAnnotation.step2.principle", { index: index + 1 })
            }}</span>
            <el-input
              type="textarea"
              autosize
              v-model="principlesList[index]"
              style=""
              placeholder="Please input"
              :disabled="hasClickedSaveAndGetQuestionListBtn"
            />
          </div>
        </div>
      </div>

      <div class="step step3">
        <div class="intro-container">
          <h4>
            {{ t("culturalValueAnnotation.step3.title") }}
          </h4>
          <p v-html="t('culturalValueAnnotation.step3.note')"></p>
          <p v-html="t('culturalValueAnnotation.step3.taskNote')"></p>
        </div>

        <div class="input-container">
          <span>{{ t("culturalValueAnnotation.step3.task") }}</span>
          <el-select
            v-model="taskValue1"
            placeholder="Select"
            :disabled="hasClickedSaveAndGetQuestionListBtn"
          >
            <el-option
              v-for="item in taskOptions1"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
          <el-select
            v-model="taskValue2"
            placeholder="Select"
            :disabled="hasClickedSaveAndGetQuestionListBtn"
            @change="handleTaskValue2Change"
          >
            <el-option
              v-for="item in taskOptions2"
              :key="item"
              :label="`${item.category} (${
                topic_task_count?.[topicValue2]?.[item.category] ?? 0
              })`"
              :value="item.category"
            />
          </el-select>
        </div>
        <div
          style="
            min-height: 6em;
            border: 1px solid #d9d9d9;
            border-radius: 24px;
            padding: 1em;
            line-height: 1.5;
          "
        >
          <p>Definition: {{ taskExample ? taskExample.definition : "" }}</p>
          <p>Example: {{ taskExample ? taskExample.example : "" }}</p>
        </div>

        <div style="display: flex">
          <el-popover
            placement="right-start"
            :width="300"
            :disabled="taskOptions2 && taskOptions2.length === 0"
          >
            <template #reference>
              <div>
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
                  >Get Question List</el-button
                >
                <el-button
                  v-else
                  style="height: 2.8em; font-size: 1em"
                  :disabled="true"
                  color="#0B70C3"
                  >Your have clicked the button to get the question
                  list.</el-button
                >
              </div>
            </template>

            <template #default>
              <div>
                <ul style="display: flex; flex-direction: column; gap: 0.2em">
                  <li
                    v-for="item in taskOptions2"
                    :key="item"
                    :style="{
                      color:
                        item.category === taskValue2 ? '#409eff' : 'inherit',
                      fontWeight:
                        item.category === taskValue2 ? 'bold' : 'inherit',
                    }"
                  >
                    {{
                      `${item.category} (${
                        topic_task_count?.[topicValue2]?.[item.category] ?? 0
                      })`
                    }}
                  </li>
                </ul>
              </div>
            </template>
          </el-popover>
        </div>
      </div>

      <div class="step step4">
        <div class="intro-container">
          <h4>{{ t("culturalValueAnnotation.step4.title") }}</h4>
          <p v-html="t('culturalValueAnnotation.step4.note')"></p>
          <div>
            <p>{{ t("culturalValueAnnotation.step4.questionListIncludes") }}</p>
            <ul>
              <li
                v-html="
                  t('culturalValueAnnotation.step4.questionListIncludes1')
                "
              ></li>
              <li
                v-html="
                  t('culturalValueAnnotation.step4.questionListIncludes2')
                "
              ></li>
            </ul>
          </div>
          <div>
            <p v-html="t('culturalValueAnnotation.step4.selectCriteria')"></p>
            <ul>
              <li
                v-html="t('culturalValueAnnotation.step4.selectCriteria1')"
              ></li>
              <li
                v-html="t('culturalValueAnnotation.step4.selectCriteria2')"
              ></li>
              <li
                v-html="t('culturalValueAnnotation.step4.selectCriteria3')"
              ></li>
            </ul>
          </div>
          <p v-html="t('culturalValueAnnotation.step4.refineNote')"></p>
          <p
            v-html="t('culturalValueAnnotation.step4.questionRequirement')"
          ></p>
          <p
            v-html="t('culturalValueAnnotation.step4.questionRequirement2')"
          ></p>
        </div>
        <div>
          <span>{{
            t("culturalValueAnnotation.step4.annotatedQuestions")
          }}</span>
          <span
            >{{ t("culturalValueAnnotation.step4.newQuestions") }}:
            <b>{{ actionCounts.create }}</b></span
          >;&nbsp;&nbsp;
          <span
            >{{ t("culturalValueAnnotation.step4.existingQuestions") }}:
            <b>{{ actionCounts["select existing"] }}</b></span
          >;&nbsp;&nbsp;
          <span
            >{{ t("culturalValueAnnotation.step4.refinedQuestions") }}:
            <b>{{ actionCounts.refine }}</b></span
          >
        </div>
        <el-tabs v-model="activeNameSelect1" @tab-click="handleClick">
          <el-tab-pane
            :label="
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
              t('culturalValueAnnotation.step3.createNew') +
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
            "
            name="Create New"
          >
            <div class="input-container question-input-container">
              <span>{{ t("culturalValueAnnotation.step4.question") }}</span>
              <el-input
                v-model="questionValue_Create"
                style="width: calc(100% - 5em)"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 10 }"
                placeholder="Please input"
                :disabled="hasClickedGetAnswerBtn"
              />
            </div>
          </el-tab-pane>

          <el-tab-pane
            :label="
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
              t('culturalValueAnnotation.step3.selectExisting') +
              ' & ' +
              t('culturalValueAnnotation.step3.refine') +
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
            "
            name="Select Existing or Refine"
          >
            <div class="input-container question-input-container">
              <span>{{ t("culturalValueAnnotation.step4.question") }}</span>
              <div
                class="question-select-and-refine-container"
                style="
                  position: relative;
                  width: calc(100% - 5em);
                  padding-right: 2em;
                  box-sizing: border-box;
                "
              >
                <el-input
                  v-model="questionValue_Select"
                  style="position: relative; z-index: 2"
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 10 }"
                  placeholder="Please input"
                  :disabled="hasClickedGetAnswerBtn"
                />

                <el-select
                  v-model="questionValue_Select_origin"
                  placeholder="Select"
                  :disabled="hasClickedGetAnswerBtn"
                  style="position: absolute; left: 0; bottom: 0; width: 100%"
                  @change="handleSelectChange"
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
                    :key="item.question"
                    :label="item.question"
                    :value="item.question"
                  />
                </el-select>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>

        <div class="score-container">
          <div>
            <span
              >{{ t("culturalValueAnnotation.step4.importanceScore") }}:</span
            >
            <el-input-number v-model="importanceValue" :min="0" :max="5" />
          </div>
          <div>
            <span
              >{{ t("culturalValueAnnotation.step4.frequencyScore") }}:</span
            >
            <el-input-number v-model="frequencyValue" :min="0" :max="5" />
          </div>
        </div>

        <div style="display: flex">
          <el-button
            v-if="!hasClickedGetAnswerBtn"
            @click="handleGetAnswerBtnClick"
            :disabled="
              isGetAnswerBtnDisabled ||
              isLoadingGetAnswer ||
              isSaveAndGetQuestionListBtnDisabled
            "
            :loading="isLoadingGetAnswer"
            color="#0B70C3"
            >Get Answer</el-button
          >
          <el-button
            v-else
            style="height: 2.8em; font-size: 1em"
            :disabled="true"
            color="#0B70C3"
            >Your have clicked the button to get the answer.</el-button
          >
        </div>
      </div>

      <div class="step step5">
        <div class="intro-container">
          <h4>{{ t("culturalValueAnnotation.step5.title") }}</h4>
          <p v-html="t('culturalValueAnnotation.step5.note')"></p>
          <p
            v-html="t('culturalValueAnnotation.step5.highlightExplanation')"
          ></p>
          <div>
            <p
              v-html="t('culturalValueAnnotation.step5.reviewInstructions')"
            ></p>
            <ul>
              <li v-html="t('culturalValueAnnotation.step5.action1')"></li>
              <li v-html="t('culturalValueAnnotation.step5.action2')"></li>
              <li v-html="t('culturalValueAnnotation.step5.action3')"></li>
              <li v-html="t('culturalValueAnnotation.step5.action4')"></li>
            </ul>
          </div>

          <p v-html="t('culturalValueAnnotation.step5.checkAllFragments')"></p>
          <p v-html="t('culturalValueAnnotation.step5.checkInstructions')"></p>
          <p v-html="t('culturalValueAnnotation.step5.attentionNote')"></p>
        </div>

        <div class="show_question_container" v-if="questionValue">
          <span>{{ t("culturalValueAnnotation.step4.question") }} </span>
          <div class="question_box">
            {{ questionValue }}
          </div>
        </div>
        <AnnotationComponent
          :annotationDataOrigin="annotationDataOrigin"
          ref="annotationComponentRef"
        ></AnnotationComponent>
      </div>

      <div class="step step6">
        <div class="intro-container">
          <h4>
            {{ t("culturalValueAnnotation.step6.title") }}
          </h4>
          <p v-html="t('culturalValueAnnotation.step6.note')"></p>
        </div>

        <div class="show_question_container" v-if="questionValue">
          <span>{{ t("culturalValueAnnotation.step4.question") }} </span>
          <div class="question_box">
            {{ questionValue }}
          </div>
        </div>
        <AnnotationComponent
          :annotationDataOrigin="annotationDataOrigin_person"
          ref="annotationComponentRef2"
        ></AnnotationComponent>
      </div>
    </div>

    <div style="display: flex; justify-content: center; margin-top: 2em">
      <el-button
        color="#0B70C3"
        style="height: 3em"
        :disabled="
          isLoadingSubmitHighlightAndConcepts ||
          !hasClickedSaveAndGetQuestionListBtn ||
          !hasClickedGetAnswerBtn
        "
        :loading="isLoadingSubmitHighlightAndConcepts"
        @click="submitHighlightAndConcepts"
        >Submit Annotation</el-button
      >
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
  GetAllCompletedAnnotations,
} from "@/service/CulturalValueAnnotationApi";
import { Language } from "@amcharts/amcharts4/core";

let userDetail = JSON.parse(sessionStorage.getItem("userDetail") || "{}");

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

const actionCounts = reactive({
  create: 0,
  refine: 0,
  "select existing": 0,
});

const answer_model = ref("");

const topicValue1 = ref("");
const topicValue2 = ref("");
const principlesList = ref(["", "", "", "", ""]);

const topicOptions1 = ref([]);
const topicOptions2 = ref([]);

const taskValue1 = ref("");
const taskValue2 = ref("");
const questionValue = ref("");
const importanceValue = ref(null);
const frequencyValue = ref(null);
const rawQuestionValue = ref("");
const rawImportanceValue = ref(null);
const rawFrequencyValue = ref(null);

const questionAction = ref("");

const questionValue_Select = ref("");
const questionValue_Select_origin = ref("");
const questionValue_Create = ref("");

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
    ElMessage.error(t("common.pleaseFillUserInfo"));
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
        // ElMessage.success("提交成功");
        localStorage.setItem("inputObj", JSON.stringify(inputObj));
        hasClickedSaveAndGetQuestionListBtn.value = true;
        if (res.data["candidate_questions"].length > 0) {
          questionValue_Select.value =
            res.data["candidate_questions"][0].question;
          questionValue_Select_origin.value =
            res.data["candidate_questions"][0].question;
          setTimeout(() => {
            handleUpdateScores(questionValue_Select_origin.value);
          }, 200);
        } else {
          ElMessage.warning("No Result");
        }
        questionOptions.value = res.data["candidate_questions"];

        if (res.data["question_type_count"]) {
          actionCounts.create = res.data["question_type_count"]["create"];
          actionCounts.refine = res.data["question_type_count"]["refine"];
          actionCounts["select existing"] =
            res.data["question_type_count"]["select existing"];
        }
      } else {
        ElMessage.error("error");
      }
    })
    .catch((err) => {
      console.log(err);
      ElMessage.error(t("common.submissionFailed"));
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
    !importanceValue.value ||
    !frequencyValue.value ||
    !(activeNameSelect1.value == "Create New"
      ? questionValue_Create.value.trim()
      : questionValue_Select.value.trim())
  );
});

// 后端第一次传过来的 或者上次提交的
let original_response = ref("");
let original_highlight_cues = ref([]);
let original_key_concepts = ref([]);

let original_response_person = ref("");
let original_highlight_cues_person = ref([]);
let original_key_concepts_person = ref([]);

// cultural 部分的标注
let annotationDataOrigin = reactive({
  originalResponse: "",
  response: "",
  highlight_cues: [],
  key_concepts: [],
});
// personal 部分的标注
let annotationDataOrigin_person = reactive({
  originalResponse: "",
  response: "",
  highlight_cues: [],
  key_concepts: [],
});

const updateQuestionScores = (questionText) => {
  const selectedQuestion = questionOptions.value.find(
    (item) => item.question === questionText
  );
  if (selectedQuestion) {
    rawImportanceValue.value = selectedQuestion.importance;
    rawFrequencyValue.value = selectedQuestion.frequency;
    importanceValue.value = selectedQuestion.importance;
    frequencyValue.value = selectedQuestion.frequency;
  }
};

const handleSelectChange = () => {
  questionValue_Select.value = questionValue_Select_origin.value;
  updateQuestionScores(questionValue_Select.value);
};
const handleGetAnswerBtnClick = () => {
  if (isGetAnswerBtnDisabled.value) {
    return;
  }
  if (!userDetail.username) {
    ElMessage.error(t("common.pleaseFillUserInfo"));
    return;
  }

  questionValue.value =
    activeNameSelect1.value == "Create New"
      ? questionValue_Create.value.trim()
      : questionValue_Select.value.trim();
  const step3FormData = {
    username: userDetail.username.trim(),
    country: userDetail.country.trim(),
    language: userDetail.language.trim(),
    task_1: taskValue1.value.trim(),
    task_2: taskValue2.value.trim(),
    question: questionValue.value.trim(),
    country: userDetail.country.trim(),
    language: userDetail.language.trim(),
    raw_question: "",
    question_action: "",
    importance: importanceValue.value,
    frequency: frequencyValue.value,
    raw_importance: null,
    raw_frequency: null,
  };
  if (activeNameSelect1.value == "Create New") {
    step3FormData.raw_question = "";
    step3FormData.question_action = "create";
    step3FormData.raw_importance = null;
    step3FormData.raw_frequency = null;

    rawQuestionValue.value = "";
    questionAction.value = "create";
  } else {
    step3FormData.raw_importance = rawImportanceValue.value;
    step3FormData.raw_frequency = rawFrequencyValue.value;
    if (
      questionValue_Select.value.trim() ==
      questionValue_Select_origin.value.trim()
    ) {
      step3FormData.raw_question = questionValue_Select_origin.value.trim();
      step3FormData.question_action = "select existing";

      rawQuestionValue.value = questionValue_Select_origin.value.trim();
      questionAction.value = "select existing";
    } else {
      step3FormData.raw_question = questionValue_Select_origin.value.trim();
      step3FormData.question_action = "refine";

      rawQuestionValue.value = questionValue_Select_origin.value.trim();
      questionAction.value = "refine";
    }
  }

  console.log(step3FormData);
  isLoadingGetAnswer.value = true;

  getQuestionResponse(step3FormData)
    .then((res) => {
      console.log(res);
      if (res.data) {
        // ElMessage.success("提交成功");
        annotationDataOrigin = res.data;
        annotationDataOrigin_person = res.data;

        original_response.value = res.data.response;
        original_highlight_cues.value = res.data.highlight_cues;
        original_key_concepts.value = res.data.key_concepts;

        original_response_person.value = res.data.response;
        original_highlight_cues_person.value = res.data.highlight_cues;
        original_key_concepts_person.value = res.data.key_concepts;

        // annotationDataOrigin.response = res.data.response;
        // annotationDataOrigin.highlight_cues = res.data.highlight_cues;
        // annotationDataOrigin.key_concepts = res.data.key_concepts;
        hasClickedGetAnswerBtn.value = true;
        answer_model.value = res.data.answer_model;
      } else {
        ElMessage.error("error");
      }
    })
    .catch((err) => {
      console.log(err);
      ElMessage.error("error");
    })
    .finally(() => {
      isLoadingGetAnswer.value = false;
    });
};

const annotationComponentRef = ref(null);
const annotationComponentRef2 = ref(null);

const isLoadingSubmitHighlightAndConcepts = ref(false);
const submitHighlightAndConcepts = () => {
  if (!annotationComponentRef.value) {
    ElMessage.error(t("common.pleaseCompleteAnnotation"));
    return;
  }
  ElMessageBox.confirm(t("common.confirmSubmit"), t("common.confirm"), {
    confirmButtonText: t("common.confirm"),
    cancelButtonText: t("common.cancel"),
    type: "warning",
  }).then(() => {
    isLoadingSubmitHighlightAndConcepts.value = true;

    // 处理第一个注释组件
    const component1Data = annotationComponentRef.value
      ? annotationComponentRef.value.processAnnotationData()
      : null;
    if (!component1Data) {
      ElMessage.error(t("common.pleaseCompleteAnnotation"));
      isLoadingSubmitHighlightAndConcepts.value = false;
      return;
    }
    if (component1Data.unmarked) {
      ElMessage.error(t("common.pleaseMarkAllItems"));
      isLoadingSubmitHighlightAndConcepts.value = false;
      return;
    }

    // 处理第二个注释组件
    let component2Data = {
      response: "",
      highlight_cues: [],
      key_concepts: [],
      actions: [],
    };
    if (annotationComponentRef2.value) {
      component2Data = annotationComponentRef2.value.processAnnotationData();
      if (component2Data.unmarked) {
        ElMessage.error(t("common.pleaseMarkAllItems"));
        isLoadingSubmitHighlightAndConcepts.value = false;
        return;
      }
    }

    console.log("Component 1 data:", component1Data);
    console.log("Component 2 data:", component2Data);

    const sendData = {
      answer_model: answer_model.value,
      username: userDetail.username.trim(),
      country: userDetail.country.trim(),
      language: userDetail.language.trim(),
      topic_1: topicValue1.value.trim(),
      topic_2: topicValue2.value.trim(),
      principles: principlesList.value.filter((item) => item.trim() !== ""),
      task_1: taskValue1.value,
      task_2: taskValue2.value,

      question: questionValue.value,
      raw_question: rawQuestionValue.value || "",
      question_action: questionAction.value || "",
      importance: importanceValue.value || null,
      frequency: frequencyValue.value || null,
      raw_importance:
        questionAction.value != "create"
          ? rawImportanceValue.value || null
          : null,
      raw_frequency:
        questionAction.value != "create"
          ? rawFrequencyValue.value || null
          : null,

      // 原始响应
      original_response: original_response.value || "",
      original_highlight_cues: original_highlight_cues.value || [],
      original_key_concepts: original_key_concepts.value || [],
      original_response_person: original_response_person.value || "",
      original_highlight_cues_person:
        original_highlight_cues_person.value || [],
      original_key_concepts_person: original_key_concepts_person.value || [],

      // cultural 部分的标注
      response: component1Data.response,
      highlight_cues: component1Data.highlight_cues,
      key_concepts: component1Data.key_concepts,
      cues_actions: component1Data.cues_actions,
      concepts_actions: component1Data.concepts_actions,

      // 第二个注释组件的数据 personal 部分的标注
      response_person: component2Data.response,
      highlight_cues_person: component2Data.highlight_cues,
      key_concepts_person: component2Data.key_concepts,
      cues_actions_person: component2Data.cues_actions,
      concepts_actions_person: component2Data.concepts_actions,

      timestamp: new Date().toISOString(),
    };
    console.log(sendData);
    if (editCurrentQuestionDetail.value) {
      sendData.data_index = editCurrentQuestionDetail.value.index;
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
  // const TopicTaskTaxonomy = sessionStorage.getItem("TopicTaskTaxonomy");
  // if (TopicTaskTaxonomy) {
  //   topicTaxonomy.value = JSON.parse(TopicTaskTaxonomy).topic_taxonomy;
  //   taskTaxonomy.value = JSON.parse(TopicTaskTaxonomy).task_taxonomy;
  //   topicOptions1.value = Object.keys(topicTaxonomy.value);
  //   taskOptions1.value = Object.keys(taskTaxonomy.value);
  //   return;
  // }
  getTopicTaskTaxonomy({
    username: userDetail.username,
    country: userDetail.country,
    language: userDetail.language,
  })
    .then((res) => {
      console.log(res);
      if (res.data) {
        console.log(res.data);

        // sessionStorage.setItem("TopicTaskTaxonomy", JSON.stringify(res.data));
        topicTaxonomy.value = res.data.topic_taxonomy;
        taskTaxonomy.value = res.data.task_taxonomy;

        topicOptions1.value = Object.keys(topicTaxonomy.value);
        taskOptions1.value = Object.keys(taskTaxonomy.value);

        topic_principle_examples = res.data.topic_principle_examples;
        task_taxonomy_examples = res.data.task_taxonomy;

        topic_task_count.value = res.data.topic_task_count;
      } else {
        ElMessage.error(t("common.fetchFailed"));
      }
    })
    .catch((err) => {
      console.log(err);
      ElMessage.error(t("common.fetchFailed"));
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

const topic_task_count = ref(null);

const editCurrentQuestionDetail = ref(null);
onMounted(async () => {
  if (!userDetail.username || !userDetail.country || !userDetail.language) {
    return;
  }
  console.log("onMounted");
  console.log(route.params.id);
  // getQuestionNum();

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
    questionValue_Create.value = question.question;
    rawQuestionValue.value = question.raw_question;
    questionAction.value = question.question_action;

    importanceValue.value = question.importance;
    frequencyValue.value = question.frequency;
    rawImportanceValue.value = question.raw_importance;
    rawFrequencyValue.value = question.raw_frequency;

    if (question.question_action == "create") {
      activeNameSelect1.value = "Create New";
      questionValue_Create.value = question.question;
    } else {
      activeNameSelect1.value = "Select Existing or Refine";
      questionValue_Select.value = question.question;
      questionValue_Select_origin.value = question.raw_question;
    }

    topicValue1.value = question.topic_1;
    setTimeout(() => {
      topicValue2.value = question.topic_2;
    }, 100);
    principlesList.value = question.principles;
    taskValue1.value = question.task_1;
    setTimeout(() => {
      taskValue2.value = question.task_2;
    }, 100);
    answer_model.value = question.answer_model;
    annotationDataOrigin = {
      originalResponse: question.response,
      response: question.response,
      highlight_cues: question.highlight_cues,
      key_concepts: question.key_concepts,
    };
    annotationDataOrigin_person = {
      originalResponse: question.response_person,
      response: question.response_person,
      highlight_cues: question.highlight_cues_person,
      key_concepts: question.key_concepts_person,
    };

    original_response.value = question.response;
    original_highlight_cues.value = question.highlight_cues;
    original_key_concepts.value = question.key_concepts;

    original_response_person.value = question.response_person;
    original_highlight_cues_person.value = question.highlight_cues_person;
    original_key_concepts_person.value = question.key_concepts_person;
  }
});

const hideUsrerContainer = () => {
  userDetail = JSON.parse(sessionStorage.getItem("userDetail") || "{}");
  handleGetTopicTaskTaxonomy();
};
const handleTaskHistoryClick = () => {
  router.push({
    path: "/CulturalValueAnnotation/TaskHistory",
  });
};

//
const activeNameSelect1 = ref("Create New");
const handleClick = (tab, event) => {
  if (hasClickedGetAnswerBtn.value) {
    // 当hasClickedGetAnswerBtn为true时，阻止标签页切换
    event.preventDefault();
    return false;
  }
  console.log(tab, event);

  handleUpdateScores(questionValue_Select_origin.value);
};

const handleUpdateScores = (question) => {
  setTimeout(() => {
    if (activeNameSelect1.value === "Create New") {
      importanceValue.value = "";
      frequencyValue.value = "";
    } else {
      updateQuestionScores(question);
    }
  }, 100);
};

// el-select输入text后失去焦点即选中，且添加到list
const selectRef = ref(null);
function handleBlur() {
  const inputEl = selectRef.value?.$el?.querySelector("input");
  const inputValue = inputEl?.value?.trim();
  if (inputValue && !topicOptions2.value.includes(inputValue)) {
    topicOptions2.value.push(inputValue);
    topicValue2.value = inputValue;
  }
}

const handleTaskValue2Change = (newValue) => {
  console.log("Selected category:", newValue);

  // 保存当前的taskOptions2数组，因为我们即将要替换它
  const currentTaskOptions2 = [...taskOptions2.value];

  // 查找完整的item对象
  const selectedItem = currentTaskOptions2.find(
    (item) => item.category === newValue
  );
  if (selectedItem) {
    console.log("Selected item:", selectedItem);
    taskExample.value = selectedItem;
    // 可以在这里使用完整的item对象
    // 例如：selectedItem.xxx
  }
};

const principleExample = ref([]);
const taskExample = ref([]);

let topic_principle_examples = {};
let task_taxonomy_examples = {};
const handleTopicValue2Change = (newValue) => {
  if (newValue) {
    principleExample.value = topic_principle_examples[newValue];
  }
};

const getQuestionNum = () => {
  GetAllCompletedAnnotations({
    username: userDetail.username,
    country: userDetail.country,
    language: userDetail.language,
  })
    .then((res) => {
      console.log(res.data);

      if (res.data.annotations) {
        actionCounts.create = 0;
        actionCounts.refine = 0;
        actionCounts["select existing"] = 0;

        Object.values(res.data.annotations).forEach((annotation) => {
          if (annotation.question_action) {
            const action = annotation.question_action.toLowerCase();
            if (action === "create") {
              actionCounts.create++;
            } else if (action === "refine") {
              actionCounts.refine++;
            } else if (action === "select existing") {
              actionCounts["select existing"]++;
            }
          }
        });

        console.log("Action counts:", actionCounts);
      }
    })
    .catch((err) => {
      ElMessage.error(err.message);
    })
    .finally(() => {});
};
</script>
<style scoped lang="scss">
.step-container {
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  gap: 3.75em 0;
  .step {
    display: flex;
    flex-direction: column;
    gap: 1.5em 0;
    .intro-container {
      display: flex;
      flex-direction: column;
      gap: 0.8em 0;
      h4 {
        font-size: 1.2em;
        color: #05408c;
        font-weight: 600;
        font-style: italic;
        line-height: 1.5;
        // margin-bottom: 1em;
      }
      p {
        line-height: 1.5;
        font-size: 1em;
      }
      ul {
        margin-top: 0.5em;
        display: flex;
        flex-direction: column;
        gap: 0.5em 0;
        padding-left: 2em;
        li {
          font-size: 1rem;
          line-height: 1.5;
        }
      }
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
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1em;
        .principle-item {
          width: 100%;
          display: flex;
          align-items: center;
          span {
            margin-right: 1em;
          }
          & > .el-input,
          & > .el-textarea {
            width: calc(100% - 7em);
          }
        }
      }
    }
    &.step3 {
      .input-container.question-input-container {
        & > .el-input,
        & > .el-textarea {
          width: 500px;
          min-height: 3em !important;
        }

        & > :deep(.el-select) {
          width: 500px;
          .el-select__wrapper {
            height: 3.8em;
            font-size: 1rem;
          }
        }
      }
    }
    &.step4 {
      .score-container {
        display: flex;
        flex-direction: row;
        gap: 0 1rem;
        margin-top: -1rem;
        & > div {
          span {
            margin-right: 1em;
          }
        }
      }
    }

    .show_question_container {
      display: flex;
      flex-direction: row;
      gap: 1em;
      & > span {
        margin-top: 1em;
      }
      & > .question_box {
        flex: 1;
        min-height: 2em;
        border: 1px solid rgb(217, 217, 217);
        border-radius: 12px;
        padding: 1em;
      }
    }
  }

  :deep(.el-select) {
    .el-select__wrapper {
      height: 2.5em;
      font-size: 1rem;
      &.is-disabled {
        background: #fff !important;
      }
    }
    &.Question-select {
      .el-select__wrapper {
        &.is-disabled {
          background: rgb(204, 240, 252) !important;
        }
      }
    }
  }
  --el-text-color-regular: #000;
  --el-disabled-text-color: #666;
  :deep(.el-input__inner) {
    --el-input-inner-height: 2.5em;
    font-size: 1rem;
    &.is-disabled {
      background: #fff !important;
    }
  }
  :deep(.el-textarea) {
    --el-input-inner-height: 2.5em;
    font-size: 1rem;
    .el-textarea__inner {
      // color: #000;
    }
    &.is-disabled .el-textarea__inner {
      background: #fff !important;
    }
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

.highlight-keyword.processed {
  background-color: #e6f7ff;
  color: #1890ff;
}

.el-button {
  height: 2.8em;
  font-size: 1em;
}
</style>
