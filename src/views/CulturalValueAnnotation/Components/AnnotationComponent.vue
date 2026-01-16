<template>
  <div class="answer-content">
    <div class="left">
      <div
        class="response-text"
        style="white-space: pre-line"
        v-html="processedAnnotationDataResponse"
        @click="handleKeywordClick"
      ></div>
    </div>
    <div class="right">
      <div>
        <div>
          <p>Text fragment:</p>
          <el-input
            v-model="editCueValue"
            :disabled="!isEditMode"
            style=""
            placeholder="Please input"
            :autosize="{ minRows: 7, maxRows: 7 }"
            type="textarea"
          />
        </div>
        <div>
          <p>Value Concepts:</p>
          <el-input
            v-model="editConceptValue"
            :disabled="!isEditMode"
            style=""
            placeholder="Please input"
            :autosize="{ minRows: 3, maxRows: 3 }"
            type="textarea"
          />
        </div>
        <div class="button-container1" v-if="!isEditMode">
          <el-button class="keep" @click="handleKeepClick">Keep</el-button>
          <el-button class="delete" @click="handleDeleteClick">Delete</el-button>
          <el-button class="edit" @click="handleEditClick">Edit</el-button>
        </div>
        <div v-else class="button-container1" style="justify-content: flex-end">
          <el-button class="cancel" @click="handleCancelEdit">{{
            t("common.cancel")
          }}</el-button>
          <el-button class="submit" @click="handleSubmitEdit">{{
            t("common.submit")
          }}</el-button>
        </div>
      </div>
      <div class="button-container2" v-if="!isEditMode">
        <el-button @click="handleAddNew">Add New </el-button>
        <div>
          <el-button :disabled="currentCueIndex === 0" @click="previousCue"
            >Previous</el-button
          >
          <el-button
            :disabled="
              currentCueIndex === annotationData.highlight_cues.length - 1
            "
            @click="nextCue"
            >Next</el-button
          >
        </div>
      </div>
      <div class="button-container2" v-else></div>
    </div>
  </div>
</template>

<script  setup>
import { reactive, ref, computed, onMounted } from "vue";
import { defineProps, watch, defineExpose } from "vue";
import { useRoute } from "vue-router";

import { ElMessage } from "element-plus";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const userDetail = JSON.parse(sessionStorage.getItem("userDetail") || "{}");

const props = defineProps({
  annotationDataOrigin: {
    type: Object,
    default: () => ({
      response: "",
      highlight_cues: [],
      key_concepts: [],
    }),
  },
});

watch(
  () => props.annotationDataOrigin,
  (newVal) => {
    annotationData.originalResponse = newVal.response;
    annotationData.response = newVal.response;
    // 创建副本而不是直接引用，确保两个组件实例的数据独立
    annotationData.highlight_cues = [...newVal.highlight_cues];
    annotationData.key_concepts = [...newVal.key_concepts];
    // 确保 keywordStatus 数组的长度与 highlight_cues 一致
    keywordStatus.value = Array(annotationData.highlight_cues.length).fill(null);
  }
);
// 处理response 并标注
const annotationData = reactive({
  originalResponse: "",
  response: "",
  highlight_cues: [],
  key_concepts: [],
});

// 跟踪每个关键词的状态（keep/delete/edit/add）
const keywordStatus = ref([]);

onMounted(() => {
  // 如果annotationData还没有数据，从props.annotationDataOrigin初始化
  if (annotationData.highlight_cues.length === 0 && props.annotationDataOrigin) {
    annotationData.originalResponse = props.annotationDataOrigin.response;
    annotationData.response = props.annotationDataOrigin.response;
    // 创建副本而不是直接引用，确保两个组件实例的数据独立
    annotationData.highlight_cues = [...props.annotationDataOrigin.highlight_cues];
    annotationData.key_concepts = [...props.annotationDataOrigin.key_concepts];
  }
  
  // 组件挂载时初始化 keywordStatus 数组
  if (annotationData.highlight_cues.length > 0) {
    keywordStatus.value = Array(annotationData.highlight_cues.length).fill(null);
  }
});

const currentCueIndex = ref(0); //

// 存储当前选中关键词的位置信息
const currentCuePosition = ref({
  start: 0,
  end: 0,
});

const isEditMode = ref(false);

// 标识是否正在添加新的cue和concept
const isAddingNew = ref(false);

// 临时存储编辑中的值
const editCue = ref("");
const editConcept = ref("");

