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
    <div class="right" style="height: 40em">
      <div>
        <div>
          <p>Text fragment:</p>
          <el-input
            v-model="editCueValue"
            :disabled="!isCueEditMode"
            style=""
            placeholder="Please input"
            :autosize="{ minRows: 7, maxRows: 7 }"
            type="textarea"
          />

          <div v-if="!isAddingNew">
            status: {{ getStatusDisplayText(highlightCuesStatus[currentCueIndex]) }}
            <div class="button-container1" v-if="!isCueEditMode || isAddingNew">
              <el-button class="keep" @click="handleKeepClick('cue')"
                >{{ t("common.keep") }}</el-button
              >
              <el-button class="delete" @click="handleDeleteClick('cue')"
                >{{ t("common.delete") }}</el-button
              >
              <el-button class="edit" @click="handleEditClick('cue')"
                >{{ t("common.edit") }}</el-button
              >
            </div>
            <div
              v-else
              class="button-container1"
              style="justify-content: flex-end"
            >
              <el-button class="cancel" @click="handleCancelEdit('cue')">{{
                t("common.cancel")
              }}</el-button>
              <el-button class="submit" @click="handleSubmitEdit('cue')">{{
                t("common.submit")
              }}</el-button>
            </div>
          </div>
        </div>
        <div>
          <p>Value Concepts:</p>
          <el-input
            v-model="editConceptValue"
            :disabled="!isConceptEditMode"
            style=""
            placeholder="Please input"
            :autosize="{ minRows: 3, maxRows: 3 }"
            type="textarea"
          />

          <div v-if="!isAddingNew">
            status: {{ getStatusDisplayText(keyConceptsStatus[currentCueIndex]) }}
            <div
              class="button-container1"
              v-if="!isConceptEditMode || isAddingNew"
            >
              <el-button class="keep" @click="handleKeepClick('concept')"
                >{{ t("common.keep") }}</el-button
              >
              <el-button class="delete" @click="handleDeleteClick('concept')"
                >{{ t("common.delete") }}</el-button
              >
              <el-button class="edit" @click="handleEditClick('concept')"
                >{{ t("common.edit") }}</el-button
              >
            </div>
            <div
              v-else
              class="button-container1"
              style="justify-content: flex-end"
            >
              <el-button class="cancel" @click="handleCancelEdit('concept')">{{
                t("common.cancel")
              }}</el-button>
              <el-button class="submit" @click="handleSubmitEdit('concept')">{{
                t("common.submit")
              }}</el-button>
            </div>
          </div>
        </div>

        <ShowHighlight
          :is-adding-new="isAddingNew"
          :cue-text="currentCue"
          :concept-text="currentConcept"
          :cue-concept-correspondence="currentCueCorrespondence"
        />
      </div>
      <div
        class="button-container2"
        v-if="!isCueEditMode && !isConceptEditMode && !isAddingNew"
      >
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
      <div
        class="button-container1"
        v-else-if="isAddingNew"
        style="justify-content: flex-end; margin-top: 2em"
      >
        <el-button class="cancel" @click="handleCancelAddNew">{{
          t("common.cancel")
        }}</el-button>
        <el-button class="submit" @click="handleSubmitAddNew">{{
          t("common.submit")
        }}</el-button>
      </div>
    </div>
  </div>
</template>

<script  setup>
import { reactive, ref, computed, onMounted } from "vue";
import { defineProps, watch, defineExpose } from "vue";
import ShowHighlight from "./ShowHighlight.vue";

import { ElMessage } from "element-plus";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  annotationDataOrigin: {
    type: Object,
    default: () => ({
      response: "",
      highlight_cues: [],
      key_concepts: [],
      cues_concepts_correspondence: [],
    }),
  },
});

const cloneCueConceptsCorrespondence = (correspondence = []) => {
  return correspondence.map((item) => {
    if (!Array.isArray(item)) {
      return [];
    }

    return item.map((fragments) => {
      return Array.isArray(fragments) ? [...fragments] : [];
    });
  });
};

watch(
  () => props.annotationDataOrigin,
  (newVal) => {
    annotationData.originalResponse = newVal.response;
    annotationData.response = newVal.response;
    // 创建副本而不是直接引用，确保两个组件实例的数据独立
    annotationData.highlight_cues = [...newVal.highlight_cues];
    annotationData.key_concepts = [...newVal.key_concepts];
    annotationData.cues_concepts_correspondence =
      cloneCueConceptsCorrespondence(newVal.cues_concepts_correspondence);
    // 验证highlight_cues是否都存在于response中
    validateHighlightCues();
  }
);
// 处理response 并标注
const annotationData = reactive({
  originalResponse: "",
  response: "",
  highlight_cues: [],
  key_concepts: [],
  cues_concepts_correspondence: [],
});

