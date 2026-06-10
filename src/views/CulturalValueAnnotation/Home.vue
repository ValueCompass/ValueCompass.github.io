<template>
  <div
    :class="['main-container', { 'admin-readonly': isAdminView }]"
    style="margin-bottom: 4em; margin-top: 2em"
  >
    <div style="display: flex; flex-direction: column; gap: 0.6em">
      <div style="">
        <el-button
          v-if="!isAdminView"
          style="height: 2.8em; font-size: 1em; position: relative; z-index: 4"
          type="primary"
          color="#0B70C3"
          plain
          @click="handleTaskHistoryClick"
          >Task History</el-button
        >
        <el-button
          v-else
          class="admin-back-button"
          style="height: 2.8em;font-size: 1em; position: relative; z-index: 4"
          type="primary"
          color="#0B70C3"
          plain
          @click="handleAdminBackClick"
          >Back</el-button
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
              popper-class="cultural-alignment-select-popper"
              :fit-input-width="true"
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
              popper-class="cultural-alignment-select-popper"
              :fit-input-width="true"
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

      <div ref="step2SectionRef" class="step step2">
        <div class="intro-container">
          <h4>
            {{ t("culturalValueAnnotation.step2.title") }}
          </h4>
          <div class="core-action-box">
            <h5>
                {{ t("culturalValueAnnotation.step2.coreAction") }}
              </h5>
          </div>
          <div class="seconed-container" style="display: flex; justify-content: space-between;flex-direction: row;">
            <div
              class=" flex-column"
              style="width: calc(60% - 2em)"
            >
              
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
              style="
                min-height: 6em;
                border: 1px solid rgba(51, 51, 51, 1);
                border-radius: 1rem;
                padding: 1em;
                line-height: 1.5;
                width: calc(50% - 2em);
              "
            >
              <div>
                <div>
                  <p class="example-title" style="margin-bottom: .5em;">
                    <img src="@/assets/images/example-icon.png" />
                    <span>[Topic-: {{ topicValue2 }}]</span>
                  </p>
                  <div style="padding-left: 1.5em" class="flex-column">
                    <p>
                      {{ t("culturalValueAnnotation.step2.noteExampleText") }}
                    </p>
                    <ul>
                      <li
                        v-for="(example, index) in principleExample.slice(0, 1)"
                        :key="index"
                      >
                        {{ example }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="highlight-container">
          <div style="display:flex; gap: .8em;font-size: .875em;">
            <img style="width:1.4em; height: 1.4em;" src="@/assets/images/note-icon.png" alt="">
            <div>
              <p>{{ t("culturalValueAnnotation.step2.minimumPrinciplesTip") }}</p>
              <p style="margin-top: .4em">{{ t("culturalValueAnnotation.step2.principleLengthTip") }}</p>
            </div>
          </div>
          <div class="input-container" style="margin-top: -.1em">
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
              <div class="principle-input-group">
                <el-input
                  type="textarea"
                  autosize
                  v-model="principlesList[index]"
                  :class="{
                    'principle-input-error': isPrincipleInputInvalid(principle),
                  }"
                  style=""
                  placeholder="Please input"
                />
                <p
                  v-if="isPrincipleInputInvalid(principle)"
                  :class="[
                    'principle-validation-tip',
                    {
                      'principle-validation-tip--error': isPrincipleInputInvalid(principle),
                    },
                  ]"
                >
                  {{ getPrincipleValidationTip(principle) }}
                </p>
              </div>
            </div>
            <p
              :class="[
                'principle-completed-tip',
                {
                  'principle-completed-tip--error': shouldHighlightPrincipleValidation,
                },
              ]"
            >{{ t("culturalValueAnnotation.step2.completedPrinciplesTip", { count: completedPrincipleCount }) }}</p>
            <p
              v-if="principleValidationErrorMessage"
              class="principle-validation-error-tip"
            >{{ principleValidationErrorMessage }}</p>
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

        <div class="highlight-container" style="flex-direction: row;">
          <!-- <span
            ><b>{{ t("culturalValueAnnotation.step3.task") }}</b></span
          > -->
          <div class="input-container" style="margin: 0; width: calc( 50% - 1em); gap: 1.5em; align-items: flex-start; justify-content: flex-start; flex-direction: column;">
            <span style="width: 100%"
              ><b>{{ t("culturalValueAnnotation.step3.task") }}</b></span
            >
            <el-select
              class="select-auto-height"
              v-model="taskValue1"
              placeholder="Select Level-1"
              popper-class="cultural-alignment-select-popper"
              :fit-input-width="true"
              :disabled="hasClickedSaveAndGetQuestionListBtn"
              style="width: 100%"
            >
              <el-option
                v-for="item in taskOptions1"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
            <el-select
              class="select-auto-height"
              v-model="taskValue2"
              placeholder="Select or Input Level-2"
              popper-class="cultural-alignment-select-popper"
              :fit-input-width="true"
              :disabled="hasClickedSaveAndGetQuestionListBtn"
              @visible-change="handleTaskValue2DropdownVisibleChange"
              @change="handleTaskValue2Change"
              style="width: 100%"
            >
              <el-option
                v-for="item in taskOptions2"
                :key="item"
                :label="`${item.category} ${t('culturalValueAnnotation.step3.availableQuestions', { count: topic_task_count?.[topicValue2]?.[item.category] ?? 0 })}`"
                :value="item.category"
              >
                <div
                  @mouseenter="handleTaskOptionHover(item)"
                  @mouseleave="handleTaskOptionLeave"
                >
                  {{ `${item.category} ${t('culturalValueAnnotation.step3.availableQuestions', { count: topic_task_count?.[topicValue2]?.[item.category] ?? 0 })}` }}
                </div>
              </el-option>
            </el-select>

             <div style="display: flex">
            <el-popover
              placement="right-start"
              :width="500"
              :disabled="taskOptions2 && taskOptions2.length === 0"
            >
              <template #reference>
                <div>
                  <el-button
                    v-if="!hasClickedSaveAndGetQuestionListBtn"
                    style="height: 2.8em; font-size: 1em;margin: 0"
                    @click="handleSaveAndGetQuestionListBtnClick"
                    :disabled="
                      isSaveAndGetQuestionListBtnDisabled ||
                      isLoadingSaveAndGetQuestionList
                    "
                    :loading="isLoadingSaveAndGetQuestionList"
                    color="#0B70C3"
                    >{{ t("common.getQuestionList") }}</el-button
                  >
                  <el-button
                    v-else
                    style="height: 2.8em; font-size: 1em"
                    :disabled="true"
                    color="#0B70C3"
                    >{{ t("common.getQuestionListClicked") }}</el-button
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
                        t('culturalValueAnnotation.step3.availableQuestions', { count: topic_task_count?.[topicValue2]?.[item.category] ?? 0 })
                      }}
                    </li>
                  </ul>
                </div>
              </template>
            </el-popover>
          </div>
          </div>

          <div style="margin: 0; width: calc( 50% - 1em); padding: .75em 1.5rem; box-sizing: border-box; display: flex; flex-direction: column; gap: 1.2em; border: 1px solid rgba(51, 51, 51, 1); border-radius: 1rem;" >
            <div class="">
              <p style="margin-bottom: 0.7em"><b>{{ t("culturalValueAnnotation.step3.definitionLabel") }}</b></p>
              <p>
                {{
                  displayedTaskExample && displayedTaskExample.definition
                    ? displayedTaskExample.definition
                    : t("culturalValueAnnotation.step3.definitionFallback")
                }}
              </p>
            </div>
            <div class="">
              <p style="margin-bottom: 0.7em"><b>{{ t("culturalValueAnnotation.step3.exampleLabel") }}</b></p>
              <p>
                {{
                  displayedTaskExample && displayedTaskExample.example
                    ? displayedTaskExample.example
                    : t("culturalValueAnnotation.step3.exampleFallback")
                }}
              </p>
            </div>
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
                  t("culturalValueAnnotation.step4.distinctivenessHintTitle")
                }}</b>
                {{ t("culturalValueAnnotation.step4.distinctivenessHintText") }}
              </li>
              <li>
                <b>{{
                  t("culturalValueAnnotation.step4.plausibilityHintTitle")
                }}</b>
                {{ t("culturalValueAnnotation.step4.plausibilityHintText") }}
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
              <li>
                <b>{{ t("culturalValueAnnotation.step4.prioritize2") }}</b>
              </li>
              <li>{{ t("culturalValueAnnotation.step4.prioritize3") }} </li>
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
              :disabled="hasClickedGetAnswerBtn || shouldForceCreateNewTab"
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
                    :class="[
                      'select-auto-height',
                      {
                        'get-answer-input-error': shouldHighlightGetAnswerValidation,
                      },
                    ]"
                    popper-class="cultural-alignment-select-popper"
                    :fit-input-width="true"
                    v-model="questionValue_selectExisting_input"
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
                <el-button
                  type="primary"
                  style="
                    width: 4.5rem;
                    height: 4.5rem;
                    font-size: 0.85em;
                    padding: 0;
                    background: #fff;
                    color: rgba(11, 112, 195, 1);
                    white-space: pre-line;
                    margin: 0;
                    align-self: center;
                  "
                  @click="activeNameSelect1 = 'Refine Question'"
                  :disabled="hasClickedGetAnswerBtn"
                >
                  {{ t("common.editQuestionButton") }}
                </el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane
              :disabled="hasClickedGetAnswerBtn || shouldForceCreateNewTab"
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
                    v-model="questionValue_refine_input"
                    :class="{
                      'get-answer-input-error': shouldHighlightGetAnswerValidation,
                    }"
                    style="position: relative; z-index: 2"
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 10 }"
                    placeholder="Please input"
                    :disabled="hasClickedGetAnswerBtn"
                  />
                </div>

                <el-button
                  type="primary"
                  style="
                    width: 4.5rem;
                    height: 4.5rem;
                    font-size: 0.85em;
                    padding: 0;
                    background: #fff;
                    color: rgba(11, 112, 195, 1);
                    white-space: pre-line;
                    margin: 0;
                    align-self: center;
                  "
                  @click="activeNameSelect1 = 'Select Existing Question'"
                  :disabled="hasClickedGetAnswerBtn"
                >
                  {{ t("common.changeQuestionButton") }}
                </el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane
              :disabled="hasClickedGetAnswerBtn"
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
                  v-model="questionValue_create_input"
                  :class="{
                    'get-answer-input-error': shouldHighlightGetAnswerValidation,
                  }"
                  style="width: calc(100% - 16em)"
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 10 }"
                  placeholder="Please input"
                  :disabled="hasClickedGetAnswerBtn"
                />
              </div>
            </el-tab-pane>
          </el-tabs>
          
          <div
            v-if="shouldShowGetAnswerValidationError"
            class="question-error-tip"
          >
            <div>
              <el-icon class="warning-icon"><Warning /></el-icon>
            <p>{{ questionErrorTip }}</p>
            </div>
          </div>
          <div class="score-container" style="margin-top: -1em;">
            <div>
              <span
                >{{ t("culturalValueAnnotation.step4.importanceScore") }}:</span
              >
              <el-select
                v-model="importanceValue"
                :class="{
                  'get-answer-input-error': shouldHighlightGetAnswerValidation,
                }"
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
                >{{ t("culturalValueAnnotation.step4.distinctivenessScore") }}:</span
              >
              <el-select
                v-model="distinctivenessValue"
                :class="{
                  'get-answer-input-error': shouldHighlightGetAnswerValidation,
                }"
                placeholder="Select"
                :disabled="hasClickedGetAnswerBtn"
              >
                <el-option
                  v-for="option in distinctivenessScoreOptions"
                  :key="`distinctiveness-${option.value}`"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </div>
            <div>
              <span
                >{{ t("culturalValueAnnotation.step4.plausibilityScore") }}:</span
              >
              <el-select
                v-model="plausibilityValue"
                :class="{
                  'get-answer-input-error': shouldHighlightGetAnswerValidation,
                }"
                placeholder="Select"
                :disabled="hasClickedGetAnswerBtn"
              >
                <el-option
                  v-for="option in plausibilityScoreOptions"
                  :key="`plausibility-${option.value}`"
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
                  ? t("common.getAnswerClicked")
                  : t("common.getAnswer")
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
                </ul>
              </li>
              <li>
                <p>{{ t("culturalValueAnnotation.step5.rule2") }}</p>
              </li>
            </ul>
          </div>

          <div class="highlight-container"  style="font-size: 1rem;">
            <div class="show_question_container" v-if="questionValue">
              <span>{{ t("culturalValueAnnotation.step4.question") }} </span>
              <div class="question_box" style="flex: 1">
                {{ questionValue }}
              </div>
            </div>
            <div
              style="margin-top: 0em"
              v-if="hasClickedGetAnswerBtn"
            >
              <el-button
                color="#0B70C3"
                @click="handleReselectQuestionClick"
                >{{ t("common.reselectQuestion") }}</el-button
              >
              <p style="margin-top: 1em"><b>Notice：</b>You can also reselect or create new questions.</p>
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

        <div class="highlight-container" style="font-size: 1rem;">
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

    <div v-if="!isAdminView" style="display: flex; justify-content: center; margin-top: 2em">
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
        >{{ t("common.submitAnnotation") }}</el-button
      >
    </div>

    <!-- <UserDetail @hideUsrerContainer="hideUsrerContainer"></UserDetail> -->
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
const isAdminView = computed(() => {
  return route.path.startsWith("/CulturalValueAnnotation/admin/read") ||
    String(route.query.adminView || "") === "1";
});
import UserDetail from "./UserDetail.vue";
import AnnotationComponent from "./Components/AnnotationComponent.vue";
import {
  Warning
} from "@element-plus/icons-vue";
import {
  getTopicTaskTaxonomy,
  getCandidateQuestions,
  computeQuestionSimilarity,
  getQuestionResponse,
  submitAnnotation,
  GetAllCompletedAnnotations,
} from "@/service/CulturalValueAnnotationApi";
import {
  getCjkCharacterCount,
  getEnglishWordCount,
  getPrincipleEffectiveLength,
  getQuestionSimilarity,
  isPrincipleLongEnough,
  MIN_PRINCIPLE_CJK_CHARACTER_COUNT,
  MIN_PRINCIPLE_ENGLISH_WORD_COUNT,
  findPrinciplesSimilarToExamples,
  findDuplicatePrinciples,
  PRINCIPLE_SIMILARITY_THRESHOLD,
} from "@/utils/common";
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

