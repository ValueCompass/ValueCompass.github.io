<template>
  <div
    style="background-color: rgba(247, 249, 252, 1); flex: 1; padding-top: 4em"
  >
    <div class="main-container onboarding-page">
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
                    {{ quizCompleted ? "Completed" : "Answer all quiz questions" }}
                  </p>
                  <ul class="video-substeps">
                    <li
                      v-for="(quizQuestion, quizIndex) in quizQuestions"
                      :key="quizQuestion.id"
                      :class="{
                        done: isQuizQuestionCompleted(quizQuestion.id),
                        current:
                          activeMainStepIndex === 2 &&
                          getQuizQuestionStatus(quizQuestion.id) === 'current',
                        locked: getQuizQuestionStatus(quizQuestion.id) === 'locked',
                      }"
                    >
                      <el-icon v-if="isQuizQuestionCompleted(quizQuestion.id)"><CircleCheck /></el-icon>
                      <span
                        v-else-if="getQuizQuestionStatus(quizQuestion.id) === 'current'"
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
              completed: allSurveysCompleted,
              locked: !canEnterSurvey,
            }"
            :aria-disabled="!canEnterSurvey"
            @click="handleMainStepChange(3)"
            @keydown.enter.prevent="handleMainStepChange(3)"
            @keydown.space.prevent="handleMainStepChange(3)"
          >
            <div class="step-group-main">
              <div class="step-group-icon">
                <el-icon v-if="allSurveysCompleted" class="main-step-complete-icon"><CircleCheckFilled /></el-icon>
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
            :questions="quizQuestions"
            :answers="quizAnswers"
            :all-answered="allQuizAnswered"
            @back="handleMainStepChange(1)"
            @complete="handleCompleteQuiz"
            @update-answer="handleQuizAnswerChange"
            @active-question-change="handleActiveQuizQuestionChange"
            @question-result="handleQuizQuestionResult"
          />

          <div v-show="activeMainStepIndex === 3" class="survey-container">
            <div class="content">
              <div class="survery-intro">
                <h3>Survey Completion Required</h3>
                <p>
                  You must complete <b>all 3 surveys</b> before proceeding to
                  the next stage.
                </p>
                <p>Estimated time: 20-30 minutes total.</p>
                <p>
                  Additional language versions are available in the expanded
                  menu below.
                </p>
                <p>
                  <b>Important</b>: You must use the registered name
                  <span class="registered-name">"{{ registeredUserName }}"</span>
                  <button
                    type="button"
                    class="copy-name-button"
                    @click="handleCopyRegisteredName"
                  >
                    <el-icon><CopyDocument /></el-icon>
                  </button>
                  exactly as shown.
                </p>
              </div>

              <div class="survery-ul">
                <div
                  v-for="surveyItem in displaySurveys"
                  :key="surveyItem.survey.title"
                  class="item"
                >
                  <span>{{ surveyItem.survey.title }}</span>
                  <div>
                    <div class="survey-links-row">
                      <p class="survey-version-p">
                        <a
                          v-for="version in surveyItem.visibleLinks"
                          :key="`${surveyItem.survey.title}-${version.label}`"
                          :href="version.href"
                          target="_blank"
                          rel="noreferrer"
                          ><span
                            >{{ normalizeLanguageLabel(version.label) }}
                            Version</span
                          >
                          <SvgIcon
                            class="svg-icon"
                            name="view-more-icon"
                          ></SvgIcon>
                        </a>
                      </p>
                    </div>
                    <div>
                      <el-checkbox
                        v-model="surveyItem.survey.completed"
                        label="Completed"
                        size="large"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="button-container">
                <el-button class="back-button" @click="handleMainStepChange(2)"
                  >Back</el-button
                >
                <el-button
                  class="next-button"
                  :class="{ disabled: !allSurveysCompleted }"
                  :disabled="!allSurveysCompleted"
                  @click="handleSurveyNext"
                  type="primary"
                  >Next</el-button
                >
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import {
  CopyDocument,
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
import {
  hasStudiedCulturalValueAnnotationGuidance,
} from "@/utils/culturalValueAnnotationAuth";
import {
  createOnboardingSteps,
  createOnboardingSurveys,
  normalizeLanguageLabel,
  getPreferredSurveyLanguage,
  buildDisplaySurveys,
  getStoredOnboardingUserDetail,
  copyTextWithFallback,
} from "@/utils/culturalValueOnboarding";
import { createOnboardingQuizQuestions } from "@/utils/culturalValueOnboardingQuiz";

const SURVEY_COMPLETION_STORAGE_KEY =
  "culturalValueAnnotationOnboardingSurveyCompletion";
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

// 问卷语言链接默认展开，方便用户直接选择对应版本。
const surveyLinksExpanded = ref(true);

// 左侧训练视频分组完成后允许折叠。
const isTrainingVideoGroupCollapsed = ref(false);

// 长期完成态来自 userDetail.studied_annotation_guidance。
const hasStudiedTrainingVideoGuidance =
  hasStudiedCulturalValueAnnotationGuidance();
const router = useRouter();

// 训练视频步骤只保存视频元数据，完成状态单独存在 trainingVideoCompletionStatus。
const trainingVideoSteps = ref(createOnboardingSteps());
const trainingVideoCompletionStatus = ref({});

// 三份问卷的展示数据和完成勾选状态。
const surveys = ref(createOnboardingSurveys());

// 页面内轻量测验题库按用户国家生成，后续国家差异只维护数据文件。
const quizQuestions = createOnboardingQuizQuestions();

const quizAnswers = ref(
  quizQuestions.reduce((answers, question) => {
    answers[question.id] = question.type === "multiple" ? [] : "";
    return answers;
  }, {}),
);
const activeQuizQuestionId = ref(quizQuestions[0]?.id || "");
const quizQuestionStatusMap = ref({});

// 所有问卷都勾选完成后，才允许点击下一步进入正式任务页。
const allSurveysCompleted = computed(() => {
  return surveys.value.every((survey) => survey.completed);
});

// Quiz 所有题都有答案后，组件才可以完成 Quiz 流程。
const allQuizAnswered = computed(() => {
  return quizQuestions.every((question) => {
    return isQuizQuestionCompleted(question.id);
  });
});

// 统计已作答 Quiz 数量，用于左侧整体进度。
const answeredQuizCount = computed(() => {
  return quizQuestions.filter((question) => isQuizQuestionCompleted(question.id)).length;
});

// Quiz 子步骤完成态：pass 或 fail 都表示该题流程已结束。
const isQuizQuestionCompleted = (questionId) => {
  return ["pass", "fail"].includes(quizQuestionStatusMap.value[questionId]);
};

// 左侧 Quiz 子步骤状态：pass / fail / current / locked。
const getQuizQuestionStatus = (questionId) => {
  const storedStatus = quizQuestionStatusMap.value[questionId];

  if (["pass", "fail"].includes(storedStatus)) {
    return storedStatus;
  }

  if (!trainingVideoStepCompleted.value || questionId !== activeQuizQuestionId.value) {
    return "locked";
  }

  return "current";
};

// 统计已勾选完成的问卷数量，用于左侧整体进度。
const completedSurveyCount = computed(() => {
  return surveys.value.filter((survey) => survey.completed).length;
});

// 整体进度总数 = 视频数 + Quiz 题数 + 问卷数。
const overallTotalCount = computed(() => {
  return (
    trainingVideoSteps.value.length + quizQuestions.length + surveys.value.length
  );
});

// 整体进度完成数，用于顶部进度文案。
const overallCompletedCount = computed(() => {
  return (
    completedTrainingVideoStepCount.value +
    answeredQuizCount.value +
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

// 问卷入口条件：Quiz 完成，或本地已经记录全部问卷完成。
const canEnterSurvey = computed(() => {
  return quizCompleted.value || allSurveysCompleted.value;
});

// 根据注册国家/语言计算优先展示的问卷语言版本。
const preferredSurveyLanguage = computed(() => {
  return getPreferredSurveyLanguage({
    country: registeredUserCountry.value,
    language: registeredUserLanguage.value,
    preferRegisteredLanguage: true,
  });
});

// 根据首选语言和展开状态生成最终展示的问卷链接列表。
const displaySurveys = computed(() => {
  return buildDisplaySurveys({
    surveys: surveys.value,
    preferredLanguage: preferredSurveyLanguage.value,
    surveyLinksExpanded: surveyLinksExpanded.value,
  });
});

// 统计训练视频完成数量，用于左侧第一步进度和整体进度。
const completedTrainingVideoStepCount = computed(() => {
  return trainingVideoSteps.value.filter((trainingVideoStep) => {
    return isTrainingVideoStepCompleted(trainingVideoStep.id);
  }).length;
});

// 读取问卷完成状态的本地缓存，异常数据直接按空对象处理。
const getSurveyCompletionStorage = () => {
  // 容错解析本地存储，避免 localStorage 数据异常导致页面报错。
  try {
    return JSON.parse(localStorage.getItem(SURVEY_COMPLETION_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
};

// 使用注册用户名作为问卷完成状态的本地存储分组 key。
const getSurveyStorageUserKey = () => {
  return registeredUserName.value?.trim() || "__anonymous__";
};

// 训练视频进度按用户单独存储，值保持为 { video1: true, video2: true } 这种简单格式。
const getTrainingVideoProgressStorageKey = () => {
  return `${TRAINING_VIDEO_PROGRESS_STORAGE_PREFIX}:${getSurveyStorageUserKey()}`;
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

// 页面初始化时按当前用户恢复问卷勾选状态。
const restoreSurveyCompletion = () => {
  // 按用户名恢复对应的问卷勾选状态。
  const allStorage = getSurveyCompletionStorage();
  const userStorage = allStorage[getSurveyStorageUserKey()] || {};

  surveys.value.forEach((survey) => {
    survey.completed = userStorage[survey.title] === true;
  });
};

// 问卷勾选变化后，把当前用户的完成状态写回 localStorage。
const persistSurveyCompletion = () => {
  const allStorage = getSurveyCompletionStorage();
  const userKey = getSurveyStorageUserKey();

  allStorage[userKey] = surveys.value.reduce((acc, survey) => {
    acc[survey.title] = !!survey.completed;
    return acc;
  }, {});

  localStorage.setItem(SURVEY_COMPLETION_STORAGE_KEY, JSON.stringify(allStorage));
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
const handleCompleteQuiz = () => {
  if (!allQuizAnswered.value) {
    return;
  }

  quizCompleted.value = true;
  activeMainStepIndex.value = 3;
};

// 接收 QuizCheck 内部答案变化，父页面只保存答案用于整体进度和完成判断。
const handleQuizAnswerChange = (questionId, answer) => {
  quizAnswers.value[questionId] = answer;
};

// 记录 QuizCheck 当前展示的题目，用于左侧 current 状态。
const handleActiveQuizQuestionChange = (questionId) => {
  activeQuizQuestionId.value = questionId;
};

// 记录每道 Quiz 的最终结果：答对为 pass，两次答错为 fail。
const handleQuizQuestionResult = (questionId, status) => {
  quizQuestionStatusMap.value = {
    ...quizQuestionStatusMap.value,
    [questionId]: status,
  };
};

// 问卷完成后进入正式 Cultural Value Annotation 首页。
const handleSurveyNext = () => {
  router.push("/CulturalValueAnnotation/home");
};

// 复制注册用户名，方便用户粘贴到问卷中保持姓名一致。
const handleCopyRegisteredName = async () => {
  await copyTextWithFallback(registeredUserName.value);
  ElMessage.success("Name copied");
};

// 页面挂载后恢复用户信息、问卷状态，并根据是否完成视频引导决定默认步骤。
onMounted(() => {
  const storedUserDetail = getStoredOnboardingUserDetail();
  registeredUserName.value = storedUserDetail.username;
  registeredUserCountry.value = storedUserDetail.country;
  registeredUserLanguage.value = storedUserDetail.language;

  // 先恢复训练视频进度，避免未完成引导的用户刷新后又从第一个视频开始。
  restoreTrainingVideoProgress();

  // 从本地存储恢复当前用户的问卷勾选状态。
  restoreSurveyCompletion();

  if (hasStudiedTrainingVideoGuidance) {
    // 已完成引导的用户进入页面后默认落在测验步骤。
    activeMainStepIndex.value = 2;
    isTrainingVideoGroupCollapsed.value = true;
  }
});

// 监听问卷勾选状态，任何变化都立即持久化。
watch(
  surveys,
  () => {
    // 问卷勾选变化后立即持久化到本地存储。
    persistSurveyCompletion();
  },
  { deep: true },
);

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
    max-width: 1440px;
    margin: 0 auto;
    padding: 2.5em 3em 3.125em;
    display: grid;
    grid-template-columns: 340px minmax(0, 1fr);
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
  }

  .survey-container {
    padding: 0;
  }

  .survey-container {
    .content {
      background-color: #fff;
      box-sizing: border-box;
      padding: 2.5em;
      border-radius: 12px;
      box-shadow: 0 15px 50px rgba(17, 24, 39, 0.06);
    }
  }

  .survey-container {
    .survery-intro {
      font-size: 0.875em;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 12px 0;

      h3 {
        font-size: 1.875em;
        font-weight: 600;
        color: rgba(5, 64, 140, 1);
        font-style: italic;
        letter-spacing: -0.75px;
        line-height: 1.2;
        margin-bottom: 12px;
      }

      p {
        line-height: 1.2;

        .registered-name {
          margin: 0 0.4em;
          font-weight: 700;
        }

        .copy-name-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 0.2em;
          padding: 0;
          border: 0;
          background: transparent;
          color: rgba(153, 153, 153, 1);
          cursor: pointer;
          vertical-align: middle;
        }
      }
    }

    .survery-ul {
      font-size: 1em;
      margin-top: 3em;

      .item {
        display: flex;
        flex-direction: row;
        gap: 2.5em;
        margin-bottom: 1.5em;

        & > span {
          width: 11.5em;
          text-align: right;
          margin-top: 0.5em;
        }

        .survey-links-row {
          display: flex;
          align-items: flex-start;
          gap: 1em;

          .survey-version-p {
            display: inline-flex;
            flex-wrap: wrap;
            gap: 0.875em;

            a {
              font-size: 0.875em;
              line-height: 40px;
              padding: 0 0.8em;
              box-sizing: border-box;
              border: 1px solid rgba(11, 112, 195, 1);
              border-radius: 6px;
              color: rgba(11, 112, 195, 1);
              display: inline-flex;
              align-items: center;

              .svg-icon {
                width: 1em;
                height: 1em;
                margin-left: 0.1em;
                transform: rotate(-45deg);
              }
            }
          }
        }
      }
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-top: 2em;

    .el-button {
      font-size: 1.1em;
      height: 2.8em;
      padding: 0 1.2em;
      border-radius: 6px;

      &.back-button {
        border: 2px solid rgba(11, 112, 195, 1);
        color: rgba(11, 112, 195, 1);
      }

      &.next-button {
        background-color: rgba(11, 112, 195, 1);
        color: #fff;
        border: none;

        &.disabled {
          background: rgba(194, 194, 194, 1);
          color: #fff;
          cursor: not-allowed;
        }
      }
    }
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

    .content-grid {
      grid-template-columns: 1fr;
    }

    .survey-container {
      .survery-ul {
        .item {
          flex-direction: column;
          gap: 0.8em;

          & > span {
            width: auto;
            text-align: left;
            margin-top: 0;
          }
        }
      }
    }
  }
}
</style>
