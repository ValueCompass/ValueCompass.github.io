<template>
  <div class="main-container" style="position: relative">
    <div>
      <h2 style="margin-top: 2rem; font-size: 1.5em; color: #0b70c3">
        Task History
      </h2>
      <div style="display: flex; gap: 10px;justify-content: flex-end;margin-top: 2em;">
        <el-button color="#0B70C3" @click="downloadTaskHistory"
          >Download JSON</el-button
        >
        <el-button color="#0B70C3" @click="downloadExcel"
          >Download Excel</el-button
        >
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      class="task-history-table"
      v-loading="tableLoading"
      max-height="calc(100vh - 300px)"
      min-height="200"
      style="width: 100%; margin-top: 1em"
    >
      <el-table-column type="index" width="90" label="Number" />
      <el-table-column prop="question" label="Question" min-width="360">
        <template #default="scope">
          <span>
            {{ scope.row.question }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="topic_1" label="Topic 1" width="140" />
      <el-table-column prop="topic_2" label="Topic 2" width="140" />
      <el-table-column prop="task_1" label="Task 1" width="140" />
      <el-table-column prop="task_2" label="Task 2" width="140" />
      <el-table-column prop="timestamp" label="Timestamp" width="180">
        <template #default="scope">
          <span>
            {{
              scope.row.timestamp
                ? formatTimestampToChinaTime(scope.row.timestamp)
                : ""
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="Actions" width="160" fixed="right">
        <template #default="scope">
          <div class="action-buttons">
            <button
              type="button"
              class="action-link"
              @click="handleEditClick(scope.row, scope.$index)"
            >
              Edit
            </button>
            <button
              type="button"
              class="action-link"
              @click="handleDeleteRow(scope.row, scope.$index)"
            >
              Delete
            </button>
          </div>
        </template>
      </el-table-column>
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
import { ElMessage, ElMessageBox } from "element-plus";
import { GetAllCompletedAnnotations, DeleteAnnotationItem } from "@/service/CulturalValueAnnotationApi";
import router from "@/router";

const userDetail = JSON.parse(localStorage.getItem("userDetail") || "{}");
const tableRowKeys = ref([]);

// 点击问题时的处理函数
const handleQuestionClick = (question, rowIndex) => {
  // 跳转到指定页面，这里可以根据需求修改路由
  console.log(question);
  const index = tableRowKeys.value[rowIndex];

  if (!index) {
    ElMessage.error("Failed to locate record id");
    return;
  }

  console.log("要传的question信息", question);
  sessionStorage.setItem("editCurrentQuestion", JSON.stringify(question));
  router.push({
    path: "/CulturalValueAnnotation/edit/" + index,
    // params: question,
    // query: question
  });
};

const handleEditClick = (row, rowIndex) => {
  handleQuestionClick(row, rowIndex);
};

const handleDeleteRow = async (row, rowIndex) => {
  try {
    await ElMessageBox.confirm(
      "Are you sure you want to delete this task history record?",
      "Confirm Delete",
      {
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        type: "warning",
      }
    );

    // const payload = {
    //   username: userDetail.username,
    //   country: userDetail.country,
    //   language: userDetail.language,
    //   annotation: row,
    // };
    const payload = {
      username: userDetail.username,
      country: userDetail.country,
      language: userDetail.language,
      ...row,
      data_index: row.index
    };

    const res = await DeleteAnnotationItem(payload);

    if (!res?.data?.ok) {
      ElMessage.error("Delete failed");
      return;
    }

    const rowKey = tableRowKeys.value[rowIndex];

    tableData.value.splice(rowIndex, 1);
    tableRowKeys.value.splice(rowIndex, 1);

    if (downLoadData.value && rowKey in downLoadData.value) {
      delete downLoadData.value[rowKey];
      downLoadData.value = { ...downLoadData.value };
    }

    ElMessage.success("Delete successful");
  } catch (error) {
    if (error === "cancel") {
      return;
    }

    ElMessage.error("Delete failed");
    return;
  }
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
    path: "/CulturalValueAnnotation/home",
  });
};

const taskHistory = ref([]);

const downLoadData = ref(null);
const tableLoading = ref(false);

onMounted(() => {
  const userDetailStorage = localStorage.getItem("userDetail");
  if (!userDetailStorage) {
    router.push({ path: "/CulturalValueAnnotation/Login" });
    return;
  }

  tableLoading.value = true;

  GetAllCompletedAnnotations({
    username: userDetail.username,
    country: userDetail.country,
    language: userDetail.language,
  })
    .then((res) => {
      console.log(res.data);
      downLoadData.value = res.data.annotations;

      // 将对象转换为数组
      const annotationEntries = Object.entries(res.data.annotations).map(
        ([key, value]) => ({
          key,
          row: {
            ...value,
          },
        })
      );

      if (annotationEntries.length === 0) {
        ElMessage.warning("No task history found.");
        return;
      } else {
        // 页面按倒序展示，确保最新记录在最上方
        // const reversedEntries = [...annotationEntries].reverse();
        const reversedEntries = [...annotationEntries];
        tableData.value = reversedEntries.map((entry) => entry.row);
        tableRowKeys.value = reversedEntries.map((entry) => entry.key);
        console.log("tableData.value", tableData.value);
      }
    })
    .catch((err) => {
      ElMessage.error(err.message);
    })
    .finally(() => {
      tableLoading.value = false;
    });
});

// 格式化timestamp为中国时间（UTC+8）的年月日时分秒格式
function formatTimestampToChinaTime(timestamp) {
  const date = new Date(timestamp);
  // 转换为UTC+8时间
  const utc8Date = new Date(date.getTime() + 8 * 60 * 60 * 1000);
  // 格式化年月日时分秒
  const year = utc8Date.getUTCFullYear();
  const month = String(utc8Date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(utc8Date.getUTCDate()).padStart(2, "0");
  const hours = String(utc8Date.getUTCHours()).padStart(2, "0");
  const minutes = String(utc8Date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(utc8Date.getUTCSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const downloadTaskHistory = () => {
  if (!downLoadData.value) {
    ElMessage.warning("No data to download");
    return;
  }

  // 将数据转换为JSON字符串
  const jsonData = JSON.stringify(downLoadData.value, null, 2);

  // 创建Blob对象
  const blob = new Blob([jsonData], { type: "application/json" });

  // 创建下载链接
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;

  // 生成文件名（包含时间戳、username和language）
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, "-").slice(0, -5);
  const username = userDetail.username || 'anonymous';
  const language = userDetail.language || 'unknown';
  link.download = `task-history-${username}-${language}-${timestamp}.json`;

  // 触发下载
  document.body.appendChild(link);
  link.click();

  // 清理
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  ElMessage.success("Download successful");
};

const downloadExcel = () => {
  if (!downLoadData.value) {
    ElMessage.warning("No data to download");
    return;
  }

  // 将对象转换为数组
  const dataArray = Object.entries(downLoadData.value).map(([key, value]) => ({
    index: key,
    ...value,
    timestamp: value.timestamp
      ? formatTimestampToChinaTime(value.timestamp)
      : "",
  }));

  if (dataArray.length === 0) {
    ElMessage.warning("No data to download");
    return;
  }

  // 按照指定顺序的字段
  const fields = [
    'index',
    'topic_1',
    'topic_2',
    'principles',
    'task_1',
    'task_2',
    'question_action',
    'question',
    'importance',
    'frequency',
    'raw_question',
    'raw_importance',
    'raw_frequency',
    'original_response',
    'original_highlight_cues',
    'original_key_concepts',
    'original_response_person',
    'original_highlight_cues_person',
    'original_key_concepts_person',
    'response',
    'highlight_cues',
    'key_concepts',
    'cues_actions',
    'concepts_actions',
    'response_person',
    'highlight_cues_person',
    'key_concepts_person',
    'cues_actions_person',
    'concepts_actions_person',
    'timestamp'
  ];

  // 生成CSV内容
  let csvContent = fields.join(',') + '\n';

  dataArray.forEach(row => {
    const values = fields.map(field => {
      let value = row[field];
      
      // 处理null/undefined
      if (value === null || value === undefined) {
        return '';
      }
      
      // 处理数组和对象
      if (Array.isArray(value)) {
        value = JSON.stringify(value);
      } else if (typeof value === 'object' && value !== null) {
        value = JSON.stringify(value);
      }
      
      // 转换为字符串
      value = String(value);
      
      // 如果包含逗号、引号或换行符，需要用引号包裹并转义
      if (value.includes(',') || value.includes('"') || value.includes('\n')) {
        value = '"' + value.replace(/"/g, '""') + '"';
      }
      
      return value;
    });
    
    csvContent += values.join(',') + '\n';
  });

  // 添加BOM以支持Excel正确显示中文
  const bom = '\uFEFF';
  const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });

  // 创建下载链接
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  
  // 生成文件名（包含时间戳、username和language）
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const username = userDetail.username || 'anonymous';
  const language = userDetail.language || 'unknown';
  link.download = `task-history-${username}-${language}-${timestamp}.csv`;

  // 触发下载
  document.body.appendChild(link);
  link.click();
  
  // 清理
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  ElMessage.success("Download successful");
};
</script>

<style scoped lang="scss">
:deep(.task-history-table .el-table__header th.el-table__cell) {
  background: #f8ecd8;
  color: #001e44;
  font-weight: 600;
}

:deep(.task-history-table .el-table__header th.el-table__cell .cell) {
  color: inherit;
}

.question-link {
  color: #0b70c3;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: #095aa7;
  }
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: 24px;
}

.action-link {
  padding: 0;
  border: none;
  background: transparent;
  color: #0b70c3;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #095aa7;
  }
}

:deep(.el-table__body-wrapper) {
  font-size: 16px;
}

.bth-container {
  margin: 2em 0;
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