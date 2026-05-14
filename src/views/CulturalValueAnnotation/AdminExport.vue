<template>
  <div class="admin-export-page main-container">
    <div class="admin-export-card">
      <div class="admin-export-header">
        <div>
          <div class="admin-badge">
            <el-icon><Lock /></el-icon>
            <span>ADMIN ACCESS ONLY</span>
          </div>
          <h1>Data Export</h1>
        </div>
      </div>

      <el-input
        v-model="searchKeyword"
        class="admin-search"
        placeholder="Search by user name"
        clearable
      />

      <el-table
        ref="tableRef"
        :data="filteredUsers"
        v-loading="isLoading"
        @selection-change="handleSelectionChange"
        class="admin-export-table"
        max-height="calc(100vh - 28rem)"
        min-height="12.5rem"
      >
        <el-table-column type="selection" width="48" />
        <el-table-column prop="name" label="Name" min-width="180">
          <template #default="scope">
            <span class="name-link">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="completedAnnotations"
          label="Number of Completed Annotations"
          min-width="140"
          align="center"
        />
        <el-table-column label="Question Type" align="center">
          <el-table-column prop="selectCount" label="Select" min-width="100" align="center">
            <template #default="scope">
              <span :class="{ 'is-zero': scope.row.selectCount === 0 }">
                {{ scope.row.selectCount }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="refineCount" label="Refine" min-width="100" align="center">
            <template #default="scope">
              <span :class="{ 'is-zero': scope.row.refineCount === 0 }">
                {{ scope.row.refineCount }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="createCount" label="Create" min-width="100" align="center">
            <template #default="scope">
              <span :class="{ 'is-zero': scope.row.createCount === 0 }">
                {{ scope.row.createCount }}
              </span>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>

      <div class="admin-export-total">
        Total: {{ filteredUsers.length }}
      </div>

      <div class="admin-export-actions">
        <el-button
          color="#0B70C3"
          :disabled="selectedUsers.length === 0"
          @click="handleDownloadSelectedData"
        >
          Download Selected Data
        </el-button>
        <el-button
          color="#0B70C3"
          :disabled="selectedUsers.length === 0"
          @click="handleDownloadSelectedExcel"
        >
          Download Excel
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import { Lock } from "@element-plus/icons-vue";
import { getAdminAnnotationUsers } from "@/service/CulturalValueAnnotationApi";
import { getCulturalValueAnnotationAdminDetail } from "@/utils/culturalValueAnnotationAuth";

const isLoading = ref(false);
const searchKeyword = ref("");
const users = ref([]);
const selectedUsers = ref([]);

const getAnnotationList = (annotations) => {
  if (Array.isArray(annotations)) {
    return annotations.filter(Boolean);
  }

  if (annotations && typeof annotations === "object") {
    return Object.values(annotations).filter(Boolean);
  }

  return [];
};

const getQuestionTypeCounts = (annotations) => {
  return getAnnotationList(annotations).reduce(
    (counts, annotation) => {
      const action = String(annotation.question_action || "").trim().toLowerCase();

      if (action === "select existing") {
        counts.selectCount += 1;
      } else if (action === "refine") {
        counts.refineCount += 1;
      } else if (action === "create" || action === "create new") {
        counts.createCount += 1;
      }

      return counts;
    },
    {
      selectCount: 0,
      refineCount: 0,
      createCount: 0,
    },
  );
};

const normalizeAdminUsers = (responseUsers, fallbackCountry) => {
  if (Array.isArray(responseUsers)) {
    return responseUsers;
  }

  if (!responseUsers || typeof responseUsers !== "object") {
    return [];
  }

  return Object.entries(responseUsers).map(([username, annotations]) => {
    const annotationList = getAnnotationList(annotations);
    const questionTypeCounts = getQuestionTypeCounts(annotations);

    return {
      id: username,
      name: username,
      country: fallbackCountry,
      completedAnnotations: annotationList.length,
      annotations,
      ...questionTypeCounts,
    };
  });
};

const getSearchText = (item) => {
  const annotationsText = getAnnotationList(item.annotations)
    .map((annotation) =>
      [
        annotation.question,
        annotation.raw_question,
        annotation.topic_1,
        annotation.topic_2,
        annotation.task_1,
        annotation.task_2,
        Array.isArray(annotation.principles)
          ? annotation.principles.join(" ")
          : annotation.principles,
      ]
        .filter(Boolean)
        .join(" "),
    )
    .join(" ");

  return [item.name, item.country, annotationsText]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
};

const filteredUsers = computed(() => {
  const keyword = searchKeyword.value.trim().toLowerCase();
  if (!keyword) {
    return users.value;
  }

  return users.value.filter((item) => getSearchText(item).includes(keyword));
});

const handleSelectionChange = (value) => {
  selectedUsers.value = value;
};

const formatTimestampToChinaTime = (timestamp) => {
  const date = new Date(timestamp);
  const utc8Date = new Date(date.getTime() + 8 * 60 * 60 * 1000);
  const year = utc8Date.getUTCFullYear();
  const month = String(utc8Date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(utc8Date.getUTCDate()).padStart(2, "0");
  const hours = String(utc8Date.getUTCHours()).padStart(2, "0");
  const minutes = String(utc8Date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(utc8Date.getUTCSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const getDownloadTimestamp = () => {
  return new Date().toISOString().replace(/[:.]/g, "-").slice(0, -5);
};

const getCsvCellValue = (value) => {
  if (value === null || value === undefined) {
    return "";
  }

  let cellValue = value;
  if (Array.isArray(cellValue) || typeof cellValue === "object") {
    cellValue = JSON.stringify(cellValue);
  }

  cellValue = String(cellValue);

  if (cellValue.includes(",") || cellValue.includes('"') || cellValue.includes("\n")) {
    cellValue = '"' + cellValue.replace(/"/g, '""') + '"';
  }

  return cellValue;
};

const downloadBlob = (blob, filename) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const handleDownloadSelectedData = () => {
  const exportData = selectedUsers.value.map(({ annotationList, ...user }) => user);

  const blob = new Blob([JSON.stringify(exportData, null, 2)], {
    type: "application/json;charset=utf-8",
  });
  downloadBlob(blob, `annotation-admin-export-${getDownloadTimestamp()}.json`);
  ElMessage.success("Selected data downloaded");
};

const handleDownloadSelectedExcel = () => {
  const dataArray = selectedUsers.value.flatMap((user) => {
    return Object.entries(user.annotations || {}).map(([annotationIndex, annotation]) => ({
      username: user.name,
      country: user.country,
      annotation_index: annotationIndex,
      ...annotation,
      timestamp: annotation.timestamp
        ? formatTimestampToChinaTime(annotation.timestamp)
        : "",
    }));
  });

  if (dataArray.length === 0) {
    ElMessage.warning("No data to download");
    return;
  }

  const fields = [
    "username",
    "country",
    "annotation_index",
    "index",
    "topic_1",
    "topic_2",
    "principles",
    "task_1",
    "task_2",
    "question_action",
    "question",
    "importance",
    "frequency",
    "raw_question",
    "raw_importance",
    "raw_frequency",
    "original_response",
    "original_highlight_cues",
    "original_key_concepts",
    "original_response_person",
    "original_highlight_cues_person",
    "original_key_concepts_person",
    "response",
    "highlight_cues",
    "key_concepts",
    "cues_actions",
    "concepts_actions",
    "response_person",
    "highlight_cues_person",
    "key_concepts_person",
    "cues_actions_person",
    "concepts_actions_person",
    "answer_model",
    "duration_time",
    "submit_type",
    "timestamp",
  ];

  let csvContent = fields.join(",") + "\n";
  dataArray.forEach((row) => {
    csvContent += fields.map((field) => getCsvCellValue(row[field])).join(",") + "\n";
  });

  const bom = "\uFEFF";
  const blob = new Blob([bom + csvContent], { type: "text/csv;charset=utf-8;" });
  downloadBlob(blob, `annotation-admin-export-${getDownloadTimestamp()}.csv`);
  ElMessage.success("Download successful");
};

onMounted(() => {
  const adminDetail = getCulturalValueAnnotationAdminDetail() || {};

  isLoading.value = true;
  getAdminAnnotationUsers({
    country: String(adminDetail.country || "").trim(),
  })
    .then((res) => {
      if (res.data?.ok) {
        users.value = normalizeAdminUsers(
          res.data.all_user_annotations,
          String(adminDetail.country || "").trim(),
        );
        return;
      }

      ElMessage.error("Failed to load admin data");
    })
    .catch(() => {
      ElMessage.error("Failed to load admin data");
    })
    .finally(() => {
      isLoading.value = false;
    });
});
</script>

<style scoped lang="scss">
.admin-export-page {
  flex: 1;
  padding: 5rem 0 4rem;
}

.admin-export-card {
  max-width: 68.75rem;
  margin: 0 auto;
}

.admin-export-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h1 {
    margin: 0.5rem 0 0;
    font-size: 3rem;
    color: rgba(5, 64, 140, 1);
    font-weight: 700;
  }
}

.admin-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: #ffe1de;
  color: #ba1a1a;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.55rem;
  border-radius: 0.25rem;
}

.admin-search {
  margin-bottom: 1.5rem;
}

.admin-export-table {
  :deep(.el-table__header-wrapper th) {
    background: rgba(252, 243, 230, 1) !important;
    color: rgba(5, 64, 140, 1);
    font-weight: 700;
  }

  .name-link {
    color: #0b70c3;
    text-decoration: underline;
    font-weight: 600;
  }

  .is-zero {
    color: #ff355d;
  }
}

.admin-export-total {
  margin-top: 1rem;
  color: rgba(64, 71, 81, 0.8);
  font-size: 0.875rem;
  text-align: right;
}

.admin-export-actions {
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  .el-button {
    min-width: 12.25rem;
    height: 2.8rem;
  }
}
</style>