const plausibilityScoreOptions = computed(() => [
  { value: 1, label: t("culturalValueAnnotation.step4.plausibilityOption1") },
  { value: 2, label: t("culturalValueAnnotation.step4.plausibilityOption2") },
  { value: 3, label: t("culturalValueAnnotation.step4.plausibilityOption3") },
  { value: 4, label: t("culturalValueAnnotation.step4.plausibilityOption4") },
  { value: 5, label: t("culturalValueAnnotation.step4.plausibilityOption5") },
]);

const distinctivenessScoreOptions = computed(() => [
  {
    value: 1,
    label: t("culturalValueAnnotation.step4.distinctivenessOption1"),
  },
  {
    value: 2,
    label: t("culturalValueAnnotation.step4.distinctivenessOption2"),
  },
  {
    value: 3,
    label: t("culturalValueAnnotation.step4.distinctivenessOption3"),
  },
  {
    value: 4,
    label: t("culturalValueAnnotation.step4.distinctivenessOption4"),
  },
  {
    value: 5,
    label: t("culturalValueAnnotation.step4.distinctivenessOption5"),
  },
]);

const submit_type = ref("create new"); // "create new" or "revise"
const duration_time = ref(0);
const candidateQuestionsReceivedAt = ref(null);
const pageEnteredAt = ref(null);

