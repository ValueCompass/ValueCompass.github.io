<template>
  <div class="quiz-check-page">
    <section class="hero-card">
      <div class="hero-copy">
        <span class="step-pill">Quiz {{ currentQuestionIndex + 1 }}</span>
        <!-- <h1>{{ title }}</h1> -->
        <p style="margin-top: 1.2em;">Complete the following quiz to verify your understanding before proceeding to the survey.</p>
      </div>
    </section>

    <div class="content-grid">
      <section class="left" style="padding-right: 1em;">
        <div class="quiz-main-scroll">
          <!-- <p class="question-title">
            {{ currentQuestionIndex + 1 }}. {{ currentQuestion.topic_2_native }}
            <span>{{ isMultipleQuestion ? "(Multiple)" : "(Single)" }}</span>
          </p> -->

          <div v-if="currentQuestion.stem_native" class="question-prompt">
           <span v-html="`${currentQuestionIndex + 1}. ${renderMarkdown(currentQuestion.stem_native)}`"></span>
          </div>

          <div class="answer-options">
            <!-- 多选 -->
            <el-checkbox-group
              v-if="isMultipleQuestion"
              v-model="selectedAnswer"
              :disabled="isGroupDisabled"
              @change="handleAnswerChange"
            >
              <el-checkbox
                v-for="option in currentQuestion.options"
                :key="`${currentQuestion.qid}-${option.key}`"
                class="answer-option"
                :class="getOptionClass(option.key)"
                border
                :label="option.key"
              >
                <p v-html="`${option.key}. ${renderMarkdown(option.text_native)}`"></p>
                <span v-if="getOptionIcon(option.key)" :class="getOptionIconClass(option.key)">
                  {{ getOptionIcon(option.key) }}
                </span>
              </el-checkbox>
            </el-checkbox-group>

            <!-- 单选 -->
            <el-radio-group
              v-else
              v-model="selectedAnswer"
              :disabled="isGroupDisabled"
              @change="handleAnswerChange"
            >
              <el-radio
                v-for="option in currentQuestion.options"
                :key="`${currentQuestion.qid}-${option.key}`"
                class="answer-option"
                :class="getOptionClass(option.key)"
                border
                :label="option.key"
              >
                <p style="white-space: pre-line;" v-html="`${option.key}. ${renderMarkdown(option.text_native)}`"></p>
                <span v-if="getOptionIcon(option.key)" :class="getOptionIconClass(option.key)">
                  {{ getOptionIcon(option.key) }}
                </span>
              </el-radio>
            </el-radio-group>
          </div>
        </div>

       
      </section>

      <aside class="right">
        <div class="right-wrapper" :class="answerFeedback ? 'right-wrapper-' + answerFeedback.type : ''" >
          <!-- 固定信息 -->
          

        <!-- 反馈信息（hint / correct 解析） -->
        <div v-if="answerFeedback" class="right-feedback-card" :class="answerFeedback.type">
          <el-icon class="feedback-icon"><Warning /></el-icon>
          <div>
            <h4 v-if="answerFeedback.type === 'correct'">正确</h4>
            <h4 v-else>错误，请再试一次。（剩余作答次数：{{ attemptsRemaining }}）</h4>
            <p v-html="renderMarkdown(answerFeedback.message)"></p>
            <!-- <p class="hint-note">{{ answerFeedback.note }}</p> -->
          </div>
        </div>
        </div>
      </aside>
    </div>


     <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;margin-top: 2em; font-size: .875em;">
      <p>{{ t('onboarding.quizQuestionInfo', { type: t('onboarding.' + (isMultipleQuestion ? 'quizMultipleChoice' : 'quizSingleChoice')), remaining: attemptsRemaining }) }}</p>
      <div class="quiz-actions">
          <!-- Try Again 按钮（红色，仅首次答错时显示） -->
          <el-button
            v-if="isTryAgain"
            class="check-button try-again-button"
            type="primary"
            @click="handleTryAgain"
          >{{ t('onboarding.quizBtnTryAgain') }}</el-button>

          <!-- Check Answer 按钮（未 check 时显示） -->
          <el-button
            v-else-if="!hasChecked"
            class="check-button"
            :disabled="!hasSelectedAnswer || isSubmitting"
            :loading="isSubmitting"
            type="primary"
            @click="handleCheckAnswer"
          >{{ t('onboarding.quizBtnCheckAnswer') }}</el-button>

          <!-- Next Quiz / Complete / Completed 按钮（check 后显示） -->
          <el-button
            v-else
            class="check-button"
            :class="{ 'is-complete': isQuizComplete }"
            :disabled="isQuizComplete || isSubmitting"
            :loading="isSubmitting"
            type="primary"
            @click="handleMoveToNext"
          >{{ isQuizComplete ? t('onboarding.quizBtnCompleted') : (isLastQuestion ? t('onboarding.quizBtnComplete') : t('onboarding.quizBtnNextQuiz')) }}</el-button>
        </div>
     </div>
  </div>
