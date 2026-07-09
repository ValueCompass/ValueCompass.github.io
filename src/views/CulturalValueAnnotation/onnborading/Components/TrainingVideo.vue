<template>
  <div class="onboarding-container">
    <section class="hero-card">
      <div class="hero-copy">
        <span class="step-pill">{{ currentVideoStepData.pill }}</span>
        <h1>{{ currentVideoStepData.heading }}</h1>
        <p>{{ currentVideoStepData.description }}</p>
      </div>
    </section>

    <section class="content-grid">
      <article class="left">
        <div class="video-shell">
          <video
            ref="videoElement"
            class="video-js vjs-big-play-centered media-stage"
          ></video>
        </div>
      </article>

      <aside class="right">
        <div class="progress-block">
          <div class="progress-header">
            <span>Completion Progress</span>
            <strong>{{ completedVideoStepCount }}/{{ videoSteps.length }}</strong>
          </div>
          <div class="progress-track">
            <span class="progress-value" :style="progressStyle"></span>
          </div>
        </div>

        <div class="warning-box">
          <el-icon class="warning-icon"><Warning /></el-icon>
          <p>Skipping or fast-forwarding is disabled for this introductory module.</p>
        </div>

        <div class="warning-box resources-box">
          <img
            src="@/assets/images/Annotat-ionResources-icon.png"
            alt=""
            class="resources-icon"
          />
          <div>
            <p><b>Annotation Resources</b></p>
            <p>Download supporting materials before annotation.</p>
            <p>
              <a class="download-a" href="" @click.prevent="handleDownloadSlides"
                >[ Download Slides ]</a
              >
            </p>
            <p>
              <a
                class="download-a"
                href=""
                @click.prevent="handleDownloadGuidelineDocument"
                >[ Download Guideline Document ]</a
              >
            </p>
          </div>
        </div>

        <div class="action-block">
          <button
            type="button"
            class="complete-button"
            :class="{ completed: currentVideoCompleted }"
            :disabled="!currentVideoCompleted"
            @click="handleVideoContinue"
          >
            {{
              isLastVideoStep
                ? "Continue"
                : `Complete ${currentVideoStepData.label}`
            }}
            <svgIcon
              v-if="!currentVideoCompleted"
              name="lock-icon"
            ></svgIcon>
          </button>
          <p>Finish watching to unlock the next section</p>

          <div class="previous-button-wrap">
            <div
              v-if="!isFirstVideoStep"
              class="pre-step-button"
              @click="handlePreviousStep"
            >
              Return to Previous Step
            </div>
          </div>
        </div>
      </aside>
    </section>
  </div>
</template>

<script setup>
import { Warning } from "@element-plus/icons-vue";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { StudiedAnnotationGuidance } from "@/service/CulturalValueAnnotationApi.ts";
import { syncLocaleFromUserDetail } from "@/i18n";
import { markCulturalValueAnnotationTutorialAutoOpenedThisLogin, updateUserDetailFields } from "@/utils/culturalValueAnnotationAuth";
import {
  onboardingPreview,
  downloadOnboardingSlides,
  downloadOnboardingGuidelineDocument,
} from "@/utils/culturalValueOnboarding";

const props = defineProps({
  videoSteps: {
    type: Array,
    required: true,
  },
  activeVideoStepIndex: {
    type: Number,
    required: true,
  },
  trainingVideoCompletionStatus: {
    type: Object,
    default: () => ({}),
  },
  hasStudiedAnnotationGuidance: {
    type: Boolean,
    default: false,
  },
  registeredUserName: {
    type: String,
    default: "",
  },
  registeredUserCountry: {
    type: String,
    default: "",
  },
  registeredUserLanguage: {
    type: String,
    default: "",
  },
});

const emit = defineEmits([
  "update:activeVideoStepIndex",
  "complete-video",
  "continue-to-quiz",
]);

const videoElement = ref(null);
let player = null;
let maxPlayedTime = 0;
let allowSeek = false;
let isRestoringTime = false;

const currentVideoStepData = computed(() => {
  return (
    props.videoSteps.find(
      (videoStep) => videoStep.id === props.activeVideoStepIndex,
    ) ?? props.videoSteps[0]
  );
});

const completedVideoStepCount = computed(() => {
  return props.videoSteps.filter((videoStep) => isVideoStepCompleted(videoStep.id))
    .length;
});

const currentVideoCompleted = computed(() => {
  return isVideoStepCompleted(currentVideoStepData.value?.id);
});

const isFirstVideoStep = computed(() => {
  return props.activeVideoStepIndex === props.videoSteps[0]?.id;
});

const isLastVideoStep = computed(() => {
  return (
    props.activeVideoStepIndex === props.videoSteps[props.videoSteps.length - 1]?.id
  );
});

const progressStyle = computed(() => {
  const progress = (completedVideoStepCount.value / props.videoSteps.length) * 100;

  return {
    width: `${progress}%`,
  };
});