const processedAnnotationDataResponse = computed(() => {
  const originalText = annotationData.response;

  // 创建一个包含所有cue及其索引的数组
  const cuesWithIndex = annotationData.highlight_cues.map((cue, index) => ({
    cue,
    index,
  }));

  // 找到每个cue在原始文本中对应的位置
  const positions = [];
  const lastPositions = new Map(); // 记录每个cue上次找到的位置

  cuesWithIndex.forEach(({ cue, index }) => {
    let start = lastPositions.get(cue) || 0;
    const foundIndex = originalText.indexOf(cue, start);

    if (foundIndex !== -1) {
      positions.push({
        start: foundIndex,
        end: foundIndex + cue.length,
        cue,
        index,
      });

      // 更新该cue的上次找到位置
      lastPositions.set(cue, foundIndex + 1);
    }
  });

  // 去重：如果多个cue重叠，只保留最长的匹配
  positions.sort((a, b) => {
    // 按长度从长到短排序
    if (b.cue.length !== a.cue.length) {
      return b.cue.length - a.cue.length;
    }
    // 长度相同时，按开始位置从小到大排序
    return a.start - b.start;
  });

  // 过滤掉重叠的位置
  const filteredPositions = [];
  const usedRanges = [];
  positions.forEach((pos) => {
    // 检查当前位置是否与已使用的范围重叠
    const isOverlapping = usedRanges.some((range) => {
      return pos.start < range.end && pos.end > range.start;
    });

    if (!isOverlapping) {
      filteredPositions.push(pos);
      usedRanges.push({ start: pos.start, end: pos.end });
    }
  });

  // 按开始位置从小到大排序，以便从前往后处理
  filteredPositions.sort((a, b) => a.start - b.start);

  // 构建最终的HTML文本
  let result = "";
  let lastEnd = 0;

  filteredPositions.forEach(({ start, end, cue, index }) => {
    // 添加未处理的文本部分
    result += originalText.slice(lastEnd, start);

    // 添加带高亮的cue
    let className = "highlight-keyword";
    if (currentCueIndex.value === index) className += " current";
    if (keywordStatus.value[index] === "edit") className += " edit";
    else if (keywordStatus.value[index] === "add") className += " add";
    else if (keywordStatus.value[index] === "keep") className += " keep";
    else if (keywordStatus.value[index] === "delete") className += " delete";

    result += `<span class="${className}" data-cue="${cue}" data-index="${index}">${cue}</span>`;

    lastEnd = end;
  });

  // 添加最后一部分未处理的文本
  result += originalText.slice(lastEnd);

  return result;
});

const handleKeywordClick = (event) => {
  const target = event.target;
  if (target.classList.contains("highlight-keyword")) {
    const index = parseInt(target.getAttribute("data-index") || "0");
    // const concepts = annotationData.key_concepts[index] || "No concepts found";
    // alert(`Related key concepts: ${concepts}`);
    currentCueIndex.value = index;
    updateCurrentCuePosition();
  }
};

const currentCue = computed(() => {
  if (currentCueIndex.value === -1) {
    return "";
  } else {
    return annotationData.highlight_cues[currentCueIndex.value] || "";
  }
});

const currentConcept = computed(() => {
  if (currentCueIndex.value === -1) {
    return "";
  } else {
    return annotationData.key_concepts[currentCueIndex.value] || "";
  }
});

// 编辑模式下的cue值
const editCueValue = computed({
  get: () => {
    return isEditMode.value ? editCue.value : currentCue.value;
  },
  set: (value) => {
    if (isEditMode.value) {
      editCue.value = value;
    }
  },
});

// 编辑模式下的concept值
const editConceptValue = computed({
  get: () => {
    return isEditMode.value ? editConcept.value : currentConcept.value;
  },
  set: (value) => {
    if (isEditMode.value) {
      editConcept.value = value;
    }
  },
});

const previousCue = () => {
  if (currentCueIndex.value > 0) {
    currentCueIndex.value--;
    updateCurrentCuePosition();
  }
};

const nextCue = () => {
  if (currentCueIndex.value < annotationData.highlight_cues.length - 1) {
    currentCueIndex.value++;
    updateCurrentCuePosition();
  }
};

// 根据currentCueIndex更新currentCuePosition
const updateCurrentCuePosition = () => {
  if (
    currentCueIndex.value >= 0 &&
    currentCueIndex.value < annotationData.highlight_cues.length
  ) {
    const cue = annotationData.highlight_cues[currentCueIndex.value];
    const start = annotationData.response.indexOf(cue);
    if (start !== -1) {
      currentCuePosition.value = {
        start,
        end: start + cue.length,
      };
    }
  }
};

const handleKeepClick = () => {
  console.log("Completely correct, keep");
  keywordStatus.value[currentCueIndex.value] = "keep";

  console.log(keywordStatus.value);
};

const handleDeleteClick = () => {
  console.log("Irrelevant or incorrect, delete");
  keywordStatus.value[currentCueIndex.value] = "delete";

  console.log(keywordStatus.value);
};

const handleEditClick = () => {
  console.log("Edit", "currentCueIndex:", currentCueIndex.value);
  // 进入编辑模式
  isEditMode.value = true;
  // 保存当前值到编辑临时变量
  editCue.value = currentCue.value;
  editConcept.value = currentConcept.value;
  // 设置状态为edit
  keywordStatus.value[currentCueIndex.value] = "edit";
  console.log("Keyword status after edit click:", keywordStatus.value);
};