// 跟踪每个关键词的状态（keep/delete/edit/add）
const highlightCuesStatus = ref([]);
const keyConceptsStatus = ref([]);
const originalHighlightCues = ref([]);
const originalKeyConcepts = ref([]);

// 检查并移除不存在于response中的highlight_cues
const validateHighlightCues = () => {
  const validCues = [];
  const validConcepts = [];
  const validCorrespondence = [];

  annotationData.highlight_cues.forEach((cue, index) => {
    if (annotationData.response.includes(cue)) {
      validCues.push(cue);
      validConcepts.push(annotationData.key_concepts[index]);
      validCorrespondence.push(
        cloneCueConceptsCorrespondence([
          annotationData.cues_concepts_correspondence[index] || [],
        ])[0] || []
      );
    } else {
      console.log(`Removing cue that doesn't exist in response: "${cue}"`);
    }
  });

  // 更新数组
  annotationData.highlight_cues = validCues;
  annotationData.key_concepts = validConcepts;
  annotationData.cues_concepts_correspondence = validCorrespondence;
  originalHighlightCues.value = [...validCues];
  originalKeyConcepts.value = [...validConcepts];

  // 确保 highlightCuesStatus 和 keyConceptsStatus 数组的长度与 highlight_cues 一致
  highlightCuesStatus.value = Array(annotationData.highlight_cues.length).fill(
    null
  );
  keyConceptsStatus.value = Array(annotationData.key_concepts.length).fill(
    null
  );
  updateCurrentCuePosition();
};

onMounted(() => {
  // 如果annotationData还没有数据，从props.annotationDataOrigin初始化
  if (
    annotationData.highlight_cues.length === 0 &&
    props.annotationDataOrigin
  ) {
    annotationData.originalResponse = props.annotationDataOrigin.response;
    annotationData.response = props.annotationDataOrigin.response;
    // 创建副本而不是直接引用，确保两个组件实例的数据独立
    annotationData.highlight_cues = [
      ...props.annotationDataOrigin.highlight_cues,
    ];
    annotationData.key_concepts = [...props.annotationDataOrigin.key_concepts];
    annotationData.cues_concepts_correspondence =
      cloneCueConceptsCorrespondence(
        props.annotationDataOrigin.cues_concepts_correspondence
      );
  }

  // 验证highlight_cues是否都存在于response中
  validateHighlightCues();
});

const currentCueIndex = ref(0); //

// 存储当前选中关键词的位置信息
const currentCuePosition = ref({
  start: 0,
  end: 0,
});

const isCueEditMode = ref(false);
const isConceptEditMode = ref(false);

// 标识是否正在添加新的cue和concept
const isAddingNew = ref(false);

const getStatusDisplayText = (status) => {
  if (status === "edit") {
    return "revise";
  }

  return status;
};

const getKeepResultStatus = (type) => {
  if (currentCueIndex.value < 0) {
    return null;
  }

  if (type === "cue") {
    return annotationData.highlight_cues[currentCueIndex.value] ===
      originalHighlightCues.value[currentCueIndex.value]
      ? "keep"
      : "edit";
  }

  return annotationData.key_concepts[currentCueIndex.value] ===
    originalKeyConcepts.value[currentCueIndex.value]
    ? "keep"
    : "edit";
};

// 临时存储编辑中的值
const editCue = ref("");
const editConcept = ref("");

// 统一计算可用的cue位置，保证渲染和编辑替换使用同一套坐标
const getFilteredCuePositions = () => {
  const originalText = annotationData.response;
  const cuesWithIndex = annotationData.highlight_cues.map((cue, index) => ({
    cue,
    index,
  }));

  const positions = [];
  const lastPositions = new Map();

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

      lastPositions.set(cue, foundIndex + 1);
    }
  });

  positions.sort((a, b) => {
    if (b.cue.length !== a.cue.length) {
      return b.cue.length - a.cue.length;
    }
    return a.start - b.start;
  });

  const filteredPositions = [];
  const usedRanges = [];
  positions.forEach((pos) => {
    const isOverlapping = usedRanges.some((range) => {
      return pos.start < range.end && pos.end > range.start;
    });

    if (!isOverlapping) {
      filteredPositions.push(pos);
      usedRanges.push({ start: pos.start, end: pos.end });
    }
  });

  filteredPositions.sort((a, b) => a.start - b.start);
  return filteredPositions;
};

