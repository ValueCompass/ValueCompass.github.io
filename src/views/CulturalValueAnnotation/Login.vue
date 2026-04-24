<template>
  <div class="container" style="flex: 1">
    <div
      class="main-container"
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      "
    >
      <div class="box">
        <div class="user-detail">
          <div>
            <h2>Welcome to the Data Annotation System</h2>
            <p>Log in or create an account to continue</p>
          </div>

          <div class="login-container">
            <div class="login-section">
              <p>First Time Login?</p>
              <div>
                <div class="login-options">
                  <div
                    :class="{ active: isFirstLogin === true }"
                    @click="isFirstLogin = true"
                  >
                    Yes
                  </div>
                  <div
                    :class="{ active: isFirstLogin === false }"
                    @click="isFirstLogin = false"
                  >
                    No
                  </div>
                </div>
              </div>
            </div>
            <div v-if="isFirstLogin !== null" class="login-section">
              <p>Name</p>
              <div>
                <el-input
                  v-model="username"
                  placeholder="Please input"
                ></el-input>
              </div>
              <p v-if="isFirstLogin === true">
                The name can be your real name or alias. It will be used to
                track your training completion. Please use the same name again
                in the later survey.
              </p>
              <p v-else>
                If you have used this system before, please enter your name to
                log in.
              </p>
            </div>
            <div
              v-if="isFirstLogin !== null && isFirstLogin === true"
              class="login-section"
            >
              <p>Country</p>
              <div>
                <el-select
                  v-model="countryValue"
                  placeholder="Select a country"
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

            <div
              v-if="isFirstLogin !== null"
              class="login-section button-container"
            >
              <el-button
                color="#0B70C3"
                :disabled="isDisabled || isLoading"
                :loading="isLoading"
                @click="nextStep"
                :class="{ disabled: isDisabled || isLoading }"
                >Next</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { login } from "@/service/CulturalValueAnnotationApi.ts";

const dialogVisible = ref(true);
const isLoading = ref(false);

const isFirstLogin = ref(null);

const username = ref("");

const countryValue = ref("");
const countryOptions = ref([
  {
    value: "China",
    label: "China",
  },
  {
    value: "Japan",
    label: "Japan",
  },
  {
    value: "South Korea",
    label: "South Korea",
  },
  {
    value: "Singapore",
    label: "Singapore",
  },
  {
    value: "Malaysia",
    label: "Malaysia",
  },
  {
    value: "Indonesia",
    label: "Indonesia",
  },
  {
    value: "India",
    label: "India",
  },
]);

const isDisabled = computed(() => {
  return isFirstLogin.value === true
    ? !username.value.trim() || !countryValue.value
    : isFirstLogin.value === false
      ? !username.value.trim()
      : true;
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
    language: "Chinese",
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
        dialogVisible.value = false;
        emit("hideUsrerContainer");
        // 页面刷新
        window.location.reload();
      } else {
        // 登录失败，提示用户
        ElMessage.error("error");
      }
    })
    .catch((err) => {
      console.log(err);
      ElMessage.error("error");
    })
    .finally(() => {
      // 无论成功还是失败，都执行的操作
      console.log("无论成功还是失败，都执行的操作");
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(247, 249, 252, 1);
  .main-container {
    background:
      linear-gradient(rgba(247, 249, 252, 0.4), rgba(247, 249, 252, 0.55)),
      url("@/assets/images/culturalBg.png") no-repeat center;
    background-size: cover;
    position: relative;
    background-size: cover;
  }
}
.box {
  height: 620px;
  margin: 4em auto;
}
.user-detail {
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  font-size: 1rem;
  width: 720px;

  background-color: #fff;
  box-shadow: 0px 32px 64px -12px rgba(25, 28, 30, 0.06);
  border-radius: 12px;
  padding: 40px 97px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.2;
  h2 {
    font-weight: 600;
    font-size: 30px;
    color: rgba(5, 64, 140, 1);
    font-style: italic;
    text-align: center;
    letter-spacing: -0.75px;
    & + p {
      text-align: center;
      color: rgba(64, 71, 81, 1);
      margin-top: 1em;
    }
  }
  .login-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: rgba(64, 71, 81, 1);
    .login-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
      & > p:nth-child(1) {
        color: rgba(64, 71, 81, 0.8);
        font-size: 12px;
      }
      .login-options {
        display: flex;
        gap: 2rem;
        div {
          box-sizing: border-box;
          width: 45%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border-radius: 4px;
          cursor: pointer;
          background-color: #fff;
          border: 1px solid rgba(64, 71, 81, 0.2);
          color: #1f2937;
          border-radius: 6px;
          &.active {
            border-color: rgba(11, 112, 195, 1);
            color: rgba(11, 112, 195, 1);
            font-weight: bold;
          }
        }
      }
      :deep(.el-input) {
        .el-input__inner {
          height: 57px;
          font-size: 18px;
        }
      }
      :deep(.el-select) {
        .el-select__wrapper {
          height: 57px;
          font-size: 18px;
        }
      }
    }
  }

  .button-container {
    justify-content: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .el-button {
      height: 58px;
      width: 95px;
      border: none;
      font-size: 20px;
      &.disabled {
        cursor: not-allowed;
        background: rgba(194, 194, 194, 1);
        color: #fff;
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
