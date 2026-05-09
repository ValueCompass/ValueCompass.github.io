<template>
  <div class="main-container" style="margin-bottom: 4em; margin-top: 2em">
    <div style="display: flex; flex-direction: column; gap: 0.6em">
      <div style="display: flex">
        <el-button
          style="height: 2.8em; font-size: 1em; position: relative; z-index: 4"
          type="primary"
          color="#0B70C3"
          plain
          @click="handleTaskHistoryClick"
          >Task History</el-button
        >
      </div>
    </div>
    <div class="step-container">
      <div class="step step1">
        <div class="intro-container">
          <h4>{{ t("culturalValueAnnotation.step1.title") }}</h4>
          <div class="core-action-box">
            <h5>
              {{ t("culturalValueAnnotation.step1.coreAction") }}
            </h5>
          </div>

          <div class="seconed-container">
            <p>{{ t("culturalValueAnnotation.step1.prioritizeTopics") }}</p>
            <div style="padding-left: 1.5em" class="flex-column">
              <p>
                {{ t("culturalValueAnnotation.step1.prioritize1") }}
              </p>
              <p>
                {{ t("culturalValueAnnotation.step1.prioritize2") }}
              </p>
              <p>
                {{ t("culturalValueAnnotation.step1.prioritize3") }}
              </p>
              <p>
                {{ t("culturalValueAnnotation.step1.prioritize4") }}
              </p>
            </div>
            <p>
              {{ t("culturalValueAnnotation.step1.customNote") }}
            </p>
            <p>
              <b>{{ t("culturalValueAnnotation.step1.noteLabel") }}</b>
              {{ t("culturalValueAnnotation.step1.repeatNote") }}
            </p>
          </div>
        </div>
        <div class="highlight-container">
          <div class="input-container">
            <span
              ><b>{{ t("culturalValueAnnotation.step1.topic") }}</b></span
            >
            <el-select
              v-model="topicValue1"
              placeholder="Select Level-1"
              :disabled="hasClickedSaveAndGetQuestionListBtn"
              style="flex: 1"
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
              placeholder="Select or Input Level-2"
              filterable
              allow-create
              style="flex: 1"
              ref="selectRef"
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
      </div>

      <div class="step step2">
        <div class="intro-container">
          <h4>
            {{ t("culturalValueAnnotation.step2.title") }}
          </h4>
          <div style="display: flex; justify-content: space-between">
            <div
              class="core-action-box flex-column"
              style="width: calc(50% - 2em)"
            >
              <h5>
                {{ t("culturalValueAnnotation.step2.coreAction") }}
              </h5>
              <div class="flex-column">
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

                <div>
                  <p>
                    <b>{{ t("culturalValueAnnotation.step2.rankByImportance") }}</b>
                  </p>
                </div>
                <div>
                  <p>
                    <b>{{ t("culturalValueAnnotation.step2.noDuplicates") }}</b>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="seconed-container"
              style="
                min-height: 6em;
                border: 1px solid #d9d9d9;
                border-radius: 24px;
                padding: 1em;
                line-height: 1.5;
                width: calc(50% - 2em);
              "
            >
              <div>
                <div>
                  <p class="example-title">
                    <img src="@/assets/images/example-icon.png" />
                    <span>{{ t("culturalValueAnnotation.step2.exampleTopic") }}</span>
                  </p>
                  <div style="padding-left: 1.5em" class="flex-column">
                    <p>
                      {{ t("culturalValueAnnotation.step2.noteExampleText") }}
                    </p>
                    <p
                      v-for="(example, index) in principleExample"
                      :key="index"
                    >
                      {{ index + 1 }}: {{ example }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="highlight-container">
          <div class="input-container">
            <div
              v-for="(principle, index) in principlesList"
              :key="index"
              class="principle-item"
            >
              <span
                ><b>{{
                  t("culturalValueAnnotation.step2.principle", {
                    index: index + 1,
                  })
                }}</b></span
              >
              <el-input
                type="textarea"
                autosize
                v-model="principlesList[index]"
                style=""
                placeholder="Please input"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="step step3">
        <div class="intro-container">
          <h4>{{ t("culturalValueAnnotation.step3.title") }}</h4>
          <div class="core-action-box">
            <h5>
              {{ t("culturalValueAnnotation.step3.coreAction") }}
            </h5>
          </div>
          <div class="seconed-container">
            <div>
              <ul>
                <li>{{ t("culturalValueAnnotation.step3.criteria1") }}</li>
                <li>{{ t("culturalValueAnnotation.step3.criteria2") }}</li>
              </ul>
            </div>
            <p>
              <b>{{ t("culturalValueAnnotation.step3.note") }}</b>
            </p>
          </div>
        </div>

        <div class="highlight-container">
          <!-- <span
            ><b>{{ t("culturalValueAnnotation.step3.task") }}</b></span
          > -->
          <div class="input-container" style="margin: 0">
            <span style="width: 100%"
              ><b>{{ t("culturalValueAnnotation.step3.task") }}</b></span
            >
            <el-select
              v-model="taskValue1"
              placeholder="Select Level-1"
              :disabled="hasClickedSaveAndGetQuestionListBtn"
              style="width: calc(50% - 1em)"
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
               placeholder="Select or Input Level-2"
              filterable
              allow-create
              :disabled="hasClickedSaveAndGetQuestionListBtn"
              @change="handleTaskValue2Change"
              style="width: calc(50% - 1em)"
            >
              <el-option
                v-for="item in taskOptions2"
                :key="item"
                :label="`${item.category} (${topic_task_count?.[topicValue2]?.[item.category] ?? 0})`"
                :value="item.category"
              />
            </el-select>
          </div>

          <div class="">
            <p style="margin-bottom: 0.7em"><b>{{ t("culturalValueAnnotation.step3.definitionLabel") }}</b></p>
            <p>
              {{
                taskExample && taskExample.definition
                  ? taskExample.definition
                  : t("culturalValueAnnotation.step3.definitionFallback")
              }}
            </p>
          </div>
          <div class="">
            <p style="margin-bottom: 0.7em"><b>{{ t("culturalValueAnnotation.step3.exampleLabel") }}</b></p>
            <p>
              {{
                taskExample && taskExample.example
                  ? taskExample.example
                  : t("culturalValueAnnotation.step3.exampleFallback")
              }}
            </p>
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
                        `${item.category} (${topic_task_count?.[topicValue2]?.[item.category] ?? 0})`
                      }}
                    </li>
                  </ul>
                </div>
              </template>
            </el-popover>
          </div>
        </div>
      </div>

      <div class="step step4">
        <div class="intro-container">
          <h4>{{ t("culturalValueAnnotation.step4.title") }}</h4>
          <div class="core-action-box flex-column">
            <h5>
              {{ t("culturalValueAnnotation.step4.coreAction") }}
            </h5>
            <ul>
              <li>{{ t("culturalValueAnnotation.step4.action1") }}</li>
              <li>{{ t("culturalValueAnnotation.step4.action2") }}</li>
              <li>{{ t("culturalValueAnnotation.step4.action3") }}</li>
            </ul>
          </div>
          <div class="seconed-container flex-column">
            <p class="title-p">
              <img src="@/assets/images/step_icon1.png" alt="" />
              <b>{{ t("culturalValueAnnotation.step4.scoringReferenceTitle") }}</b>
            </p>
            <p>{{ t("culturalValueAnnotation.step4.scoreIntro") }}</p>
            <ul>
              <li>
                <b>{{
                  t("culturalValueAnnotation.step4.importanceHintTitle")
                }}</b>
                {{ t("culturalValueAnnotation.step4.importanceHintText") }}
              </li>
              <li>
                <b>{{
                  t("culturalValueAnnotation.step4.frequencyHintTitle")
                }}</b>
                {{ t("culturalValueAnnotation.step4.frequencyHintText") }}
              </li>
            </ul>

            <p>
              {{ t("culturalValueAnnotation.step4.aiScoreNote") }}
            </p>

            <p class="title-p">
              <img src="@/assets/images/step_icon2.png" alt="" />
              <b>{{ t("culturalValueAnnotation.step4.selectionCriteriaTitle") }}</b>
            </p>
            <p>{{ t("culturalValueAnnotation.step4.prioritizeTitle") }}</p>
            <ul>
              <li>{{ t("culturalValueAnnotation.step4.prioritize1") }}</li>
              <li>{{ t("culturalValueAnnotation.step4.prioritize2") }}</li>
              <li>
                <b>{{ t("culturalValueAnnotation.step4.prioritize3") }}</b>
              </li>
              <li>
                {{ t("culturalValueAnnotation.step4.prioritize4") }}
              </li>
            </ul>
          </div>
          <p>
            {{ t("culturalValueAnnotation.step4.balanceTypesIntro") }}
            <b>{{ t("culturalValueAnnotation.step4.balanceTypesEmphasis") }}</b>
          </p>
        </div>
        <div
          class="highlight-container"
          style="display: flex; flex-direction: column; gap: 1.5em 0"
        >
          <div class="annotated-summary">
            <div class="annotated-summary__label">
              {{ t("culturalValueAnnotation.step4.annotatedQuestions") }}
            </div>
            <div class="annotated-summary__content">
              <table class="annotated-summary__stats">
                <tbody>
                  <tr>
                    <td class="annotated-summary__stat-title">
                      {{ t("culturalValueAnnotation.step4.newQuestions") }}
                    </td>
                    <td class="annotated-summary__stat-title">
                      {{ t("culturalValueAnnotation.step4.existingQuestions") }}
                    </td>
                    <td class="annotated-summary__stat-title">
                      {{ t("culturalValueAnnotation.step4.refinedQuestions") }}
                    </td>
                  </tr>
                  <tr>
                    <td class="annotated-summary__stat-value">
                      {{ actionCounts.create }}
                    </td>
                    <td class="annotated-summary__stat-value">
                      {{ actionCounts["select existing"] }}
                    </td>
                    <td class="annotated-summary__stat-value">
                      {{ actionCounts.refine }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="annotated-summary__note">
                <span class="annotated-summary__note-label">{{
                  t("culturalValueAnnotation.step4.noteLabel")
                }}</span>
                <span>
                  {{ t("culturalValueAnnotation.step4.summaryNote") }}
                </span>
              </div>
            </div>
          </div>
          <el-tabs v-model="activeNameSelect1" @tab-click="handleClick">
            <el-tab-pane
              :disabled="isSelectExistingTabDisabled"
              :label="
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                t('culturalValueAnnotation.step3.selectExisting') +
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
              "
              name="Select Existing Question"
            >
              <div class="input-container question-input-container">
                <span>{{ t("culturalValueAnnotation.step4.question") }}</span>
                <div
                  class="question-select-and-refine-container"
                  style="
                    position: relative;
                    width: calc(100% - 16em);
                    box-sizing: border-box;
                  "
                >
                  <el-select
                    class="Question-select cultural-alignment-el-select"
                    popper-class="cultural-alignment-select-popper"
                    :fit-input-width="true"
                    v-model="questionValue_Select_origin"
                    placeholder="Select"
                    @change="handleSelectChange"
                    :disabled="hasClickedGetAnswerBtn"
                    style="width: 100%"
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
                <button
                  style="
                    width: 4.5rem;
                    height: 4.5rem;
                    font-size: 0.85em;
                    padding: 0;
                    background: #fff;
                    color: rgba(11, 112, 195, 1);
                    white-space: pre-line;
                  "
                  @click="activeNameSelect1 = 'Refine Question'"
                >
                  Edit<br />the<br />Question
                </button>
              </div>
            </el-tab-pane>
            <el-tab-pane
              :disabled="isRefineTabDisabled"
              :label="
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                t('culturalValueAnnotation.step3.refine') +
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
              "
              name="Refine Question"
            >
              <div class="input-container question-input-container">
                <span>{{ t("culturalValueAnnotation.step4.question") }}</span>
                <div
                  class="question-select-and-refine-container"
                  style="
                    position: relative;
                    width: calc(100% - 16em);
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
                </div>

                <button
                  style="
                    width: 4.5rem;
                    height: 4.5rem;
                    font-size: 0.85em;
                    padding: 0;
                    background: #fff;
                    color: rgba(11, 112, 195, 1);
                    white-space: pre-line;
                  "
                  @click="activeNameSelect1 = 'Select Existing Question'"
                >
                  Change<br />the<br />Question
                </button>
              </div>
            </el-tab-pane>
            <el-tab-pane
              :disabled="isCreateNewTabDisabled"
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
                  style="width: calc(100% - 16em)"
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 10 }"
                  placeholder="Please input"
                  :disabled="hasClickedGetAnswerBtn"
                />
              </div>
            </el-tab-pane>
          </el-tabs>

          <div class="score-container">
            <div>
              <span
                >{{ t("culturalValueAnnotation.step4.importanceScore") }}:</span
              >
              <el-select
                v-model="importanceValue"
                placeholder="Select"
                :disabled="hasClickedGetAnswerBtn"
              >
                <el-option
                  v-for="option in importanceScoreOptions"
                  :key="`importance-${option.value}`"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </div>
            <div>
              <span
                >{{ t("culturalValueAnnotation.step4.frequencyScore") }}:</span
              >
              <el-select
                v-model="frequencyValue"
                placeholder="Select"
                :disabled="hasClickedGetAnswerBtn"
              >
                <el-option
                  v-for="option in frequencyScoreOptions"
                  :key="`frequency-${option.value}`"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </div>
          </div>

          <div style="display: flex">
            <el-button
              @click="handleGetAnswerBtnClick"
              :disabled="
                hasClickedGetAnswerBtn ||
                isGetAnswerBtnDisabled ||
                isLoadingGetAnswer ||
                isSaveAndGetQuestionListBtnDisabled
              "
              :loading="isLoadingGetAnswer"
              color="#0B70C3"
              >{{
                hasClickedGetAnswerBtn
                  ? "Your have clicked Get Answer button."
                  : "Get Answer"
              }}</el-button
            >
          </div>
        </div>
      </div>

      <div class="step step5">
        <div class="intro-container">
          <h4>{{ t("culturalValueAnnotation.step5.title") }}</h4>
          
          <div class="core-action-box flex-column">
            <h5>
              {{ t("culturalValueAnnotation.step5.coreAction") }}
            </h5>
            <ul>
              <li>
                {{ t("culturalValueAnnotation.step5.coreAction1") }}
              </li>
              <li>
                {{ t("culturalValueAnnotation.step5.coreAction2") }}
              </li>
            </ul>
          </div>

          <div class="seconed-container">
            <p class="title-p">
              <img src="@/assets/images/step_icon3.png" alt="" />
              <b>{{ t("culturalValueAnnotation.step5.firstReviewTitle") }}</b>
            </p>
            <ul class="ul-decimal">
              <li>
                <p>
                  {{ t("culturalValueAnnotation.step5.reviewValuesIntro") }}
                </p>
                <ul class="ul-lower-alpha">
                  <li>
                    {{ t("culturalValueAnnotation.step5.reviewValues1") }}
                  </li>
                  <li>
                    {{ t("culturalValueAnnotation.step5.reviewValues2") }}
                  </li>
                  <li>
                    {{ t("culturalValueAnnotation.step5.reviewValues3") }}
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  {{ t("culturalValueAnnotation.step5.reviewTextIntro") }}
                </p>
                <ul class="ul-lower-alpha">
                  <li>{{ t("culturalValueAnnotation.step5.reviewText1") }}</li>
                  <li>{{ t("culturalValueAnnotation.step5.reviewText2") }}</li>
                  <li>{{ t("culturalValueAnnotation.step5.reviewText3") }}</li>
                </ul>
              </li>
            </ul>

            <p class="title-p">
              <img src="@/assets/images/step_icon4.png" alt="" />
              <b>{{ t("culturalValueAnnotation.step5.wholeAnswerIntro") }}</b>
            </p>
            <ul class="ul-lower-alpha">
              <li>{{ t("culturalValueAnnotation.step5.wholeAnswer1") }}</li>
              <li>{{ t("culturalValueAnnotation.step5.wholeAnswer2") }}</li>
            </ul>
            <p>
              {{ t("culturalValueAnnotation.step5.addNewHint") }}
            </p>

            <p class="title-p">
              <img src="@/assets/images/note-icon.png" alt="" />
              <span><b>{{ t("culturalValueAnnotation.step5.importantRulesTitle") }}</b></span>
            </p>
            <ul class="ul-decimal">
              <li>
                <p>{{ t("culturalValueAnnotation.step5.rule1Intro") }}</p>
                <ul class="ul-lower-alpha">
                  <li>{{ t("culturalValueAnnotation.step5.rule1a") }}</li>
                  <li>{{ t("culturalValueAnnotation.step5.rule1b") }}</li>
                  <li>{{ t("culturalValueAnnotation.step5.rule1c") }}</li>
                </ul>
              </li>
              <li>
                <p>{{ t("culturalValueAnnotation.step5.rule2") }}</p>
              </li>
            </ul>
          </div>

          <div class="highlight-container">
            <div class="show_question_container" v-if="questionValue">
              <span>{{ t("culturalValueAnnotation.step4.question") }} </span>
              <div class="question_box" style="flex: 1">
                {{ questionValue }}
              </div>
            </div>
            <div
              style="margin-top: 1em"
              v-if="hasClickedGetAnswerBtn && submit_type !== 'revise'"
            >
              <el-button
                color="#0B70C3"
                @click="handleReselectQuestionClick"
                >Reselect Question</el-button
              >
            </div>
            <AnnotationComponent
              :annotationDataOrigin="annotationDataOrigin"
              ref="annotationComponentRef"
            ></AnnotationComponent>
          </div>
        </div>
      </div>

      <div class="step step6">
        <div class="intro-container">
          <h4>{{ t("culturalValueAnnotation.step6.title") }}</h4>
          <div class="core-action-box">
            <h5>
              {{ t("culturalValueAnnotation.step6.coreAction") }}
            </h5>
          </div>
          <div class="seconed-container">
            <p class="title-p">
              <img src="@/assets/images/note-icon.png" alt="" />
              <span
                ><b>{{ t("culturalValueAnnotation.step6.noteTitle") }}</b></span
              >
            </p>
            <ul>
              <li>{{ t("culturalValueAnnotation.step6.note1") }}</li>
              <li>{{ t("culturalValueAnnotation.step6.note2") }}</li>
            </ul>
          </div>
        </div>

        <div class="highlight-container">
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

