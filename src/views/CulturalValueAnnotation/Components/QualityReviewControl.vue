<template>
  <div class="quality-review-control">
    <div class="quality-review-control__panel">
      <div class="quality-review-control__result">
        <strong v-if="title" class="quality-review-control__title">
          {{ title }}
        </strong>
        <strong style="font-size: 14px">{{ t("culturalValueAnnotation.qualityReview.result") }}</strong>
        <span
          class="quality-review-status"
          :class="`quality-review-status--${statusType}`"
        >
          {{ statusLabel }}
        </span>
      </div>

      <p
        v-if="isAdmin && formattedDuration"
        class="quality-review-control__duration"
      >
        {{ t("culturalValueAnnotation.qualityReview.currentDuration") }}：
        <strong>{{ formattedDuration }}</strong>
      </p>

      <div v-if="isAdmin" class="quality-review-checklist">
        <div
          v-for="(criterion, index) in criteria"
          :key="criterion.label"
          class="quality-review-checklist__item"
        >
          <p>{{ criterionNumber(index) }} {{ criterion.label }}</p>
          <el-radio-group
            :model-value="review.check_list[index]"
            :disabled="saving"
            @change="(value) => handleCheckChange(index, value)"
          >
            <el-radio
              v-for="reviewOption in criterion.options"
              :key="reviewOption.value"
              :value="reviewOption.value"
            >{{ reviewOption.label }}</el-radio>
          </el-radio-group>
        </div>
      </div>

      <p v-if="isAdmin && note" class="quality-review-control__note">
        {{ note }}
      </p>

      <div v-if="showSimilarityDetail" class="quality-review-similarity">
        <template v-if="hasSimilarityDetail">
          <div>
          <span>{{ t("culturalValueAnnotation.qualityReview.similarityOption") }}</span>
          <p>{{ similarityOptionLabel }}</p>
          </div>
          <div>
          <span>{{ t("culturalValueAnnotation.qualityReview.similarityExplanation") }}</span>
          <p>{{ similarityExplanation }}</p>
          </div>
        </template>
        <p v-else class="quality-review-similarity__empty">None</p>
      </div>

      <div
        v-for="(comment, index) in review.comments"
        :key="`${comment.timestamp}-${index}`"
        class="quality-review-comment"
        :data-addressed="comment.addressed === true ? 'true' : 'false'"
        tabindex="-1"
      >
        <div class="quality-review-comment__meta">
          <span>{{ t("culturalValueAnnotation.qualityReview.administrator") }}</span>
          <span>{{ formatTimestamp(comment.timestamp) }}</span>
        </div>
        <p>{{ comment.text }}</p>
        <el-checkbox
          :model-value="comment.addressed === true"
          :disabled="isAdmin || saving"
          @change="(value) => handleAddressedChange(index, value)"
        >{{ t("culturalValueAnnotation.qualityReview.addressed") }}</el-checkbox>
      </div>

      <el-input
        v-if="isAdmin"
        v-model="newComment"
        type="textarea"
        :rows="3"
        show-word-limit
        :placeholder="t('culturalValueAnnotation.qualityReview.commentPlaceholder')"
        :disabled="saving"
      />
      <div v-if="isAdmin" class="quality-review-control__actions">
        <el-button
          type="primary"
          color="#d95f02"
          :loading="saving"
          :disabled="!newComment.trim()"
          @click="addComment"
        >{{ t("culturalValueAnnotation.qualityReview.send") }}</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import {
  isQualityReviewSelectionComplete,
  isQualityReviewSelectionPassing,
  normalizeQualityReviewSelection,
} from "@/utils/qualityReviewCriteria";

const { t } = useI18n();

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  saving: {
    type: Boolean,
    default: false,
  },
  criteria: {
    type: Array,
    default: () => [],
  },
  stepNumber: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  note: {
    type: String,
    default: "",
  },
  durationSeconds: {
    type: [Number, String],
    default: null,
  },
  similarityDetail: {
    type: Object,
    default: null,
  },
  showSimilarityDetail: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
