<template>
  <div class="quiz-check-page">
    <section class="hero-card">
      <div class="hero-copy">
        <span class="step-pill">Quiz {{ currentQuestionIndex + 1 }}</span>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </section>

    <div class="content-grid">
      <section class="left" style="padding-right: 1em;">
        <div class="quiz-main-scroll">
          <p class="question-title">
            {{ currentQuestionIndex + 1 }}. {{ currentQuestion.topic_2_native }}
            <span>{{ isMultipleQuestion ? "(Multiple)" : "(Single)" }}</span>
          </p>

          <div v-if="currentQuestion.stem_native" class="question-prompt">
            {{ currentQuestion.stem_native }}
          </div>

          <div class="answer-options">
            <el-checkbox-group
              v-if="isMultipleQuestion"
              v-model="selectedAnswer"
              :disabled="isCurrentQuestionChecked"
              @change="handleAnswerChange"
            >
              <el-checkbox
                v-for="option in currentQuestion.options"
                :key="`${currentQuestion.qid}-${option.key}`"
                class="answer-option"
                border
                :label="option.key"
              >
                {{ option.text_native }}
              </el-checkbox>
            </el-checkbox-group>
            <el-radio-group
              v-else
              v-model="selectedAnswer"
              :disabled="isCurrentQuestionChecked"
              @change="handleAnswerChange"
            >
              <el-radio
                v-for="option in currentQuestion.options"
                :key="`${currentQuestion.qid}-${option.key}`"
                class="answer-option"
                border
                :label="option.key"
              >
                {{ option.text_native }}
              </el-radio>
            </el-radio-group>
          </div>
        </div>

        <div class="quiz-actions">
          <el-button
            class="check-button"
            :class="{ disabled: isPrimaryActionDisabled }"
            :disabled="isPrimaryActionDisabled"
            type="primary"
            @click="handlePrimaryAction"
            >{{ primaryActionText }}</el-button
          >
        </div>
      </section>

      <aside
        v-if="answerFeedback"
        class="right"
        :class="answerFeedback.type"
      >
        <div>
          <span class="feedback-icon">{{ answerFeedback.type === "correct" ? "✓" : "✕" }}</span>
          <div>
            <h4>{{ answerFeedback.title }}</h4>
            <p>{{ answerFeedback.message }}</p>
            <p class="hint-note">{{ answerFeedback.note }}</p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps({
  questions: {
    type: Array,
    required: true,
  },
  resetKey: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: "Annotation Quality Check Quiz",
  },
  description: {
    type: String,
    default:
      "Complete the following quiz to verify your understanding before proceeding to the survey.",
  },
});

const emit = defineEmits([
  "back",
  "complete",
  "update:quizState",
]);

const currentQuestionIndex = ref(0);
const selectedAnswer = ref(null);
const attemptCounts = ref({});
const answerFeedback = ref(null);
const lastCheckedAnswerByQuestion = ref({});
const questionRecords = ref({});
const questionStatusMap = ref({});

// 内部维护的答案，用于切换题目时恢复选择。
const quizAnswers = ref(
  props.questions.reduce((answers, question) => {
    answers[question.qid] = question.question_type === "multiple_choice" ? [] : "";
    return answers;
  }, {}),
);

const defaultHint =
  "Review the guideline and compare the answer with the criteria before trying again.";

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

const isCurrentQuestionChecked = computed(() => {
  return ["pass", "fail"].includes(answerFeedback.value?.result);
});

const isLastQuestion = computed(() => {
  return currentQuestionIndex.value >= props.questions.length - 1;
});

const primaryActionText = computed(() => {
  if (!isCurrentQuestionChecked.value) {
    return "Check Answer";
  }

  return isLastQuestion.value ? "Complete" : "Next Quiz";
});

const hasSelectedAnswerChangedAfterCheck = computed(() => {
  const questionId = currentQuestion.value.qid;
  const lastCheckedAnswer = lastCheckedAnswerByQuestion.value[questionId];

  if (lastCheckedAnswer === undefined) {
    return true;
  }

  return normalizeAnswer(selectedAnswer.value) !== lastCheckedAnswer;
});

const isPrimaryActionDisabled = computed(() => {
  return (
    !isCurrentQuestionChecked.value &&
    (!hasSelectedAnswer.value || !hasSelectedAnswerChangedAfterCheck.value)
  );
});

const normalizeAnswer = (answer) => {
  if (Array.isArray(answer)) {
    return [...answer].sort().join("|");
  }

  return answer ?? "";
};

const getCorrectAnswer = () => {
  return currentQuestion.value.answer_key ?? null;
};

const isAnswerCorrect = () => {
  const correctAnswer = getCorrectAnswer();

  if (correctAnswer === null) {
    return hasSelectedAnswer.value;
  }

  return normalizeAnswer(selectedAnswer.value) === normalizeAnswer(correctAnswer);
};

const syncSelectedAnswer = () => {
  const savedAnswer = quizAnswers.value[currentQuestion.value.qid];
  if (savedAnswer !== undefined) {
    selectedAnswer.value = Array.isArray(savedAnswer) ? [...savedAnswer] : savedAnswer;
  } else {
    selectedAnswer.value = isMultipleQuestion.value ? [] : "";
  }
};

// 是否所有题目都已完成（pass 或 fail）。
const allQuizAnswered = computed(() => {
  return props.questions.every((question) => {
    return ["pass", "fail"].includes(questionStatusMap.value[question.qid]);
  });
});

// 计算进度状态并通过 emit 上报给父组件。
const emitQuizState = () => {
  const state = {
    questionStatusMap: { ...questionStatusMap.value },
    currentQuestionId: currentQuestion.value.qid,
    answeredCount: props.questions.filter((q) =>
      ["pass", "fail"].includes(questionStatusMap.value[q.qid]),
    ).length,
    totalCount: props.questions.length,
    allAnswered: allQuizAnswered.value,
  };
  emit("update:quizState", state);
};

