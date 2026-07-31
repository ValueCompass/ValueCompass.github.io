<template>
  <!-- 示例卡片容器 -->
  <div class="example-card">
    <!-- 头部：可点击展开/收起 -->
    <div class="card-header" @click="toggle">
      <div class="header-left">
        <span class="lightbulb-icon">💡</span>
        <span class="title">{{ t('culturalValueAnnotation.exampleCard.title') }}</span>
      </div>
      <el-icon class="toggle-icon" :class="{ expanded }"><ArrowUpBold /></el-icon>
    </div>

    <!-- 内容区域 -->
    <div v-show="expanded" class="card-body">
      <!-- 问题 -->
      <div class="section">
        <div class="section-title">{{ t('culturalValueAnnotation.exampleCard.question') }}</div>
        <div class="section-content">{{ example.question }}</div>
      </div>

      <!-- 价值观选项和优先级 -->
      <div class="section">
        <div class="section-title">{{ t('culturalValueAnnotation.exampleCard.valuesAndPriority') }}</div>
        <div class="values-list">
          <div v-for="(value, index) in example.values" :key="index" class="value-item">
            <span class="value-badge" :style="{ backgroundColor: getPriorityColor(index) }">{{ index + 1 }}</span>
            <span class="value-text">{{ value }}</span>
          </div>
        </div>
      </div>

      <!-- 回答 -->
      <div class="section">
        <div class="section-title">{{ t('culturalValueAnnotation.exampleCard.answer') }}</div>
        <div class="section-content">{{ example.answer }}</div>
      </div>

      <!-- 不合适的做法 -->
      <div class="section">
        <div class="section-title">{{ t('culturalValueAnnotation.exampleCard.inappropriatePractices') }}</div>
        <ol class="practices-list">
          <li v-for="(practice, index) in example.inappropriatePractices" :key="index">
            {{ practice }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ArrowUpBold } from "@element-plus/icons-vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

// Props定义
const props = defineProps({
  // 示例数据
  example: {
    type: Object,
    required: true,
    default: () => ({
      question: "",
      values: [],
      answer: "",
      inappropriatePractices: [],
    }),
  },
});

// 展开/收起状态
const expanded = ref(false);

// 切换展开/收起
const toggle = () => {
  expanded.value = !expanded.value;
};

/**
 * 根据优先级返回对应的背景颜色
 * @param {number} index - 优先级序号（从0开始）
 * @returns {string} 背景颜色
 */
const getPriorityColor = (index) => {
  const baseColor = '#0856A7';
  const opacities = [
    1,     // 1级：不透明
    0.85,  // 2级：85%透明度
    0.7,   // 3级：70%透明度
    0.55,  // 4级：55%透明度
    0.4,   // 5级：40%透明度
  ];
  const opacity = opacities[Math.min(index, opacities.length - 1)];
  const r = parseInt(baseColor.slice(1, 3), 16);
  const g = parseInt(baseColor.slice(3, 5), 16);
  const b = parseInt(baseColor.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
</script>

<style scoped lang="scss">
/* 示例卡片容器 */
.example-card {
  border: 1px solid #E8DCC8;
  border-radius: 8px;
  margin: 12px 0;
  overflow: hidden;

  /* 头部样式 */
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    user-select: none;
    background-color: #FFFBEA;

    &:hover {
      background-color: #F9F5ED;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 8px;

      .lightbulb-icon {
        font-size: 18px;
      }

      .title {
        font-size: 16px;
        font-weight: 600;
        color: #333;
      }
    }

    .toggle-icon {
      font-size: 14px;
      color: #666;
      transition: transform 0.3s;

      &.expanded {
        transform: rotate(180deg);
      }
    }
  }

  /* 内容区域 */
  .card-body {
    padding: 1rem 1.5rem ;

    /* 各区块 */
    .section {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      /* 区块标题 */
      .section-title {
        color: #0B70C3;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 12px;
      }

      /* 区块内容 */
      .section-content {
        color: #333;
        font-size: 14px;
        line-height: 1.6;
      }
    }

    /* 价值观列表 */
    .values-list {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;

      .value-item {
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: #F5F7FA;
        border: 1px solid #E0E0E0;
        border-radius: 20px;
        padding: 6px 16px;

        .value-badge {
          color: white;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 500;
        }

        .value-text {
          font-size: 14px;
          color: #333;
        }
      }
    }

    /* 不合适的做法列表 */
    .practices-list {
      margin: 0;
      color: #333;
      font-size: 14px;
      line-height: 1.8;

      li {
        margin-bottom: 4px;
      }
    }
  }
}
</style>
