<template>
  <div class="onboarding-page">
    <!-- 视频引导 -->
    <div v-show="!showSurveyModule" class="onboarding-container">
      <section class="hero-card">
        <div class="hero-copy">
          <span class="step-pill">{{ currentStepData.pill }}</span>
          <h1>{{ currentStepData.heading }}</h1>
          <p>
            {{ currentStepData.description }}
          </p>
        </div>

        <div>
          <div class="warning-box" style="background: transparent;color: rgba(10, 17, 31, 1);">
              <img src="@/assets/images/Annotat-ionResources-icon.png" alt="" style="width:1.5em">
              <div>
                <p><b>Annotation Resources</b></p>
                <p>
                  <a class="download-a" href="" @click.prevent="handleDownloadSlides"
                    >[ Download Slides ]</a
                  >

                  <a class="download-a" style="margin-left: 2em;" href="" @click.prevent="handleDownloadGuidelineDocument"
                    >[ Download Guideline Document ]</a
                  >
                </p>
                
              </div>
            </div>

            <nav class="step-tabs" aria-label="Onboarding steps">
          
          <button
            v-for="step in steps"
            :key="step.id"
            type="button"
            class="step-tab"
            :disabled="step.id !== currentStep && !step.completed"
            :class="{
              active: step.id === currentStep,
              completed: step.completed,
            }"
            @click="handleStepChange(step.id)"
          >
            <span class="step-tab-icon">
              <svgIcon
                v-if="step.id === currentStep"
                name="play-icon"
              ></svgIcon>
              <svgIcon
                v-else
                :name="step.completed ? 'play-finish-icon' : 'lock-icon'"
              ></svgIcon>
            </span>
            <span>{{ step.label }}</span>
          </button>
        </nav>
        </div>
        
      </section>

      <section class="content-grid">
        <article class="media-panel">
          <div class="video-swiper-shell">
            <button
              type="button"
              class="manual-swiper-button manual-swiper-button-prev"
              :disabled="isFirstStep"
              @click="slidePrev"
            >
              <el-icon><ArrowLeft /></el-icon>
            </button>
            <swiper
              class="video-swiper"
              :modules="swiperModules"
              :slides-per-view="1"
              :space-between="24"
              :allow-touch-move="false"
              @swiper="handleSwiperInit"
              @slideChange="handleSwiperSlideChange"
            >
              <swiper-slide v-for="(step, index) in steps" :key="step.id">
                <div class="video-shell">
                  <video
                    :ref="setVideoElementRef(index)"
                    class="video-js vjs-big-play-centered media-stage"
                  ></video>
                </div>
              </swiper-slide>
            </swiper>
            <button
              type="button"
              class="manual-swiper-button manual-swiper-button-next"
              :disabled="isLastStep"
              @click="slideNext"
            >
              <el-icon><ArrowRight /></el-icon>
            </button>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import {
  ArrowLeft,
  ArrowRight,
  Warning,
  CopyDocument,
  DArrowLeft,
  DArrowRight,
} from "@element-plus/icons-vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { A11y } from "swiper/modules";
import videojs from "video.js";
import "swiper/css";
import "video.js/dist/video-js.css";
import {
  computed,
  defineProps,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { useRouter } from "vue-router";
import {
  onboardingPreview,
  createOnboardingSteps,
  createOnboardingSurveys,
  normalizeLanguageLabel,
  getPreferredSurveyLanguage,
  buildDisplaySurveys,
  getStoredOnboardingUserDetail,
  copyTextWithFallback,
  downloadOnboardingSlides,
  downloadOnboardingGuidelineDocument,
} from "@/utils/culturalValueOnboarding";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const swiperModules = [A11y];

const currentStep = ref(1);
const showSurveyModule = ref(false);
const registeredUserName = ref("hua");
const registeredUserCountry = ref("");
const surveyLinksExpanded = ref(false);
const router = useRouter();
const handleDownloadSlides = () => {
  downloadOnboardingSlides();
};

const handleDownloadGuidelineDocument = () => {
  downloadOnboardingGuidelineDocument();
};

const steps = ref(createOnboardingSteps({ completed: true }));

const surveys = ref(createOnboardingSurveys());

const currentStepData = computed(() => {
  return (
    steps.value.find((step) => step.id === currentStep.value) ?? steps.value[0]
  );
});

const isFirstStep = computed(() => {
  return currentStep.value === steps.value[0]?.id;
});

const isLastStep = computed(() => {
  return currentStep.value === steps.value[steps.value.length - 1]?.id;
});

const allSurveysCompleted = computed(() => {
  return surveys.value.every((survey) => survey.completed);
});

const preferredSurveyLanguage = computed(() => {
  return getPreferredSurveyLanguage({
    country: registeredUserCountry.value,
    preferRegisteredLanguage: false,
  });
});

const displaySurveys = computed(() => {
  return buildDisplaySurveys({
    surveys: surveys.value,
    preferredLanguage: preferredSurveyLanguage.value,
    surveyLinksExpanded: surveyLinksExpanded.value,
  });
});

const toggleSurveyLinks = () => {
  surveyLinksExpanded.value = !surveyLinksExpanded.value;
};

const completedStepCount = computed(() => {
  return steps.value.filter((step) => step.completed).length;
});

const progressStyle = computed(() => {
  const progress = (completedStepCount.value / steps.value.length) * 100;

  return {
    width: `${progress}%`,
  };
});

const swiperRef = ref(null);
const videoElements = ref([]);
const videoPlayers = [];

const pauseAllPlayers = () => {
  videoPlayers.forEach((player) => {
    player?.pause?.();
  });
};

const setVideoElementRef = (index) => {
  return (element) => {
    if (element) {
      videoElements.value[index] = element;
    }
  };
};

const pauseInactivePlayers = (activeIndex) => {
  videoPlayers.forEach((player, index) => {
    if (index !== activeIndex) {
      player?.pause?.();
    }
  });
};

const handleSwiperInit = (swiper) => {
  swiperRef.value = swiper;
};

const handleSwiperSlideChange = (swiper) => {
  currentStep.value = swiper.activeIndex + 1;
  pauseInactivePlayers(swiper.activeIndex);
};

const slidePrev = () => {
  if (isFirstStep.value) {
    return;
  }

  swiperRef.value?.slidePrev();
};

const slideNext = () => {
  if (isLastStep.value) {
    return;
  }

  swiperRef.value?.slideNext();
};

const handleStepChange = (stepId) => {
  if (stepId === currentStep.value) {
    return;
  }

  currentStep.value = stepId;
  swiperRef.value?.slideTo(stepId - 1);
};

const handlePreviousStep = () => {
  if (isFirstStep.value) {
    return;
  }

  currentStep.value -= 1;
};

const handleNextStep = () => {
  if (isLastStep.value) {
    if (currentStepData.value?.completed) {
      showSurveyModule.value = true;
    }
    return;
  }

  currentStep.value += 1;
};

const handleBackToVideoGuide = () => {
  showSurveyModule.value = false;
};

const handleSurveyNext = () => {
  if (!allSurveysCompleted.value) {
    return;
  }

  router.push("/CulturalValueAnnotation/home");
};

const handleCopyRegisteredName = async () => {
  await copyTextWithFallback(registeredUserName.value);
  ElMessage.success("Name copied");
};

const handleEnded = (index) => {
  if (steps.value[index]) {
    steps.value[index].completed = true;
  }
};

const initializeVideoPlayers = () => {
  videoElements.value.forEach((element, index) => {
    if (!element || videoPlayers[index]) {
      return;
    }

    const step = steps.value[index];
    const player = videojs(element, {
      autoplay: false,
      controls: true,
      preload: "auto",
      poster: onboardingPreview,
      fluid: false,
      responsive: true,
      userActions: {
        hotkeys: false,
      },
      controlBar: {
        pictureInPictureToggle: false,
        playbackRateMenuButton: false,
      },
      sources: [
        {
          src: step.videoSrc,
          type: step.videoType,
        },
      ],
    });

    videoPlayers[index] = player;
    player.on("ended", () => handleEnded(index));
  });
};

onMounted(() => {
  const storedUserDetail = getStoredOnboardingUserDetail();
  registeredUserName.value = storedUserDetail.username;
  registeredUserCountry.value = storedUserDetail.country;

  nextTick(() => {
    initializeVideoPlayers();
    pauseInactivePlayers(0);
  });
});

watch(currentStep, (stepId) => {
  const targetIndex = stepId - 1;
  if (swiperRef.value && swiperRef.value.activeIndex !== targetIndex) {
    swiperRef.value.slideTo(targetIndex);
  }

  pauseInactivePlayers(targetIndex);
});

watch(
  () => props.visible,
  (visible) => {
    if (!visible) {
      pauseAllPlayers();
    }
  },
);

onBeforeUnmount(() => {
  videoPlayers.forEach((player) => {
    player?.dispose?.();
  });
});
</script>

<style lang="scss" scoped>
.onboarding-page {
  min-height: 100%;

  .onboarding-container {
    max-width: 1380px;
    margin: 0 auto;
  }

  .hero-card {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 3em;
    overflow: hidden;

    .hero-copy {
      flex: 1;

      h1 {
        margin: 0.33em 0;
        font-size: 2.5em;
        line-height: 1.02;
        color: #101828;
        letter-spacing: -0.04em;
      }

      p {
        margin: 0;
        color: #475467;
      }

      .step-pill {
        display: inline-flex;
        align-items: center;
        height: 28px;
        padding: 0 0.875em;
        border-radius: 999px;
        background: rgba(195, 232, 255, 1);
        color: rgba(0, 30, 44, 1);
        font-size: 0.82rem;
        font-weight: 600;

        letter-spacing: 0.02em;
        text-transform: uppercase;
      }
    }

    .step-tabs {
      // width: 41.875em;
      display: flex;
      align-items: end;
      justify-content: flex-end;

      .step-tab {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 0;
        padding: 0 3em;
        color: rgba(64, 71, 81, 0.4);
        background-color: rgba(242, 244, 247, 1);
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 1px;
        font-family: "Inter", sans-serif;
        height: 36px;
        text-transform: uppercase;
        &.active {
          color: rgba(0, 73, 124, 1);
          background: rgba(230, 232, 235, 1);
        }
        &.completed {
          background: rgba(230, 232, 235, 1);
        }

        .step-tab-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.5rem;
          text-transform: uppercase;
          .svg-icon {
            width: 1.75em;
            height: 1.75em;
          }
        }
      }
    }

    .warning-box {
        display: flex;
        align-items: flex-start;
        gap: 1em;
        padding: 1.25em;
        border-radius: 16px;
        background: #fff1f1;
        color: #b42318;
        font-weight: 500;
        font-size: 12px;
        p {
          margin: 0;
          line-height: 1.55;
        }

        .warning-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25em;
          margin-top: 0.1em;
        }
        .download-a{
            color: rgba(11, 112, 195, 1);
            text-decoration: underline;
        }
      }
  }

  .content-grid {
    display: grid;
    gap: 32px;
    margin-top: 24px;

    .media-panel,
    .status-panel {
      min-width: 0;
    }

    .media-panel {
      .video-swiper-shell {
        width: 100%;
        position: relative;
        box-sizing: border-box;

        .manual-swiper-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 3em;
          height: 3em;
          padding: 0;
          border: 0;
          background: transparent;
          color: rgba(102, 102, 102, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2;

          .el-icon {
            font-size: 2.5em;
          }

          &:disabled {
            opacity: 0.35;
            cursor: not-allowed;
          }
        }

        .manual-swiper-button-prev {
          left: -5em;
        }

        .manual-swiper-button-next {
          right: -5em;
        }

        .video-swiper {
          width: 100%;

          .video-shell {
            width: 100%;
            aspect-ratio: 16 / 9;
            border-radius: 20px;
            overflow: hidden;
            background: #101828;
            box-shadow: 0 28px 60px rgba(15, 23, 42, 0.16);

            :deep(.video-js) {
              width: 100%;
              height: 100%;
              border-radius: 20px;
              background: #101828;
            }

            :deep(.vjs-poster) {
              position: relative;
              background-size: cover;
              width: 100%;

              &::after {
                content: "";
                position: absolute;
                inset: 0;
                background: rgba(0, 0, 0, 0.28);
                pointer-events: none;
              }
              img {
                display: none;
              }
            }
            :deep(.vjs-big-play-button) {
              width: 4rem;
              height: 4rem;
              border: none;
              margin-top: -2rem;
              margin-left: -2rem;
              background: rgba(255, 255, 255, 1);
              color: #0b70c3;
              border-radius: 50%;
              .vjs-icon-placeholder:before {
                top: 0.2em;
              }
            }
          }
        }
      }
    }

    .status-panel {
      font-size: 1em;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 28px;
      padding: 1.875em;
      border-radius: 12px;
      background: rgba(242, 244, 247, 1);

      .progress-block {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .progress-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #344054;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 12px;
          strong {
            color: #0b70c3;
            letter-spacing: 0;
          }
        }

        .progress-track {
          height: 8px;
          border-radius: 999px;
          background: #d0d5dd;
          overflow: hidden;

          .progress-value {
            display: block;
            width: 0%;
            height: 100%;
            background: rgba(5, 64, 140, 1);
          }
        }
      }

      .warning-box {
        display: flex;
        align-items: flex-start;
        gap: 1em;
        padding: 1.5em;
        border-radius: 16px;
        background: #fff1f1;
        color: #b42318;
        font-weight: 500;
        font-size: 12px;
        p {
          margin: 0;
          line-height: 1.55;
        }

        .warning-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25em;
          margin-top: 0.1em;
        }
      }

      .action-block {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 36px;

        p {
          margin: 0;
          color: #98a2b3;
          font-style: italic;
          text-align: center;
          font-size: 0.875em;
        }

        .complete-button {
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          height: 56px;
          border: 0;
          border-radius: 8px;
          background: #dfe3ea;
          color: #667085;
          font-weight: 500;

          &.completed {
            background: #0b70c3;
            color: #fff;
          }

          .button-lock {
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }
          .svg-icon {
            width: 1.15em;
            height: 1.15em;
          }
        }

        .pre-step-button {
          height: 20px;
          color: rgba(11, 112, 195, 1);
          text-decoration: underline;
          font-size: 0.875em;
          margin: 0 auto;
          margin-top: 2em;
          cursor: pointer;
        }
      }
    }
  }

  .survey-container {
    padding: 3.125em 6em;
    display: flex;
    justify-content: center;
    .content {
      background-color: #fff;
      width: 1000px;
      box-sizing: border-box;
      padding: 2.5em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
    }
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

          .toggle-links-button {
            padding: 0;
            width: 40px;
            height: 40px;
            border: 1px solid rgba(153, 153, 153, 1);
            border-radius: 6px;
            background: #fff;
            color: rgba(153, 153, 153, 1);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            flex-shrink: 0;

            .el-icon {
              font-size: 1em;
            }
          }
        }
      }
    }

    .button-container {
      display: flex;
      justify-content: center;
      gap: 2em;
      .el-button {
        font-size: 1.25em;
        height: 2.8em;
        padding: 0 1em;
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
}
</style>