const answer_model = ref("");
const original_answer_country = ref("");
const step2SectionRef = ref(null);

const topicValue1 = ref("");
const topicValue2 = ref("");
const principlesList = ref(["", "", "", "", ""]);

// 点击 Get Question List 前，至少需要完成 3 条有效 principle。
const MIN_COMPLETED_PRINCIPLE_COUNT = 3;
// 记录是否已经点击过 Get Question List 并触发过 principle 校验。
const hasTriggeredPrincipleValidation = ref(false);
// principle 校验失败时的具体原因，同时用于在 principle-completed-tip 下方的红字提示。
const principleValidationErrorMessage = ref("");

// principle 校验失败时，把页面滚动回 Step 2，方便用户直接看到错误提示和输入框状态。
const scrollToStep2Section = () => {
  step2SectionRef.value?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

// 收集所有“已填写但长度不合格”的 principle 序号，用于点击按钮后的统一报错提示。
const getInvalidPrincipleIndexes = () => {
  return principlesList.value.reduce((invalidIndexes, principle, index) => {
    if (principle.trim() && !isPrincipleLongEnough(principle)) {
      invalidIndexes.push(index + 1);
    }

    return invalidIndexes;
  }, []);
};

  // 输入框下方的文案默认作为规则说明存在；当该条已填写但长度不足时，展示当前长度信息。
const getPrincipleValidationTip = (text = "") => {
  const trimmedText = text.trim();

  if (!trimmedText || isPrincipleLongEnough(trimmedText)) {
    return "";
  }

  const cjkCharacterCount = getCjkCharacterCount(trimmedText);
  const englishWordCount = getEnglishWordCount(trimmedText);
  const effectiveLength = getPrincipleEffectiveLength(trimmedText);

  return t("culturalValueAnnotation.step2.principleInputLengthTip", {
    cjkCount: MIN_PRINCIPLE_CJK_CHARACTER_COUNT,
    englishCount: MIN_PRINCIPLE_ENGLISH_WORD_COUNT,
  });
};

// 只要存在“已填写但长度不合格”的 principle，就认为当前有长度校验错误。
const hasInvalidPrinciples = computed(() => {
  return getInvalidPrincipleIndexes().length > 0;
});

// Get Question List 之前至少需要 3 条“已填写且长度合格”的 principle。
const hasInsufficientCompletedPrinciples = computed(() => {
  return completedPrincipleCount.value < MIN_COMPLETED_PRINCIPLE_COUNT;
});

// 默认保持黑色说明，只有点击按钮后且数量或长度校验失败时才切换为红色错误态。
const shouldHighlightPrincipleValidation = computed(() => {
  return (
    hasTriggeredPrincipleValidation.value &&
    (hasInvalidPrinciples.value || hasInsufficientCompletedPrinciples.value)
  );
});

// 单个输入框是否显示红色错误态：
// 1. 用户已经点击过 Get Question List；
// 2. 当前整体校验失败；
// 3. 这一条本身有内容但长度不达标。
const isPrincipleInputInvalid = (principle = "") => {
  const trimmedPrinciple = principle.trim();

  return (
    shouldHighlightPrincipleValidation.value &&
    !!trimmedPrinciple &&
    !isPrincipleLongEnough(trimmedPrinciple)
  );
};

// 只有已填写且满足最小长度要求的 principle，才计入已完成数量。
const completedPrincipleCount = computed(() => {
  return principlesList.value.filter((principle) => {
    const trimmedPrinciple = principle.trim();

    return trimmedPrinciple && isPrincipleLongEnough(trimmedPrinciple);
  }).length;
});

const topicOptions1 = ref([]);
const topicOptions2 = ref([]);

const taskValue1 = ref("");
const taskValue2 = ref("");
const questionValue = ref("");
const importanceValue = ref(null);
const distinctivenessValue = ref(null);
const plausibilityValue = ref(null);
const rawQuestionValue = ref("");
const rawImportanceValue = ref(null);
const rawDistinctivenessValue = ref(null);
const rawPlausibilityValue = ref(null);

const questionAction = ref("");

const questionValue_refine_input = ref("");
const questionValue_selectExisting_input = ref("");
const questionValue_create_input = ref("");
// Step4 当前问题选择模式。需要在后续 computed / watch 之前初始化，避免 setup 阶段访问未初始化变量。
const activeNameSelect1 = ref("Select Existing Question"); //Create New
// 复用 step4 的提示区域，展示 Get Answer 前的前端校验错误。
const questionErrorTip = ref("");
// 记录用户是否已经触发过 Step 4 的分数门槛校验，用来控制输入框红色错误态。
const hasTriggeredGetAnswerValidation = ref(false);

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
    !taskValue2.value.trim()
    // principle 相关规则改为点击按钮时统一校验，这里不再提前按数量禁用按钮。
  );
});

