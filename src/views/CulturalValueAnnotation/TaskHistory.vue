<template>
  <div class="main-container">
    <h2>Task History</h2>
    <el-table :data="tableData" border style="width: 100%; margin-top: 2em">
      <el-table-column type="index" width="150" label="Number" />
      <el-table-column prop="Question" label="Question">
        <template #default="scope">
          <span class="question-link" @click="handleQuestionClick(scope.row)">
            {{ scope.row.Question }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="timestamp" label="Timestamp" width="200" />
    </el-table>
    <div class="bth-container">
      <el-button type="primary" color="#0B70C3" @click="handleCreateClick"
        >Create a new one</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { login } from "@/service/CulturalValueAnnotationApi.ts";
import router from "@/router";

// 点击问题时的处理函数
const handleQuestionClick = (question: any) => {
  // 跳转到指定页面，这里可以根据需求修改路由
  console.log(question);
  const Question = question.Question;
  router.push({
    path: "/CulturalValueAnnotation/" + Question,
    query: { question: question },
  });
};

const tableData = [
  {
    timestamp: "2016-05-03",
    Question:
      "Do you think kids should be punished when they oppose their parents both in words and actions?",
  },
  {
    timestamp: "2016-05-03",
    Question:
      "Do you think kids should be punished when they oppose their parents both in words and actions?",
  },
  {
    timestamp: "2016-05-03",
    Question:
      "Do you think kids should be punished when they oppose their parents both in words and actions?",
  },
];

const handleCreateClick = () => {
  router.push({
    path: "/CulturalValueAnnotation/index",
  });
};
</script>

<style scoped lang="scss">
.question-link {
  color: #0b70c3;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: #095aa7;
  }
}

:deep(.el-table__body-wrapper) {
  font-size: 16px;
}

.bth-container {
  margin-top: 5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .el-button {
    width: 10em;
    height: 2.8em;
    font-size: 1.2em;
  }
}
</style>