const newComment = ref("");

const review = computed(() => ({
  qualified: props.modelValue?.qualified ?? null,
  check_list: props.criteria.map((criterion, index) => {
    const value = props.modelValue?.check_list?.[index];
    return normalizeQualityReviewSelection(criterion, value);
  }),
  comments: Array.isArray(props.modelValue?.comments)
    ? props.modelValue.comments
    : [],
}));

const statusLabel = computed(() => {
  if (review.value.qualified === true) {
    return t("culturalValueAnnotation.qualityReview.passed");
  }
  if (review.value.qualified === false) {
    return t("culturalValueAnnotation.qualityReview.failed");
  }
  return t("culturalValueAnnotation.qualityReview.unreviewed");
});

const statusType = computed(() => {
  if (review.value.qualified === true) {
    return "success";
  }
  if (review.value.qualified === false) {
    return "warning";
  }
  return "info";
});

const formattedDuration = computed(() => {
  if (props.durationSeconds === null || props.durationSeconds === undefined || props.durationSeconds === "") {
    return "";
  }

  const totalSeconds = Math.max(0, Math.floor(Number(props.durationSeconds)));
  if (!Number.isFinite(totalSeconds)) {
    return "";
  }

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return t("culturalValueAnnotation.qualityReview.durationFormat", {
    minutes,
    seconds,
    totalSeconds,
  });
});

const similarityOption = computed(() =>
  String(props.similarityDetail?.option ?? props.similarityDetail?.value ?? "").trim(),
);
const similarityExplanation = computed(() =>
  String(props.similarityDetail?.explanation ?? props.similarityDetail?.reason ?? "").trim(),
);
const hasSimilarityDetail = computed(() =>
  Boolean(similarityOption.value || similarityExplanation.value),
);
const similarityOptionLabel = computed(() => {
  const optionLabels = {
    agree: "common.similarity.optionAgree",
    optionAgree: "common.similarity.optionAgree",
    "1": "common.similarity.optionAgree",
    "little-divergence": "common.similarity.optionLittleDivergence",
    optionLittleDivergence: "common.similarity.optionLittleDivergence",
    "2": "common.similarity.optionLittleDivergence",
    "already-revised": "common.similarity.optionAlreadyRevised",
    optionAlreadyRevised: "common.similarity.optionAlreadyRevised",
    "3": "common.similarity.optionAlreadyRevised",
    other: "common.similarity.optionOther",
    optionOther: "common.similarity.optionOther",
    "4": "common.similarity.optionOther",
  };
  const translationKey = optionLabels[similarityOption.value];
  return translationKey ? t(translationKey) : similarityOption.value;
});

const updateReview = (nextReview) => {
  emit("update:modelValue", nextReview);
};

const criterionNumber = (index) =>
  props.title ? `${index + 1}.` : `${props.stepNumber}.${index + 1}`;

const handleCheckChange = (index, value) => {
  const checkList = [...review.value.check_list];
  checkList[index] = value;
  const isComplete = props.criteria.every(
    (criterion, criterionIndex) =>
      isQualityReviewSelectionComplete(criterion, checkList[criterionIndex]),
  );

  updateReview({
    ...review.value,
    check_list: checkList,
    qualified: isComplete
      ? props.criteria.every((criterion, criterionIndex) =>
          isQualityReviewSelectionPassing(criterion, checkList[criterionIndex]),
        )
      : null,
  });
};

const addComment = () => {
  const text = newComment.value.trim();
  if (!text) {
    return;
  }

  updateReview({
    ...review.value,
    comments: [
      ...review.value.comments,
      {
        text,
        timestamp: formatReviewTimestamp(new Date()),
        addressed: false,
      },
    ],
  });
  newComment.value = "";
};

const handleAddressedChange = (index, addressed) => {
  updateReview({
    ...review.value,
    comments: review.value.comments.map((comment, commentIndex) =>
      commentIndex === index
        ? { ...comment, addressed: addressed ? true : false }
        : comment,
    ),
  });
};

