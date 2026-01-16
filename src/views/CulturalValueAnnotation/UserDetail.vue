<template>
  <el-dialog
    v-model="dialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    width="800"
  >
    <div class="user-detail">
      <p>
        The name can be your real name or alias, but you must use the same name
        here and in the survey below.
      </p>
      <div class="input-item">
        <span>Name:</span>
        <div>
          <el-input v-model="username" placeholder="Please input"></el-input>
        </div>
      </div>
      <p>
        You must fill in the survey questionnaire before turning into the next
        stage. You can choose the version in your native language.
      </p>

      <div>
        <p class="survey-version-p">
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNkZGTUdYQkZNTDBWVjI0WTBFUDZCMTMzOC4u"
            target="_blank"
            >English;</a
          >
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxURUZRTDFJN1NLMTVXQUQ4M1A4MTRVM1NNOC4u"
            target="_blank"
            >Chinese;</a
          >
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNkZGTUdYQkZNTDBWVjI0WTBFUDZCMTMzOC4u"
            target="_blank"
            >Japanese;</a
          >
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNkZGTUdYQkZNTDBWVjI0WTBFUDZCMTMzOC4u"
            target="_blank"
            >Korean</a
          >
        </p>
        <div class="input-item">
          <span>Basic Infor-mation Survey:</span>
          <div>
            <el-checkbox v-model="checked1" label="Completed" size="large" />
          </div>
        </div>
      </div>

      <div>
        <p class="survey-version-p">
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNUE4QklKTjZaMFNaSE5JSEFYNlNZTkZMNi4u"
            target="_blank"
            >English;</a
          >
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNkNQVkRXTTRSMFo3NzU4NkZXM0QxRDZPOS4u"
            target="_blank"
            >Chinese;</a
          >
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNUE4QklKTjZaMFNaSE5JSEFYNlNZTkZMNi4u"
            target="_blank"
            >Japanese;</a
          >
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNUE4QklKTjZaMFNaSE5JSEFYNlNZTkZMNi4u"
            target="_blank"
            >Korean</a
          >
        </p>
        <div class="input-item">
          <span>Schwartz Value Survey:</span>
          <div>
            <el-checkbox v-model="checked2" label="Completed" size="large" />
          </div>
        </div>
      </div>

      <div>
        <p class="survey-version-p">
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNVc1RTVFQjBSVlNIRTNRT0Q5VzhJV0o1RC4u"
            target="_blank"
            >English;</a
          >
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUMEtSTkI3VEkwMEc3STRQTkhKRk41UTJPRS4u"
            target="_blank"
            >Chinese;</a
          >
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNVc1RTVFQjBSVlNIRTNRT0Q5VzhJV0o1RC4u"
            target="_blank"
            >Japanese;</a
          >
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNVc1RTVFQjBSVlNIRTNRT0Q5VzhJV0o1RC4u"
            target="_blank"
            >Korean</a
          >
        </p>
        <div class="input-item">
          <span>Cultural Value Survey:</span>
          <div>
            <el-checkbox v-model="checked3" label="Completed" size="large" />
          </div>
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

<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { login } from "@/service/CulturalValueAnnotationApi.ts";

const dialogVisible = ref(true);
const isLoading = ref(false);

const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
const username = ref("");

const countryValue = ref("");
const countryOptions = ref([
  {
    value: "China",
    label: "China",
  },
  {
    value: "English",
    label: "English",
  },
  {
    value: "Janpan",
    label: "Janpan",
  },
  {
    value: "Korea",
    label: "Korea",
  },
 
]);

const languageValue = ref("");
const languageOptions = ref([
  {
    value: "Chinese",
    label: "Chinese",
  },
  {
    value: "English",
    label: "English",
  },
  {
    value: "Japanese",
    label: "Japanese",
  },
  {
    value: "Korean",
    label: "Korean",
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
    !countryValue.value ||
    !languageValue.value ||
    !checked1.value ||
    !checked2.value ||
    !checked3.value
  );
});

const emit = defineEmits(["hideUsrerContainer"]);

const nextStep = () => {
  if (isDisabled.value) {
    return;
  }
  // 提交表单数据
  const formData = {
    username: username.value.trim(),
    country: countryValue.value,
    language: languageValue.value,
  };
  console.log(formData);
  isLoading.value = true;

  login(formData)
    .then((res) => {
      console.log(res);
      if (res.data.ok) {
        // 登录成功，跳转到下一个页面
        // router.push({ name: "CulturalValueAnnotation" });
        localStorage.setItem("userDetail", JSON.stringify(formData));
        localStorage.setItem("language", languageValue.value);
        dialogVisible.value = false;
        emit("hideUsrerContainer")
      } else {
        // 登录失败，提示用户
        ElMessage.error("登录失败，请检查用户名和密码");
      }
    })
    .catch((err) => {
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
      width: 7em;
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

.survey-version-p {
  font-size: 0.875em;
  line-height: 1.5;
  padding-left: 9em;
  margin-top: 1em;
  a {
    margin-right: 1em;
    color: #0b70c3;
    text-decoration: underline;
  }
}
</style>
