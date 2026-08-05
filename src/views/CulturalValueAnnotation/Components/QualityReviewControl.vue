<template>
  <div class="quality-review-control">
    <div class="quality-review-control__panel">
      <div class="quality-review-control__result">
        <strong v-if="title" class="quality-review-control__title">
          {{ title }}
        </strong>
        <strong style="font-size: 14px">审核结果：</strong>
        <span
          class="quality-review-status"
          :class="`quality-review-status--${statusType}`"
        >
          {{ statusLabel }}
        </span>
      </div>

      <div v-if="isAdmin" class="quality-review-checklist">
        <div
          v-for="(criterion, index) in criteria"
          :key="criterion"
          class="quality-review-checklist__item"
        >
          <p>{{ criterionNumber(index) }} {{ criterion }}</p>
          <el-radio-group
            :model-value="review.check_list[index]"
            :disabled="saving"
            @change="(value) => handleCheckChange(index, value)"
          >
            <el-radio :value="true">通过</el-radio>
            <el-radio :value="false">不通过</el-radio>
          </el-radio-group>
        </div>
      </div>

      <div
        v-for="(comment, index) in review.comments"
        :key="`${comment.timestamp}-${index}`"
        class="quality-review-comment"
      >
        <div class="quality-review-comment__meta">
          <span>管理员</span>
          <span>{{ formatTimestamp(comment.timestamp) }}</span>
        </div>
        <p>{{ comment.text }}</p>
        <el-checkbox
          :model-value="comment.addressed === true"
          :disabled="isAdmin || saving"
          @change="(value) => handleAddressedChange(index, value)"
        >已完成</el-checkbox>
      </div>

      <el-input
        v-if="isAdmin"
        v-model="newComment"
        type="textarea"
        :rows="3"
        show-word-limit
        placeholder="添加注释..."
        :disabled="saving"
      />
      <div v-if="isAdmin" class="quality-review-control__actions">
        <el-button
          type="primary"
          color="#d95f02"
          :loading="saving"
          :disabled="!newComment.trim()"
          @click="addComment"
        >发送</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

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
});

const emit = defineEmits(["update:modelValue"]);
const newComment = ref("");

const review = computed(() => ({
  qualified: props.modelValue?.qualified ?? null,
  check_list: props.criteria.map((_, index) => {
    const value = props.modelValue?.check_list?.[index];
    return value === true || value === false ? value : null;
  }),
  comments: Array.isArray(props.modelValue?.comments)
    ? props.modelValue.comments
    : [],
}));

const statusLabel = computed(() => {
  if (review.value.qualified === true) {
    return "审核通过";
  }
  if (review.value.qualified === false) {
    return "审核未通过";
  }
  return "未审核";
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

const updateReview = (nextReview) => {
  emit("update:modelValue", nextReview);
};

const criterionNumber = (index) =>
  props.title ? `${index + 1}.` : `${props.stepNumber}.${index + 1}`;

const handleCheckChange = (index, value) => {
  const checkList = [...review.value.check_list];
  checkList[index] = value === true;
  const isComplete = checkList.every(
    (checkValue) => checkValue === true || checkValue === false,
  );

  updateReview({
    ...review.value,
    check_list: checkList,
    qualified: isComplete ? checkList.every(Boolean) : null,
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

  &__result {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
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
    }

    :deep(.el-radio-group) {
      display: flex;
      gap: 16px;
      padding-left: 32px;
    }

    :deep(.el-radio) {
      --theme-color: #e65c00;
      --text-color: #002f6c;
      --bg-color: #fff;
      height: 30px;
      margin-right: 0 !important;
      color: #002f6c !important;
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
      line-height: 30px;
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
  margin-bottom: 18px;
  background: #fff;
  font-size: 1em;

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