let userDetail = JSON.parse(localStorage.getItem("userDetail") || "{}");
const userInfo = ref({
  username: userDetail.username || "",
  country: userDetail.country || "",
  language: userDetail.language || "",
});

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

const importanceScoreOptions = computed(() => [
  { value: 1, label: t("culturalValueAnnotation.step4.importanceOption1") },
  { value: 2, label: t("culturalValueAnnotation.step4.importanceOption2") },
  { value: 3, label: t("culturalValueAnnotation.step4.importanceOption3") },
  { value: 4, label: t("culturalValueAnnotation.step4.importanceOption4") },
  { value: 5, label: t("culturalValueAnnotation.step4.importanceOption5") },
]);

const frequencyScoreOptions = computed(() => [
  { value: 1, label: t("culturalValueAnnotation.step4.frequencyOption1") },
  { value: 2, label: t("culturalValueAnnotation.step4.frequencyOption2") },
  { value: 3, label: t("culturalValueAnnotation.step4.frequencyOption3") },
  { value: 4, label: t("culturalValueAnnotation.step4.frequencyOption4") },
  { value: 5, label: t("culturalValueAnnotation.step4.frequencyOption5") },
]);

const submit_type = ref("create new"); // "create new" or "revise"
const duration_time = ref(0);
const candidateQuestionsReceivedAt = ref(null);
const pageEnteredAt = ref(null);

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
        candidateQuestionsReceivedAt.value = Date.now();
        // ElMessage.success("提交成功");
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
          ElMessage.warning(t("common.noResult"));
        }
        questionOptions.value = res.data["candidate_questions"];

        if (res.data["question_type_count"]) {
          actionCounts.create = res.data["question_type_count"]["create"];
          actionCounts.refine = res.data["question_type_count"]["refine"];
          actionCounts["select existing"] =
            res.data["question_type_count"]["select existing"];
        }
      } else {
        ElMessage.error(t("common.unexpectedError"));
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

const resetGetAnswerState = () => {
  hasClickedGetAnswerBtn.value = false;
  answer_model.value = "";
  questionValue.value = "";
  rawQuestionValue.value = "";
  questionAction.value = "";

  original_response.value = "";
  original_highlight_cues.value = [];
  original_key_concepts.value = [];

  original_response_person.value = "";
  original_highlight_cues_person.value = [];
  original_key_concepts_person.value = [];

  annotationDataOrigin = {
    originalResponse: "",
    response: "",
    highlight_cues: [],
    key_concepts: [],
  };

  annotationDataOrigin_person = {
    originalResponse: "",
    response: "",
    highlight_cues: [],
    key_concepts: [],
  };
};

const updateQuestionScores = (questionText) => {
  const selectedQuestion = questionOptions.value.find(
    (item) => item.question === questionText,
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

// 切到“修改现有问题”标签页不代表真的改过内容。
// 只有当前文本与原始选中问题不一致时，才按 refine 处理。
const getExistingQuestionAction = () => {
  const originalQuestion = questionValue_Select_origin.value.trim();
  const currentQuestion = questionValue_Select.value.trim();

  if (
    activeNameSelect1.value === "Select Existing Question" ||
    currentQuestion === originalQuestion
  ) {
    return "select existing";
  }

  return "refine";
};

const handleGetAnswerBtnClick = () => {
  if (hasClickedGetAnswerBtn.value) {
    ElMessage.warning(t("culturalValueAnnotation.step4.getAnswerAlreadyClicked"));
    return;
  }

  if (isGetAnswerBtnDisabled.value) {
    return;
  }
  if (!userDetail.username) {
    ElMessage.error(t("common.pleaseFillUserInfo"));
    return;
  }

  // Allow repeated Get Answer: clear previous API-populated result state first.
  resetGetAnswerState();

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
    // question_action 需要与实际提交给后端的编辑结果保持一致。
    const existingQuestionAction = getExistingQuestionAction();

    step3FormData.raw_importance = rawImportanceValue.value;
    step3FormData.raw_frequency = rawFrequencyValue.value;
    step3FormData.raw_question = questionValue_Select_origin.value.trim();
    step3FormData.question_action = existingQuestionAction;

    rawQuestionValue.value = questionValue_Select_origin.value.trim();
    questionAction.value = existingQuestionAction;
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
        ElMessage.success(
          t("culturalValueAnnotation.step4.getAnswerLockedToast"),
        );
        answer_model.value = res.data.answer_model;
      } else {
        ElMessage.error(t("common.unexpectedError"));
      }
    })
    .catch((err) => {
      console.log(err);
      ElMessage.error(t("common.unexpectedError"));
    })
    .finally(() => {
      isLoadingGetAnswer.value = false;
    });
};