// Get Question List / Submit Annotation 前共用同一套 principle 校验，避免两个入口规则不一致。
const validatePrinciplesBeforeContinue = () => {
  // 点击按钮后才正式进入 principle 校验态，页面上的黑色说明也会在失败时切成红色。
  hasTriggeredPrincipleValidation.value = true;
  // 每次校验前先重置上一次的错误提示，避免提示与当前状态不同步。
  principleValidationErrorMessage.value = "";

  // 先校验“大前提”：至少 3 条 principle 已填写且每条长度都达标。
  if (hasInsufficientCompletedPrinciples.value) {
    // 校验失败时先滚动到 Step 2，让用户第一时间看到 principle 的错误提示。
    scrollToStep2Section();
    principleValidationErrorMessage.value = t(
      "culturalValueAnnotation.step2.insufficientPrinciplesError",
      { count: MIN_COMPLETED_PRINCIPLE_COUNT },
    );
    return false;
  }

  // 数量达标后，再补充指出具体哪几条 principle 的长度仍然不符合要求。
  const invalidPrincipleIndexes = getInvalidPrincipleIndexes();
  if (invalidPrincipleIndexes.length > 0) {
    // 有具体不合格项时，同样回到 Step 2，并提示是哪几条 principle 长度不达标。
    scrollToStep2Section();
    principleValidationErrorMessage.value = t(
      "culturalValueAnnotation.step2.invalidPrincipleLengthError",
      {
        indexes: invalidPrincipleIndexes.join(", "),
        cjkCount: MIN_PRINCIPLE_CJK_CHARACTER_COUNT,
        englishCount: MIN_PRINCIPLE_ENGLISH_WORD_COUNT,
      },
    );
    return false;
  }

  // 与示例 principle 查重：避免标注者直接拷贝或微调示例。
  const principlesSimilarToExamples = findPrinciplesSimilarToExamples(
    principlesList.value,
    principleExample.value || [],
  );
  if (principlesSimilarToExamples.length > 0) {
    scrollToStep2Section();
    const duplicatedPrincipleIndexes = Array.from(
      new Set(principlesSimilarToExamples.map((item) => item.principleIndex))
    ).join(", ");
    principleValidationErrorMessage.value = t(
      "culturalValueAnnotation.step2.similarToExamplePrinciplesError",
      { indexes: duplicatedPrincipleIndexes },
    );
    return false;
  }

  // 标注者多条 principle 互查重：避免自己写的多条之间重复。
  const duplicatePrinciples = findDuplicatePrinciples(principlesList.value);
  if (duplicatePrinciples.length > 0) {
    scrollToStep2Section();
    const duplicatePairs = duplicatePrinciples
      .map((item) => `${item.leftIndex} & ${item.rightIndex}`)
      .join("; ");
    principleValidationErrorMessage.value = t(
      "culturalValueAnnotation.step2.duplicatePrinciplesError",
      { pairs: duplicatePairs },
    );
    return false;
  }

  return true;
};

