<template>
  <div class="annotation-container">
    <!-- 左侧面板容器（占50%宽度） -->
    <div class="left-panel">
      <div class="step-section">
        <div class="step-title">
          <div class="title-text">Step 1. 选择并排序重要的Points</div>
          <div class="step-hint">
            <span class="hint-icon">⚠</span>
            提示 提示 请选择会影响你判断或回答当前问题的重要价值观，避免那些跟当前问题无关的价值观。
选择后请进行排序，并说明这些价值观的优先级或权衡关系。
          </div>
        </div>
        <div class="step-content point-section">
          <!-- Point 列表面板 -->
          <div class="left">
            <h5>候选Points</h5>
            <!-- 添加新 Point 按钮 -->
            <div class="add-point-btn" @click="showAddDialog">+ 添加新的 Point</div>

            <!-- Point 列表：使用 el-checkbox-group 实现多选 -->
            <div class="point-list">
              <el-checkbox-group v-model="selectedPoints">
                <div 
                  v-for="(point, index) in pointArr" 
                  :key="index"
                  class="point-item"
                >
                  <el-checkbox 
                    :label="point" 
                    class="point-checkbox"
                    :disabled="!selectedPoints.includes(point) && selectedPoints.length >= maxSelectNum"
                  >
                    <span class="point-text">{{ point }}</span>
                  </el-checkbox>
                </div>
              </el-checkbox-group>
            </div>

            <!-- 提示文字 -->
            <div class="hint-text">建议选择 2-4 个真正重要的 Points，最多可选 {{ maxSelectNum }} 个</div>
          </div>

          <!-- 已选 Point 排序面板 -->
          <div class="right">
            <h5>已选Points ({{ selectedPoints.length }})</h5>
            <!-- 拖拽排序提示 -->
            <div class="priority-header">
              <span>拖拽排序以确定优先级（从上到下：优先级由高到低）</span>
            </div>
            <!-- 已选 Point 列表：支持拖拽排序 -->
            <div class="selected-list">
              <div 
                v-for="(point, i) in selectedPoints" 
                :key="point"
                class="selected-item"
                draggable="true"
                @dragstart="onDragStart(i)"
                @dragover="onDragOver(i)"
                @drop="onDrop(i)"
                @dragend="onDragEnd"
              >
                <div class="move-btns">
                  <button class="move-btn" @click="moveUp(i)" :disabled="i === 0">↑</button>
                  <button class="move-btn" @click="moveDown(i)" :disabled="i === selectedPoints.length - 1">↓</button>
                </div>
                <span class="priority-number">{{ i + 1 }}</span>
                <span class="selected-text">{{ point }}</span>
                <button class="remove-btn" @click="removePoint(i)">×</button>
              </div>
            </div>

            <!-- 优先级关系或权衡说明 -->
            <div class="input-section">
              <h4 class="section-label">优先级关系或权衡说明 <span class="required">（必填）</span></h4>
             
              <div class="textarea-wrapper">
              <el-input
                v-model="priorityDescription"
                type="textarea"
                :rows="4"
                :maxlength="200"
                show-word-limit
                placeholder="请说明这些 Points 的优先级或如何权衡（1-3句话）"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧区域（占50%宽度）：Step2 和 Step3 -->
    <div class="right-panel">
      <!-- Step 2: 基于points指导回答 -->
      <div class="step-section">
        <div class="step-title">
          <div class="title-text">Step 2. 基于前面选择的points指导问题的回答 (level-2)</div>
          <div class="step-hint">
            <span class="hint-icon">⚠</span>
            提示 如果题目需要明确立场，请先给出立场。
          </div>
        </div>
        <div class="step-content">
          <!-- (1) 明确立场 -->
          <div class="input-section full-width">
            <div class="section-label">(1) 明确立场（如需）</div>
            <div class="textarea-wrapper">
              <el-input
                v-model="positionText"
                type="textarea"
                :rows="4"
                :maxlength="200"
                show-word-limit
                placeholder="请输入明确立场..."
              />
            </div>
          </div>

          <!-- 不合适的做法(至少列出1条) -->
          <div class="input-section full-width">
            <div class="section-label">(2) 不合适的做法(至少列出1条)</div>
            <div class="textarea-wrapper">
              <el-input
                v-model="incorrectText"
                type="textarea"
                :rows="4"
                :maxlength="200"
                show-word-limit
                placeholder="请输入明确立场..."
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Step 3: 生成完整回答 -->
      <div class="step-section">
        <div class="step-title">
          <div class="title-text">Step 3. 边界情况判断 </div>
          <div class="step-hint">
            <span class="hint-icon">⚠</span>
            提示 说明在什么特殊条件下，你的判断会改变，以及改变后的判断是什么。
          </div>
        </div>
        <div class="step-content step3-content">
          <el-radio-group v-model="boundaryChoice" class="boundary-radio-group">
            <div 
              v-for="option in boundaryOptions" 
              :key="option.value"
              class="radio-option"
            >
              <el-radio :label="option.value">{{ option.label }}</el-radio>
              <div v-if="boundaryChoice === option.value" class="option-input">
                <el-input
                  v-model="boundaryText"
                  type="textarea"
                  :rows="4"
                  :maxlength="500"
                  show-word-limit
                  :placeholder="option.value === 'yes，can' ? '请说明在什么条件下判断会改变...' : '请说明为什么没有明显会改变判断的条件...'"
                />
              </div>
            </div>
          </el-radio-group>
        </div>
      </div>
    </div>

    <!-- 添加新 Point 对话框 -->
    <el-dialog
      v-model="addDialogVisible"
      title="添加新的 Point"
      width="500px"
    >
      <el-input
        v-model="newPointText"
        placeholder="请输入新的 Point"
        type="textarea"
        :rows="3"
      />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addNewPoint">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { ElMessage } from "element-plus";

