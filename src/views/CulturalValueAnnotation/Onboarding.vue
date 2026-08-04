<template>
  <div
    style="background-color: rgba(247, 249, 252, 1); flex: 1; padding-top: 0em"
  >
    <div class="onboarding-page">
      <div class="onboarding-layout">
        <aside class="step-side-nav">
          <div class="onboarding-aside-intro">
            <p class="welcome-title">Welcome 👋</p>
            <p class="welcome-desc">Complete onboarding to unlock annotation tasks.</p>

            <div class="overall-progress-header">
              <span>OVERALL PROGRESS</span>
              <strong>{{ overallCompletedCount }}/{{ overallTotalCount }}</strong>
            </div>
            <div class="overall-progress-track">
              <span class="overall-progress-value" :style="overallProgressStyle"></span>
            </div>
          </div>

          <div
            role="button"
            tabindex="0"
            class="flow-step-item survey-step"
            :class="{
              active: activeMainStepIndex === 1,
              completed: surveyCompleted,
            }"
            @click="handleMainStepChange(1)"
            @keydown.enter.prevent="handleMainStepChange(1)"
            @keydown.space.prevent="handleMainStepChange(1)"
          >
            <div class="step-group-main">
              <div class="step-group-icon">
                <el-icon v-if="surveyCompleted" class="main-step-complete-icon"><CircleCheckFilled /></el-icon>
                <el-icon v-else><Document /></el-icon>
              </div>
              <div class="step-group-content">
                <h4 class="step-title-text">1.Fill Survey</h4>
              </div>
            </div>
          </div>

          <div
            role="button"
            tabindex="0"
            class="flow-step-item"
            :class="{
              active: activeMainStepIndex === 2,
              completed: trainingVideoStepCompleted,
              locked: !canEnterTrainingVideo,
            }"
            :aria-disabled="!canEnterTrainingVideo"
            @click="handleMainStepChange(2)"
            @keydown.enter.prevent="handleMainStepChange(2)"
            @keydown.space.prevent="handleMainStepChange(2)"
          >
            <div class="step-group-main">
              <div class="step-group-icon">
                <el-icon v-if="trainingVideoStepCompleted" class="main-step-complete-icon"><CircleCheckFilled /></el-icon>
                <el-icon v-else><VideoPlay /></el-icon>
              </div>
              <div class="step-group-content">
                <h4 class="step-title-text">2.Watch Training Video</h4>
              </div>
            </div>
          </div>

          <div
            v-if="isNeedPassQuizCheck"
            role="button"
            tabindex="0"
            class="flow-step-item quiz-step"
            :class="{
              active: activeMainStepIndex === 3,
              completed: quizCompleted,
              locked: !trainingVideoStepCompleted,
            }"
            :aria-disabled="!trainingVideoStepCompleted"
            @click="handleMainStepChange(3)"
            @keydown.enter.prevent="handleMainStepChange(3)"
            @keydown.space.prevent="handleMainStepChange(3)"
          >
            <div class="step-group-main">
              <div class="step-group-icon">
                <el-icon v-if="quizCompleted" class="main-step-complete-icon"><CircleCheckFilled /></el-icon>
                <el-icon v-else><List /></el-icon>
              </div>
              <div class="step-group-content">
                <h4 class="step-title-text">3.Complete Quiz</h4>
                <div class="step-group-body">
                  <!-- <p class="step-group-progress">
                    {{ quizCompleted ? "Completed" : quizCheckState.answeredCount + " / " + quizCheckState.totalCount + " Completed" }}
                  </p> -->
                  <ul class="video-substeps" v-for="(mod, index) in quizModules" :key="mod.module">
                    <li class="module-header" :class="{ 'module-active': isQuizModuleActive(mod.items) }">
                      <!-- <p>Module {{ mod.module }}</p> -->
                       <p>Module {{ index + 1 }}</p>
                      <p>{{ quizModuleTitles[mod.module]?.title || '' }}</p>
                    </li>
                    <li
                      v-for="q in mod.items"
                      :key="q.qid"
                      :class="{
                        done: ['pass', 'fail'].includes(quizCheckState.questionStatusMap[q.qid]),
                        current: isQuizQuestionCurrent(q.qid) && activeMainStepIndex == 3,
                        locked: !isQuizQuestionCurrent(q.qid) && !['pass', 'fail'].includes(quizCheckState.questionStatusMap[q.qid]),
                      }"
                    >
                      <el-icon v-if="quizCheckState.questionStatusMap[q.qid] === 'pass'" class="sub-step-pass"><CircleCheck /></el-icon>
                      <el-icon v-else-if="quizCheckState.questionStatusMap[q.qid] === 'fail'" class="sub-step-fail"><CircleClose /></el-icon>
                      <span
                        v-else-if="isQuizQuestionCurrent(q.qid)"
                        class="current-circle-icon"
                      ></span>
                      <el-icon v-else><Lock /></el-icon>
                      <span>QUIZ {{ q.quizIndex + 1 }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </aside>

        <section class="step-content-area">
          <div v-show="activeMainStepIndex === 1">
            <Survey
              ref="surveyRef"
              :registered-user-name="registeredUserName"
              :registered-user-country="registeredUserCountry"
              :registered-user-language="registeredUserLanguage"
              :surveys-completed="surveyCompleted"
              @survey-next="handleSurveyNext"
            />
          </div>

          <TrainingVideo
            v-show="activeMainStepIndex === 2"
            v-model:active-video-step-index="activeTrainingVideoStepIndex"
            :video-steps="trainingVideoSteps"
            :training-video-completion-status="trainingVideoCompletionStatus"
            :has-studied-annotation-guidance="hasStudiedTrainingVideoGuidance"
            :registered-user-name="registeredUserName"
            :registered-user-country="registeredUserCountry"
            :registered-user-language="registeredUserLanguage"
            @complete-video="handleTrainingVideoCompleted"
            @continue-to-quiz="moveFromTrainingVideoToQuizStep"
          />

          <QuizCheck
            v-show="activeMainStepIndex === 3"
            :reset-key="quizResetKey"
            :questions="quizQuestions"
            :loading="quizLoading"
            :username="registeredUserName"
            :country="registeredUserCountry"
            :language="registeredUserLanguage"
            v-model:quiz-state="quizCheckState"
            @back="handleMainStepChange(2)"
            @quiz-passed="handleQuizPassed"
            @quiz-failed="handleQuizFailed"
          />

        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { useI18n } from "vue-i18n";
import {
  VideoPlay,
  CircleCheck,
  CircleCheckFilled,
  CircleClose,
  Lock,
  List,
  Document,
} from "@element-plus/icons-vue";
import { computed, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import QuizCheck from "./onnborading/Components/QuizCheck.vue";
import TrainingVideo from "./onnborading/Components/TrainingVideo.vue";
import Survey from "./onnborading/Components/Survey.vue";
import {
  hasStudiedCulturalValueAnnotationVideoGuidance,
  hasPassedCalibrationQuiz,
  updateUserDetailFields,
} from "@/utils/culturalValueAnnotationAuth";
import {
  createOnboardingSteps,
  getStoredOnboardingUserDetail,
} from "@/utils/culturalValueOnboarding";
import { fetchOnboardingQuizQuestions } from "@/utils/culturalValueOnboardingQuiz";

const TRAINING_VIDEO_PROGRESS_STORAGE_PREFIX =
  "culturalValueAnnotationTrainingVideoProgress";

// 主流程状态：1=问卷，2=视频引导，3=测验（按用户配置显示）。
const activeTrainingVideoStepIndex = ref(1);
const activeMainStepIndex = ref(1);

// 是否需要通过 quiz（中国用户需要）。
const isNeedPassQuizCheck = computed(() => {
  // return registeredUserCountry.value?.toLowerCase() === "china";
  return false;
});

// Quiz 完成状态；需要 Quiz 的用户在视频完成后进入该步骤。
const quizCompleted = ref(false);

// Quiz 是否有任意一题 fail。
const quizHasFailedQuestion = computed(() => {
  return Object.values(quizCheckState.value.questionStatusMap).some((s) => s === "fail");
});

// 当前注册用户信息，用于展示问卷填写姓名和提交引导完成状态。
const registeredUserName = ref("hua");
const registeredUserCountry = ref("");
const registeredUserLanguage = ref("");

// Survey 组件引用，用于读取 allSurveysChecked。
const surveyRef = ref(null);
const surveyCompleted = ref(false);

// 长期完成态来自 userDetail.studied_annotation_guidance。
const hasStudiedTrainingVideoGuidance =
  hasStudiedCulturalValueAnnotationVideoGuidance();
const router = useRouter();
const { t } = useI18n();

// 训练视频步骤只保存视频元数据，完成状态单独存在 trainingVideoCompletionStatus。
const trainingVideoSteps = ref(
  createOnboardingSteps(getStoredOnboardingUserDetail().language),
);
const trainingVideoCompletionStatus = ref({});

// 页面内轻量测验题库，从 API 异步加载。
const quizQuestions = ref([]);
const quizModuleTitles = ref({});
const quizLoading = ref(true);

const quizResetKey = ref(0);
const quizCheckState = ref({
  questionStatusMap: {},
  currentQuestionId: "",
  answeredCount: 0,
  totalCount: 0,
  allAnswered: false,
});

// Quiz 子步骤 current 状态：当前活跃题且未完成。
const isQuizQuestionCurrent = (questionId) => {
  // if (activeMainStepIndex.value !== 2) {
  //   return false;
  // }
  return (
    quizCheckState.value.currentQuestionId === questionId &&
    !["pass", "fail"].includes(quizCheckState.value.questionStatusMap[questionId])
  );
};

// 按 module 分组 quiz 题目，供左侧栏展示。
const quizModules = computed(() => {
  const map = {};
  quizQuestions.value.forEach((q, idx) => {
    const mod = q.module || "Other";
    if (!map[mod]) map[mod] = [];
    map[mod].push({ ...q, quizIndex: idx });
  });
  return Object.entries(map).map(([module, items]) => ({ module, items }));
});

// 判断某个 module 是否已经开始（有 current 或已完成的题目）
const isQuizModuleActive = (moduleItems) => {
  if( !trainingVideoStepCompleted.value) return false;
  return moduleItems.some(
    (q) =>
      ["pass", "fail"].includes(quizCheckState.value.questionStatusMap[q.qid]) ||
      isQuizQuestionCurrent(q.qid)
  );
};

// 问卷完成数量：点击 start annotation 后整体算 1，否则为 0。
const completedSurveyCount = computed(() => {
  return surveyCompleted.value ? 1 : 0;
});

// 整体进度总数 = 视频数 + Quiz 题数 + 问卷（整体算 1 项）。
const overallTotalCount = computed(() => {
  const quizCount = isNeedPassQuizCheck.value ? quizQuestions.value.length : 0;
  return trainingVideoSteps.value.length + quizCount + 1;
});

// 整体进度完成数，用于顶部进度文案。
const overallCompletedCount = computed(() => {
  const quizCount = isNeedPassQuizCheck.value ? quizCheckState.value.answeredCount : 0;
  return (
    completedTrainingVideoStepCount.value +
    quizCount +
    completedSurveyCount.value
  );
});

// 左侧 Overall Progress 进度条宽度。
const overallProgressStyle = computed(() => {
  const total = overallTotalCount.value || 1;
  const progress = (overallCompletedCount.value / total) * 100;

  return {
    width: `${progress}%`,
  };
});

// 训练视频步骤是否完成：老用户看 userDetail，新用户看当前视频完成数。
const trainingVideoStepCompleted = computed(() => {
  return (
    hasStudiedTrainingVideoGuidance ||
    completedTrainingVideoStepCount.value === trainingVideoSteps.value.length
  );
});

// Survey 是第一步，完成后才允许进入培训视频。
const canEnterTrainingVideo = computed(() => {
  return surveyCompleted.value;
});

// 统计训练视频完成数量，用于左侧第一步进度和整体进度。
const completedTrainingVideoStepCount = computed(() => {
  return trainingVideoSteps.value.filter((trainingVideoStep) => {
    return isTrainingVideoStepCompleted(trainingVideoStep.id);
  }).length;
});

// 训练视频进度按用户单独存储，值保持为 { video1: true, video2: true } 这种简单格式。
const getTrainingVideoProgressStorageKey = () => {
  const username = registeredUserName.value?.trim() || "__anonymous__";
  return `${TRAINING_VIDEO_PROGRESS_STORAGE_PREFIX}:${username}`;
};

// 读取当前用户的训练视频进度，异常数据直接当作未看过。
const getTrainingVideoProgressStorage = () => {
  try {
    return JSON.parse(
      localStorage.getItem(getTrainingVideoProgressStorageKey()) || "{}",
    );
  } catch {
    return {};
  }
};

// 判断某个训练视频是否已完成，统一用于左侧状态、解锁和子组件快进逻辑。
const isTrainingVideoStepCompleted = (stepId) => {
  return (
    hasStudiedTrainingVideoGuidance ||
    trainingVideoCompletionStatus.value[`video${stepId}`] === true
  );
};

// 进入页面时恢复训练视频完成状态；已完成整套引导的用户直接视为全部完成。
const restoreTrainingVideoProgress = () => {
  if (hasStudiedTrainingVideoGuidance) {
    trainingVideoCompletionStatus.value = trainingVideoSteps.value.reduce(
      (status, trainingVideoStep) => {
        status[`video${trainingVideoStep.id}`] = true;
        return status;
      },
      {},
    );
    return;
  }

  trainingVideoCompletionStatus.value = getTrainingVideoProgressStorage();

  const firstIncompleteTrainingVideoStep = trainingVideoSteps.value.find(
    (trainingVideoStep) => !isTrainingVideoStepCompleted(trainingVideoStep.id),
  );
  activeTrainingVideoStepIndex.value = firstIncompleteTrainingVideoStep?.id ?? 1;
};

// 每个视频看完后把 completed 状态落到本地，刷新后从第一个未完成视频继续。
const persistTrainingVideoProgress = () => {
  if (hasStudiedTrainingVideoGuidance) {
    return;
  }

  localStorage.setItem(
    getTrainingVideoProgressStorageKey(),
    JSON.stringify(trainingVideoCompletionStatus.value),
  );
};

// 左侧主流程点击切换：Survey、Video、Quiz 三个阶段按顺序解锁。
const handleMainStepChange = (stepId) => {
  // 三个阶段按顺序解锁，防止跳步进入后续流程。
  if (stepId === 1) {
    // Survey 是第一步，始终允许返回查看。
    activeMainStepIndex.value = 1;
    return;
  }

  if (stepId === 2) {
    if (!canEnterTrainingVideo.value) {
      return;
    }

    activeMainStepIndex.value = 2;
    return;
  }

  if (stepId === 3) {
    if (!isNeedPassQuizCheck.value || !trainingVideoStepCompleted.value) return;
    activeMainStepIndex.value = 3;
    return;
  }
};

// TrainingVideo 播放结束后回传当前视频 id，父页面更新独立完成状态。
const handleTrainingVideoCompleted = (stepId) => {
  trainingVideoCompletionStatus.value = {
    ...trainingVideoCompletionStatus.value,
    [`video${stepId}`]: true,
  };
};

// TrainingVideo 组件完成最后一个视频后，通知父页面切到下一步。
const moveFromTrainingVideoToQuizStep = () => {
  // 无需 Quiz 的用户完成唯一视频后即可进入正式标注。
  if (!isNeedPassQuizCheck.value) {
    router.push("/CulturalValueAnnotation/home");
    return;
  }
  activeMainStepIndex.value = 3;
};

// Quiz 通过后完成全部 Onboarding，进入正式标注。
const handleQuizPassed = () => {
  quizCompleted.value = true;
  router.push("/CulturalValueAnnotation/home");
};

// Quiz 未通过：重置本地状态，回到训练视频步骤。
const handleQuizFailed = () => {
  quizResetKey.value += 1;
  quizCompleted.value = false;
  activeMainStepIndex.value = 2;
};

// Survey 完成状态只在当前 Onboarding 页面有效，进入页面时始终重新开始。
const handleSurveyNext = () => {
  surveyCompleted.value = true;
  activeMainStepIndex.value = 2;
};

// 复制注册用户名，方便用户粘贴到问卷中保持姓名一致。

// ---------- 页面初始化：决定 Onboarding 的起始步骤 ----------
//
// Onboarding 分三个阶段：
//   Step 1 — 问卷（仅保存在当前页面状态，进入 Onboarding 时始终未完成）
//   Step 2 — 培训视频（studied_annotation_guidance，来自服务端）
//   Step 3 — 校准测验（passed_calibration_quiz，来自服务端，仅部分用户需要）
onMounted(async () => {
  const storedUserDetail = getStoredOnboardingUserDetail();
  registeredUserName.value = storedUserDetail.username;
  registeredUserCountry.value = storedUserDetail.country;
  registeredUserLanguage.value = storedUserDetail.language;

  // 从 API 获取 quiz 题目。
  try {
    const { items, moduleTitles } = await fetchOnboardingQuizQuestions(
      storedUserDetail.country,
      storedUserDetail.language,
    );
    quizQuestions.value = items;
    quizModuleTitles.value = moduleTitles;
    quizCheckState.value.totalCount = items.length;
  } catch (err) {
    console.error("Failed to fetch calibration quiz", err);
  } finally {
    quizLoading.value = false;
  }

  // 读取 Step 3 完成标志（passed_calibration_quiz），来自 localStorage。
  const quizDone = hasPassedCalibrationQuiz();
  quizCompleted.value = quizDone; // 同步左侧侧边栏的 quiz 完成状态

  // 只要进入 Onboarding，Survey 就从未完成状态开始，不读取持久化状态。
  surveyCompleted.value = false;

  // 先恢复训练视频进度，避免未完成引导的用户刷新后又从第一个视频开始。
  restoreTrainingVideoProgress();
  activeMainStepIndex.value = 1;
});

// TrainingVideo 完成状态变化后持久化，刷新后可继续未完成的视频。
watch(
  trainingVideoCompletionStatus,
  () => {
    persistTrainingVideoProgress();
  },
  { deep: true },
);
</script>

<style lang="scss" scoped>
.onboarding-page {
  min-height: 100%;

  .onboarding-layout {
    height: calc(100vh - 12em);
    max-width: 2300px;
    margin: 0 auto;
    padding: 1em 6em 0em 0;
    display: grid;
    grid-template-columns: 264px minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    gap: 2em;
  }

  .step-side-nav {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 1.25em 0.75em;
    border-radius: 8px;
    background: rgba(231, 239, 248, 1);
    color: rgba(65, 71, 84, 1);
    overflow-y: auto;

    .onboarding-aside-intro {
      padding: 0.2em 0.25em 0.9em;
      font-size: 14px;
      .welcome-title {
        margin: 0;
        color: rgba(11, 112, 195, 1);
        font-size: 0.9em;
        font-weight: 600;
      }

      .welcome-desc {
        margin: 0.3em 0 1.2em;
        color: rgba(11, 112, 195, 1);
        line-height: 1.3;
      }

      .overall-progress-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.86em;
        font-weight: 700;
        letter-spacing: 0.06em;

        span {
          color: rgba(65, 71, 84, 1);
        }

        strong {
          color: rgba(11, 112, 195, 1);
        }
      }

      .overall-progress-track {
        margin-top: 0.45em;
        width: 100%;
        height: 4px;
        border-radius: 999px;
        background: rgba(195, 204, 216, 1);
        overflow: hidden;

        .overall-progress-value {
          display: block;
          width: 0;
          height: 100%;
          background: rgba(11, 112, 195, 1);
        }
      }
    }
  }

  .flow-step-item {
    border: 0;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    padding: 10px 14px;
    background: transparent;
    border-radius: 4px;
    color: rgba(65, 71, 84, 1);
    font-size: 1em;
    font-weight: 600;

    &.quiz-step {
      .video-substeps li.done{
        cursor: default;
      }
    }

    .step-group-main {
      display: flex;
      align-items: flex-start;
      gap: 0.75em;
      width: 100%;
    }

    .step-group-icon {
      font-size: 14px;
      line-height: 1;

      .main-step-complete-icon {
        color: rgba(72, 190, 128, 1);
      }

      .main-step-fail-icon {
        color: rgba(220, 53, 69, 1);
      }
    }

    .step-group-content {
      min-width: 0;
      flex: 1;

      .step-title-toggle,
      .step-title-text {
        margin: 0;
        font-size: 12px;
        font-weight: 700;
        line-height: 1.3;
        color: inherit;
      }

      .step-title-toggle.collapsible {
        cursor: pointer;
      }

      .step-group-body {
        margin-top: 1em;
      }

      .step-group-progress {
        margin: 0;
        font-size: 12px;
        font-weight: 700;
        color: inherit;
        opacity: 0.85;
        color: rgba(80, 80, 80, 1);
      }
    }

    .video-substeps {
      list-style: none;
      margin: .8em 0 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0em;

      li {
        display: inline-flex;
        align-items: center;
        gap: 0.45em;
        font-size: 10px;
        letter-spacing: 0.08em;
        font-weight: 600;
        padding: 0.6em .8em;
        &.done {
          color: rgba(3, 45, 113, 1);
        }

        &.current {
          color: #032D71;
          font-weight: 600;
          background: #AFD9FE;
          border-radius: 4px;
          position: relative;
          // padding-left: 1.8em;

          &::before {
            content: '';
            position: absolute;
            left: -40px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-top: 0.6em solid transparent;
            border-bottom: 0.6em solid transparent;
            border-left: 1em solid #032D71;
          }
        }

        &.locked {
          color: rgba(64, 71, 81, 0.4);
          cursor: default;
        }
        

        .sub-step-fail {
          color: rgba(220, 53, 69, 1);
        }

        .current-circle-icon {
          width: 1em;
          height: 1em;
          box-sizing: border-box;
          border: 1.5px solid currentColor;
          border-radius: 50%;
          flex: 0 0 auto;
        }

        &.module-header {
          font-size: 10px;
          font-weight: 400;
          
          color: rgba(64, 71, 81, 0.4);
          letter-spacing: 0.05em;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          cursor: default;

          &.module-active {
            color: rgba(3, 45, 113, 1);
            cursor: pointer;
          }
          margin-bottom: .4em;
          padding-left: 0;
          flex-direction: column;
          align-items: flex-start;
          &>p:nth-child(1){
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 2px;
          }

        }
      }
    }

    &.active {
      background: rgb(175, 217, 254);
      color: rgba(12, 50, 98, 1);
    }

    &.completed {
      color: rgba(3, 45, 113, 1);
    }

    &.locked,
    &[aria-disabled="true"] {
      color: rgba(96, 104, 115, 0.42);
      cursor: not-allowed;
    }

    .el-icon {
      font-size: 1.1em;
    }
  }

  .step-content-area {
    min-width: 0;
    min-height: 0;
    height: 100%;
    overflow-y: auto;
    padding-top: 4em;
    box-sizing: border-box;
  }
}

@media (max-width: 1200px) {
  .onboarding-page {
    .onboarding-layout {
      grid-template-columns: 1fr;
      padding: 1.5em;
    }

    .flow-step-item {
      font-size: 0.95em;
    }
  }
}
</style>
