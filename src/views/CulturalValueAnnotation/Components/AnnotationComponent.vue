<template>
  <div>
    <div class="answer-content">
      
      <div class="left">
        <!-- <div>
          highlightCuesStatus：{{ highlightCuesStatus }}
        </div>
        <div>
          keyConceptsStatus: {{ keyConceptsStatus }}
        </div>
        <div>
          mismatchExplanations: {{ mismatchExplanations }}
        </div>
        <div>
          originalHighlightCues: {{ originalHighlightCues }}
        </div>
        <div>
          highlightCues: {{ annotationDataOrigin.highlight_cues }}
        </div>
        <div>
          originalKeyConcepts: {{ originalKeyConcepts }}
        </div>
        <div>
          response: 
          <div  style="white-space: pre-wrap;"> {{ annotationDataOrigin.response }}</div>
        </div>
        <div  style="white-space: pre-wrap;">
          originalResponse: {{ annotationDataOrigin.originalResponse }}
        </div> -->
        <div
          class="response-text"
          style="white-space: pre-line"
          v-html="processedAnnotationDataResponse"
          @click="handleKeywordClick"
        ></div>
      </div>
      <div class="right" style="height: 45em;position: relative;">
        <div>
          <div>
            <p>文本（对问题的具体回复内容、行为、解决方案或建议决策）：</p>
            <div class="highlight-input-overlay">
              <el-input
                v-model="editCueValue"
                :disabled="!isCueEditMode"
                class="annotation-overlay-input cue-text-input"
                :class="{
                  'is-highlight-overlay':
                    !isCueEditMode && !isAddingNew && shouldShowHighlightOverlay,
                }"
                style=""
                placeholder="Please input"
                :autosize="{ minRows: 7, maxRows: 7 }"
                type="textarea"
              />
              <!-- cue 侧覆盖层：
                  - external-active-track-indexes：接收父组件同步的高亮轨道，让 concept hover 时 cue 下划线也联动
                  - shared-tooltip：接收父组件统一管理的 tooltip 数据，保证 cue / concept hover 时弹窗位置一致
                  - hover-change：cue 侧 hover 时把轨道和 tooltip 内容上报给父组件 -->
              <ShowHighlight
                v-if="hasCueConceptCorrespondenceField && !isCueEditMode && !isAddingNew && shouldShowHighlightOverlay"
                overlay-mode="cue"
                :is-adding-new="isAddingNew"
                :cue-text="currentCue"
                :concept-text="currentConcept"
                :cue-concept-correspondence="currentCueCorrespondence"
                :cue-concept-evidence="currentCueEvidence"
                :external-active-track-indexes="sharedHoveredTrackIndexes"
                :shared-tooltip="sharedHighlightTooltip"
                @hover-change="handleHighlightHoverChange"
              />
            </div>

            <div class="status-container">
              <p>status: {{ getStatusDisplayText(highlightCuesStatus[currentCueIndex]) }}</p>
              
              <div
                v-if="!(!isCueEditMode || isAddingNew)"
                class="button-container1 button-container-cancel-submit"
                style="justify-content: flex-end"
              >
                <el-button class="cancel" @click="handleCancelEdit(currentCueEditType)">{{
                  t("common.cancel")
                }}</el-button>
                <el-button class="submit" @click="handleSubmitEdit(currentCueEditType)">{{
                  t("common.submit")
                }}</el-button>
              </div>
            </div>
          </div>
          <div>
            <p>
              文本蕴含的价值观（即"在该问题下为什么这么做的根本原因"）：
              <el-icon class="info-icon" @click="textInfoDialogVisible = true">
                <QuestionFilled />
              </el-icon>
            </p>
            <div class="highlight-input-overlay">
              <el-input
                v-model="editConceptValue"
                :disabled="!isConceptEditMode"
                class="annotation-overlay-input"
                :class="{
                  'is-highlight-overlay':
                    !isConceptEditMode && !isAddingNew && shouldShowHighlightOverlay,
                }"
                style=""
                placeholder="Please input"
                :autosize="{ minRows: 3, maxRows: 3 }"
                type="textarea"
              />
              <!-- concept 侧覆盖层：
                  - external-active-track-indexes：接收父组件同步的高亮轨道，让 cue hover 时 concept 下划线也联动
                  - disable-local-tooltip：禁止 concept 实例自行渲染弹窗，统一交由 cue 侧锚点处显示
                  - hover-change：concept hover 时把轨道和 tooltip 内容上报给父组件 -->
              <ShowHighlight
                v-if="hasCueConceptCorrespondenceField && !isConceptEditMode && !isAddingNew && shouldShowHighlightOverlay"
                overlay-mode="concepts"
                :is-adding-new="isAddingNew"
                :cue-text="currentCue"
                :concept-text="currentConcept"
                :cue-concept-correspondence="currentCueCorrespondence"
                :cue-concept-evidence="currentCueEvidence"
                :external-active-track-indexes="sharedHoveredTrackIndexes"
                :disable-local-tooltip="true"
                @hover-change="handleHighlightHoverChange"
              />
            </div>

            <div class="status-container">
              <p>status: {{ getStatusDisplayText(keyConceptsStatus[currentCueIndex]) }}</p>
              
              <div
                v-if= "!(!isConceptEditMode || isAddingNew)"
                class="button-container1 button-container-cancel-submit"
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
        </div>

        <!-- add new 时候的submit/canvel按钮 -->
        <div
          class="button-container1 button-container-cancel-submit"
          v-if="isAddingNew"
          style="justify-content: flex-end; margin-top: 2em"
        >
          <el-button class="cancel" @click="handleCancelAddNew">{{
            t("common.cancel")
          }}</el-button>
          <el-button class="submit" @click="handleSubmitAddNew">{{
            t("common.submit")
          }}</el-button>
        </div>
        

        <!-- 操作按钮 -->
        <div class="actions-box" v-if="!isAddingNew">
          <div>
            <p>1. 标注的价值观是否与文化价值观一致，是否存在不匹配或者遗漏？</p>
            <div
                class="button-container1 button-container-actions"
                :class="{'disabled': isConceptEditMode || isAddingNew}"
              >
                <el-button
                  v-if="!hideConceptKeepButton"
                  class="keep"
                  @click="handleKeepClick('concept')"
                  >完全一致，保留</el-button
                >
                
                <el-button class="edit" @click="handleEditClick('concept')"
                  >部分不一致或有遗漏，需调整</el-button
                >
                <el-button class="delete" @click="handleDeleteClick('concept')"
                  >无关或完全不一致，删除</el-button
                >
              </div>
          </div>

          <div>
            <p>2. 基于标注的价值观，判断文本中的具体观点或做法是否跟价值观一致，并且在文化下是合适且符合真实做法的？</p>
            <div class="button-container1 button-container-actions button-container-actions-cue" :class="{'disabled': isCueEditMode || isAddingNew}">
                <el-button v-if="!hideConceptKeepButton" class="keep" @click="handleKeepClick('cue')"
                  >完全一致且符合文化实际，保留</el-button
                >
                <el-button class="edit" @click="handleEditClick('cue')"
                  >与价值观不一致，需调整</el-button
                >
                <el-button class="delete" @click="handleDeleteClick('cue')"
                  >无关或完全不一致，删除</el-button
                >
                
                <el-button class="edit" @click="handleEditClick('cue2')"
                  >价值观一致，但具体做法不符合文化实际，需调整</el-button
                >

              </div>
          </div>
        </div>

        <!-- pre  next -->
        <div
          style="position: absolute;width: 100%;bottom: 0;"
        >
          <!-- <el-button @click="handleAddNew">Add New </el-button> -->
          <div class="button-container2"
          :class="{'disabled': isCueEditMode || isConceptEditMode || isAddingNew}">
            <el-button :disabled="currentCueIndex === 0" @click="previousCue"
              >Previous</el-button
            >

            <b><{{ currentCueIndex + 1 }} / {{ annotationData.highlight_cues.length }}></b>
            <el-button
              :disabled="
                currentCueIndex === annotationData.highlight_cues.length - 1
              "
              @click="nextCue"
              >Next</el-button
            >
          </div>
        </div>
        
      </div>


      

      <!-- Mismatch 弹窗：cue=edit & concept=keep 或 cue=keep & concept=edit -->
      <MismatchDialog
        v-model:visible="mismatchDialogVisible"
        :type="mismatchDialogType"
        :text-fragment="currentCue"
        :value-concepts="currentConcept"
        :initial-explanation="currentMismatchExplanation"
        @confirm="handleMismatchConfirm"
        @return-to-edit="handleMismatchReturn"
      />
    </div>


    <div>
      <div class="step-level2">
        <p class="">{{ step }}.2 请检查整条回答，确认是否遗漏了在这个问题下重要的价值观表达、具体观点或者做法？</p>
        <div>
          <el-button @click="handleAddNew">有遗漏，需要补充</el-button>
          <el-button 
            @click="isCompleteNoOmission = true"
            :disabled="hasAnyAddStatus"
            :class="{'selected': isCompleteNoOmission}"
          >内容完整，没有遗漏</el-button>
        </div>
      </div>
      <div class="step-level2">
        <p class="">{{ step }}.3 最后，请确认：标注后的回答对我而言是更合适的，符合我的价值观和具体做法。</p>
        <el-checkbox v-model="isFinalConfirmed" label="1">&nbsp;</el-checkbox>
      </div>
    </div>

    <!-- 文本说明弹窗 -->
    <TextInfoDialog v-model:visible="textInfoDialogVisible" />
  </div>