const formatTimestamp = (timestamp) => {
  if (!timestamp) {
    return "";
  }

  const date = new Date(timestamp);
  return Number.isNaN(date.getTime()) ? timestamp : date.toLocaleString();
};

const formatReviewTimestamp = (date) => {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};
</script>

<style scoped lang="scss">
.quality-review-control {
  display: block;
  min-width: 0;
  pointer-events: auto;
  font-size: 14px;

  &__panel {
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;
    padding: 28px 24px;
    border: none;
    border-radius: 12px;
    background: #F194231A;
    box-shadow: none;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  &__note {
    margin: 0 0 20px;
    color: #d93025;
    line-height: 1.5;
  }

  &__result {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  &__duration {
    margin: 0 0 10px 0;
    color: #d95f02;
    line-height: 1.5;
  }

  &__title {
    margin-right: 4px;
    font-size: 14px;
  }
}

.quality-review-status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 26px;
  box-sizing: border-box;
  padding: 4px 10px;
  border: 1px solid;
  border-radius: 8px;
  background: #fff;
  font-size: 12px;
  line-height: 1.4;
  white-space: nowrap;

  &--success {
    border-color: #1b9a35;
    color: #1b9a35;
  }

  &--warning {
    border-color: #e65c00;
    color: #e65c00;
  }

  &--info {
    border-color: #909399;
    color: #606266;
  }
}

.quality-review-checklist {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 20px;

  &__item {
    color: #02205D;

    p {
      margin: 0 0 6px;
      font-size: 1em;
      line-height: 1.5;
      font-weight: 600;
    }

    :deep(.el-radio-group) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      padding-left: 32px;
    }

    :deep(.el-radio) {
      --theme-color: #e65c00;
      --text-color: #002f6c;
      --bg-color: #fff;
      width: 100%;
      height: auto;
      margin-right: 0 !important;
      color: #002f6c !important;
      white-space: normal;
    }

    :deep(.el-radio__label) {
      line-height: 1.5;
      white-space: normal;
    }

    :deep(.el-radio__inner) {
      width: 16px !important;
      height: 16px !important;
      border: 2px solid #cbd5e1 !important;
      background: #fff !important;
    }

    :deep(.el-radio__inner::after) {
      width: 8px !important;
      height: 8px !important;
      background: #e65c00 !important;
    }

    :deep(.el-radio__input.is-checked .el-radio__inner) {
      border-color: #cbd5e1 !important;
      background: #fff !important;
    }

    :deep(.el-radio__label),
    :deep(.el-radio__input.is-checked + .el-radio__label) {
      padding-left: 8px !important;
      color: #002f6c !important;
      font-size: 1em;
      line-height: 1.2;
    }
  }
}

.quality-review-similarity {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px;
  // border: 1px solid #DE6500;
  border-radius: 10px;
  margin-bottom: 20px;
  background: #fff;

  &__empty {
    margin: 0;
    color: #7a8491;
    line-height: 1.5;
  }

  > div {
    span {
      color: #7a8491;
      font-size: 12px;
      font-weight: 600;
    }

    p {
      margin: 6px 0 0;
      color: #000;
      line-height: 1.5;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }
  }
}

:deep(.quality-review-control__panel .el-textarea__inner) {
  min-height: 72px !important;
  padding: 12px;
  border: 1px solid #d9dde5;
  box-shadow: none;
  font-size: 14px !important;
}

.quality-review-comment {
  padding: 14px 16px 12px;
  border: 1px solid #DE6500;
  border-radius: 10px;
  margin-bottom: 10px;
  background: #fff;
  font-size: 1em;

  &:focus {
    outline: 3px solid rgba(222, 101, 0, 0.28);
    outline-offset: 3px;
  }

  &__meta {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    color: #7a8491;
  }

  p {
    margin: 1em 0;
    color: #000;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  :deep(.el-checkbox) {
    margin-left: 0;
  }
}
</style>
