<template>
  <el-dialog
    v-if="!isAdminPage"
    v-model="dialogVisible"
    title=""
    max-width="2000"
    width="70%"
    class="survey-dialog"
    align-center
  >
    <div class="quiz-dialog-layout" style="height: 80vh;"
      <!-- 左侧导航栏 -->
      <aside class="quiz-sidebar">
        <div class="quiz-sidebar-header">
          <span>OVERALL PROGRESS</span>
          <strong>{{ answeredCount }}/{{ questions.length }}</strong>
        </div>
        <div class="quiz-progress-track">
          <span class="quiz-progress-value" :style="{ width: progressPercent + '%' }"></span>
        </div>

        <div class="quiz-module-list">
          <div
            v-for="(moduleQuestions, mod) in groupedModules"
            :key="mod"
            class="quiz-module-group"
          >
            <div class="quiz-module-title">
              <el-icon v-if="isModuleCompleted(mod)" class="module-complete-icon"><CircleCheckFilled /></el-icon>
              <span>{{ moduleTitles[mod]?.title || `Module ${mod}` }}</span>
            </div>
            <ul class="quiz-question-list">
              <li
                v-for="q in moduleQuestions"
                :key="q.qid"
                class="quiz-question-item"
                :class="{
                  active: globalIndex(q) === currentIdx,
                  done: questionStatus[q.qid] === 'pass',
                  wrong: questionStatus[q.qid] === 'fail',
                }"
                @click="handleJumpTo(globalIndex(q))"
              >
                <span class="quiz-q-status">
                  <el-icon v-if="questionStatus[q.qid] === 'pass'" class="q-pass-icon"><CircleCheckFilled /></el-icon>
                  <el-icon v-else-if="questionStatus[q.qid] === 'fail'" class="q-fail-icon"><Warning /></el-icon>
                  <span v-else class="q-pending-dot"></span>
                </span>
                <span class="quiz-q-label">Q{{ globalIndex(q) + 1 }}</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <!-- 右侧 QuizCheck -->
      <div class="quiz-dialog-main">
        <QuizCheck
          ref="quizCheckRef"
          :questions="questions"
          :moduleTitles="moduleTitles"
          :loading="loading"
          :resetKey="resetKey"
          :username="username"
          :country="country"
          :language="language"
          @quiz-passed="handleQuizPassed"
        />
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import { CircleCheckFilled, Warning } from "@element-plus/icons-vue";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import QuizCheck from "./onnborading/Components/QuizCheck.vue";

const route = useRoute();

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  questions: { type: Array, default: () => [] },
  moduleTitles: { type: Object, default: () => ({}) },
  loading: { type: Boolean, default: false },
  resetKey: { type: Number, default: 0 },
  username: { type: String, default: "" },
  country: { type: String, default: "" },
  language: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue", "quiz-passed"]);

const quizCheckRef = ref(null);
const currentIdx = ref(0);
const questionStatus = ref({});

const dialogVisible = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const isAdminPage = computed(() => {
  return route.path.startsWith("/CulturalValueAnnotation/admin") ||
    route.path.startsWith("/CulturalValueAnnotation/admin-export");
});

// ---- 侧边栏数据 ----

const groupedModules = computed(() => {
  const groups = {};
  props.questions.forEach((q) => {
    const mod = q.module;
    if (!groups[mod]) groups[mod] = [];
    groups[mod].push(q);
  });
  return groups;
});

const globalIndex = (q) => {
  return props.questions.findIndex((item) => item.qid === q.qid);
};

const answeredCount = computed(() => {
  return props.questions.filter((q) =>
    ["pass", "fail"].includes(questionStatus.value[q.qid]),
  ).length;
});

const progressPercent = computed(() => {
  return props.questions.length > 0
    ? (answeredCount.value / props.questions.length) * 100
    : 0;
});

const isModuleCompleted = (mod) => {
  const moduleQuestions = groupedModules.value[mod] || [];
  return moduleQuestions.length > 0 && moduleQuestions.every(
    (q) => ["pass", "fail"].includes(questionStatus.value[q.qid]),
  );
};

// ---- 同步 QuizCheck 状态 ----

const syncQuizState = () => {
  if (!quizCheckRef.value) return;
  currentIdx.value = quizCheckRef.value.currentQuestionIndex;
  questionStatus.value = { ...quizCheckRef.value.questionStatusMap };
};

watch(
  () => props.resetKey,
  () => {
    syncQuizState();
  },
);

// 定时轮询同步（因为 QuizCheck 内部状态变化不会触发父组件 watch）
let syncTimer = null;
watch(
  () => dialogVisible.value,
  (visible) => {
    if (visible) {
      syncQuizState();
      syncTimer = setInterval(syncQuizState, 300);
    } else {
      clearInterval(syncTimer);
      syncTimer = null;
    }
  },
);

const handleJumpTo = (index) => {
  if (quizCheckRef.value) {
    quizCheckRef.value.jumpToQuestion(index);
    syncQuizState();
  }
};

const handleQuizPassed = () => {
  emit("quiz-passed");
};
</script>

<style scoped lang="scss">
.quiz-dialog-layout {
  display: flex;
  gap: 1.5em;
  max-height: 80vh;
}

.quiz-sidebar {
  flex: 0 0 220px;
  max-height: 80vh;
  overflow-y: auto;
  border-right: 1px solid #e5e7eb;
  padding-right: 1.2em;

  .quiz-sidebar-header {
    display: flex;
    justify-content: space-between;
    font-size: 0.75em;
    font-weight: 600;
    color: #667085;
    margin-bottom: 0.5em;
  }

  .quiz-progress-track {
    height: 6px;
    background: #e5e7eb;
    border-radius: 3px;
    margin-bottom: 1.5em;
    overflow: hidden;

    .quiz-progress-value {
      display: block;
      height: 100%;
      background: rgba(11, 112, 195, 1);
      border-radius: 3px;
      transition: width 0.3s ease;
    }
  }

  .quiz-module-group {
    margin-bottom: 1em;
  }

  .quiz-module-title {
    display: flex;
    align-items: center;
    gap: 0.4em;
    font-size: 0.8em;
    font-weight: 600;
    color: rgba(3, 45, 113, 1);
    margin-bottom: 0.5em;

    .module-complete-icon {
      color: #097282;
      font-size: 1em;
    }
  }

  .quiz-question-list {
    list-style: none;
    padding: 0;
    margin: 0;

    .quiz-question-item {
      display: flex;
      align-items: center;
      gap: 0.5em;
      padding: 0.4em 0.6em;
      cursor: pointer;
      border-radius: 4px;
      font-size: 0.85em;
      color: #344054;
      transition: background 0.15s;

      &:hover {
        background: #f3f4f6;
      }

      &.active {
        background: rgba(11, 112, 195, 0.1);
        color: rgba(11, 112, 195, 1);
        font-weight: 600;
      }

      &.done {
        color: #097282;
      }

      &.wrong {
        color: #800000;
      }

      .quiz-q-status {
        display: flex;
        align-items: center;

        .q-pass-icon {
          color: #097282;
          font-size: 0.9em;
        }
        .q-fail-icon {
          color: #800000;
          font-size: 0.9em;
        }
        .q-pending-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d0d5dd;
        }
      }

      .quiz-q-label {
        font-weight: inherit;
      }
    }
  }
}

.quiz-dialog-main {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  max-height: 80vh;
}
</style>