const handleSaveAndGetQuestionListBtnClick = () => {
  if (isSaveAndGetQuestionListBtnDisabled.value) {
    return;
  }

  if (!userDetail.username) {
    ElMessage.error(t("common.pleaseFillUserInfo"));
    return;
  }

  // 获取候选问题前，先通过统一的 principle 前置校验。
  if (!validatePrinciplesBeforeContinue()) {
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
        // 请求成功后清空 principle 错误态，避免后续页面继续保留红色校验提示。
        hasTriggeredPrincipleValidation.value = false;
        principleValidationErrorMessage.value = "";
        hasClickedSaveAndGetQuestionListBtn.value = true;
        if (res.data["candidate_questions"].length > 0) {
          questionValue_refine_input.value =
            res.data["candidate_questions"][0].question;
          questionValue_selectExisting_input.value =
            res.data["candidate_questions"][0].question;
          setTimeout(() => {
            handleUpdateScores(questionValue_selectExisting_input.value);
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

const fetchCandidateQuestionsForEdit = async (question) => {
  if (!question || questionOptions.value.length > 0) {
    return;
  }

  const inputObj = {
    username: userDetail.username?.trim() || "",
    country: userDetail.country?.trim() || "",
    language: userDetail.language?.trim() || "",
    topic_1: String(question.topic_1 || "").trim(),
    topic_2: String(question.topic_2 || "").trim(),
    timestamp: new Date().toISOString(),
    task_1: String(question.task_1 || "").trim(),
    task_2: String(question.task_2 || "").trim(),
  };

  if (
    !inputObj.username ||
    !inputObj.country ||
    !inputObj.language ||
    !inputObj.topic_1 ||
    !inputObj.topic_2 ||
    !inputObj.task_1 ||
    !inputObj.task_2
  ) {
    return;
  }

  try {
    const res = await getCandidateQuestions(inputObj);
    const candidateQuestions = res?.data?.candidate_questions;
    if (!Array.isArray(candidateQuestions)) {
      return;
    }

    questionOptions.value = candidateQuestions;

    if (res.data?.question_type_count) {
      actionCounts.create = res.data.question_type_count.create;
      actionCounts.refine = res.data.question_type_count.refine;
      actionCounts["select existing"] =
        res.data.question_type_count["select existing"];
    }
  } catch (err) {
    console.log(err);
  }
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
    !distinctivenessValue.value ||
    !plausibilityValue.value ||
    !(activeNameSelect1.value == "Create New"
      ? questionValue_create_input.value.trim()
      : activeNameSelect1.value === "Refine Question"
        ? questionValue_refine_input.value.trim()
        : questionValue_selectExisting_input.value.trim())
  );
});

// Get Answer 前要求三个分数都 >= 3，且至少两个分数 >= 4。
const areScoresValidForGetAnswer = computed(() => {
  const importanceScore = Number(importanceValue.value);
  const distinctivenessScore = Number(distinctivenessValue.value);
  const plausibilityScore = Number(plausibilityValue.value);
  const scores = [importanceScore, distinctivenessScore, plausibilityScore];
  const highScoreCount = scores.filter((score) => score >= 4).length;

  return (
    importanceScore >= 3 &&
    distinctivenessScore >= 3 &&
    plausibilityScore >= 3 &&
    highScoreCount >= 2
  );
});

// 只有在用户点击 Get Answer 且分数门槛不满足时，才高亮问题框和分数框。
const shouldHighlightGetAnswerValidation = computed(() => {
  return (
    hasTriggeredGetAnswerValidation.value && !areScoresValidForGetAnswer.value
  );
});

// 错误文案与红框共用同一套失败态，避免出现“提示还在但边框已恢复”的不同步情况。
const shouldShowGetAnswerValidationError = computed(() => {
  return !!questionErrorTip.value && hasTriggeredGetAnswerValidation.value;
});

// 后端第一次传过来的 或者上次提交的
let original_response = ref("");
let original_highlight_cues = ref([]);
let original_key_concepts = ref([]);
let original_value_concepts_evidence = ref([]);
let original_value_concepts_justification = ref([]);

let original_response_person = ref("");
let original_highlight_cues_person = ref([]);
let original_key_concepts_person = ref([]);

// cultural 部分的标注
let annotationDataOrigin = reactive({
  originalResponse: "",
  response: "",
  highlight_cues: [],
  key_concepts: [],
  value_concepts_evidence: [],
  value_concepts_justification: [],
});
// personal 部分的标注
let annotationDataOrigin_person = reactive({
  originalResponse: "",
  response: "",
  highlight_cues: [],
  key_concepts: [],
  value_concepts_evidence: [],
  value_concepts_justification: [],
});

const resetGetAnswerState = () => {
  hasClickedGetAnswerBtn.value = false;
  questionErrorTip.value = "";
  answer_model.value = "";
  original_answer_country.value = "";
  questionValue.value = "";
  rawQuestionValue.value = "";
  rawImportanceValue.value = null;
  rawDistinctivenessValue.value = null;
  rawPlausibilityValue.value = null;
  questionAction.value = "";

  original_response.value = "";
  original_highlight_cues.value = [];
  original_key_concepts.value = [];
  original_value_concepts_evidence.value = [];
  original_value_concepts_justification.value = [];

  original_response_person.value = "";
  original_highlight_cues_person.value = [];
  original_key_concepts_person.value = [];

  annotationDataOrigin = {
    originalResponse: "",
    response: "",
    highlight_cues: [],
    key_concepts: [],
    value_concepts_evidence: [],
    value_concepts_justification: [],
  };

  annotationDataOrigin_person = {
    originalResponse: "",
    response: "",
    highlight_cues: [],
    key_concepts: [],
    value_concepts_evidence: [],
    value_concepts_justification: [],
  };
};

const updateQuestionScores = (questionText) => {
  const selectedQuestion = questionOptions.value.find(
    (item) => item.question === questionText,
  );
  if (selectedQuestion) {
    rawImportanceValue.value = selectedQuestion.importance;
    rawDistinctivenessValue.value = selectedQuestion.distinctiveness;
    rawPlausibilityValue.value = selectedQuestion.plausibility;
    importanceValue.value = selectedQuestion.importance;
    distinctivenessValue.value = selectedQuestion.distinctiveness;
    plausibilityValue.value = selectedQuestion.plausibility;
  }
};

const getRawQuestionAndScores = () => {
  if (activeNameSelect1.value === "Create New") {
    questionAction.value = "create";
    questionValue.value = questionValue_create_input.value.trim();
    rawQuestionValue.value = null;
    rawImportanceValue.value = null;
    rawDistinctivenessValue.value = null;
    rawPlausibilityValue.value = null;
    return;
  }

  questionAction.value =
    activeNameSelect1.value === "Refine Question"
      ? "refine"
      : "select existing";
  questionValue.value =
    activeNameSelect1.value === "Refine Question"
      ? questionValue_refine_input.value.trim()
      : questionValue_selectExisting_input.value.trim();

  const selectedQuestionText = questionValue_selectExisting_input.value.trim();
  const selectedQuestion = questionOptions.value.find(
    (item) => item.question === selectedQuestionText,
  );

  rawQuestionValue.value = selectedQuestionText || null;

  if (
    editCurrentQuestionDetail.value &&
    rawQuestionValue.value === editCurrentQuestionDetail.value.raw_question.trim()
  ) {
    rawImportanceValue.value = editCurrentQuestionDetail.value.raw_importance ?? null;
    rawDistinctivenessValue.value =
      editCurrentQuestionDetail.value.raw_distinctiveness ?? null;
    rawPlausibilityValue.value =
      editCurrentQuestionDetail.value.raw_plausibility ?? null;
    return;
  }

  rawImportanceValue.value = selectedQuestion?.importance ?? null;
  rawDistinctivenessValue.value = selectedQuestion?.distinctiveness ?? null;
  rawPlausibilityValue.value = selectedQuestion?.plausibility ?? null;
};

const handleSelectChange = () => {
  questionValue_refine_input.value = questionValue_selectExisting_input.value;
  updateQuestionScores(questionValue_refine_input.value);
};

const handleGetAnswerBtnClick = async () => {
  if (hasClickedGetAnswerBtn.value) {
    ElMessage.warning(t("culturalValueAnnotation.step4.getAnswerAlreadyClicked"));
    return;
  }

  // 每次重新点击前先清掉旧的错误提示，避免残留上一次校验结果。
  questionErrorTip.value = "";
  hasTriggeredGetAnswerValidation.value = false;

  if (isGetAnswerBtnDisabled.value) {
    return;
  }

  resetGetAnswerState();
  getRawQuestionAndScores();

  // 分数门槛校验前，先校验“修改现有问题 / 创建新问题”是否与当前类别候选问题相似度超过 90%。
  const shouldCheckQuestionSimilarity =
    activeNameSelect1.value === "Create New" ||
    activeNameSelect1.value === "Refine Question";

  const hasSimilarQuestion =
    shouldCheckQuestionSimilarity &&
    questionOptions.value.some((candidateQuestion) => {
      return (
        getQuestionSimilarity(questionValue.value, candidateQuestion?.question || "") >= 0.8
      );
    });

  if (hasSimilarQuestion) {
    hasTriggeredGetAnswerValidation.value = true;
    questionErrorTip.value = t("culturalValueAnnotation.step4.similarQuestionError");
    return;
  }
  //  对于创建新问题，增加对于similarity的检查，如果是ok是false，提示错误用户
  let similarityQuestionForCreateQuestion = null;
  if (activeNameSelect1.value === "Create New") {
    let shouldStopAfterSimilarityCheck = false;
    isLoadingGetAnswer.value = true;
    await computeQuestionSimilarity({
        question_action: "create",
        question: questionValue.value,
        country: userDetail.country?.trim() || "",
      })
      .then((response) => {
        const similarityResponse = response?.data;
        if (similarityResponse?.ok === false) {
          hasTriggeredGetAnswerValidation.value = true;
          questionErrorTip.value =
            // similarityResponse.message ||
            t("culturalValueAnnotation.step4.createSimilarQuestionError");
          shouldStopAfterSimilarityCheck = true;
        }else {
          if(similarityResponse?.raw_question){
            rawQuestionValue.value = similarityResponse.raw_question.question || "";
            rawImportanceValue.value = similarityResponse.raw_question.importance ?? null;
            rawDistinctivenessValue.value = similarityResponse.raw_question.distinctiveness ?? null;
            rawPlausibilityValue.value = similarityResponse.raw_question.plausibility ?? null;
          }
        }
      })
      .catch((err) => {
        console.log(err);
        ElMessage.error("error:" + err.message);
        hasTriggeredGetAnswerValidation.value = true;
        questionErrorTip.value = t("culturalValueAnnotation.step4.networkError");
        shouldStopAfterSimilarityCheck = true;
      }).finally(() => {
        isLoadingGetAnswer.value = false;
      });

    if (shouldStopAfterSimilarityCheck) {
      return;
    }
  }

  if (!areScoresValidForGetAnswer.value) {
    // 不满足分数门槛时，高亮当前问题框和三个分数框，并阻止继续请求后端接口。
    hasTriggeredGetAnswerValidation.value = true;
    questionErrorTip.value = t("culturalValueAnnotation.step4.scoreRequirementError");
    return;
  }

  if (!userDetail.username) {
    ElMessage.error(t("common.pleaseFillUserInfo"));
    return;
  }

  
  
  const formData = {
    username: userDetail.username.trim(),
    country: userDetail.country.trim(),
    language: userDetail.language.trim(),
    task_1: taskValue1.value.trim(),
    task_2: taskValue2.value.trim(),
    question: questionValue.value.trim(),
    raw_question: rawQuestionValue.value?.trim() || "",
    question_action: questionAction.value,
    importance: importanceValue.value,
    distinctiveness: distinctivenessValue.value,
    plausibility: plausibilityValue.value,
    raw_importance: rawImportanceValue.value,
    raw_distinctiveness: rawDistinctivenessValue.value,
    raw_plausibility: rawPlausibilityValue.value,
  };
  

  console.log(formData);
  isLoadingGetAnswer.value = true;

  getQuestionResponse(formData)
    .then((res) => {
      console.log(res);
      if (res.data) {
        // ElMessage.success("提交成功");
        annotationDataOrigin = res.data;
        annotationDataOrigin_person = res.data;

        original_response.value = res.data.response;
        original_highlight_cues.value = res.data.highlight_cues;
        original_key_concepts.value = res.data.key_concepts;
        original_value_concepts_evidence.value =
          res.data.value_concepts_evidence || [];
        original_value_concepts_justification.value =
          res.data.value_concepts_justification || [];

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
        original_answer_country.value = res.data.original_answer_country || "";
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

watch(areScoresValidForGetAnswer, (isValid) => {
  // 一旦分数恢复合法，就同步清理旧的错误文案和高亮态，保持提示与边框一致。
  if (isValid && hasTriggeredGetAnswerValidation.value) {
    hasTriggeredGetAnswerValidation.value = false;
    questionErrorTip.value = "";
  }
});

const annotationComponentRef = ref(null);
const annotationComponentRef2 = ref(null);

const areAllActionsKeep = (actions = []) => {
  return Array.isArray(actions) && actions.length > 0 && actions.every((item) => item === "keep");
};

const shouldPromptAllKeepDoubleCheck = (culturalData, personalData) => {
  const isCulturalAllKeep =
    areAllActionsKeep(culturalData?.cues_actions) &&
    areAllActionsKeep(culturalData?.concepts_actions);

  const isPersonalAllKeep =
    areAllActionsKeep(personalData?.cues_actions) &&
    areAllActionsKeep(personalData?.concepts_actions);

  return isCulturalAllKeep && isPersonalAllKeep;
};

const isLoadingSubmitHighlightAndConcepts = ref(false);
const submitHighlightAndConcepts = () => {
  // 最终提交前也要走同一套 principle 校验，避免跳过 Get Question List 后直接提交脏数据。
  if (!validatePrinciplesBeforeContinue()) {
    return;
  }

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
    const component2Data = annotationComponentRef2.value.processAnnotationData();
    if (component2Data.unmarked) {
      ElMessage.error(t("common.pleaseMarkAllItems"));
      isLoadingSubmitHighlightAndConcepts.value = false;
      return;
    }

    const proceedSubmit = () => {
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
        original_answer_country: original_answer_country.value,
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
        distinctiveness: distinctivenessValue.value || null,
        plausibility: plausibilityValue.value || null,
        raw_importance: rawImportanceValue.value ?? null,
        raw_distinctiveness: rawDistinctivenessValue.value ?? null,
        raw_plausibility: rawPlausibilityValue.value ?? null,

        // 原始响应
        original_response: original_response.value || "",
        original_highlight_cues: original_highlight_cues.value || [],
        original_key_concepts: original_key_concepts.value || [],
        original_value_concepts_evidence:
          original_value_concepts_evidence.value || [],
        original_value_concepts_justification:
          original_value_concepts_justification.value || [],
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
        // 直接使用组件过滤后的结果，保证长度与 highlight_cues / key_concepts 对齐。
        value_concepts_evidence:
          component1Data.value_concepts_evidence,
        value_concepts_justification:
          component1Data.value_concepts_justification,

        // 第二个注释组件的数据 personal 部分的标注
        response_person: component2Data.response,
        highlight_cues_person: component2Data.highlight_cues,
        key_concepts_person: component2Data.key_concepts,
        cues_actions_person: component2Data.cues_actions,
        concepts_actions_person: component2Data.concepts_actions,
        // personal 部分同样提交过滤后的 correspondence / evidence，避免与个人标注结果错位。
        value_concepts_evidence_person:
          component2Data.value_concepts_evidence,
        value_concepts_justification_person:
          component2Data.value_concepts_justification,

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
    };

    if (shouldPromptAllKeepDoubleCheck(component1Data, component2Data)) {
      ElMessageBox.confirm(
        t("common.allKeepDoubleCheckMessage"),
        t("common.allKeepDoubleCheckTitle"),
        {
          confirmButtonText: t("common.allKeepDoubleCheckConfirm"),
          cancelButtonText: t("common.allKeepDoubleCheckCancel"),
          type: "warning",
        },
      )
        .then(() => {
          proceedSubmit();
        })
        .catch(() => {
          isLoadingSubmitHighlightAndConcepts.value = false;
        });
      return;
    }

    proceedSubmit();
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
  if (!isAdminView.value && (!userDetail.username || !userDetail.country || !userDetail.language)) {
    return;
  }

  pageEnteredAt.value = Date.now();

  submit_type.value = "create new";
  console.log("onMounted");
  console.log(route.params.id);
  // getQuestionNum();

  if (!isAdminView.value) {
    await handleGetTopicTaskTaxonomy();
  }

  const editCurrentQuestion = sessionStorage.getItem("editCurrentQuestion");
  if (route.params.id && !editCurrentQuestion) {
    router.push({ path: "/CulturalValueAnnotation/home" });
    return;
  }

  if (route.params.id && editCurrentQuestion) {
    submit_type.value = "revise";

    const question = JSON.parse(editCurrentQuestion);
    await fetchCandidateQuestionsForEdit(question);
    editCurrentQuestionDetail.value = question;
    hasClickedGetAnswerBtn.value = true;
    hasClickedSaveAndGetQuestionListBtn.value = true;
    console.log("要编辑的question信息", question);
    // 填充表单数据
    questionValue.value = question.question;
    rawQuestionValue.value = question.raw_question;
    questionAction.value = question.question_action;

    questionValue_create_input.value = "";
    questionValue_refine_input.value = "";
    questionValue_selectExisting_input.value = "";

    importanceValue.value = question.importance;
    distinctivenessValue.value = question.distinctiveness;
    plausibilityValue.value = question.plausibility;
    rawImportanceValue.value = question.raw_importance;
    rawDistinctivenessValue.value = question.raw_distinctiveness;
    rawPlausibilityValue.value = question.raw_plausibility;

    if (question.question_action == "create") {
      activeNameSelect1.value = "Create New";
      questionValue_create_input.value = question.question;
    } else if (question.question_action == "select existing") {
      activeNameSelect1.value = "Select Existing Question";
      questionValue_selectExisting_input.value = question.raw_question;
      questionValue_refine_input.value = question.question;
    } else {
      activeNameSelect1.value = "Refine Question";
      questionValue_refine_input.value = question.question;
      questionValue_selectExisting_input.value = question.raw_question;
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
    original_answer_country.value = question.original_answer_country || "";
    annotationDataOrigin = {
      originalResponse: question.response,
      response: question.response,
      highlight_cues: question.highlight_cues,
      key_concepts: question.key_concepts,
      value_concepts_evidence: question.value_concepts_evidence || [],
      value_concepts_justification: question.value_concepts_justification || [],
    };
    annotationDataOrigin_person = {
      originalResponse: question.response_person,
      response: question.response_person,
      highlight_cues: question.highlight_cues_person,
      key_concepts: question.key_concepts_person,
      value_concepts_evidence:
        question.value_concepts_evidence_person || [],
      value_concepts_justification:
        question.value_concepts_justification_person || [],
    };

    original_response.value = question.response;
    original_highlight_cues.value = question.highlight_cues;
    original_key_concepts.value = question.key_concepts;
    original_value_concepts_evidence.value =
      question.original_value_concepts_evidence || [];
    original_value_concepts_justification.value =
      question.original_value_concepts_justification || [];

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

const handleAdminBackClick = () => {
  router.back();
};

//
// create new 模式下，如果没有候选问题，则强制切到 Create New。
const shouldForceCreateNewTab = computed(() => {
  return (
    submit_type.value === "create new" &&
    hasClickedSaveAndGetQuestionListBtn.value &&
    questionOptions.value.length === 0
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

  handleUpdateScores(questionValue_selectExisting_input.value);
};

const handleUpdateScores = (question) => {
  setTimeout(() => {
    if (activeNameSelect1.value === "Create New") {
      importanceValue.value = "";
      distinctivenessValue.value = "";
      plausibilityValue.value = "";
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
  const currentTaskOptions2 = Array.isArray(taskOptions2.value)
    ? [...taskOptions2.value]
    : [];

  // 查找完整的item对象
  const selectedItem = currentTaskOptions2.find(
    (item) => item.category === newValue,
  );
  if (selectedItem) {
    console.log("Selected item:", selectedItem);
    taskExample.value = selectedItem;
    // 可以在这里使用完整的item对象
    // 例如：selectedItem.xxx
    return;
  }

  taskExample.value = [];
};

const principleExample = ref([]);
const taskExample = ref([]);
const hoveredTaskExample = ref(null);

const displayedTaskExample = computed(() => {
  return hoveredTaskExample.value || taskExample.value;
});

const findTaskOptionByCategory = (category) => {
  const currentTaskOptions2 = Array.isArray(taskOptions2.value)
    ? taskOptions2.value
    : [];

  return currentTaskOptions2.find((item) => item.category === category) || null;
};

const handleTaskOptionHover = (item) => {
  hoveredTaskExample.value = item || null;
};

const handleTaskOptionLeave = () => {
  hoveredTaskExample.value = null;
};

const handleTaskValue2DropdownVisibleChange = (visible) => {
  if (!visible) {
    hoveredTaskExample.value = null;
  }
};

const topic_principle_examples = ref({});
let task_taxonomy_examples = {};
const handleTopicValue2Change = (newValue) => {
  if (newValue) {
    const nextExamples = topic_principle_examples.value?.[newValue];
    principleExample.value = Array.isArray(nextExamples) ? nextExamples : [];
    return;
  }

  principleExample.value = [];
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
    .question-error-tip{
      padding-left: 10em;
      color: rgba(128, 0, 0, 1);
      
      min-height: 1.5em;
      margin-top: -2.2em;
      &>div{
        display: flex;
      flex-direction: row;
      gap: 0 0.5em;
      align-items: center;
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
          align-items: flex-start;
          span {
            margin-right: 1em;
            padding-top: 0.4em;
          }
          .principle-input-group {
            width: calc(100% - 7em);
            display: flex;
            flex-direction: column;
            gap: 0.35em;
          }
          .principle-validation-tip {
            color: #222;
            font-size: 0.875rem;
            line-height: 1.4;
          }
          .principle-validation-tip--error {
            color: #b22222;
          }
          :deep(.principle-input-error .el-textarea__inner) {
            border-color: #b22222 !important;
            box-shadow: 0 0 0 1px #b22222;
          }
        }
        .principle-completed-tip {
          font-size: 0.875em;
          color: #222;
        }
        .principle-completed-tip--error {
          color: #b22222;
        }
        .principle-validation-error-tip {
          margin-top: -0.5em;
          font-size: 0.875em;
          color: #b22222;
          line-height: 1.4;
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
      :deep(.get-answer-input-error .el-select__wrapper),
      :deep(.get-answer-input-error .el-textarea__inner) {
        border-color: #b22222 !important;
        box-shadow: 0 0 0 1px #b22222;
      }

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
        flex-wrap: wrap;
        gap: 0 1rem;
        margin-top: -1rem;
        & > div {
          flex: 1 1 calc(33.333% - 1rem);
          min-width: 18rem;
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



.el-button {
  height: 2.8em;
  font-size: 1em;
}

.admin-readonly {
  :deep(.el-button),
  :deep(.el-select),
  :deep(.el-input),
  :deep(.el-textarea),
  :deep(.el-tabs__item) {
    pointer-events: none;
    cursor: default;
  }

  :deep(.admin-back-button) {
    pointer-events: auto;
    cursor: pointer;
  }
}
</style>

<style lang="scss">
.step-container {
  .select-auto-height {
    .el-select__wrapper {
      box-shadow: none !important;
        background-color: #fff;
        border: 1px solid rgb(217, 217, 217);

      border-radius: 6px;
      padding: 0.3em 0.75em;
      font-size: 1.25rem !important;
      min-height: 4em;
      height: auto !important;
      align-items: stretch;

      .el-select__selected-item {
        line-height: 1.3;
        white-space: normal;
      }

      .el-select__placeholder{
        position: static;
        transform: none;
      }
    }

  }
  .step4 .el-textarea__inner {
    padding: 0.3em 1em !important;
    font-size: 1.25rem;
    min-height: 4em !important;
    box-sizing: border-box;
  }
  .step3{
    .select-auto-height {
      .el-select__wrapper {
        min-height: 2.7em;
        font-size: 1.125rem !important;
      }
    }
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
