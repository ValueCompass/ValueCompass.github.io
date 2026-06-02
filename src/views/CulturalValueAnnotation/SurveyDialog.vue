<template>
  <div class="survey-container">
    <div class="content">
      <div class="survery-intro">
        <h3>Survey Completion Required</h3>
        <p>
          You must complete <b>all 3 surveys</b> before proceeding to the next
          stage.
        </p>
        <p>Estimated time: 20-30 minutes total.</p>
        <p>
          Additional language versions are available in the expanded menu below.
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
                >
                  <span>{{ normalizeLanguageLabel(version.label) }} Version</span>
                  <SvgIcon class="svg-icon" name="view-more-icon"></SvgIcon>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { ElMessage } from "element-plus";
import { CopyDocument } from "@element-plus/icons-vue";
import {
  buildDisplaySurveys,
  copyTextWithFallback,
  createOnboardingSurveys,
  getPreferredSurveyLanguage,
  getStoredOnboardingUserDetail,
  normalizeLanguageLabel,
} from "@/utils/culturalValueOnboarding";

const storedUserDetail = getStoredOnboardingUserDetail();
const registeredUserName = ref(storedUserDetail.username);
const registeredUserCountry = ref(storedUserDetail.country);
const registeredUserLanguage = ref(storedUserDetail.language);
const surveyLinksExpanded = ref(true);
const surveys = ref(createOnboardingSurveys());

const preferredSurveyLanguage = computed(() => {
  return getPreferredSurveyLanguage({
    country: registeredUserCountry.value,
    language: registeredUserLanguage.value,
    preferRegisteredLanguage: true,
  });
});

const displaySurveys = computed(() => {
  return buildDisplaySurveys({
    surveys: surveys.value,
    preferredLanguage: preferredSurveyLanguage.value,
    surveyLinksExpanded: surveyLinksExpanded.value,
  });
});

const handleCopyRegisteredName = async () => {
  await copyTextWithFallback(registeredUserName.value);
  ElMessage.success("Name copied");
};
</script>

<style scoped lang="scss">
.survey-container {
  padding: 3.125em 2em;
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
</style>