const handleReselectQuestionClick = () => {
  resetGetAnswerState();
  ElMessage.success(t("culturalValueAnnotation.step4.reselectQuestionToast"));
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

    if (submit_type.value === "revise" && pageEnteredAt.value) {
      duration_time.value = Date.now() - pageEnteredAt.value;
    } else if (candidateQuestionsReceivedAt.value) {
      duration_time.value = Date.now() - candidateQuestionsReceivedAt.value;
    } else {
      duration_time.value = 0;
    }

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

      duration_time: Math.floor(duration_time.value / 1000),
      submit_type: submit_type.value,
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
          ElMessage.success(t("common.annotationSubmittedSuccessfully"));
          router.push("/CulturalValueAnnotation/TaskHistory");
        } else {
          ElMessage.error(t("common.annotationSubmissionFailed"));
        }
      })
      .catch((err) => {
        console.log(err);
        ElMessage.error(t("common.annotationSubmissionFailed"));
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
  return getTopicTaskTaxonomy({
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

        topic_principle_examples.value = res.data.topic_principle_examples;
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

  pageEnteredAt.value = Date.now();

  submit_type.value = "create new";
  console.log("onMounted");
  console.log(route.params.id);
  // getQuestionNum();

  await handleGetTopicTaskTaxonomy();

  const editCurrentQuestion = sessionStorage.getItem("editCurrentQuestion");
  if (route.params.id && !editCurrentQuestion) {
    router.push({ path: "/CulturalValueAnnotation/home" });
    return;
  }

  if (route.params.id && editCurrentQuestion) {
    submit_type.value = "revise";

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
    } else if (question.question_action == "select existing") {
      activeNameSelect1.value = "Select Existing Question";
      questionValue_Select.value = question.question;
      questionValue_Select_origin.value = question.raw_question;
    } else {
      activeNameSelect1.value = "Refine Question";
      questionValue_Select.value = question.question;
      questionValue_Select_origin.value = question.raw_question;
    }

    topicValue1.value = question.topic_1;
    setTimeout(() => {
      topicValue2.value = question.topic_2;
      handleTopicValue2Change(question.topic_2);
    }, 100);
    // Keep all existing principles, and pad with empty strings until there are 5 items.
    const principles = Array.isArray(question.principles)
      ? question.principles
      : [];
    principlesList.value = principles.concat(
      Array(Math.max(5 - principles.length, 0)).fill(""),
    );
    taskValue1.value = question.task_1;
    setTimeout(() => {
      taskValue2.value = question.task_2;
      handleTaskValue2Change(question.task_2);
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
  userDetail = JSON.parse(localStorage.getItem("userDetail") || "{}");
  userInfo.value = {
    username: userDetail.username || "",
    country: userDetail.country || "",
    language: userDetail.language || "",
  };
  handleGetTopicTaskTaxonomy();
};

const handleTaskHistoryClick = () => {
  router.push({
    path: "/CulturalValueAnnotation/TaskHistory",
  });
};

//
const activeNameSelect1 = ref("Select Existing Question"); //Create New
// create new 模式下，如果没有候选问题，则强制切到 Create New。
const shouldForceCreateNewTab = computed(() => {
  return (
    submit_type.value === "create new" &&
    hasClickedSaveAndGetQuestionListBtn.value &&
    questionOptions.value.length === 0
  );
});

// Select Existing Question 何时禁用：
// 1. create new 模式且无候选问题时；
// 2. revise 模式下当前选中的不是该 tab 时。
const isSelectExistingTabDisabled = computed(() => {
  return (
    shouldForceCreateNewTab.value ||
    (submit_type.value === "revise" &&
      activeNameSelect1.value !== "Select Existing Question")
  );
});

const isRefineTabDisabled = computed(() => {
  return (
    shouldForceCreateNewTab.value ||
    (submit_type.value === "revise" &&
      activeNameSelect1.value !== "Refine Question")
  );
});

// revise 模式下，如果当前不是 Create New，则禁止切到 Create New。
const isCreateNewTabDisabled = computed(() => {
  return (
    submit_type.value === "revise" && activeNameSelect1.value !== "Create New"
  );
});

watch(
  [
    submit_type,
    hasClickedSaveAndGetQuestionListBtn,
    () => questionOptions.value.length,
  ],
  () => {
    // 当候选问题为空时，自动保持在 Create New，避免用户切回不可用的 tab。
    if (shouldForceCreateNewTab.value) {
      activeNameSelect1.value = "Create New";
    }
  },
);

const handleClick = (tab, event) => {
  if (hasClickedGetAnswerBtn.value || shouldForceCreateNewTab.value) {
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
    (item) => item.category === newValue,
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

const topic_principle_examples = ref({});
let task_taxonomy_examples = {};
const handleTopicValue2Change = (newValue) => {
  if (newValue) {
    principleExample.value = topic_principle_examples.value[newValue];
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
  line-height: 1.2;
  .step {
    display: flex;
    flex-direction: column;
    gap: 1.5em 0;
    .intro-container {
      display: flex;
      flex-direction: column;
      gap: 0.8em 0;
      h4 {
        font-size: 1.5em;
        color: #05408c;
        font-weight: 600;
        font-style: italic;
        line-height: 1.5;
        // margin-bottom: 1em;
      }
      .core-action-box {
        font-size: 1.125em;
        color: rgba(34, 34, 34, 1);
        padding-left: 1.875rem;
        background: url("@/assets/images/core-action-icon.png") no-repeat left
          top;
        background-size: 1.3em auto;
      }
      .seconed-container {
        font-size: 1.125em;
        color: rgba(34, 34, 34, 1);
        padding-left: 1.875rem;
        display: flex;
        flex-direction: column;
        gap: 0.75em 0;
        .title-p {
          position: relative;
          & > img {
            position: absolute;
            left: -1.8em;
            top: 0;
            width: 1.4em;
          }
        }
      }
      .note-title,
      .example-title {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        img {
          width: 1.25rem;
        }
      }
      .flex-column {
        display: flex;
        flex-direction: column;
        gap: 0.75em 0;
      }
      p {
        font-size: 1em;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 0.5em 0;
        padding-left: 2em;
        li {
          line-height: 1.2;
          list-style: disc;
          & > p + ul {
            margin-top: 0.5em;
          }
        }
        &.ul-decimal {
          li {
            list-style: decimal;
          }
        }
        &.ul-lower-alpha {
          li {
            list-style: lower-alpha;
          }
        }
      }
    }
    .input-container {
      margin: 0.5em 0 1em;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.5em 0.85em;
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
      .annotated-summary {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
        max-width: 72rem;

        &__label {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 9em;
          flex-shrink: 0;
          font-weight: bold;
          line-height: 1.65;
          text-align: right;
          color: #172033;
        }

        &__content {
          display: flex;
          flex-direction: column;
          min-width: 0;
          flex: 0 1 auto;
          width: auto;
          max-width: calc(100% - 10rem);
        }

        &__stats {
          display: inline-table;
          align-self: flex-start;
          width: auto;
          max-width: none;
          border-collapse: collapse;
          table-layout: auto;
          background: #fff;
          border: 1px solid #cfd3d8;

          tr:first-child {
            td {
              padding-top: 0.95rem;
              padding-bottom: 0.9rem;
            }
          }

          tr:last-child {
            td {
              padding-top: 0.75rem;
              padding-bottom: 0.95rem;
            }
          }

          tr:first-child td {
            border-bottom: 1px solid #cfd3d8;
          }

          td {
            // width: 33.333%;
            padding-left: 2.4rem;
            padding-right: 2.4rem;
            text-align: center;
            vertical-align: middle;
            border-right: 1px solid #c9d4df;

            &:last-child {
              border-right: none;
            }
          }
        }

        &__stat-title {
          display: table-cell;
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 1.35;
          color: #3f3f46;
        }

        &__stat-value {
          display: table-cell;
          font-size: 1.5rem;
          line-height: 1;
          font-weight: 700;
          color: #2f3136;
        }

        &__note {
          align-self: flex-start;
          padding-top: 0.35rem;
          font-size: 1rem;
          line-height: 1.45;
          color: #5b5b5b;
        }

        &__note-label {
          font-weight: 700;
          color: #4b5563;
          margin-right: 0.25rem;
        }
      }

      .score-container {
        display: flex;
        flex-direction: row;
        gap: 0 1rem;
        margin-top: -1rem;
        & > div {
          width: 50%;
          display: flex;
          align-items: center;
          span {
            margin-right: 0.85em;
            width: 9em;
            display: inline-block;
            text-align: right;
            font-weight: bold;
          }
          :deep(.el-select) {
            width: calc(100% - 9em);
          }
        }
      }
      .input-container.question-input-container {
        & > span:nth-child(1) {
          width: 9em;
          display: inline-block;
          text-align: right;
          font-weight: bold;
        }
      }
    }

    .show_question_container {
      display: flex;
      flex-direction: row;
      gap: 1em;
      font-size: 1.25em;
      font-weight: bold;
      font-style: italic;
      line-height: 1.2;
      .question_box {
        flex: 1;
      }
    }

    .highlight-container {
      font-size: 1.125em;
      padding: 1.5em 3em;
      background: rgba(243, 243, 243, 1);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      gap: 1.2em;
      color: rgba(51, 51, 51, 1);
    }
  }

  :deep(.el-select) {
    .el-select__wrapper {
      font-size: 1.125rem;
      height: 2.7em;
      &.is-disabled {
        background: #fff !important;
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

<style lang="scss">
.step-container .step4 {
  .cultural-alignment-el-select {
    .el-select__wrapper {
      box-shadow: none !important;
      border: 1px solid rgba(217, 217, 217, 1);
      border-radius: 6px;
      padding: 0.3em 0.75em;
      font-size: 1.25rem;
      min-height: 4em;
      height: auto;
      align-items: stretch;

      .el-select__selected-item {
        line-height: 1.3;
        white-space: normal;
      }
    }

    &.Question-select {
      .el-select__wrapper {
        border: none;
        background-color: #fff;
        border: 1px solid rgb(217, 217, 217);

        .text-content {
          min-height: 3rem;
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: visible;

          & > div {
            width: 100%;
            display: flex;
            overflow: visible;

            p {
              padding: 0;
              width: 100%;
              line-height: 1.3;
              white-space: normal;
              word-break: break-word;
            }
          }
        }
      }
    }
  }
  .el-textarea__inner {
    padding: 0.3em 1em !important;
    font-size: 1.25rem;
    min-height: 4em !important;
    box-sizing: border-box;
  }
}

.cultural-alignment-select-popper {
  .el-select-dropdown__item {
    height: auto;
    min-height: 2.4em;
    line-height: 1.4;
    white-space: normal;
    word-break: break-word;
    padding-top: 0.45em;
    padding-bottom: 0.45em;
    display: flex;
    align-items: center;
  }
}
</style>