const handleDownloadSlides = () => {
  downloadOnboardingSlides();
};

const handleDownloadGuidelineDocument = () => {
  downloadOnboardingGuidelineDocument();
};

const isVideoStepCompleted = (stepId) => {
  return (
    props.hasStudiedAnnotationGuidance ||
    props.trainingVideoCompletionStatus[`video${stepId}`] === true
  );
};

const resetPlaybackGuards = () => {
  maxPlayedTime = 0;
  allowSeek = currentVideoCompleted.value;
  isRestoringTime = false;
};

const applyProgressControlState = () => {
  if (!player?.controlBar?.progressControl) {
    return;
  }

  if (allowSeek) {
    player.controlBar.progressControl.enable?.();
    return;
  }

  player.controlBar.progressControl.disable?.();
};

const updatePlayerSource = () => {
  if (!player || !currentVideoStepData.value) {
    return;
  }

  resetPlaybackGuards();
  player.pause();
  player.src({
    src: currentVideoStepData.value.videoSrc,
    type: currentVideoStepData.value.videoType,
  });
  player.poster(onboardingPreview);
  player.currentTime(0);
  applyProgressControlState();
};

const handleTimeUpdate = () => {
  if (!player || allowSeek || isRestoringTime || player.seeking()) {
    return;
  }

  maxPlayedTime = Math.max(maxPlayedTime, player.currentTime());
};

const handleSeeking = () => {
  if (!player || allowSeek || isRestoringTime) {
    return;
  }

  if (player.currentTime() <= maxPlayedTime + 0.2) {
    return;
  }

  isRestoringTime = true;
  player.currentTime(maxPlayedTime);
  requestAnimationFrame(() => {
    isRestoringTime = false;
  });
};

const handleEnded = () => {
  allowSeek = true;
  if (currentVideoStepData.value?.id) {
    emit("complete-video", currentVideoStepData.value.id);
  }
  applyProgressControlState();
};

const handleLoadedMetadata = () => {
  resetPlaybackGuards();
  applyProgressControlState();
};

const handlePreviousStep = () => {
  if (isFirstVideoStep.value) {
    return;
  }

  emit("update:activeVideoStepIndex", props.activeVideoStepIndex - 1);
};

const markGuidanceStudied = () => {
  StudiedAnnotationGuidance({
    username: props.registeredUserName,
    country: props.registeredUserCountry,
    language: props.registeredUserLanguage,
  })
    .then(() => {
      updateUserDetailFields({ studied_annotation_guidance: true });
      markCulturalValueAnnotationTutorialAutoOpenedThisLogin();
      syncLocaleFromUserDetail();
    })
    .catch(() => {});
};

const handleVideoContinue = () => {
  if (!currentVideoCompleted.value) {
    return;
  }

  if (isLastVideoStep.value) {
    markGuidanceStudied();
    player?.pause();
    emit("continue-to-quiz");
    return;
  }

  emit("update:activeVideoStepIndex", props.activeVideoStepIndex + 1);
};

onMounted(() => {
  if (!videoElement.value) {
    return;
  }

  player = videojs(videoElement.value, {
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
        src: currentVideoStepData.value.videoSrc,
        type: currentVideoStepData.value.videoType,
      },
    ],
  });

  handleLoadedMetadata();
  player.on("loadedmetadata", handleLoadedMetadata);
  player.on("timeupdate", handleTimeUpdate);
  player.on("seeking", handleSeeking);
  player.on("ended", handleEnded);
});

watch(
  () => props.activeVideoStepIndex,
  () => {
    updatePlayerSource();
  },
);

onBeforeUnmount(() => {
  if (!player) {
    return;
  }

  player.off("loadedmetadata", handleLoadedMetadata);
  player.off("timeupdate", handleTimeUpdate);
  player.off("seeking", handleSeeking);
  player.off("ended", handleEnded);
  player.dispose();
  player = null;
});
</script>

<style lang="scss" scoped>
.onboarding-container {
  padding: 0;
}

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

.right {
  font-size: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.5em;
  padding: 1.875em;
  border-radius: 12px;
  background: rgba(242, 244, 247, 1);
}

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

  .download-a {
    color: rgba(11, 112, 195, 1);
    text-decoration: underline;
  }
}

.resources-box {
  background: rgba(204, 240, 252, 0.25);
  color: rgba(10, 17, 31, 1);
}

.resources-icon {
  width: 1.5em;
}

.action-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 1em;

  p {
    margin: 0;
    color: #98a2b3;
    font-style: italic;
    text-align: center;
    font-size: 0.875em;
  }
}

.complete-button {
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 3em;
  border: 0;
  border-radius: 8px;
  background: #dfe3ea;
  color: #667085;
  font-weight: 500;

  &.completed {
    background: #0b70c3;
    color: #fff;
  }

  .svg-icon {
    width: 1.15em;
    height: 1.15em;
  }
}

.previous-button-wrap {
  height: 40px;
  text-align: center;
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
</style>