</template>

<script  setup>
import { reactive, ref, computed, onMounted } from "vue";
import { defineProps, watch, defineExpose } from "vue";
import ShowHighlight from "./ShowHighlight.vue";
import MismatchDialog from "./MismatchDialog.vue";
import { buildProcessedAnnotationDataResponse as buildProcessedAnnotationDataResponseUtil } from "@/utils/processedAnnotationResponse";
import { buildProcessedAnnotationDataResponseNewLogic } from "@/utils/processedAnnotationResponseNewLogic";
import TextInfoDialog from "./TextInfoDialog.vue";

import { ElMessage } from "element-plus";
import { QuestionFilled } from "@element-plus/icons-vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// 读取用户国家：当国家是 Singapore 或 Japan 时，隐藏 concept 区域的 keep 按钮
const getUserCountry = () => {
  try {
    const detail = JSON.parse(localStorage.getItem("userDetail") || "{}");
    return String(detail.country || "").trim().toLowerCase();
  } catch (e) {
    return "";
  }
};
const hideConceptKeepButton = computed(() => {
  const country = getUserCountry();
  return country === "singapore" || country === "japan";
});

const props = defineProps({
  annotationDataOrigin: {
    type: Object,
    default: () => ({
      originalResponse: "",
      response: "",
      highlight_cues: [],
      key_concepts: [],
      value_concepts_evidence: [],
      value_concepts_justification: [],
      initialCuesActions: null,
      initialConceptsActions: null,
      initialMismatchExplanations: null,  
      original_highlight_cues: [],
      original_key_concepts: [],
    }),
  },
  use_new_logic: {
    type: Boolean,
    default: false,
  },
  editMode: {
    type: Boolean,
    default: false,
  },
  step: {
    type: Number,
    default: 5,
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

const cloneCueConceptsEvidence = (evidence = []) => {
  return evidence.map((item) => {
    if (!Array.isArray(item)) {
      return [];
    }

    return item.map((evidenceItem) => {
      return Array.isArray(evidenceItem) ? [...evidenceItem] : evidenceItem;
    });
  });
};

const shouldClearCueConceptRelation = (cueStatus, conceptStatus) => {
  // 只要 cue 或 concept 任意一侧被编辑/删除，原有的 cue-concept 对应关系和证据就不再可信，提交时需要清空。
  return [cueStatus, conceptStatus].some((status) => {
    return (status && status.indexOf("edit") >= 0) || status === "delete";
  });
};

watch(
  () => props.annotationDataOrigin,
  (newVal) => {
    resetDataFunction(newVal);
  }
);

// 初始进入页面 重置数据
const resetDataFunction = (annotationNewVal) => {
  annotationData.originalResponse = annotationNewVal.originalResponse;
  annotationData.response = annotationNewVal.response;
  // 创建副本而不是直接引用，确保两个组件实例的数据独立
  annotationData.highlight_cues = [...annotationNewVal.highlight_cues];
  annotationData.key_concepts = [...annotationNewVal.key_concepts];
  annotationData.value_concepts_evidence =
    cloneCueConceptsCorrespondence(annotationNewVal.value_concepts_evidence);
  annotationData.value_concepts_justification = cloneCueConceptsEvidence(
    annotationNewVal.value_concepts_justification || []
  );
  if( !props.use_new_logic){
    // 验证highlight_cues是否都存在于response中
    validateHighlightCues();
  }else{
    console.log("use_new_logic is true",annotationNewVal)
    // 新数据，不用处理delete状态，根据originalResponse，highlightCuesStatus。keyConceptsStatus
    // 重置 6.2 和 6.3 选择状态
    isCompleteNoOmission.value = false;
    isFinalConfirmed.value = false;

    if(props.editMode) {
      originalHighlightCues.value = Array.isArray(annotationNewVal.original_highlight_cues) ? [...annotationNewVal.original_highlight_cues]
      : Array(annotationNewVal.highlight_cues.length).fill(null);;
      originalKeyConcepts.value = Array.isArray(annotationNewVal.original_key_concepts) ? [...annotationNewVal.original_key_concepts]
      : Array(annotationNewVal.key_concepts.length).fill(null);;
      annotationData.response = rebuildResponseFromOriginal(
          annotationNewVal.originalResponse,
          annotationNewVal.original_highlight_cues,
          annotationNewVal.highlight_cues
      );
    }else{
      annotationData.response = annotationNewVal.response;
      originalHighlightCues.value = annotationNewVal.highlight_cues;
      originalKeyConcepts.value = annotationNewVal.key_concepts;
    }
    

    highlightCuesStatus.value = Array.isArray(annotationNewVal.initialCuesActions) ? [...annotationNewVal.initialCuesActions]
    : Array(annotationNewVal.highlight_cues.length).fill(null);
    keyConceptsStatus.value = Array.isArray(annotationNewVal.initialConceptsActions) ? [...annotationNewVal.initialConceptsActions]
    : Array(annotationNewVal.key_concepts.length).fill(null);
    mismatchExplanations.value = Array.isArray(annotationNewVal.initialMismatchExplanations) ? [...annotationNewVal.initialMismatchExplanations]
    : Array(annotationNewVal.highlight_cues.length).fill(null);
    console.log("#####", annotationNewVal, annotationNewVal.initialCuesActions, highlightCuesStatus.value)
  }
} 



const rebuildResponseFromOriginal = (originalResponse, originalCues, currentCues) => {
  if (!originalResponse) return "";
  if (!Array.isArray(originalCues) || originalCues.length === 0) return originalResponse;

  let response = originalResponse;

  // 逐项替换：将 originalCues[i] 替换为 currentCues[i]
  for (let i = 0; i < originalCues.length; i++) {
    const oldCue = originalCues[i];
    const newCue = currentCues[i];

    if (!oldCue) continue;

    if (!newCue) {
      // delete：从 response 中移除原文本
      response = response.replace(
        new RegExp(oldCue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
        ""
      );
    } else if (oldCue !== newCue) {
      // edit：将旧文本替换为新文本
      response = response.replace(
        new RegExp(oldCue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
        newCue
      );
    }
    // keep：不做处理
  }

  // 如果 highlight_cues 比 originalCues 长，多余项拼接到末尾
  if (currentCues.length > originalCues.length) {
    for (let i = originalCues.length; i < currentCues.length; i++) {
      if (currentCues[i]) {
        response += "\n" + currentCues[i];
      }
    }
  }

  return response;
};

// 处理response 并标注
const annotationData = reactive({
  originalResponse: "",
  response: "",
  highlight_cues: [],
  key_concepts: [],
  value_concepts_evidence: [],
  value_concepts_justification: [],
});

// 跟踪每个关键词的状态（keep/delete/edit/add）
const highlightCuesStatus = ref([]);
const keyConceptsStatus = ref([]);
const originalHighlightCues = ref([]);
const originalKeyConcepts = ref([]);

// Mismatch 弹窗状态
const mismatchDialogVisible = ref(false);
const mismatchDialogType = ref(""); // "concept-edit-text-keep" | "text-edit-concept-keep"

// 存储 mismatch 弹窗用户输入的 explain 信息，与 highlightCuesStatus 等长数组
const mismatchExplanations = ref([]);

// 6.2 和 6.3 选择状态
const isCompleteNoOmission = ref(false); // 6.2 "内容完整，没有遗漏" 是否选中
const isFinalConfirmed = ref(false); // 6.3 复选框是否选中

// 文本说明弹窗状态
const textInfoDialogVisible = ref(false);

// 当有 add 状态时，重置 isCompleteNoOmission
const hasAnyAddStatus = computed(() => {
  return highlightCuesStatus.value.some((s) => s === "add") ||
    keyConceptsStatus.value.some((s) => s === "add");
});

watch(hasAnyAddStatus, (hasAdd) => {
  if (hasAdd) {
    isCompleteNoOmission.value = false;
  }
});

// 自动清空：当 status 数组变化时，不再满足 keep+edit 组合的项自动清空 explanation
watch(
  [highlightCuesStatus, keyConceptsStatus],
  ([cueStatuses, conceptStatuses]) => {
    const len = Math.min(cueStatuses.length, conceptStatuses.length, mismatchExplanations.value.length);
    for (let i = 0; i < len; i++) {
      if (!mismatchExplanations.value[i]) continue;
      const isStillMismatch =
        ((cueStatuses[i] && cueStatuses[i].indexOf("edit") >= 0) && conceptStatuses[i] === "keep") ||
        (cueStatuses[i] === "keep" && conceptStatuses[i] === "edit");
      if (!isStillMismatch) {
        mismatchExplanations.value[i] = null;
      }
    }
  },
  { deep: true }
);

// 检查并移除不存在于response中的highlight_cues
const validateHighlightCues = () => {
  const validCues = [];
  const validConcepts = [];
  const validCorrespondence = [];
  const validEvidence = [];

  annotationData.highlight_cues.forEach((cue, index) => {
    if (annotationData.response.includes(cue)) {
      validCues.push(cue);
      validConcepts.push(annotationData.key_concepts[index]);
      validCorrespondence.push(
        cloneCueConceptsCorrespondence([
          annotationData.value_concepts_evidence[index] || [],
        ])[0] || []
      );
      validEvidence.push(
        cloneCueConceptsEvidence([
          annotationData.value_concepts_justification[index] || [],
        ])[0] || []
      );
    } else {
      console.log(`Removing cue that doesn't exist in response: "${cue}"`);
    }
  });

  // 更新数组
  annotationData.highlight_cues = validCues;
  annotationData.key_concepts = validConcepts;
  annotationData.value_concepts_evidence = validCorrespondence;
  annotationData.value_concepts_justification = validEvidence;
  originalHighlightCues.value = [...validCues];
  originalKeyConcepts.value = [...validConcepts];

  // 确保 highlightCuesStatus 和 keyConceptsStatus 数组的长度与 highlight_cues 一致
  highlightCuesStatus.value = Array(annotationData.highlight_cues.length).fill(
    null
  );
  keyConceptsStatus.value = Array(annotationData.key_concepts.length).fill(
    null
  );
  mismatchExplanations.value = Array(annotationData.highlight_cues.length).fill(
    null
  );
  // 重置 6.2 和 6.3 选择状态
  isCompleteNoOmission.value = false;
  isFinalConfirmed.value = false;
};

onMounted(() => {
  // 如果annotationData还没有数据，从props.annotationDataOrigin初始化
  if (
    annotationData.highlight_cues.length === 0 &&
    props.annotationDataOrigin
  ) {
    resetDataFunction(props.annotationDataOrigin);
  }
});

const currentCueIndex = ref(0); //

const isCueEditMode = ref(false);
const currentCueEditType = ref("cue"); // 记录当前cue编辑类型："cue"或"cue2"
const isConceptEditMode = ref(false);
// 父组件统一维护的高亮轨道列表，cue / concept 两侧实例共用，保证 hover 联动高亮同步。
const sharedHoveredTrackIndexes = ref([]);
// 父组件统一维护的 tooltip 状态：
// - visible：是否显示弹窗
// - cueGroups：cue hover 时的片段分组数据，交给 cue 侧实例渲染
// - conceptData：concept hover 时的对应数据，也交给 cue 侧实例在同一位置渲染
const sharedHighlightTooltip = ref({
  visible: false,
  cueGroups: [],
  conceptData: null,
});

// 标识是否正在添加新的cue和concept
const isAddingNew = ref(false);

const getStatusDisplayText = (status) => {
  const map = {
    edit: "revised",
    edit2: "revised",
    keep: "kept",
    delete: "deleted",
    add: "added",
  };
  return map[status] ?? status;
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

const processedAnnotationDataResponse = computed(() => {
  if (props.use_new_logic) {
    return buildProcessedAnnotationDataResponseNewLogic(
      annotationData.originalResponse || annotationData.response,
      originalHighlightCues.value,
      annotationData.highlight_cues,
      highlightCuesStatus.value,
      keyConceptsStatus.value,
      currentCueIndex.value
    );
  }
  return buildProcessedAnnotationDataResponseUtil(
    annotationData.response,
    annotationData.highlight_cues,
    highlightCuesStatus.value,
    keyConceptsStatus.value,
    currentCueIndex.value
  );
});

const handleKeywordClick = (event) => {
  const target = event.target;
  if (target.classList.contains("highlight-keyword")) {
    const index = parseInt(target.getAttribute("data-index") || "0");
    // const concepts = annotationData.key_concepts[index] || "No concepts found";
    // alert(`Related key concepts: ${concepts}`);
    currentCueIndex.value = index;
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

  return annotationData.value_concepts_evidence[currentCueIndex.value] || [];
});

const currentCueEvidence = computed(() => {
  if (currentCueIndex.value < 0) {
    return [];
  }

  return annotationData.value_concepts_justification[currentCueIndex.value] || [];
});

const hasCueConceptCorrespondenceField = computed(() => {
  return Array.isArray(props.annotationDataOrigin?.value_concepts_evidence);
});

// 当前 cue 对应的关系分组里只要有一项非空，就允许显示高亮关系。
const hasCurrentCueCorrespondenceData = computed(() => {
  return currentCueCorrespondence.value.some((item) => {
    if (Array.isArray(item)) {
      return item.length > 0;
    }

    return !!item;
  });
});

const currentItemMatchesOriginal = computed(() => {
  if (currentCueIndex.value < 0) {
    return true;
  }

  return (
    annotationData.highlight_cues[currentCueIndex.value] ===
      originalHighlightCues.value[currentCueIndex.value] &&
    annotationData.key_concepts[currentCueIndex.value] ===
      originalKeyConcepts.value[currentCueIndex.value]
  );
});

const currentItemHighlightStatus = computed(() => {
  if (currentCueIndex.value < 0) {
    return {
      cue: null,
      concept: null,
    };
  }

  return {
    cue: highlightCuesStatus.value[currentCueIndex.value] || null,
    concept: keyConceptsStatus.value[currentCueIndex.value] || null,
  };
});

const currentItemAllowsHighlightOverlay = computed(() => {
  const cueStatus = currentItemHighlightStatus.value.cue;
  const conceptStatus = currentItemHighlightStatus.value.concept;
  return !(cueStatus && cueStatus.indexOf("edit") >= 0) && cueStatus !== "add" &&
    !(conceptStatus && conceptStatus.indexOf("edit") >= 0) && conceptStatus !== "add";
});

// 只有存在关系字段、当前组关系非空、且当前项仍是原始未编辑状态时才显示 ShowHighlight。
const shouldShowHighlightOverlay = computed(() => {
  if (!hasCueConceptCorrespondenceField.value) {
    return false;
  }

  if (currentCueIndex.value < 0) {
    return false;
  }

  if (!hasCurrentCueCorrespondenceData.value) {
    return false;
  }

  return (
    currentItemMatchesOriginal.value &&
    currentItemAllowsHighlightOverlay.value
  );
});

// 统一处理 cue / concept 两侧 ShowHighlight 的 hover-change 事件：
// 1. 把最新命中的轨道写入 sharedHoveredTrackIndexes，驱动两侧下划线联动高亮
// 2. 把 tooltip 数据写入 sharedHighlightTooltip，由 cue 侧统一渲染弹窗
const handleHighlightHoverChange = (payload) => {
  sharedHoveredTrackIndexes.value = Array.isArray(payload?.trackIndexes)
    ? payload.trackIndexes
    : [];

  sharedHighlightTooltip.value = {
    visible: payload?.tooltip?.visible === true,
    cueGroups: Array.isArray(payload?.tooltip?.cueGroups)
      ? payload.tooltip.cueGroups
      : [],
    conceptData: payload?.tooltip?.conceptData || null,
  };
};

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
  }
};

const nextCue = () => {
  if (currentCueIndex.value < annotationData.highlight_cues.length - 1) {
    currentCueIndex.value++;
  }
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

  // status 变化后，watch 会自动清空不再匹配的 explanation
  // 检查是否触发 mismatch 弹窗
  checkMismatchDialog();
};

// 检测当前项是否出现 edit + keep 的不一致状态，是则弹窗。
const currentMismatchExplanation = computed(() => {
  const idx = currentCueIndex.value;
  if (idx < 0 || !mismatchExplanations.value[idx]) return "";
  return mismatchExplanations.value[idx].value || "";
});

const checkMismatchDialog = () => {
  const idx = currentCueIndex.value;
  if (idx < 0) return;

  const cueStatus = highlightCuesStatus.value[idx];
  const conceptStatus = keyConceptsStatus.value[idx];

  if ((cueStatus && cueStatus.indexOf("edit") >= 0) && conceptStatus === "keep") {
    mismatchDialogType.value = "text-edit-concept-keep";
    mismatchDialogVisible.value = true;
  } else if (cueStatus === "keep" && conceptStatus === "edit") {
    mismatchDialogType.value = "concept-edit-text-keep";
    mismatchDialogVisible.value = true;
  }
};

// 弹窗：用户确认"匹配"，存储 explain 信息。
const handleMismatchConfirm = ({ explanation }) => {
  const idx = currentCueIndex.value;
  if (idx < 0) return;

  mismatchExplanations.value[idx] = {
    highlight_cue: annotationData.highlight_cues[idx] || "",
    key_concept: annotationData.key_concepts[idx] || "",
    value: explanation,
    type: mismatchDialogType.value,
  };

  console.log("mismatchExplanations:", mismatchExplanations.value);
};

// 弹窗：用户选择"不匹配"，需要回到编辑状态。
const handleMismatchReturn = () => {
  const idx = currentCueIndex.value;
  if (idx < 0) return;

  // 用户选择不匹配，清空该条 explanation
  mismatchExplanations.value[idx] = null;

  if (mismatchDialogType.value === "text-edit-concept-keep") {
    // cue=edit, concept=keep → 取消 concept 的 keep，让用户也编辑 concept
    keyConceptsStatus.value[idx] = null;
    isConceptEditMode.value = true;
    editConcept.value = annotationData.key_concepts[idx];
  } else {
    // cue=keep, concept=edit → 取消 cue 的 keep，让用户也编辑 cue
    highlightCuesStatus.value[idx] = null;
    isCueEditMode.value = true;
    editCue.value = annotationData.highlight_cues[idx];
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

    // 3. 从value_concepts_evidence数组中删除
    annotationData.value_concepts_evidence.splice(
      currentCueIndex.value,
      1
    );

    // 4. 从value_concepts_justification数组中删除
    annotationData.value_concepts_justification.splice(currentCueIndex.value, 1);

    // 5. 从highlightCuesStatus、keyConceptsStatus和mismatchExplanations数组中删除
    highlightCuesStatus.value.splice(currentCueIndex.value, 1);
    keyConceptsStatus.value.splice(currentCueIndex.value, 1);
    mismatchExplanations.value.splice(currentCueIndex.value, 1);

    // 6. 从response文本中删除对应的cue
    if (deletedCue) {
      // 使用正则表达式移除对应的cue文本
      annotationData.response = annotationData.response.replace(
        new RegExp(deletedCue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
        ""
      );
      // 清理多余的空格和换行
      // annotationData.response = annotationData.response.replace(/\s+/g, ' ').trim();
    }

    // 7. 更新currentCueIndex，确保它指向一个有效的索引
    if (currentCueIndex.value >= annotationData.highlight_cues.length) {
      currentCueIndex.value = Math.max(
        0,
        annotationData.highlight_cues.length - 1
      );
    }

    console.log("Deleted newly added item completely");
  } else {
    // 对于不是新加的项，同时设置两个状态为delete
    highlightCuesStatus.value[currentCueIndex.value] = "delete";
    keyConceptsStatus.value[currentCueIndex.value] = "delete";
    // 删除时清空该条 explanation
    mismatchExplanations.value[currentCueIndex.value] = null;
    console.log("highlightCuesStatus:", highlightCuesStatus.value);
    console.log("keyConceptsStatus:", keyConceptsStatus.value);
  }
};

const handleEditClick = (type) => {
  console.log(`${type}: Edit`, "currentCueIndex:", currentCueIndex.value);
  // 进入编辑模式
  if (type === "cue" || type === "cue2") {
    isCueEditMode.value = true;
    currentCueEditType.value = type; // 保存当前编辑类型
    // 保存当前值到编辑临时变量
    editCue.value = currentCue.value;

    // 如果之前concept的状态是delete，现在cue改成edit/edit2，则将concept重置为空状态
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
  if (type === "cue" || type === "cue2") {
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
  }
};

const handleSubmitEdit = (type) => {
  console.log(`Submit ${type} edit`);

  // 根据type判断更新cue还是concept
  if (type === "cue" || type === "cue2") {
    // 判断编辑后的值是否与原值相同
    if (editCue.value === currentCue.value) {
      console.log("Cue value unchanged, treating as cancel");
      handleCancelEdit(type);
      return;
    }

    // 在 response 中找到旧 cue 文本并替换为新文本
    const oldCue = annotationData.highlight_cues[currentCueIndex.value];
    const escapedOldCue = oldCue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (!new RegExp(escapedOldCue).test(annotationData.response)) {
      ElMessage.warning("Failed to locate current text fragment, please retry");
      return;
    }

    // 更新现有的cue
    annotationData.highlight_cues[currentCueIndex.value] = editCue.value;

    // 构建更新后的response文本
    annotationData.response = annotationData.response.replace(
      new RegExp(escapedOldCue),
      editCue.value
    );

    // 如果当前cue的状态是add，则保持为add，否则设置为edit(普通edit)或edit2(需调整)
    if (highlightCuesStatus.value[currentCueIndex.value] !== "add") {
      highlightCuesStatus.value[currentCueIndex.value] = type === "cue" ? "edit" : "edit2";
    }

    // 如果之前concept的状态是delete，现在cue改成edit/edit2，则将concept重置为空状态
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
  if (type === "cue" || type === "cue2") {
    isCueEditMode.value = false;
  } else if (type === "concept") {
    isConceptEditMode.value = false;
  }

  // 提交编辑后，内容变化导致之前的 explanation 失效，清空
  mismatchExplanations.value[currentCueIndex.value] = null;
  // 提交编辑后检查是否触发 mismatch 弹窗
  checkMismatchDialog();
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
  annotationData.value_concepts_evidence.push([]);
  annotationData.value_concepts_justification.push([]);
  // 为新添加的cue和concept设置状态为add
  highlightCuesStatus.value.push("add");
  keyConceptsStatus.value.push("add");
  mismatchExplanations.value.push(null);

  // 更新currentCueIndex为新添加的索引
  currentCueIndex.value = annotationData.highlight_cues.length - 1;

  // 重置添加新的状态
  isAddingNew.value = false;
  isCueEditMode.value = false;
  isConceptEditMode.value = false;
  editCue.value = "";
  editConcept.value = "";
};

const processAnnotationData = () => {
  // 检查是否所有项目都已标记
  const unmarkedCueItems = highlightCuesStatus.value.filter(
    (status) => status === null || status === undefined
  );
  const unmarkedConceptItems = keyConceptsStatus.value.filter(
    (status) => status === null || status === undefined
  );
  if (unmarkedCueItems.length > 0 || unmarkedConceptItems.length > 0) {
    return { unmarked: true };
  }

  // 检查是否有任何 add 状态
  const hasAddStatus = highlightCuesStatus.value.some((s) => s === "add") ||
    keyConceptsStatus.value.some((s) => s === "add");

  // 如果没有 add 状态，要求用户必须点击"内容完整没有遗漏"按钮
  if (!hasAddStatus && !isCompleteNoOmission.value) {
    return { validationFailed: true, type: "complete_no_omission" };
  }

  // *.3的复选框必须选中（始终需要验证）
  if (!isFinalConfirmed.value) {
    return { validationFailed: true, type: "final_confirmation" };
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

  // 提交前重新整理 correspondence：
  // - 如果当前 index 的 cue/concept 任意一侧是 edit/delete，则对应项清空为 []；
  // - 其他状态保留原有关系；
  // - 以 highlight_cues 为基准遍历，保证输出长度始终和 cue/concept 数组对齐。
  const processedCorrespondence = annotationData.highlight_cues.map(
    (_, index) => {
      return shouldClearCueConceptRelation(
        highlightCuesStatus.value[index],
        keyConceptsStatus.value[index]
      )
        ? []
        : cloneCueConceptsCorrespondence([
            annotationData.value_concepts_evidence[index] || [],
          ])[0] || [];
    }
  );

  // evidence 与 correspondence 使用同一套清空规则，避免编辑/删除后的旧证据继续被提交。
  const processedEvidence = annotationData.highlight_cues.map(
    (_, index) => {
      return shouldClearCueConceptRelation(
        highlightCuesStatus.value[index],
        keyConceptsStatus.value[index]
      )
        ? []
        : cloneCueConceptsEvidence([
            annotationData.value_concepts_justification[index] || [],
          ])[0] || [];
    }
  );

  return {
    response: processedResponse,
    highlight_cues: annotationData.highlight_cues,
    key_concepts: annotationData.key_concepts,
    cues_actions: highlightCuesStatus.value,
    concepts_actions: keyConceptsStatus.value,
    value_concepts_evidence: processedCorrespondence,
    value_concepts_justification: processedEvidence,
    textAndConceptMatch: mismatchExplanations.value,
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
      background: #fff;
    }
    &.right {
      & > div:nth-child(1) {
        // background: #f4f1d7;
        // padding: 1em;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 1em;
        & > div {
          p {
            font-size: 1em;
            margin-bottom: 0.5em;
          }

          .highlight-input-overlay {
            position: relative;
          }
        }
      }
      .button-container1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // 如果当前容器内只有两个按钮，则每个按钮各占 50% 宽度
        :deep(.el-button:first-child:nth-last-child(2)),
        :deep(.el-button:first-child:nth-last-child(2) ~ .el-button) {
          width: 50%;
        }
        :deep(.el-button) {
          height: 2.6em;
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


      .button-container2, .button-container-actions{
        &.disabled{
        opacity: .5;
        pointer-events: none;
      }
      }
      .button-container-actions{
        .el-button{
          font-size: 12px;
        }
      }
      .button-container-actions-cue{
        gap: .5em;
        flex-wrap: wrap;
        .el-button{
          flex-wrap: wrap;
          width: calc(49.5% - .25em);
          margin-left: 0;
        }
      }

      .button-container-cancel-submit{
        .el-button{
          height: 2.2em;
          width: 5em !important;
        }
      }

      .button-container2 {
        height: 2.4em;
        margin-top: 1.5em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .el-button {
          border: 1px solid #0b70c3;
          background: #0b70c3;
          color: #fff;
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

  .status-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 2.8em;
    p{
      margin-bottom: 0 !important;
    }
  }
}

.info-icon {
  cursor: pointer;
  color: #0b70c3;
  font-size: 1.1em;
  vertical-align: middle;
  margin-left: 0.3em;

  &:hover {
    color: #0958a8;
  }
}

.step-level2{
  margin: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  &>p{
    font-size: 1.24em;
    font-weight: bold;
    color: #05408c;
  }

  .el-button{
    font-size: 1em;
    height: 2.6em;
    border: 1px solid #0b70c3;
    background: #fff;
    color: #0b70c3;
    &:disabled {
      border: none;
      background: #c2c2c2;
      color: #fff;
    }
    &.selected {
      background: #0b70c3;
      color: #fff;
    }
  }
  :deep(.el-checkbox__inner){
    border: 1px solid #666;
  }
}

.actions-box{
  &> div{
    margin-bottom: 1em;
    &>p:nth-child(1){
      margin-bottom: 0.5em;
    }
  }
}

:deep(.annotation-overlay-input.is-highlight-overlay .el-textarea__inner) {
  color: transparent;
}

:deep(.annotation-overlay-input.is-highlight-overlay .el-textarea__inner::placeholder) {
  color: transparent;
}

:deep(.el-textarea__inner) {
  --el-textarea-inner-height: 300px;
  font-size: 1rem;
  box-shadow: 0 0 0 1px #999 inset;
}

:deep(.cue-text-input .el-textarea__inner) {
  font-style: italic;
}
</style>
