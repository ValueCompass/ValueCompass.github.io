<template>
  <div
    style="background-color: rgba(247, 249, 252, 1); flex: 1; padding-top: 4em"
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
            class="flow-step-item"
            :class="{ active: activeMainStepIndex === 1, completed: trainingVideoStepCompleted }"
            @click="handleMainStepChange(1)"
            @keydown.enter.prevent="handleMainStepChange(1)"
            @keydown.space.prevent="handleMainStepChange(1)"
          >
            <div class="step-group-main">
              <div class="step-group-icon">
                <el-icon v-if="trainingVideoStepCompleted" class="main-step-complete-icon"><CircleCheckFilled /></el-icon>
                <el-icon v-else><VideoPlay /></el-icon>
              </div>
              <div class="step-group-content">
                <h4
                  class="step-title-toggle"
                  :class="{ collapsible: trainingVideoStepCompleted }"
                  @click.stop="handleTrainingVideoTitleClick"
                >
                  1.Watch Training Videos
                </h4>
                <div
                  v-show="activeMainStepIndex === 1 && !isTrainingVideoGroupCollapsed"
                  class="step-group-body"
                >
                  <p class="step-group-progress">
                    {{ completedTrainingVideoStepCount }} / {{ trainingVideoSteps.length }} Completed
                  </p>

                  <ul class="video-substeps">
                    <li
                      v-for="trainingVideoStep in trainingVideoSteps"
                      :key="trainingVideoStep.id"
                      :class="{
                        done: isTrainingVideoStepCompleted(trainingVideoStep.id),
                        current:
                          activeMainStepIndex === 1 && trainingVideoStep.id === activeTrainingVideoStepIndex,
                        locked: !canAccessTrainingVideoStep(trainingVideoStep.id),
                      }"
                      @click.stop="handleTrainingVideoStepChange(trainingVideoStep.id)"
                    >
                      <el-icon v-if="isTrainingVideoStepCompleted(trainingVideoStep.id)"><CircleCheck /></el-icon>
                      <span
                        v-else-if="canAccessTrainingVideoStep(trainingVideoStep.id)"
                        class="current-circle-icon"
                      ></span>
                      <el-icon v-else><Lock /></el-icon>
                      <span>VIDEO {{ trainingVideoStep.id }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            role="button"
            tabindex="0"
            class="flow-step-item"
            :class="{
              active: activeMainStepIndex === 2,
              completed: quizCompleted,
              locked: !trainingVideoStepCompleted,
            }"
            :aria-disabled="!trainingVideoStepCompleted"
            @click="handleMainStepChange(2)"
            @keydown.enter.prevent="handleMainStepChange(2)"
            @keydown.space.prevent="handleMainStepChange(2)"
          >
            <div class="step-group-main">
              <div class="step-group-icon">
                <el-icon v-if="quizCompleted" class="main-step-complete-icon"><CircleCheckFilled /></el-icon>
                <el-icon v-else><List /></el-icon>
              </div>
              <div class="step-group-content">
                <h4 class="step-title-text">2.Complete Quiz</h4>
                <div v-show="activeMainStepIndex === 2" class="step-group-body">
                  <p class="step-group-progress">
                    {{ quizCompleted ? "Completed" : quizCheckState.answeredCount + " / " + quizCheckState.totalCount + " Completed" }}
                  </p>
                  <ul class="video-substeps">
                    <li
                      v-for="(quizQuestion, quizIndex) in quizQuestions"
                      :key="quizQuestion.qid"
                      :class="{
                        done: ['pass', 'fail'].includes(quizCheckState.questionStatusMap[quizQuestion.qid]),
                        current: isQuizQuestionCurrent(quizQuestion.qid),
                        locked: !isQuizQuestionCurrent(quizQuestion.qid) && !['pass', 'fail'].includes(quizCheckState.questionStatusMap[quizQuestion.qid]),
                      }"
                    >
                      <el-icon v-if="['pass', 'fail'].includes(quizCheckState.questionStatusMap[quizQuestion.qid])"><CircleCheck /></el-icon>
                      <span
                        v-else-if="isQuizQuestionCurrent(quizQuestion.qid)"
                        class="current-circle-icon"
                      ></span>
                      <el-icon v-else><Lock /></el-icon>
                      <span>QUIZ {{ quizIndex + 1 }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            role="button"
            tabindex="0"
            class="flow-step-item"
            :class="{
                active: activeMainStepIndex === 3,
                completed: hasCompletedOnboardingSurveys(),
                locked: !canEnterSurvey,
              }"
            :aria-disabled="!canEnterSurvey"
            @click="handleMainStepChange(3)"
            @keydown.enter.prevent="handleMainStepChange(3)"
            @keydown.space.prevent="handleMainStepChange(3)"
          >
            <div class="step-group-main">
              <div class="step-group-icon">
                <el-icon v-if="hasCompletedOnboardingSurveys()" class="main-step-complete-icon"><CircleCheckFilled /></el-icon>
                <el-icon v-else><Document /></el-icon>
              </div>
              <div class="step-group-content">
                <h4 class="step-title-text">3.Fill Survey</h4>
                
              </div>
            </div>
          </div>
        </aside>

        <section class="step-content-area">
          <TrainingVideo
            v-show="activeMainStepIndex === 1"
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
            v-show="activeMainStepIndex === 2"
            :reset-key="quizResetKey"
            :questions="quizQuestions"
            v-model:quiz-state="quizCheckState"
            @back="handleMainStepChange(1)"
            @complete="handleCompleteQuiz"
          />

          <div v-show="activeMainStepIndex === 3">
            <Survey
              ref="surveyRef"
              :registered-user-name="registeredUserName"
              :registered-user-country="registeredUserCountry"
              :registered-user-language="registeredUserLanguage"
              @survey-next="handleSurveyNext"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage, ElMessageBox } from "element-plus";
