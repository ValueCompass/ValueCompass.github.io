<template>
  <div class="main-container">
    <h2 style="margin-top: 2em; font-size: 1.5em; color: #0b70c3">
      Task History
    </h2>
    <el-table :data="tableData" border style="width: 100%; margin-top: 2em">
      <el-table-column type="index" width="150" label="Number" />
      <el-table-column prop="question" label="Question">
        <template #default="scope">
          <span class="question-link" @click="handleQuestionClick(scope.row)">
            {{ scope.row.question }}
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

<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { GetAllCompletedAnnotations } from "@/service/CulturalValueAnnotationApi";
import router from "@/router";

const userDetail = JSON.parse(sessionStorage.getItem("userDetail") || "{}");

// 点击问题时的处理函数
const handleQuestionClick = (question) => {
  // 跳转到指定页面，这里可以根据需求修改路由
  console.log(question);
  const index = question.index;
  console.log("要传的question信息", question);
  sessionStorage.setItem("editCurrentQuestion", JSON.stringify(question));
  router.push({
    path: "/CulturalValueAnnotation/" + index,
    // params: question,
    // query: question
  });
};

const tableData = ref([
  // {
  //   timestamp: "2016-05-03",
  //   Question:
  //     "Do you think kids should be punished when they oppose their parents both in words and actions?",
  // },
]);

const handleCreateClick = () => {
  router.push({
    path: "/CulturalValueAnnotation",
  });
};

const taskHistory = ref([]);

onMounted(() => {
  GetAllCompletedAnnotations({
    username: userDetail.username,
    country: userDetail.country,
    language: userDetail.language,
  })
    .then((res) => {
      console.log(res.data);

      // 将对象转换为数组
      const dataArray = Object.entries(res.data.annotations).map(
        ([key, value]) => ({
          id: key,
          ...value,
          timestamp: new Date().toISOString().split("T")[0], // 添加时间戳
        })
      );

      if (dataArray.length === 0) {
        ElMessage.warning("No task history found.");
        return;
      } else {
        tableData.value = dataArray;
        console.log("tableData.value", tableData.value);
      }
    })
    .catch((err) => {
      ElMessage.error(err.message);
    })
    .finally(() => {});
});
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