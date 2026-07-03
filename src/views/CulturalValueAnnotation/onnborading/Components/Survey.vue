<template>
  <div class="survey-container">
    <section class="hero-card">
      <div class="hero-copy">
        <span class="step-pill">Survey</span>
        <h1>Survey Completion Required</h1>
        <p>
          You must complete <b>all 3 surveys</b> before proceeding to
          the next stage.
        </p>
      </div>
    </section>

    <div class="content-grid">
      <!-- 左栏：问卷列表 -->
      <div class="left" style="display: flex">
        <div >
          <div class="survey-list">
            <div
              v-for="surveyItem in displaySurveys"
              :key="surveyItem.survey.title"
              class="survey-item"
            >
              <span class="survey-item-label">{{ surveyItem.survey.title }}</span>
              <div class="survey-item-content">
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
                <div class="survey-item-check">
                  <el-checkbox
                    v-model="surveyItem.survey.completed"
                    label="Completed"
                    size="large"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="survey-actions">
            <el-button
              class="start-annotation-button"
              :class="{ disabled: !allSurveysChecked }"
              :disabled="!allSurveysChecked"
              @click="$emit('survey-next')"
              type="primary"
              >Start Annotation</el-button
            >
          </div>
        </div>
      </div>
      <!-- 右栏：提示信息卡片 -->
      <div class="right">
        <ul class="survey-info-list">
          <li>
            <el-icon class="info-icon info-icon--time"><Clock /></el-icon>
            <span>Estimated time: 20-30 minutes total.</span>
          </li>
          <li>
            <svg-icon class="info-icon info-icon--lang" name="world-icon"></svg-icon>
            <span>Additional language versions are available in the expanded menu below.</span>
          </li>
          <li>
            <el-icon class="info-icon info-icon--important"><Warning /></el-icon>
            <span><b>Important:</b> You must use the registered name <span class="registered-name">"{{ registeredUserName }}"</span>
              <button
                type="button"
                class="copy-name-button"
                @click="handleCopyRegisteredName"
              >
                <el-icon><CopyDocument /></el-icon>
              </button>
              exactly as shown.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Warning, Clock, CircleCheckFilled, CopyDocument } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { computed, ref } from "vue";
import {
  createOnboardingSurveys,
  normalizeLanguageLabel,
  getPreferredSurveyLanguage,
  buildDisplaySurveys,
  copyTextWithFallback,
} from "@/utils/culturalValueOnboarding";

const props = defineProps({
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

defineEmits(["survey-next"]);

// 三份问卷的展示数据和完成勾选状态。
const surveys = ref(createOnboardingSurveys());

// 问卷语言链接默认展开，方便用户直接选择对应版本。
const surveyLinksExpanded = ref(true);

// 三个问卷 checkbox 是否都已勾选，用于控制 start annotation 按钮的 disabled 状态。
const allSurveysChecked = computed(() => {
  return surveys.value.every((survey) => survey.completed);
});

// 根据注册国家/语言计算优先展示的问卷语言版本。
const preferredSurveyLanguage = computed(() => {
  return getPreferredSurveyLanguage({
    country: props.registeredUserCountry,
    language: props.registeredUserLanguage,
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

const handleCopyRegisteredName = async () => {
  await copyTextWithFallback(props.registeredUserName);
  ElMessage.success("Name copied");
};

defineExpose({ allSurveysChecked });
</script>

<style lang="scss" scoped>
.survey-container {
  padding: 0;

  .content-grid {
    box-sizing: border-box;
    border-radius: 12px;

  }
}

.survey-list {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  margin-top: 2.5em;
}

.survey-item {
  display: flex;
  flex-direction: row;
  gap: 2em;

  .survey-item-label {
    width: 12em;
    flex-shrink: 0;
    text-align: right;
    margin-top: 0.5em;
    font-size: 0.95em;
    color: rgba(55, 65, 81, 1);
  }

  .survey-item-content {
    flex: 1;
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

  .survey-item-check {
    margin-top: 0.5em;
  }
}

.survey-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5em;

  .start-annotation-button {
    font-size: 1.1em;
    height: 2.8em;
    padding: 0 1.5em;
    border-radius: 6px;
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

.right {
  
  .survey-info-list {
    background: rgb(242, 244, 247);
  border-radius: 10px;
  padding: 1.8em;

    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.2em;

    li {
      display: flex;
      align-items: flex-start;
      gap: 0.6em;
      font-size: 1em;
      line-height: 1.5;
      color: rgba(55, 65, 81, 1);

      .info-icon {
        margin-top: 0.15em;
        flex-shrink: 0;
        font-size: 1.5em;
        &.info-icon--lang{
          width: .9em;
          height: .9em;
        }
      }
    }
  }

  .registered-name {
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
</style>