const processedAnnotationDataResponse = computed(() => {
  const originalText = annotationData.response;
  const filteredPositions = getFilteredCuePositions();

  // 构建最终的HTML文本
  let result = "";
  let lastEnd = 0;

  filteredPositions.forEach(({ start, end, cue, index }) => {
    // 添加未处理的文本部分
    result += originalText.slice(lastEnd, start);

    // 添加带高亮的cue
    let className = "highlight-keyword";
    if (currentCueIndex.value === index) className += " current";
    if (highlightCuesStatus.value[index] === "edit") className += " edit";
    else if (highlightCuesStatus.value[index] === "add") className += " add";
    else if (highlightCuesStatus.value[index] === "keep") className += " keep";
    else if (highlightCuesStatus.value[index] === "delete")
      className += " delete";

    // 如果cue和concept的status都有值，添加processed类名
    if (
      highlightCuesStatus.value[index] !== null &&
      keyConceptsStatus.value[index] !== null
    ) {
      className += " processed";
    }

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

const currentCueCorrespondence = computed(() => {
  if (currentCueIndex.value < 0) {
    return [];
  }

  return annotationData.cues_concepts_correspondence[currentCueIndex.value] || [];
});

// 编辑模式下的cue值
const editCueValue = computed({
  get: () => {
    return isCueEditMode.value ? editCue.value : currentCue.value;
  },
  set: (value) => {
    if (isCueEditMode.value) {
      editCue.value = value;
    }
  },
});

// 编辑模式下的concept值
const editConceptValue = computed({
  get: () => {
    return isConceptEditMode.value ? editConcept.value : currentConcept.value;
  },
  set: (value) => {
    if (isConceptEditMode.value) {
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
    const currentPosition = getFilteredCuePositions().find(
      (position) => position.index === currentCueIndex.value
    );
    if (currentPosition) {
      currentCuePosition.value = {
        start: currentPosition.start,
        end: currentPosition.end,
      };
      return;
    }
  }

  currentCuePosition.value = {
    start: 0,
    end: 0,
  };
};

const handleKeepClick = (type) => {
  console.log(`${type}: Completely correct, keep`);

  // 根据type判断操作cue还是concept
  if (type === "cue") {
    // 如果当前cue的状态是add，则保持为add，否则设置为keep
    if (highlightCuesStatus.value[currentCueIndex.value] !== "add") {
      highlightCuesStatus.value[currentCueIndex.value] =
        getKeepResultStatus("cue");
    }

    // 如果之前concept的状态是delete，现在cue改成keep，则将concept重置为空状态
    if (keyConceptsStatus.value[currentCueIndex.value] === "delete") {
      keyConceptsStatus.value[currentCueIndex.value] = null;
    }

    console.log("highlightCuesStatus:", highlightCuesStatus.value);
  } else if (type === "concept") {
    // 如果当前concept的状态是add，则保持为add，否则设置为keep
    if (keyConceptsStatus.value[currentCueIndex.value] !== "add") {
      keyConceptsStatus.value[currentCueIndex.value] =
        getKeepResultStatus("concept");
    }

    // 如果之前cue的状态是delete，现在concept改成keep，则将cue重置为空状态
    if (highlightCuesStatus.value[currentCueIndex.value] === "delete") {
      highlightCuesStatus.value[currentCueIndex.value] = null;
    }

    console.log("keyConceptsStatus:", keyConceptsStatus.value);
  }
};

const handleDeleteClick = (type) => {
  console.log(`${type}: Irrelevant or incorrect, delete`);

  // 检查当前项是否是新加的（状态为add）
  const isNewAdded =
    type === "cue"
      ? highlightCuesStatus.value[currentCueIndex.value] === "add"
      : keyConceptsStatus.value[currentCueIndex.value] === "add";

  if (isNewAdded) {
    // 对于新加的项，直接物理删除

    // 1. 从highlight_cues数组中删除
    const deletedCue = annotationData.highlight_cues[currentCueIndex.value];
    annotationData.highlight_cues.splice(currentCueIndex.value, 1);

    // 2. 从key_concepts数组中删除
    annotationData.key_concepts.splice(currentCueIndex.value, 1);

    // 3. 从cues_concepts_correspondence数组中删除
    annotationData.cues_concepts_correspondence.splice(
      currentCueIndex.value,
      1
    );

    // 4. 从highlightCuesStatus和keyConceptsStatus数组中删除
    highlightCuesStatus.value.splice(currentCueIndex.value, 1);
    keyConceptsStatus.value.splice(currentCueIndex.value, 1);

    // 5. 从response文本中删除对应的cue
    if (deletedCue) {
      // 使用正则表达式移除对应的cue文本
      annotationData.response = annotationData.response.replace(
        new RegExp(deletedCue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
        ""
      );
      // 清理多余的空格和换行
      // annotationData.response = annotationData.response.replace(/\s+/g, ' ').trim();
    }

    // 6. 更新currentCueIndex，确保它指向一个有效的索引
    if (currentCueIndex.value >= annotationData.highlight_cues.length) {
      currentCueIndex.value = Math.max(
        0,
        annotationData.highlight_cues.length - 1
      );
    }

    // 7. 如果还有cue，更新currentCuePosition
    if (annotationData.highlight_cues.length > 0) {
      updateCurrentCuePosition();
    } else {
      currentCuePosition.value = { start: 0, end: 0 };
    }

    console.log("Deleted newly added item completely");
  } else {
    // 对于不是新加的项，同时设置两个状态为delete
    highlightCuesStatus.value[currentCueIndex.value] = "delete";
    keyConceptsStatus.value[currentCueIndex.value] = "delete";
    console.log("highlightCuesStatus:", highlightCuesStatus.value);
    console.log("keyConceptsStatus:", keyConceptsStatus.value);
  }
};

const handleEditClick = (type) => {
  console.log(`${type}: Edit`, "currentCueIndex:", currentCueIndex.value);
  // 进入编辑模式
  if (type === "cue") {
    // 每次进入编辑前先刷新位置，避免复用上次编辑后的旧坐标
    updateCurrentCuePosition();
    isCueEditMode.value = true;
    // 保存当前值到编辑临时变量
    editCue.value = currentCue.value;

    // 如果之前concept的状态是delete，现在cue改成edit，则将concept重置为空状态
    if (keyConceptsStatus.value[currentCueIndex.value] === "delete") {
      keyConceptsStatus.value[currentCueIndex.value] = null;
    }

    console.log(
      "highlightCuesStatus after edit click:",
      highlightCuesStatus.value
    );
  } else if (type === "concept") {
    isConceptEditMode.value = true;
    // 保存当前值到编辑临时变量
    editConcept.value = currentConcept.value;

    // 如果之前cue的状态是delete，现在concept改成edit，则将cue重置为空状态
    if (highlightCuesStatus.value[currentCueIndex.value] === "delete") {
      highlightCuesStatus.value[currentCueIndex.value] = null;
    }

    console.log("keyConceptsStatus after edit click:", keyConceptsStatus.value);
  }
};

const handleCancelEdit = (type) => {
  console.log(`Cancel ${type} edit`);
  // 退出编辑模式，不保存修改
  if (type === "cue") {
    isCueEditMode.value = false;
  } else if (type === "concept") {
    isConceptEditMode.value = false;
  }
  // 恢复currentCueIndex为有效索引
  if (
    currentCueIndex.value === -1 &&
    annotationData.highlight_cues.length > 0
  ) {
    currentCueIndex.value = 0;
    updateCurrentCuePosition();
  }
};

const handleSubmitEdit = (type) => {
  console.log(`Submit ${type} edit`);

  // 根据type判断更新cue还是concept
  if (type === "cue") {
    // 判断编辑后的值是否与原值相同
    if (editCue.value === currentCue.value) {
      console.log("Cue value unchanged, treating as cancel");
      handleCancelEdit("cue");
      return;
    }

    // 使用记录的位置直接替换当前选中的cue
    // 提交前再次定位，确保二次编辑时替换的是当前最新文本片段
    updateCurrentCuePosition();
    const { start, end } = currentCuePosition.value;
    console.log("start:", start, "end:", end);

    if (start === end) {
      ElMessage.warning("Failed to locate current text fragment, please retry");
      return;
    }

    // 更新现有的cue
    annotationData.highlight_cues[currentCueIndex.value] = editCue.value;

    // 构建更新后的response文本
    const updatedResponse =
      annotationData.response.slice(0, start) +
      editCue.value +
      annotationData.response.slice(end);

    // 更新response文本
    annotationData.response = updatedResponse;
    updateCurrentCuePosition();

    // 如果当前cue的状态是add，则保持为add，否则设置为edit
    if (highlightCuesStatus.value[currentCueIndex.value] !== "add") {
      highlightCuesStatus.value[currentCueIndex.value] = "edit";
    }

    // 如果之前concept的状态是delete，现在cue改成edit，则将concept重置为空状态
    if (keyConceptsStatus.value[currentCueIndex.value] === "delete") {
      keyConceptsStatus.value[currentCueIndex.value] = null;
    }
  } else if (type === "concept") {
    // 判断编辑后的值是否与原值相同
    if (editConcept.value === currentConcept.value) {
      console.log("Concept value unchanged, treating as cancel");
      handleCancelEdit("concept");
      return;
    }

    // 更新现有的concept
    annotationData.key_concepts[currentCueIndex.value] = editConcept.value;

    // 如果当前concept的状态是add，则保持为add，否则设置为edit
    if (keyConceptsStatus.value[currentCueIndex.value] !== "add") {
      keyConceptsStatus.value[currentCueIndex.value] = "edit";
    }

    // 如果之前cue的状态是delete，现在concept改成edit，则将cue重置为空状态
    if (highlightCuesStatus.value[currentCueIndex.value] === "delete") {
      highlightCuesStatus.value[currentCueIndex.value] = null;
    }
  }

  // 退出编辑模式
  if (type === "cue") {
    isCueEditMode.value = false;
  } else if (type === "concept") {
    isConceptEditMode.value = false;
  }
};

const handleAddNew = () => {
  console.log("Add new cue and concept");

  // 设置添加新的状态
  isAddingNew.value = true;

  // 进入编辑模式，方便用户输入新的内容
  isCueEditMode.value = true;
  isConceptEditMode.value = true;
  editCue.value = "";
  editConcept.value = "";

  // 更新currentCueIndex为-1，表示正在添加新的cue
  currentCueIndex.value = -1;
};

const handleCancelAddNew = () => {
  console.log("Cancel add new cue and concept");

  // 重置添加新的状态
  isAddingNew.value = false;
  isCueEditMode.value = false;
  isConceptEditMode.value = false;
  editCue.value = "";
  editConcept.value = "";

  // 恢复currentCueIndex为有效索引
  if (annotationData.highlight_cues.length > 0) {
    currentCueIndex.value = 0;
    updateCurrentCuePosition();
  }
};

const handleSubmitAddNew = () => {
  console.log("Submit add new cue and concept");

  // 验证输入
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

  // 检查新添加的cue是否与response中的现有文本重叠
  if (annotationData.response.includes(editCue.value)) {
    console.warn("Cue text overlaps with existing response text");
    ElMessage.warning(
      "Text fragment overlaps with existing content, please modify it"
    );
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
  annotationData.cues_concepts_correspondence.push([]);
  // 为新添加的cue和concept设置状态为add
  highlightCuesStatus.value.push("add");
  keyConceptsStatus.value.push("add");

  // 更新currentCueIndex为新添加的索引
  currentCueIndex.value = annotationData.highlight_cues.length - 1;

  // 更新currentCuePosition
  currentCuePosition.value = {
    start: newStartIndex + 1,
    end: newEndIndex + 1,
  };

  // 重置添加新的状态
  isAddingNew.value = false;
  isCueEditMode.value = false;
  isConceptEditMode.value = false;
  editCue.value = "";
  editConcept.value = "";
};

const processAnnotationData = () => {
  // 检查是否所有项目都已标记
  const unmarkedItems = highlightCuesStatus.value.filter(
    (status) => status === null || status === undefined
  );
  if (unmarkedItems.length > 0) {
    return { unmarked: true };
  }

  // 过滤掉状态为'delete'的cue和concept，并创建对应的actions数组
  const filteredHighlightCues = [];
  const filteredKeyConcepts = [];
  const actions = [];

  // 获取需要删除的高亮文本
  const cuesToDelete = [];
  for (let i = 0; i < annotationData.highlight_cues.length; i++) {
    if (highlightCuesStatus.value[i] === "delete") {
      cuesToDelete.push(annotationData.highlight_cues[i]);
    } else {
      filteredHighlightCues.push(annotationData.highlight_cues[i]);
      filteredKeyConcepts.push(annotationData.key_concepts[i]);
      actions.push(highlightCuesStatus.value[i]); // 添加对应的状态到actions数组
    }
  }

  // 从响应文本中移除被标记为'delete'的高亮文本
  let processedResponse = annotationData.response;

  // 按长度从长到短排序，避免短文本被先删除后影响长文本的匹配
  cuesToDelete.sort((a, b) => b.length - a.length);

  // 移除所有需要删除的高亮文本
  cuesToDelete.forEach((cue) => {
    // 使用正则表达式全局替换所有匹配的cue
    processedResponse = processedResponse.replace(
      new RegExp(cue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
      ""
    );
  });

  return {
    response: processedResponse,
    highlight_cues: annotationData.highlight_cues,
    key_concepts: annotationData.key_concepts,
    cues_actions: highlightCuesStatus.value,
    concepts_actions: keyConceptsStatus.value,
  };
};

defineExpose({
  annotationData,
  highlightCuesStatus,
  keyConceptsStatus,
  processAnnotationData,
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
  font-size: 1.2rem;
}
</style>
