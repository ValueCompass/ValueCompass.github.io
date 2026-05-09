<template>
  <div class="admin-export-page main-container">
    <div class="admin-export-card">
      <div class="admin-export-header">
        <div>
          <div class="admin-badge">ADMIN ACCESS ONLY</div>
          <h1>Data Export</h1>
        </div>
      </div>

      <el-input
        v-model="searchKeyword"
        class="admin-search"
        placeholder="Search by user name, country, or question..."
        clearable
      />

      <el-table
        ref="tableRef"
        :data="filteredUsers"
        v-loading="isLoading"
        @selection-change="handleSelectionChange"
        class="admin-export-table"
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
          <el-table-column prop="selectCount" label="Select" min-width="100" align="center" />
          <el-table-column prop="refineCount" label="Refine" min-width="100" align="center" />
          <el-table-column prop="createCount" label="Create" min-width="100" align="center">
            <template #default="scope">
              <span :class="{ 'is-zero': scope.row.createCount === 0 }">
                {{ scope.row.createCount }}
              </span>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>

      <div class="admin-export-actions">
        <el-button
          color="#0B70C3"
          :disabled="selectedUsers.length === 0"
          @click="handleDownloadSelectedData"
        >
          Download Selected Data
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import { getAdminAnnotationUsers } from "@/service/CulturalValueAnnotationApi";

const isLoading = ref(false);
const searchKeyword = ref("");
const users = ref([]);
const selectedUsers = ref([]);

const filteredUsers = computed(() => {
  const keyword = searchKeyword.value.trim().toLowerCase();
  if (!keyword) {
    return users.value;
  }

  return users.value.filter((item) => {
    return [item.name, item.country]
      .some((field) => String(field || "").toLowerCase().includes(keyword));
  });
});

const handleSelectionChange = (value) => {
  selectedUsers.value = value;
};

const handleDownloadSelectedData = () => {
  const blob = new Blob([JSON.stringify(selectedUsers.value, null, 2)], {
    type: "application/json;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "annotation-admin-export.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  ElMessage.success("Selected data downloaded");
};

onMounted(() => {
  isLoading.value = true;
  getAdminAnnotationUsers()
    .then((res) => {
      if (res.data?.ok) {
        users.value = Array.isArray(res.data.users) ? res.data.users : [];
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
  padding: 7rem 0 4rem;
}

.admin-export-card {
  max-width: 1100px;
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
  background: #ffe1de;
  color: #ba1a1a;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.55rem;
  border-radius: 4px;
}

.admin-search {
  margin-bottom: 1.5rem;
}

.admin-export-table {
  :deep(.el-table__header-wrapper th) {
    background: #fbf2df;
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

.admin-export-actions {
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  .el-button {
    min-width: 196px;
    height: 2.8rem;
  }
}
</style>