import { useI18n } from "vue-i18n";
import {
  VideoPlay,
  CircleCheck,
  CircleCheckFilled,
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
  hasCompletedOnboardingSurveys,
  updateUserDetailFields,
  markOnboardingSurveysCompleted,
} from "@/utils/culturalValueAnnotationAuth";
import {
  createOnboardingSteps,
  getStoredOnboardingUserDetail,
} from "@/utils/culturalValueOnboarding";
import { createOnboardingQuizQuestions } from "@/utils/culturalValueOnboardingQuiz";
import { passedCalibrationQuiz } from "@/service/CulturalValueAnnotationApi";

const TRAINING_VIDEO_PROGRESS_STORAGE_PREFIX =
  "culturalValueAnnotationTrainingVideoProgress";

// 主流程状态：1=视频引导，2=测验，3=问卷。
const activeTrainingVideoStepIndex = ref(1);
const activeMainStepIndex = ref(1);

// Quiz 完成后才允许进入问卷步骤。
const quizCompleted = ref(false);

// 当前注册用户信息，用于展示问卷填写姓名和提交引导完成状态。
const registeredUserName = ref("hua");
const registeredUserCountry = ref("");
const registeredUserLanguage = ref("");

// Survey 组件引用，用于读取 allSurveysChecked。
const surveyRef = ref(null);

// 左侧训练视频分组完成后允许折叠。
const isTrainingVideoGroupCollapsed = ref(false);

// 长期完成态来自 userDetail.studied_annotation_guidance。
const hasStudiedTrainingVideoGuidance =
  hasStudiedCulturalValueAnnotationVideoGuidance();
const router = useRouter();
const { t } = useI18n();

// 训练视频步骤只保存视频元数据，完成状态单独存在 trainingVideoCompletionStatus。
const trainingVideoSteps = ref(createOnboardingSteps());
const trainingVideoCompletionStatus = ref({});

// 页面内轻量测验题库按用户国家生成，后续国家差异只维护数据文件。
const quizQuestions = createOnboardingQuizQuestions();