const handleAnswerChange = () => {
  quizAnswers.value[currentQuestion.value.qid] = selectedAnswer.value;
};

const moveToNextQuestion = () => {
  answerFeedback.value = null;

  if (currentQuestionIndex.value >= props.questions.length - 1) {
    const records = props.questions
      .map((question) => questionRecords.value[question.qid])
      .filter(Boolean);
    emit("complete", records);
    return;
  }

  currentQuestionIndex.value += 1;
};

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
      : "You have one more chance for this question.",
  };
};

const handlePrimaryAction = () => {
  if (isCurrentQuestionChecked.value) {
    moveToNextQuestion();
    return;
  }

  handleCheckAnswer();
};

const handleCheckAnswer = () => {
  if (!hasSelectedAnswer.value) {
    return;
  }

  const question = currentQuestion.value;
  const questionId = question.qid;
  lastCheckedAnswerByQuestion.value = {
    ...lastCheckedAnswerByQuestion.value,
    [questionId]: normalizeAnswer(selectedAnswer.value),
  };
  const nextAttemptCount = (attemptCounts.value[questionId] || 0) + 1;
  attemptCounts.value = {
    ...attemptCounts.value,
    [questionId]: nextAttemptCount,
  };

  const submittedAnswer = Array.isArray(selectedAnswer.value)
    ? [...selectedAnswer.value]
    : selectedAnswer.value;
  const correct = isAnswerCorrect();
  const existingRecord = questionRecords.value[questionId] || {
    qid: questionId,
    module: question.module,
    question,
    attempts: [],
    result: "wrong",
  };
  const recordPatch = {
    ...existingRecord,
    attempts: [...existingRecord.attempts, submittedAnswer],
    result: correct ? "correct" : "wrong",
  };
  questionRecords.value = {
    ...questionRecords.value,
    [questionId]: recordPatch,
  };

  if (correct) {
    questionStatusMap.value = {
      ...questionStatusMap.value,
      [questionId]: "pass",
    };
    emitQuizState();
    showCorrectFeedback();
    return;
  }

  if (nextAttemptCount >= 2) {
    questionStatusMap.value = {
      ...questionStatusMap.value,
      [questionId]: "fail",
    };
    emitQuizState();
    showIncorrectFeedback(true);
    return;
  }

  showIncorrectFeedback();
};

// 父组件递增 resetKey 时，重置全部内部答题状态，回到第一题。
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

</script>

<style lang="scss" scoped>
.quiz-check-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  .content-grid {
    margin-top: 3em;
    flex: 1 1 auto;
    min-height: 0;
    & > section,
    & > .left {
      position: relative;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }
    & > aside,
    & > .right {
      align-self: flex-start;
      max-height: 100%;
      overflow-y: auto;
    }
  }

  .quiz-main-scroll {
    min-height: 0;
    overflow-y: auto;
    max-height: calc(100% - 6em);
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
    margin-top: 1.25em;
    padding: .5em 1.5em;
    border-left: 4px solid rgba(11, 112, 195, 1);
    background: rgba(231, 244, 255, 1);
    color: rgba(3, 45, 113, 1);
    font-size: 1em;
    font-style: italic;
    font-weight: 700;
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
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: 3em;
    margin: 0 0 1em;
    padding: 0.9em 1.25em;
    border: 1px solid rgba(208, 213, 221, 1);
    border-radius: 0;
    background: transparent;
    color: #101828;
    font-weight: 600;

    :deep(.el-radio__label),
    :deep(.el-checkbox__label) {
      font-size: 1em;
      line-height: 1.7;
      white-space: normal;
    }

    &.is-checked {
      border-color: rgba(11, 112, 195, 1);

      :deep(.el-radio__label),
      :deep(.el-checkbox__label) {
        color: rgba(11, 112, 195, 1);
      }
    }

    &.is-disabled {
      opacity: 0.6;

      :deep(.el-radio__label),
      :deep(.el-checkbox__label) {
        color: #101828;
      }

      &.is-checked {
        :deep(.el-radio__label),
        :deep(.el-checkbox__label) {
          color: rgba(11, 112, 195, 1);
        }

        :deep(.el-radio__inner),
        :deep(.el-checkbox__inner) {
          background: rgba(11, 112, 195, 1);
          border-color: rgba(11, 112, 195, 1);
        }
      }
    }
  }

  .quiz-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 2em;
  }

  .check-button {
    min-width: 11em;
    height: 3.5em;
    border-radius: 6px;
    font-weight: 700;
  }

  .check-button {
    background: rgba(11, 112, 195, 1);
    color: #fff;
    border: none;

    &.disabled {
      background: rgba(223, 227, 234, 1);
      color: rgba(102, 112, 133, 1);
      cursor: not-allowed;
    }
  }

  .right > div {
    display: flex;
    align-items: flex-start;
    gap: 1em;
    padding: 2em;
    border-radius: 8px;
    background: rgba(242, 244, 247, 1);
    color: rgba(65, 71, 84, 1);
    line-height: 1.55;

    &.correct {
      .feedback-icon,
      .hint-note {
        color: rgba(18, 126, 68, 1);
      }
    }

    &.incorrect {
      .feedback-icon,
      .hint-note {
        color: rgba(180, 35, 24, 1);
      }
    }

    .feedback-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.25em;
      height: 1.25em;
      margin-top: 0.1em;
      border: 2px solid currentColor;
      border-radius: 50%;
      font-size: 1em;
      font-weight: 800;
      line-height: 1;
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