</template>

<script setup>
import { CircleCheckFilled, Warning } from "@element-plus/icons-vue";
import { ElMessageBox } from "element-plus";
import MarkdownIt from "markdown-it";
import { useI18n } from "vue-i18n";
import { computed, ref, watch } from "vue";
import { passedCalibrationQuiz } from "@/service/CulturalValueAnnotationApi";
import { updateUserDetailFields } from "@/utils/culturalValueAnnotationAuth";

const md = new MarkdownIt({ html: false, linkify: true, typographer: true });
const renderMarkdown = (text) => md.renderInline(text || "");

const { t } = useI18n();

const props = defineProps({
  questions: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  resetKey: {
    type: Number,
    default: 0,
  },
  username: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: "",
  },
});

const emit = defineEmits([
  "back",
  "update:quizState",
  "quiz-passed",
  "quiz-failed",
]);

// ---- 核心状态 ----
const currentQuestionIndex = ref(0);
const selectedAnswer = ref(null);
const answerFeedback = ref(null);       // { type, result, title, message, note }
const attemptCounts = ref({});          // 每题已尝试次数
const lastCheckedAnswerByQuestion = ref({});
const questionRecords = ref({});
const questionStatusMap = ref({});

// "wrong_retry" = 首次答错待 Try Again；null = 非 Try Again 状态。
const retryState = ref(null);
// check 后锁定选项，Try Again 或下一题时解锁。
const isLocked = ref(false);
// 提交接口 loading 状态。
const isSubmitting = ref(false);
// quiz 是否已通过（控制按钮显示 Completed）。
const isQuizComplete = ref(false);

const quizAnswers = ref(
  props.questions.reduce((answers, question) => {
    answers[question.qid] = question.question_type === "multiple_choice" ? [] : "";
    return answers;
  }, {}),
);

// ---- 计算属性 ----

const currentQuestion = computed(() => {
  return props.questions[currentQuestionIndex.value] || props.questions[0] || {};
});

const isMultipleQuestion = computed(() => {
  return currentQuestion.value.question_type === "multiple_choice";
});

const hasSelectedAnswer = computed(() => {
  if (isMultipleQuestion.value) {
    return Array.isArray(selectedAnswer.value) && selectedAnswer.value.length > 0;
  }
  return !!selectedAnswer.value;
});

const isLastQuestion = computed(() => {
  return currentQuestionIndex.value >= props.questions.length - 1;
});

const attemptsRemaining = computed(() => {
  const used = attemptCounts.value[currentQuestion.value.qid] || 0;
  return Math.max(0, 2 - used);
});

// 是否处于"首次错误 Try Again"模式。
const isTryAgain = computed(() => retryState.value === "wrong_retry");

// 选项组：check 后锁定，Try Again 或下一题时解锁。
const isGroupDisabled = computed(() => {
  return isLocked.value;
});

