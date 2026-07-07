<template>
  <el-dialog
    :model-value="visible"
    @update:model-value="$emit('update:visible', $event)"
    title=""
    width="720px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    align-center
    :z-index="3000"
  >
    <!-- 红色警告条 -->
    <div class="mismatch-warning">
      <template v-if="isTextEdited">
        <span v-html="t('common.mismatch.warningTextEdited')" />
      </template>
      <template v-else>
        <span v-html="t('common.mismatch.warningConceptEdited')" />
      </template>
    </div>

    <!-- 文本片段 -->
    <div class="mismatch-section">
      <div class="mismatch-label">{{ t('common.mismatch.textFragment') }}</div>
      <div class="mismatch-content">{{ textFragment }}</div>
    </div>

    <!-- 价值观概念 -->
    <div class="mismatch-section">
      <div class="mismatch-label">{{ t('common.mismatch.valueConcepts') }}</div>
      <div class="mismatch-content">{{ valueConcepts }}</div>
    </div>

    <!-- 选择按钮 -->
    <div class="mismatch-actions">
      <el-button
        class="mismatch-btn"
        :class="{ active: selectedChoice === 'match' }"
        @click="selectedChoice = 'match'"
      >
        <template v-if="isTextEdited">
          {{ t('common.mismatch.btnConceptStillMatches') }}
        </template>
        <template v-else>
          {{ t('common.mismatch.btnTextMatches') }}
        </template>
      </el-button>
      <el-button
        class="mismatch-btn mismatch-btn-primary"
        :disabled="selectedChoice === 'match'"
        @click="handleMismatchReturn"
      >
        <template v-if="isTextEdited">
          {{ t('common.mismatch.btnConceptInconsistent') }}
        </template>
        <template v-else>
          {{ t('common.mismatch.btnTextMismatches') }}
        </template>
      </el-button>
    </div>

    <!-- 选择"匹配"后展开输入框 -->
    <div v-if="selectedChoice === 'match'" class="mismatch-explain">
      <div class="mismatch-explain-label">
        <template v-if="isTextEdited">
          {{ t('common.mismatch.explainLabelConcept') }}
        </template>
        <template v-else>
          {{ t('common.mismatch.explainLabelText') }}
        </template>
      </div>
      <el-input
        v-model="explainText"
        type="textarea"
        :rows="3"
        :placeholder="isTextEdited ? t('common.mismatch.placeholderFromConcept') : t('common.mismatch.placeholderFromText')"
      />
      <div v-if="inputValidationError" class="mismatch-validation-error" style="color: red">
        {{ inputValidationError }}
      </div>
      <div class="mismatch-explain-actions">
        <el-button @click="handleCancel">{{ t('common.cancel') }}</el-button>
        <el-button
          type="primary"
          :disabled="!explainText.trim()"
          @click="handleConfirm"
        >
          {{ t('common.submit') }}
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "text-edit", // "text-edit" | "concept-edit"
  },
  textFragment: {
    type: String,
    default: "",
  },
  valueConcepts: {
    type: String,
    default: "",
  },
  initialExplanation: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:visible", "confirm", "return-to-edit"]);

const selectedChoice = ref(null);
const explainText = ref("");

const isTextEdited = computed(() => props.type === "text-edit-concept-keep");

// 用户输入校验：确保输入的每个词都能在原文中找到
const inputValidationError = ref("");
const validateInput = () => {
  const text = explainText.value.trim();
  if (!text) {
    inputValidationError.value = "";
    return;
  }
  // 参考文本：text被编辑时要从concept中找，concept被编辑时要从text中找
  const reference = isTextEdited.value ? props.valueConcepts : props.textFragment;



  const result = checkTextByWord(reference, text)
  if (!result.pass) {
    inputValidationError.value = isTextEdited.value ?  t('common.mismatch.placeholderFromConcept') : t('common.mismatch.placeholderFromText');
  } else {
    inputValidationError.value = "";
  }
};

