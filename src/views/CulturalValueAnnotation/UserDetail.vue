<template>
  <el-dialog
    v-model="dialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    width="800"
  >
    <div class="user-detail">
      <div class="input-item">
        <span>Name:</span>
        <div>
          <el-input v-model="username" placeholder="Please input"></el-input>
          <p>You must use the same name here and in the survey below.</p>
        </div>
      </div>

      <div class="input-item">
        <span>Survey:</span>
        <div>
          <el-radio-group v-model="surveyVersionValue">
            <el-radio
              v-for="(item, index) in surveyVersionOptions"
              :value="item.value"
              size="large"
              :key="index"
              >{{ item.label }}</el-radio
            >
          </el-radio-group>
          <p>
            You must fill in the survey questionnaire before turning into the
            next stage. You can choose the version in your native
            language.(English; Chinese; Japanese; Korean)
          </p>
        </div>
      </div>

      <div class="input-item">
        <span>Country:</span>
        <div>
          <el-select
            v-model="countryValue"
            placeholder="Select or input a country"
            filterable
            allow-create
          >
            <el-option
              v-for="item in countryOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>

      <div class="input-item">
        <span>Language:</span>
        <div>
          <el-select
            v-model="languageValue"
            placeholder="Select or input a language"
            filterable
            allow-create
            style=""
          >
            <el-option
              v-for="item in languageOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>

      <div class="input-item button-container">
        <el-button
          color="#0B70C3"
          :disabled="isDisabled || isLoading"
          :loading="isLoading"
          @click="nextStep"
          >Next</el-button
        >
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { login } from "@/service/CulturalValueAnnotationApi.ts";

const dialogVisible = ref(true);
const isLoading = ref(false);

const username = ref("");

const countryValue = ref("");
const countryOptions = ref([
  {
    value: "中国",
    label: "中国",
  },
  {
    value: "日本",
    label: "日本",
  },
  {
    value: "韩国",
    label: "韩国",
  },
  {
    value: "新加坡",
    label: "新加坡",
  },
  {
    value: "印度尼西亚",
    label: "印度尼西亚",
  },
  {
    value: "马来西亚",
    label: "马来西亚",
  },
  {
    value: "泰国",
    label: "泰国",
  },
  {
    value: "越南",
    label: "越南",
  },
  {
    value: "菲律宾",
    label: "菲律宾",
  },
  {
    value: "印度",
    label: "印度",
  },
  {
    value: "英国",
    label: "英国",
  },
  {
    value: "美国",
    label: "美国",
  },
  {
    value: "加拿大",
    label: "加拿大",
  },
]);

const languageValue = ref("");
const languageOptions = ref([
  {
    value: "普通话",
    label: "普通话",
  },
  {
    value: "粤语",
    label: "粤语",
  },
  {
    value: "日语",
    label: "日语",
  },
  {
    value: "韩语",
    label: "韩语",
  },
  {
    value: "英语",
    label: "英语",
  },
  {
    value: "马来语",
    label: "马来语",
  },
  {
    value: "台语",
    label: "台语",
  },
  {
    value: "菲律宾语",
    label: "菲律宾语",
  },
  {
    value: "印地语",
    label: "印地语",
  },
  {
    value: "印尼语",
    label: "印尼语",
  },
  {
    value: "阿拉伯语",
    label: "阿拉伯语",
  },
]);

const surveyVersionValue = ref("");
const surveyVersionOptions = ref([
  {
    value: "Completed",
    label: "Completed",
  },
  {
    value: "Not completed",
    label: "Not completed",
  },
]);

const isDisabled = computed(() => {
  return (
    !username.value.trim() ||
    !surveyVersionValue.value ||
    !countryValue.value ||
    !languageValue.value
  );
});

const nextStep = () => {
  if (isDisabled.value) {
    return;
  }
  // 提交表单数据
  const formData = {
    username: username.value.trim(),
    surveyVersion: surveyVersionValue.value,
    country: countryValue.value,
    language: languageValue.value,
  };
  console.log(formData);
  isLoading.value = true;

  login(formData)
    .then((res: any) => {
      console.log(res);
      if (res.data.ok) {
        // 登录成功，跳转到下一个页面
        // router.push({ name: "CulturalValueAnnotation" });
        localStorage.setItem("userDetail", JSON.stringify(formData));
        dialogVisible.value = false;
      } else {
        // 登录失败，提示用户
        ElMessage.error("登录失败，请检查用户名和密码");
      }
    })
    .catch((err: any) => {
      console.log(err);
    })
    .finally(() => {
      // 无论成功还是失败，都执行的操作
      isLoading.value = false;
    });
};

const isHasUserDetail = computed(() => {
  return localStorage.getItem("userDetail") !== null;
});

onMounted(() => {
  if (isHasUserDetail.value) {
    dialogVisible.value = false;
  } else {
    dialogVisible.value = true;
  }
});
</script>
<style scoped lang="scss">
.user-detail {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  font-size: 1rem;
  .input-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1em;

    & > span {
      margin-top: 0.5em;
      width: 5em;
      text-align: right;
    }
    & > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      p {
        font-size: 0.875em;
        line-height: 1.5;
      }
    }

    :deep(.el-select) {
      .el-select__wrapper {
        height: 2.5em;
        font-size: 1rem;
      }
    }
    :deep(.el-input__inner) {
      --el-input-inner-height: 2.5em;
      font-size: 1rem;
    }

    :deep(.el-radio) {
      .el-radio__label {
        font-size: 1rem;
      }
      .el-radio__inner {
        width: 1.5em;
        height: 1.5em;
      }
    }
  }

  .button-container {
    justify-content: center;
    .el-button {
      &.disabled {
        background-color: #f5f7fa;
        color: #909399;
        cursor: not-allowed;
      }
    }
  }
}
</style>