// 是否已 check（当前题有 feedback 结果）。
const hasChecked = computed(() => {
  return ["pass", "fail"].includes(answerFeedback.value?.result);
});

// ---- 正确答案集合 ----

const correctAnswerKeys = computed(() => {
  const answer = currentQuestion.value.answer_key;
  if (Array.isArray(answer)) return new Set(answer);
  return answer != null ? new Set([answer]) : new Set();
});

// ---- 选项视觉逻辑 ----

const isAnswerCorrect = () => {
  const correctAnswer = currentQuestion.value.answer_key ?? null;
  if (correctAnswer === null) return hasSelectedAnswer.value;
  return normalizeAnswer(selectedAnswer.value) === normalizeAnswer(correctAnswer);
};

// 已 check 且答案没变时 → 显示反馈视觉；首次答错 retry 状态也显示。
const showingFeedback = computed(() => {
  return ["pass", "fail"].includes(answerFeedback.value?.result) || isTryAgain.value;
});

const getOptionClass = (optionKey) => {
  if (!showingFeedback.value) return {};
  const isSelected = isMultipleQuestion.value
    ? Array.isArray(selectedAnswer.value) && selectedAnswer.value.includes(optionKey)
    : selectedAnswer.value === optionKey;
  const isCorrect = correctAnswerKeys.value.has(optionKey);

  if (isSelected && isCorrect && answerFeedback.value?.result === "pass") {
    return { "correct-option": true };
  }
  if (isSelected && !isCorrect) {
    return { "wrong-option": true };
  }
  return {};
};

const getOptionIcon = (optionKey) => {
  if (!showingFeedback.value) return null;
  const isSelected = isMultipleQuestion.value
    ? Array.isArray(selectedAnswer.value) && selectedAnswer.value.includes(optionKey)
    : selectedAnswer.value === optionKey;
  const isCorrect = correctAnswerKeys.value.has(optionKey);

  if (isSelected && isCorrect && answerFeedback.value?.result === "pass") return "✓";
  if (isSelected && !isCorrect) return "✕";
  return null;
};

const getOptionIconClass = (optionKey) => {
  if (!showingFeedback.value) return "";
  const isSelected = isMultipleQuestion.value
    ? Array.isArray(selectedAnswer.value) && selectedAnswer.value.includes(optionKey)
    : selectedAnswer.value === optionKey;
  const isCorrect = correctAnswerKeys.value.has(optionKey);

  if (isSelected && isCorrect && answerFeedback.value?.result === "pass") return "correct-check-icon";
  if (isSelected && !isCorrect) return "wrong-cross-icon";
  return "";
};

// ---- 工具函数 ----

const normalizeAnswer = (answer) => {
  if (Array.isArray(answer)) return [...answer].sort().join("|");
  return answer ?? "";
};

const syncSelectedAnswer = () => {
  const savedAnswer = quizAnswers.value[currentQuestion.value.qid];
  if (savedAnswer !== undefined) {
    selectedAnswer.value = Array.isArray(savedAnswer) ? [...savedAnswer] : savedAnswer;
  } else {
    selectedAnswer.value = isMultipleQuestion.value ? [] : "";
  }
};

// ---- 反馈面板 ----

const showCorrectFeedback = () => {
  answerFeedback.value = {
    type: "correct",
    result: "pass",
    title: "Correct",
    message: currentQuestion.value.explanation_native || "Your answer matches the guideline.",
    note: isLastQuestion.value
      ? "Click Complete to continue."
      : "Click Next Quiz to continue.",
  };
};

const showIncorrectFeedback = (isFinalAttempt = false) => {
  answerFeedback.value = {
    type: "incorrect",
    result: isFinalAttempt ? "fail" : "retry",
    title: "Review The Hint",
    message: currentQuestion.value.hint_native || defaultHint,
    note: isFinalAttempt
      ? isLastQuestion.value
        ? "Click Complete to continue."
        : "Click Next Quiz to continue."
      : "Click Try Again to re-attempt this question.",
  };
};