// 弹窗打开时重置状态，如有初始值则预填
watch(
  () => props.visible,
  (val) => {
    if (val) {
      if (props.initialExplanation) {
        selectedChoice.value = "match";
        explainText.value = props.initialExplanation;
      } else {
        selectedChoice.value = null;
        explainText.value = "";
      }
    }
  }
);

const handleCancel = () => {
  selectedChoice.value = null;
  explainText.value = "";
};

const handleConfirm = () => {
  validateInput();
  if (inputValidationError.value) return;
  emit("confirm", { explanation: explainText.value });
  emit("update:visible", false);
};

const handleMismatchReturn = () => {
  emit("return-to-edit");
  emit("update:visible", false);
};




/**
 * 拆分文本为匹配单元：英文=单词，中日韩符号=单个字符
 * @param {string} str 原始文本
 * @returns {string[]} 拆分后的单元数组
 */
function splitToMatchUnits(str) {
  // 1. 统一去除多余空白，替换为单个空格
  const clean = str.replace(/\s+/g, " ").trim();
  const units = [];
  // 正则匹配：英文单词 | 单个非英文字符
  const reg = /([a-zA-Z0-9]+)|([^a-zA-Z0-9 ])/g;
  let match;
  while ((match = reg.exec(clean)) !== null) {
    if (match[1]) {
      // 捕获到英文单词，整体作为一个单元
      units.push(match[1].toLowerCase()); // 大小写忽略，可选
    } else if (match[2]) {
      // 中日韩、标点、符号，单字为单元
      units.push(match[2]);
    }
  }
  return units;
}

/**
 * 校验文本B是否全部由A的单元拼接而成
 * 英文按单词校验，中日韩按单字校验
 * @param {string} textA 源文本
 * @param {string} textB 待校验文本
 * @returns {{pass: boolean, msg: string, invalidUnits: string[]}}
 */
function checkTextByWord(textA, textB) {
  const unitsA = splitToMatchUnits(textA);
  const unitsB = splitToMatchUnits(textB);
  const setA = new Set(unitsA);
  const invalidUnits = [];

  for (const unit of unitsB) {
    if (!setA.has(unit) && !invalidUnits.includes(unit)) {
      invalidUnits.push(unit);
    }
  }

  if (invalidUnits.length === 0) {
    return {
      pass: true,
      msg: "校验通过：B所有英文单词、文字片段均来自A",
      invalidUnits: []
    };
  } else {
    return {
      pass: false,
      msg: `校验失败：存在源文本A中不存在的单元【${invalidUnits.join("、")}】`,
      invalidUnits
    };
  }
}
</script>

<style scoped lang="scss">
.mismatch-warning {
  background-color: #fef2f2;
  border-left: 3px solid #dc2626;
  padding: 12px 16px;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.6;
  color: #1f2937;
}

.mismatch-section {
  margin-bottom: 16px;

  .mismatch-label {
    font-size: 13px;
    color: #6b7280;
    margin-bottom: 4px;
  }

  .mismatch-content {
    font-size: 14px;
    color: #1f2937;
    line-height: 1.6;
  }
}

.mismatch-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 8px;

  .mismatch-btn {
    flex: 1;
    height: auto;
    padding: 12px 16px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    text-align: left;
    font-size: 13px;
    line-height: 1.4;
    color: #374151;
    background: #fff;
    white-space: normal;

    &.active {
      border-color: #93c5fd;
      background: #eff6ff;
    }

    &.mismatch-btn-primary {
      background: #0b70c3;
      color: #fff;
      border-color: #0b70c3;

      &:hover {
        background: #095ea3;
      }
      &:disabled {
        background: #C2C2C2;
        color: #fff;
        cursor: not-allowed;
        border-color: #C2C2C2;
      }
    }
  }
}

.mismatch-explain {
  margin-top: 16px;
  border-top: 1px solid #e5e7eb;
  padding-top: 16px;

  .mismatch-explain-label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #1f2937;
  }

  .mismatch-explain-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }
}
</style>