const quizResetKey = ref(0);
const quizCheckState = ref({
  questionStatusMap: {},
  currentQuestionId: "",
  answeredCount: 0,
  totalCount: quizQuestions.length,
  allAnswered: false,
});

// Quiz 子步骤 current 状态：当前活跃题且未完成。
const isQuizQuestionCurrent = (questionId) => {
  if (activeMainStepIndex.value !== 2) {
    return false;
  }
  return (
    quizCheckState.value.currentQuestionId === questionId &&
    !["pass", "fail"].includes(quizCheckState.value.questionStatusMap[questionId])
  );
};

// 问卷完成数量：点击 start annotation 后整体算 1，否则为 0。
const completedSurveyCount = computed(() => {
  return hasCompletedOnboardingSurveys() ? 1 : 0;
});

// 整体进度总数 = 视频数 + Quiz 题数 + 问卷（整体算 1 项）。
const overallTotalCount = computed(() => {
  return (
    trainingVideoSteps.value.length + quizQuestions.length + 1
  );
});

// 整体进度完成数，用于顶部进度文案。
const overallCompletedCount = computed(() => {
  return (
    completedTrainingVideoStepCount.value +
    quizCheckState.value.answeredCount +
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

// 问卷入口条件：Quiz 完成，或本地已经记录问卷完成。
const canEnterSurvey = computed(() => {
  return quizCompleted.value || hasCompletedOnboardingSurveys();
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

// 判断某个训练视频子步骤是否可进入：只能顺序解锁，已完成引导用户除外。
const canAccessTrainingVideoStep = (stepId) => {
  // 已完成引导的用户可自由切换任意视频。
  if (hasStudiedTrainingVideoGuidance) {
    return true;
  }

  if (stepId === 1) {
    return true;
  }

  return isTrainingVideoStepCompleted(stepId - 1);
};

// 左侧主流程点击切换：视频、Quiz、Survey 三个阶段按顺序解锁。
const handleMainStepChange = (stepId) => {
  // 三个阶段按顺序解锁，防止跳步进入后续流程。
  if (stepId === 1) {
    activeMainStepIndex.value = 1;
    isTrainingVideoGroupCollapsed.value = false;
    return;
  }

  if (stepId === 2) {
    if (!trainingVideoStepCompleted.value) {
      return;
    }

    activeMainStepIndex.value = 2;
    return;
  }

  if (!canEnterSurvey.value) {
    return;
  }

  activeMainStepIndex.value = 3;
};

// 左侧视频子步骤点击：先切回训练视频主步骤，再按解锁规则切换视频。
const handleTrainingVideoStepChange = (stepId) => {
  activeMainStepIndex.value = 1;
  isTrainingVideoGroupCollapsed.value = false;

  if (
    !canAccessTrainingVideoStep(stepId) ||
    stepId === activeTrainingVideoStepIndex.value
  ) {
    return;
  }

  activeTrainingVideoStepIndex.value = stepId;
};

// 点击训练视频标题时，先选中 TrainingVideo 步骤；已完成后才允许再次折叠。
const handleTrainingVideoTitleClick = () => {
  if (activeMainStepIndex.value !== 1) {
    activeMainStepIndex.value = 1;
    isTrainingVideoGroupCollapsed.value = false;
    return;
  }

  handleToggleTrainingVideoGroup();
};

// TrainingVideo 播放结束后回传当前视频 id，父页面更新独立完成状态。
const handleTrainingVideoCompleted = (stepId) => {
  trainingVideoCompletionStatus.value = {
    ...trainingVideoCompletionStatus.value,
    [`video${stepId}`]: true,
  };
};

// 训练视频全部完成后，允许收起/展开左侧视频子步骤列表。
const handleToggleTrainingVideoGroup = () => {
  if (!trainingVideoStepCompleted.value) {
    return;
  }

  isTrainingVideoGroupCollapsed.value = !isTrainingVideoGroupCollapsed.value;
};

// TrainingVideo 组件完成最后一个视频后，通知父页面切到 Quiz 步骤。
const moveFromTrainingVideoToQuizStep = () => {
  activeMainStepIndex.value = 2;
};

// Quiz 组件完成所有题目后，进入 Survey 步骤。
const handleCompleteQuiz = (records = []) => {
  if (!quizCheckState.value.allAnswered) {
    return;
  }

  // 打印每道题的作答详情：题目原文、第一次/第二次选项、对错。
  console.log("Quiz question records", records);
  records.forEach((record) => {
    console.log("Quiz question result", {
      qid: record.qid,
      module: record.module,
      question: record.question,
      firstAttempt: record.attempts[0] ?? null,
      secondAttempt: record.attempts[1] ?? null,
      result: record.result,
    });
  });

  // 按 module 字段分组，统计每个模块的总题数和错误题数。
  const moduleStats = records.reduce((stats, record) => {
    const moduleKey = record.module;
    if (!stats[moduleKey]) {
      stats[moduleKey] = { total: 0, wrong: 0 };
    }
    stats[moduleKey].total += 1;
    if (record.result === "wrong") {
      stats[moduleKey].wrong += 1;
    }
    return stats;
  }, {});

  // 构造 quiz_answers：按 module 分组，每题的多次尝试用逗号拼接。
  const quizAnswersPayload = {};
  const moduleOrder = [...new Set(records.map((r) => r.module))].sort();
  moduleOrder.forEach((moduleKey) => {
    const moduleRecords = records.filter((r) => r.module === moduleKey);
    quizAnswersPayload[`module_${moduleKey}`] = moduleRecords.map((record) => {
      return record.attempts.map((a) => (Array.isArray(a) ? a.join("") : a)).join(",");
    });
  });

  // 构造 correct_ratio：每个 module 的正确率（float）。
  const correctRatio = Object.entries(moduleStats).map(([, stat]) => {
    return stat.total > 0 ? (stat.total - stat.wrong) / stat.total : 0;
  });

  passedCalibrationQuiz({
    username: registeredUserName.value,
    country: registeredUserCountry.value,
    language: registeredUserLanguage.value,
    quiz_answers: quizAnswersPayload,
    correct_ratio: correctRatio,
  }).then((res) => {
    console.log("passedCalibrationQuiz response", res);
    const passed = res?.data?.passed_calibration_quiz;
    if (passed) {
      // quiz 通过后，更新 localStorage 中的完成标志。
      // 同时更新 studied_annotation_guidance 和 passed_calibration_quiz，
      // 确保后续路由判断和 Onboarding 重入时能正确读取状态。
      updateUserDetailFields({
        studied_annotation_guidance: true,
        passed_calibration_quiz: true,
      });
      quizCompleted.value = true;
      activeMainStepIndex.value = 3;
    } else {
      ElMessageBox.alert(
        t("onboarding.quizFailedMessage"),
        t("onboarding.quizFailedTitle"),
        {
          confirmButtonText: t("onboarding.quizFailedConfirm"),
          showClose: false,
          type: "error",
        },
      ).then(() => {
        // 递增 resetKey 通知 QuizCheck 重置内部状态，回到训练视频步骤。
        quizResetKey.value += 1;
        activeMainStepIndex.value = 1;
      });
    }
  }).catch((err) => {
    console.error("passedCalibrationQuiz failed", err);
  });
};

// 问卷完成后标记 survey 完成状态，进入正式 Cultural Value Annotation 首页。
const handleSurveyNext = () => {
  markOnboardingSurveysCompleted();
  router.push("/CulturalValueAnnotation/home");
};

// 复制注册用户名，方便用户粘贴到问卷中保持姓名一致。

// ---------- 页面初始化：决定 Onboarding 的起始步骤 ----------
//
// Onboarding 分三个阶段，每个阶段有独立的完成标志：
//   Step 1 — 培训视频（studied_annotation_guidance，来自服务端）
//   Step 2 — 校准测验（passed_calibration_quiz，来自服务端）
//   Step 3 — 问卷（survey，仅保存在本地 localStorage）
//
// 完整决策矩阵：
//   Step 1 视频 │ Step 2 测验 │ Step 3 问卷 │ 起始步骤
//   ────────────┼─────────────┼─────────────┼──────────────────
//   false       │ false       │  —          │ Step 1 培训
//   true        │ false       │  —          │ Step 2 测验
//   true        │ true        │ false       │ Step 3 问卷
//   true        │ true        │ true        │ 全部完成 → 首页
//   false       │ true        │  —          │ 防御性 → Step 1
onMounted(() => {
  const storedUserDetail = getStoredOnboardingUserDetail();
  registeredUserName.value = storedUserDetail.username;
  registeredUserCountry.value = storedUserDetail.country;
  registeredUserLanguage.value = storedUserDetail.language;

  // 读取 Step 1 完成标志（studied_annotation_guidance）。
  const guidanceDone = hasStudiedCulturalValueAnnotationVideoGuidance();

  // 读取 Step 2 完成标志（passed_calibration_quiz），来自 localStorage。
  const quizDone = hasPassedCalibrationQuiz();
  quizCompleted.value = quizDone; // 同步左侧侧边栏的 quiz 完成状态

  // 读取 Step 3 完成标志（问卷），所有问卷都勾选完成才视为完成。
  const surveyDone = hasCompletedOnboardingSurveys();

  // 先恢复训练视频进度，避免未完成引导的用户刷新后又从第一个视频开始。
  restoreTrainingVideoProgress();

  if (guidanceDone && quizDone && surveyDone) {
    // 三个阶段全部完成，直接跳到首页。
    router.push({ name: "CulturalValueAnnotationHome" });
  } else if (guidanceDone && quizDone) {
    // Step 1 和 Step 2 完成，但问卷未完成 → 跳到 Step 3。
    activeMainStepIndex.value = 3;
    isTrainingVideoGroupCollapsed.value = true;
  } else if (guidanceDone) {
    // Step 1 完成但 Step 2 未通过 → 跳到 Step 2。
    activeMainStepIndex.value = 2;
    isTrainingVideoGroupCollapsed.value = true;
  } else{
    // 其余情况（培训未完成），默认停留在 Step 1。
    activeMainStepIndex.value = 1;
  }
  
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
    height: calc(100vh - 16em);
    max-width: 1920px;
    margin: 0 auto;
    padding: 2.5em 6em 0em 0;
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

      .welcome-title {
        margin: 0;
        color: rgba(11, 112, 195, 1);
        font-size: 0.9em;
        font-weight: 600;
      }

      .welcome-desc {
        margin: 0.3em 0 1.2em;
        color: rgba(11, 112, 195, 1);
        font-size: 1.35em;
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
    padding: 14px;
    background: transparent;
    border-radius: 4px;
    color: rgba(65, 71, 84, 1);
    font-size: 1em;
    font-weight: 600;

    .step-group-main {
      display: flex;
      align-items: flex-start;
      gap: 0.75em;
    }

    .step-group-icon {
      font-size: 14px;
      line-height: 1;

      .main-step-complete-icon {
        color: rgba(72, 190, 128, 1);
        // font-size: 1.45em;
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
        margin-top: 0.5em;
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
      gap: 1em;

      li {
        display: inline-flex;
        align-items: center;
        gap: 0.45em;
        font-size: 10px;
        letter-spacing: 0.08em;
        font-weight: 600;
        &.done {
          color: rgba(3, 45, 113, 1);
        }

        &.current {
          color: rgba(11, 112, 195, 1);
          font-weight: 600;
        }

        &.locked {
          color: rgba(64, 71, 81, 0.4);
        }

        .current-circle-icon {
          width: 1em;
          height: 1em;
          box-sizing: border-box;
          border: 1.5px solid currentColor;
          border-radius: 50%;
          flex: 0 0 auto;
        }
      }
    }

    &.active {
      background: rgba(175, 217, 254, 1);
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