// ---- 进度上报 ----

const allQuizAnswered = computed(() => {
  return props.questions.every((question) => {
    return ["pass", "fail"].includes(questionStatusMap.value[question.qid]);
  });
});

const emitQuizState = () => {
  emit("update:quizState", {
    questionStatusMap: { ...questionStatusMap.value },
    currentQuestionId: currentQuestion.value.qid,
    answeredCount: props.questions.filter((q) =>
      ["pass", "fail"].includes(questionStatusMap.value[q.qid]),
    ).length,
    totalCount: props.questions.length,
    allAnswered: allQuizAnswered.value,
  });
};

const handleAnswerChange = () => {
  quizAnswers.value[currentQuestion.value.qid] = selectedAnswer.value;
};

// ---- 按钮操作 ----

const submitQuiz = () => {
  const records = props.questions
    .map((question) => questionRecords.value[question.qid])
    .filter(Boolean);

  isSubmitting.value = true;

  // 按 module 分组统计。
  const moduleStats = records.reduce((stats, record) => {
    const moduleKey = record.module;
    if (!stats[moduleKey]) stats[moduleKey] = { total: 0, wrong: 0 };
    stats[moduleKey].total += 1;
    if (record.result === "wrong") stats[moduleKey].wrong += 1;
    return stats;
  }, {});

  const quizAnswersPayload = {};
  const moduleOrder = [...new Set(records.map((r) => r.module))].sort();
  moduleOrder.forEach((moduleKey) => {
    const moduleRecords = records.filter((r) => r.module === moduleKey);
    quizAnswersPayload[`module_${moduleKey}`] = moduleRecords.map((record) => {
      return record.attempts.map((a) => (Array.isArray(a) ? a.join("") : a)).join(",");
    });
  });

  const correctRatio = Object.entries(moduleStats).map(([, stat]) => {
    return stat.total > 0 ? (stat.total - stat.wrong) / stat.total : 0;
  });

  passedCalibrationQuiz({
    username: props.username,
    country: props.country,
    language: props.language,
    quiz_answers: quizAnswersPayload,
    correct_ratio: correctRatio,
  }).then((res) => {
    isSubmitting.value = false;
    const passed = res?.data?.passed_calibration_quiz;
    if (passed) {
      updateUserDetailFields({
        studied_annotation_guidance: true,
        passed_calibration_quiz: true,
      });
      isQuizComplete.value = true;
      emit("quiz-passed");
    } else {
      updateUserDetailFields({ passed_calibration_quiz: false });
      ElMessageBox.alert(
        t("onboarding.quizFailedMessage"),
        t("onboarding.quizFailedTitle"),
        {
          confirmButtonText: t("onboarding.quizFailedConfirm"),
          showClose: false,
          type: "error",
        },
      ).then(() => {
        emit("quiz-failed");
      });
    }
  }).catch((err) => {
    console.error("passedCalibrationQuiz failed", err);
    isSubmitting.value = false;
    updateUserDetailFields({ passed_calibration_quiz: false });
    ElMessageBox.alert(
      t("onboarding.quizFailedMessage"),
      t("onboarding.quizFailedTitle"),
      {
        confirmButtonText: t("onboarding.quizFailedConfirm"),
        showClose: false,
        type: "error",
      },
    ).then(() => {
      emit("quiz-failed");
    });
  });
};

const moveToNextQuestion = () => {
  // 最后一题点击 Complete → 调用接口，不重置 feedback（按钮保持 Completed 状态）。
  if (currentQuestionIndex.value >= props.questions.length - 1) {
    submitQuiz();
    return;
  }

  answerFeedback.value = null;
  retryState.value = null;
  isLocked.value = false;
  currentQuestionIndex.value += 1;
};

