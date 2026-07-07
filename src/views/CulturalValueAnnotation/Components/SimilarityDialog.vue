<template>
  <el-dialog
    :model-value="visible"
    width="700px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    center
    @update:model-value="$emit('update:visible', $event)"
  >
    <div class="similarity-dialog">
      <!-- 提示信息 -->
      <div class="similarity-banner">
        <span v-html="t('common.similarity.banner')" />
      </div>

      <!-- 反思提示 -->
      <div class="similarity-prompt">
        {{ t("common.similarity.prompt") }}
      </div>

      <!-- 选项 -->
      <div class="similarity-options">
        <el-radio-group v-model="selectedOption" class="similarity-radio-group">
          <el-radio value="agree">{{ t("common.similarity.optionAgree") }}</el-radio>
          <el-radio value="little-divergence">{{ t("common.similarity.optionLittleDivergence") }}</el-radio>
          <el-radio value="other">{{ t("common.similarity.optionOther") }}</el-radio>
        </el-radio-group>
      </div>

      <!-- 输入原因 -->
      <!-- <div v-if="selectedOption" class="similarity-reason"> -->
      <div class="similarity-reason">
        <div class="similarity-reason-label">
          {{ t("common.similarity.reasonLabel") }}
        </div>
        <el-input
          v-model="reasonText"
          type="textarea"
          :rows="3"
          :placeholder="t('common.similarity.reasonPlaceholder')"
        />
      </div>

      <!-- 按钮 -->
      <div class="similarity-buttons">
        <el-button class="similarity-btn-revise" @click="handleRevise">
          {{ t("common.similarity.reviseBtn") }}
        </el-button>
        <el-button
          class="similarity-btn-submit"
          :disabled="!selectedOption || !reasonText"
          @click="handleSubmit"
        >
          {{ t("common.submit") }}
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  visible: { type: Boolean, default: false },
});

const emit = defineEmits(["update:visible", "revise", "confirm"]);

const selectedOption = ref("");
const reasonText = ref("");

watch(
  () => props.visible,
  (val) => {
    if (val) {
      selectedOption.value = "";
      reasonText.value = "";
    }
  }
);

const optionMap = {
  agree: "I agree with the mainstream cultural view",
  "little-divergence": "This topic has little divergence of views",
  other: "Other reasons",
};

const handleRevise = () => {
  emit("revise");
  emit("update:visible", false);
};

const handleSubmit = () => {
  emit("confirm", {
    value: optionMap[selectedOption.value] || selectedOption.value,
    reason: reasonText.value || "",
  });
  emit("update:visible", false);
};
</script>

<style lang="scss" scoped>
.similarity-dialog {
  .similarity-banner {
    background: #fff0f0;
    border-left: 4px solid #d93025;
    padding: 12px 16px;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .similarity-prompt {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .similarity-options {
    margin-bottom: 20px;
  }

  .similarity-radio-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  .similarity-reason {
    margin-bottom: 20px;

    .similarity-reason-label {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 8px;
    }
  }

  .similarity-buttons {
    display: flex;
    justify-content: space-between;

    .similarity-btn-revise {
      background: #0B70C3;
      color: #fff;
      border: none;
    }

    .similarity-btn-submit {
      background: #c2c2c2;
      color: #fff;
      border: none;

      &:not(:disabled) {
        background: #0b70c3;
      }
    }
  }
}
</style>