const handleSubmitEdit = () => {
  console.log("Submit edit");
  if (isAddingNew.value) {
    // 正在添加新的cue和concept
    if (editCue.value.trim() === "") {
      console.warn("Cue text cannot be empty");
      ElMessage.warning("Text fragment cannot be empty");
      return;
    }
    if (editConcept.value.trim() === "") {
      console.warn("Concept text cannot be empty");
      ElMessage.warning("Value Concepts cannot be empty");
      return;
    }

    // 将新的cue文本拼接在response后面
    const newStartIndex = annotationData.response.length;
    const newEndIndex = newStartIndex + editCue.value.length;

    // 更新response文本
    annotationData.response += "\n" + editCue.value;

    // 添加到数组中
    annotationData.highlight_cues.push(editCue.value);
    annotationData.key_concepts.push(editConcept.value);
    // 为新添加的cue设置状态为add
    keywordStatus.value.push("add");

    // 更新currentCueIndex为新添加的索引
    currentCueIndex.value = annotationData.highlight_cues.length - 1;

    // 更新currentCuePosition
    currentCuePosition.value = {
      start: newStartIndex + 1,
      end: newEndIndex + 1,
    };

    // 重置添加新的状态
    isAddingNew.value = false;
  } else {
    // 更新现有的cue和concept
    annotationData.highlight_cues[currentCueIndex.value] = editCue.value;
    annotationData.key_concepts[currentCueIndex.value] = editConcept.value;

    // 使用记录的位置直接替换当前选中的cue
    const { start, end } = currentCuePosition.value;

    // 构建更新后的response文本
    const updatedResponse = 
      annotationData.response.slice(0, start) + 
      editCue.value + 
      annotationData.response.slice(end);

    // 更新response文本
    annotationData.response = updatedResponse;

    // 设置当前关键词为edit状态
    keywordStatus.value[currentCueIndex.value] = "edit";
  }

  // 退出编辑模式
  isEditMode.value = false;
};

const handleCancelEdit = () => {
  console.log("Cancel edit");
  // 退出编辑模式，不保存修改
  isEditMode.value = false;
  // 重置添加新的状态
  isAddingNew.value = false;
  // 恢复currentCueIndex为有效索引
  if (
    currentCueIndex.value === -1 &&
    annotationData.highlight_cues.length > 0
  ) {
    currentCueIndex.value = 0;
    updateCurrentCuePosition();
  }
};

const handleAddNew = () => {
  console.log("Add new cue and concept");

  // 设置添加新的状态
  isAddingNew.value = true;

  // 进入编辑模式，方便用户输入新的内容
  isEditMode.value = true;
  editCue.value = "";
  editConcept.value = "";

  // 更新currentCueIndex为-1，表示正在添加新的cue
  currentCueIndex.value = -1;
};

defineExpose({
  annotationData,
  keywordStatus,
});
</script>
<style scoped lang="scss">
.answer-content {
  --el-text-color-regular: #000;
  --el-disabled-text-color: #666;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 1.5;
  & > div {
    width: 49%;
    border-radius: 8px;
    min-height: 300px;

    box-sizing: border-box;
    &.left {
      border: 1px solid #666;
      padding: 1em;
    }
    &.right {
      & > div:nth-child(1) {
        background: #f4f1d7;
        padding: 1em;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 1em;
        & > div {
          p {
            font-size: 1em;
            margin-bottom: 0.5em;
          }
          :deep(.el-input__inner) {
            // --el-input-inner-height:5em;
            // font-size: 1rem;
          }
        }
      }
      .button-container1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        :deep(.el-button) {
          height: 3.4em;
          font-size: 1em;
          width: 33%;
          display: block;
          & span {
            display: inline-block;
            white-space: normal;
            width: 100%;
          }
          &.keep {
            border: 1px solid #228b22;
            color: #228b22;
          }
          &.delete {
            border: 1px solid #b22222;
            color: #b22222;
          }
          &.edit {
            border: 1px solid #0b70c3;
            color: #0b70c3;
          }
          &.submit {
            border: 1px solid #0b70c3;
            color: #0b70c3;
          }
          &.cancel {
            border: 1px solid #666;
            color: #666;
          }
        }
      }

      .button-container2 {
        height: 2.4em;
        margin-top: 1.5em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .el-button {
          border: 1px solid #0b70c3;
          color: #0b70c3;
          font-size: 1em;
          height: 2.4em;
          &:disabled {
            border: none;
            background: #c2c2c2;
            color: #fff;
          }
        }
      }
    }
  }
}

:deep(.el-textarea__inner) {
  --el-textarea-inner-height: 300px;
  font-size: 1rem;
}
</style>