const handleTryAgain = () => {
  // 重置选择和视觉反馈，进入第 2 次答题，解锁选项。
  isLocked.value = false;
  selectedAnswer.value = isMultipleQuestion.value ? [] : "";
  answerFeedback.value = null;
  retryState.value = null;
};

const handleMoveToNext = () => {
  moveToNextQuestion();
};

const handleCheckAnswer = () => {
  if (!hasSelectedAnswer.value) return;

  isLocked.value = true;

  const question = currentQuestion.value;
  const questionId = question.qid;
  const submittedAnswer = Array.isArray(selectedAnswer.value)
    ? [...selectedAnswer.value]
    : selectedAnswer.value;
  const correct = isAnswerCorrect();
  const nextAttemptCount = (attemptCounts.value[questionId] || 0) + 1;
  attemptCounts.value = {
    ...attemptCounts.value,
    [questionId]: nextAttemptCount,
  };

  lastCheckedAnswerByQuestion.value = {
    ...lastCheckedAnswerByQuestion.value,
    [questionId]: normalizeAnswer(selectedAnswer.value),
  };

  const existingRecord = questionRecords.value[questionId] || {
    qid: questionId,
    module: question.module,
    question,
    attempts: [],
    result: "wrong",
  };
  questionRecords.value = {
    ...questionRecords.value,
    [questionId]: {
      ...existingRecord,
      attempts: [...existingRecord.attempts, submittedAnswer],
      result: correct ? "correct" : "wrong",
    },
  };

  if (correct) {
    questionStatusMap.value = { ...questionStatusMap.value, [questionId]: "pass" };
    retryState.value = null;
    emitQuizState();
    showCorrectFeedback();
    return;
  }

  // 首次答错 → 选项红色+✕ + 显示 Hint + Try Again 按钮。
  if (nextAttemptCount < 2) {
    retryState.value = "wrong_retry";
    showIncorrectFeedback(false);
    return;
  }

  // 第二次答错 → 标记 fail，显示 hint。
  retryState.value = null;
  questionStatusMap.value = { ...questionStatusMap.value, [questionId]: "fail" };
  emitQuizState();
  showIncorrectFeedback(true);
};

// ---- 监听 ----

watch(
  () => props.resetKey,
  () => {
    currentQuestionIndex.value = 0;
    selectedAnswer.value = null;
    attemptCounts.value = {};
    answerFeedback.value = null;
    lastCheckedAnswerByQuestion.value = {};
    questionRecords.value = {};
    questionStatusMap.value = {};
    retryState.value = null;
    isLocked.value = false;
    quizAnswers.value = props.questions.reduce((answers, question) => {
      answers[question.qid] = question.question_type === "multiple_choice" ? [] : "";
      return answers;
    }, {});
    emitQuizState();
  },
);

watch(
  () => currentQuestion.value.qid,
  () => {
    syncSelectedAnswer();
    emitQuizState();
  },
  { immediate: true },
);

const defaultHint =
  "Review the guideline and compare the answer with the criteria before trying again.";
</script>