const props = defineProps({
  annotationDataOrigin: {
    type: Object,
    default: () => ({
      value_list: [],
      max_select_num: 3,
      selected_ranked_values: [],
      selected_ranked_comment: "",   // priorityDescription
      response: "",   // positionText
      inappropriate_response: "",   // incorrectText
      boundary_condition: {
        value:"会改变",   // //两种情况，一种是“会改变”，一种是“不会改变”
        reason:"边界的文本"
      },   // boundaryCondition
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


// ===== 数据定义 =====

// Point 数据数组（使用 ref 使其响应式）
const pointArr = ref([
  "自主选择，成年人是人生应该自己做主",
  "尊重父母，应该理解并回应父母的担忧",
  "服从父母，应当以父母的意见为主",
  "稳定与安全，在不确定的情况下优先选择稳定的道路",
  "追求自我实现，应该追随自己的兴趣和热爱",
  "对家庭负责，考虑自己的选择对家庭带来的影响"
]);

// 已选 Point 的索引数组
const selectedPoints = ref([]);
const maxSelectNum = ref(0);

// 优先级说明文本
const priorityDescription = ref("");

// 拖拽起始索引
const dragIndex = ref(null);

// ===== 添加新 Point 相关数据 =====

// 对话框显示状态
const addDialogVisible = ref(false);

// 新 Point 文本
const newPointText = ref("");

// ===== Step3 边界条件选项 =====
const boundaryOptions = [
  { label: "有，会改变判断", value: "yes，can" },
  { label: "没有明显会改变判断的条件", value: "no，can not" }
];

// ===== Step2 相关数据 =====

// 明确立场文本
const positionText = ref("");

// 不合适的做法文本
const incorrectText = ref("");

// ===== Step3 相关数据 =====

// 边界情况选择（1: 有，会改变判断；2: 没有明显会改变判断的条件）
const boundaryChoice = ref(null);

// 边界条件说明文本
const boundaryText = ref("");

// 根据annotationDataOrigin初始化表单数据（深拷贝，避免修改原始数据）
const initForm = () => {
  const data = props.annotationDataOrigin;
  if (data) {
    // 深拷贝，确保页面操作不会改变 annotationDataOrigin
    const copy = JSON.parse(JSON.stringify(data));
    
    // 填充左侧候选Points
    if (copy.value_list && copy.value_list.length > 0) {
      pointArr.value = copy.value_list;
    }
    
    // 填充已选Points
    selectedPoints.value = copy.selected_ranked_values || [];
    maxSelectNum.value = copy.max_select_num || 0;
    
    // 填充优先级说明
    priorityDescription.value = copy.selected_ranked_comment || "";
    
    // 填充Step2: 立场说明和不合适做法
    positionText.value = copy.response || "";
    incorrectText.value = copy.inappropriate_response || "";
    
    // 填充Step3: 边界条件
    if (copy.boundary_condition) {
      boundaryChoice.value = copy.boundary_condition.value || null;
      boundaryText.value = copy.boundary_condition.reason || "";
    }
  }
};

// 监听annotationDataOrigin变化
watch(
  () => props.annotationDataOrigin,
  (newVal) => {
    if (newVal) {
      initForm();
    }
  },
  { deep: true, immediate: true }
);

// 页面加载时初始化
onMounted(() => {
  initForm();
});

/**
// ===== 左侧功能函数 =====

/**
 * 显示添加新 Point 对话框
 */
const showAddDialog = () => {
  newPointText.value = "";
  addDialogVisible.value = true;
};

/**
 * 添加新 Point 到 pointArr
 */
const addNewPoint = () => {
  if (newPointText.value.trim()) {
    pointArr.value.push(newPointText.value.trim());
    addDialogVisible.value = false;
    newPointText.value = "";
  }
};

/**
 * 切换 Point 选中状态
 * @param {number} index - Point 在 pointArr 中的索引
 */
const togglePoint = (index) => {
  const i = selectedPoints.value.indexOf(index);
  if (i === -1) {
    selectedPoints.value.push(index);
  } else {
    selectedPoints.value.splice(i, 1);
  }
};

/**
 * 从已选列表中移除 Point
 * @param {number} index - Point 在 pointArr 中的索引
 */
const removePoint = (i) => {
  selectedPoints.value.splice(i, 1);
};

// ===== 右侧拖拽排序功能函数 =====

/**
 * 拖拽开始：记录起始位置
 * @param {number} index - 拖拽元素在 selectedPoints 中的索引
 */
const onDragStart = (index) => {
  dragIndex.value = index;
};

/**
 * 拖拽经过：阻止默认行为以允许放置
 * @param {number} index - 经过元素在 selectedPoints 中的索引
 */
const onDragOver = (index) => {
  event.preventDefault();
};

/**
 * 放置：交换元素位置
 * @param {number} index - 放置目标在 selectedPoints 中的索引
 */
const onDrop = (index) => {
  const fromIndex = dragIndex.value;
  const toIndex = index;
  if (fromIndex !== null && fromIndex !== toIndex) {
    // 移除拖拽元素
    const item = selectedPoints.value.splice(fromIndex, 1)[0];
    // 插入到目标位置
    selectedPoints.value.splice(toIndex, 0, item);
  }
};

/**
 * 拖拽结束：清空拖拽索引
 */
const onDragEnd = () => {
  dragIndex.value = null;
};

/**
 * 向上移动项目
 * @param {number} index - 当前索引
 */
const moveUp = (index) => {
  if (index > 0) {
    const item = selectedPoints.value.splice(index, 1)[0];
    selectedPoints.value.splice(index - 1, 0, item);
  }
};

/**
 * 向下移动项目
 * @param {number} index - 当前索引
 */
const moveDown = (index) => {
  if (index < selectedPoints.value.length - 1) {
    const item = selectedPoints.value.splice(index, 1)[0];
    selectedPoints.value.splice(index + 1, 0, item);
  }
};

/**
 * 获取用户编辑后的数据
 * @returns {Object} 包含所有编辑数据的对象
 */
const getFormData = () => {

  return {
    value_list: pointArr.value,
    max_select_num: maxSelectNum.value,
    // 已选并排序的 Points
    selected_ranked_values: selectedPoints.value,
    // 优先级说明
    selected_ranked_comment: priorityDescription.value,
    // 立场说明
    response: positionText.value,
    // 不合适的做法
    inappropriate_response: incorrectText.value,
    // 边界条件
    boundary_condition: {
      value: boundaryChoice.value,
      reason: boundaryText.value
    }
  };
};

/**
 * 校验必填字段，返回是否通过
 * @returns {boolean} 校验是否通过
 */
const validate = () => {
  if (selectedPoints.value.length === 0) {
    ElMessage.warning("请至少选择一个 Point");
    return false;
  }
  if (!priorityDescription.value.trim()) {
    ElMessage.warning("请填写优先级关系或权衡说明");
    return false;
  }
  if (!positionText.value.trim()) {
    ElMessage.warning("请填写明确立场");
    return false;
  }
  if (!incorrectText.value.trim()) {
    ElMessage.warning("请填写不合适的做法");
    return false;
  }
  if (!boundaryChoice.value) {
    ElMessage.warning("请选择边界情况");
    return false;
  }
  if (!boundaryText.value.trim()) {
    ElMessage.warning("请填写边界情况说明");
    return false;
  }
  return true;
};

// 暴露方法给父组件调用
defineExpose({
  getFormData,
  validate
});
</script>

<style scoped lang="scss">
/* ===== 主容器 ===== */
.annotation-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;

  /* 左侧面板容器（占49%宽度） */
  .left-panel {
    width: 49%;
    display: flex;
    justify-content: space-between;

    
  }

  /* 右侧区域（占49%宽度） */
  .right-panel {
    width: 49%;


  }

    /* Step 区块通用样式 */
  .step-section {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 6px;
    overflow: hidden;

    /* Step 标题 */
    .step-title {
      padding: 12px 16px;
      border-bottom: 1px solid #ddd;
      background-color: #ecf5ff;
      border-radius: 4px;
      

      /* 标题文本 */
      .title-text {
        font-weight: 600;
        font-size: 1.25rem;
        color: #0B70C3;
        margin-bottom: 8px;
      }

      /* Step 提示 */
      .step-hint {
        color: #909399;
        font-size: .875rem;
        display: flex;
        align-items: center;
        gap: 6px;

        .hint-icon {
          color: #e6a23c;
          font-size: 1em;
        }
      }
    }

    /* Step 内容区域 */
    .step-content {
      padding: 16px;
      display: flex;
      gap: 16px;
      flex-wrap: wrap;

      /* Step3 专属样式 */
      &.step3-content {
        display: block;

        /* 单选组 */
        .boundary-radio-group {
          width: 100%;

          /* 单选选项 */
          .radio-option {
            margin-bottom: 16px;
            width: 100%;
            /* 选项输入框 */
            .option-input {
              margin-top: 2px;
              background-color: #f5f7fa;
              border-radius: 4px;
            }
          }
        }
      }

      /* 输入区块 */
      .input-section {

        /* 全宽样式 */
        &.full-width {
          width: 100%;
        }

        /* 区块标签 */
        .section-label {
          font-weight: 500;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 1.125rem;
        }

        /* 文本框容器 */
        .textarea-wrapper {
          :deep(.el-textarea__inner) {
            resize: vertical;
          }
        }
      }
    }
  }

  .point-section{
    display: flex;
    flex-direction: row;

    /* Point 列表面板 */
    .left {
      width: 48%;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 16px;
      box-sizing: border-box;

      /* 添加新 Point 按钮 */
      .add-point-btn {
        border: 2px solid #ddd;
        color: #0B70C3;
        padding: 12px;
        text-align: center;
        border-radius: 8px;
        cursor: pointer;
        margin-bottom: 16px;
        font-weight: 500;

        &:hover {
          background-color: #ecf5ff;
        }
      }

      /* Point 列表容器 */
      .point-list {
        display: flex;
        flex-direction: column;

        /* Point 项样式 */
        .point-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          margin-bottom: 8px;

          /* 复选框样式 */
          .point-checkbox {
            flex: 1;
            display: flex;
            align-items: flex-start;
            height: auto  ;
          }

          /* Point 文本样式 */
          .point-text {
            flex: 1;
            line-height: 1.5;
          }
        }

        /* 重置复选框样式 */
        :deep(.el-checkbox__input) {
          margin-top: 4px;
          &.is-checked+.el-checkbox__label{
            color: #000;
          }
        }

        :deep(.el-checkbox__label) {
          white-space: normal;
          line-height: 1.5;
        }
      }

      /* 提示文字样式 */
      .hint-text {
        color: #999;
        margin-top: 16px;
      }
    }

    /* 已选 Point 排序面板 */
    .right {
      width: 48%;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 16px;
      box-sizing: border-box;

      /* 拖拽排序提示 */
      .priority-header {
        color: #666;
        margin-bottom: 16px;
      }

      /* 已选列表容器 */
      .selected-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        min-height: 10em;
        margin-bottom:3em;

        /* 已选项样式 */
        .selected-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background-color: #f5f7fa;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          cursor: move;

          &:hover {
            background-color: #ecf5ff;
          }

          /* 移动按钮容器 */
          .move-btns {
            display: flex;
            flex-direction: column;
            gap: 2px;

            /* 移动按钮样式 */
            .move-btn {
              background: none;
              border: 1px solid #dcdfe6;
              color: #606266;
              width: 20px;
              height: 18px;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              padding: 0;
              border-radius: 2px;

              &:hover:not(:disabled) {
                color: #0B70C3;
                border-color: #0B70C3;
              }

              &:disabled {
                opacity: 0.4;
                cursor: not-allowed;
              }
            }
          }

          /* 优先级编号样式 */
          .priority-number {
            background-color: #0B70C3;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1em;
            font-weight: 500;
          }

          /* 已选文本样式 */
          .selected-text {
            flex: 1;
            font-size: 14px;
            // overflow: hidden;
            // text-overflow: ellipsis;
            // white-space: nowrap;
          }

          /* 删除按钮样式 */
          .remove-btn {
            background: none;
            border: none;
            color: #999;
            font-size: 20px;
            cursor: pointer;
            padding: 0 4px;

            &:hover {
              color: #f56c6c;
            }
          }
        }
      }

      /* 优先级说明区域 */
      .priority-description {
        margin-top: 20px;

        /* 优先级说明标题 */
        h4 {
          margin-bottom: 12px;
          font-size: 1.125rem;

          /* 必填标记样式 */
          .required {
            color: #f56c6c;
          }
        }

        /* 文本输入框样式 */
        textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #dcdfe6;
          border-radius: 4px;
          resize: vertical;
          font-size: 14px;
          line-height: 1.5;
          box-sizing: border-box;

          &:focus {
            outline: none;
            border-color: #0B70C3;
          }
        }
      }
    }
    h5{
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 16px;
    }
  }
}
</style>