<style lang="scss" scoped>
.quiz-check-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  .content-grid {
    display: flex;
    gap: 2rem;
    margin-top: 2em;
    min-height: 0;
    & > section,
    & > .left {
      position: relative;
      display: flex;
      flex-direction: column;
      flex: 1 1 0%;
      min-height: 0;
    }
    & > aside,
    & > .right {
      flex: 0 0 auto;
      width: 33%;
      max-width: 496px;
      overflow-y: auto;
    }
  }

  .quiz-main-scroll {
    min-height: 0;
    overflow-y: auto;
  }

  .question-title {
    margin: 0;
    color: rgba(3, 45, 113, 1);
    font-size: 1.25em;
    font-weight: 500;

    span {
      margin-left: 0.4em;
      color: #667085;
      font-size: 0.85em;
      font-weight: 500;
    }
  }

  .question-prompt {
    // margin-top: 1.25em;
    padding: .5em 1.5em;
    border-left: 4px solid rgba(11, 112, 195, 1);
    background: rgba(231, 244, 255, 1);
    color: rgba(3, 45, 113, 1);
    font-size: 1em;
    // font-style: italic;
    font-weight: 400;
    line-height: 1.55;
    white-space: pre-line;
  }

  .answer-options {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 2em;

    :deep(.el-radio-group),
    :deep(.el-checkbox-group) {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
  }

  .answer-option {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: 3em;
    margin: 0 0 1em;
    padding: 0.9em 2.5em 0.9em 1.25em;
    border: 1px solid rgba(208, 213, 221, 1);
    border-radius: 0;
    background: transparent;
    color: #101828;
    font-weight: 600;
    cursor: pointer;

    :deep(.el-radio__label),
    :deep(.el-checkbox__label) {
      font-size: 1em;
      line-height: 1.7;
      white-space: normal;
      font-weight: 400;
    }

    &.is-checked {
      border-color: rgba(11, 112, 195, 1);

      :deep(.el-radio__label),
      :deep(.el-checkbox__label) {
        color: rgba(11, 112, 195, 1);
      }
    }

    &.correct-option {
      border-color: #097282 !important;
      background: rgba(96, 217, 214, 0.1);
      
    }

    &.wrong-option {
      border-color:  #800000 !important;
      background: rgba(255, 218, 214, 0.3);
    }
    

    .wrong-cross-icon {
      position: absolute;
      right: 1.25em;
      top: 50%;
      transform: translateY(-50%);
      color: #800000;
      font-weight: 700;
      font-size: 1.1em;
    }

    .correct-check-icon {
      position: absolute;
      right: 1.25em;
      top: 50%;
      transform: translateY(-50%);
      color: #097282;
      font-weight: 700;
      font-size: 1.1em;
    }
  }

  .quiz-actions {
    display: flex;
    justify-content: flex-end;
  }

  .check-button {
    min-width: 11em;
    height: 3.5em;
    border-radius: 6px;
    font-weight: 700;
    background: rgba(11, 112, 195, 1);
    color: #fff;
    border: none;

    &.is-disabled {
      background: #E0E3E6;
      color: #717882;
      cursor: not-allowed;
    }

    &.try-again-button {
      background: rgb(11, 112, 195);
      color: #fff;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 1.2em;

    .right-wrapper {
      background: rgb(242, 244, 247);
      border-radius: 10px;
      padding: 1.8em;
      display: flex;
      flex-direction: column;
      gap: 1.2em;
      flex: 1;
      overflow: auto;
      &.right-wrapper-correct{
        border: 1px solid #097282;
        background: rgba(96, 217, 214, 0.1);
        h4{
          color: #097282;
        }
      }
      &.right-wrapper-incorrect{
        border: 1px solid #800000;
        background: rgba(255, 218, 214, 0.3);
        h4{
          color: #800000;
        }
      }
    }

  

    .right-feedback-card {
      display: flex;
      align-items: flex-start;
      gap: .3em;
      border-radius: 8px;
      color: rgba(65, 71, 84, 1);
      line-height: 1.55;

      &.correct {
        .feedback-icon,
        .hint-note {
          color: #097282;
        }
      }

      &.incorrect {
        .feedback-icon,
        .hint-note {
          color: #800000;
        }
      }

      .feedback-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.4em;
        height: 1.4em;
        margin-top: -0.1em;
        font-size: 1.4em;
        flex: 0 0 auto;
      }

      h4 {
        margin: 0 0 0.5em;
        color: rgba(65, 71, 84, 1);
        font-size: 1em;
      }

      p {
        margin: 0;
        white-space: pre-line;
      }

      .hint-note {
        margin-top: 1em;
        color: rgba(11, 112, 195, 1);
        font-weight: 700;
      }
    }
  }
}

@media (max-width: 1200px) {
  .quiz-check-page {
    .content-grid {
      flex-direction: column;

      .right {
        width: 100%;
        max-width: none;
      }
    }
  }
}
</style>
