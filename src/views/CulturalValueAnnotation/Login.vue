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
          <div class="mode-switch">
            <button
              type="button"
              :class="{ active: loginMode === 'annotator' }"
              @click="handleModeChange('annotator')"
            >
              Annotator
            </button>
            <button
              type="button"
              :class="{ active: loginMode === 'admin' }"
              @click="handleModeChange('admin')"
            >
              Admin
            </button>
          </div>

          <div>
            <h2>Welcome to Cultural Data Annotation System</h2>
            <p>{{ loginDescription }}</p>
          </div>

          <div
            v-if="!isAdminMode"
            class="login-container annotator-login-container"
          >
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
                  :class="{ 'login-input-error': !!annotatorLoginErrorTip }"
                  @input="annotatorLoginErrorTip = ''"
                ></el-input>
              </div>
              <div style="min-height: 2.4em">
                <p v-if="annotatorLoginErrorTip" class="login-error-tip">
                  {{ annotatorLoginErrorTip }}
                </p>
                <p v-if="!annotatorLoginErrorTip && isFirstLogin === true">
                  The name can be your real name or alias. It will be used to
                  track your training completion. Please use the same name again
                  in the later survey.
                </p>
                <p v-else-if="!annotatorLoginErrorTip">
                  If you have used this system before, please enter your name to
                  log in.
                </p>
              </div>
            </div>
            <div v-if="isFirstLogin !== null" class="login-section">
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

          <div v-else class="login-container admin-login-container">
            <div class="login-section">
              <p>Admin Account</p>
              <div>
                <el-input
                  v-model="adminUsername"
                  placeholder="Please input"
                  :class="{ 'login-input-error': !!adminLoginErrorTip }"
                  @input="adminLoginErrorTip = ''"
                ></el-input>
              </div>
              <p v-if="adminLoginErrorTip" class="login-error-tip">
                {{ adminLoginErrorTip }}
              </p>
            </div>

            <div class="login-section">
              <p>Password</p>
              <div>
                <el-input
                  v-model="adminPassword"
                  type="password"
                  show-password
                  placeholder="Please input"
                ></el-input>
              </div>
            </div>

            <div class="login-section">
              <p>Country</p>
              <div>
                <el-select
                  v-model="adminCountryValue"
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

            <div class="login-section button-container">
              <el-button
                color="#0B70C3"
                :disabled="isDisabledAdmin || isLoading"
                :loading="isLoading"
                @click="handleAdminLoginClick"
                :class="{ disabled: isDisabledAdmin || isLoading }"
                >Login</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { ElMessage } from "element-plus";
import {
  UserRegisterLogin,
  adminLogin,
} from "@/service/CulturalValueAnnotationApi.ts";
import router from "../../router";
import { syncLocaleFromUserDetail } from "@/i18n";
import {
  saveCulturalValueAnnotationAdminDetail,
  saveCulturalValueAnnotationUserDetail,
  hasStudiedCulturalValueAnnotationVideoGuidance,
  hasPassedCalibrationQuiz,
  hasCompletedOnboardingSurveys,
} from "../../utils/culturalValueAnnotationAuth";

const isLoading = ref(false);

const loginMode = ref("annotator");
const isAdminMode = computed(() => loginMode.value === "admin");

const isFirstLogin = ref(null);

const username = ref("");
const adminUsername = ref("");
const adminPassword = ref("");
const annotatorLoginErrorTip = ref("");
const adminLoginErrorTip = ref("");

const countryValue = ref("");
const adminCountryValue = ref("");
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
  // {
  //   value: "Malaysia",
  //   label: "Malaysia",
  // },
  // {
  //   value: "Indonesia",
  //   label: "Indonesia",
  // },
  // {
  //   value: "India",
  //   label: "India",
  // },
]);

const loginDescription = computed(() => {
  return isAdminMode.value
    ? "Enter the admin account and password to log in."
    : "Log in or create an account to continue";
});

const isDisabled = computed(() => {
  return (
    isFirstLogin.value === null || !username.value.trim() || !countryValue.value
  );
});

const isDisabledAdmin = computed(() => {
  return (
    !adminUsername.value.trim() ||
    !adminPassword.value.trim() ||
    !adminCountryValue.value
  );
});

const handleModeChange = (mode) => {
  loginMode.value = mode;
  annotatorLoginErrorTip.value = "";
  adminLoginErrorTip.value = "";
};

watch(isFirstLogin, () => {
  annotatorLoginErrorTip.value = "";
});

const handleAnnotatorLogin = () => {
  let sendData = {};
  if (isFirstLogin.value) {
    sendData = {
      register_login: "register",
      username: username.value.trim(),
      country: countryValue.value,
    };
  } else {
    sendData = {
      register_login: "login",
      username: username.value.trim(),
      country: countryValue.value,
    };
  }

  // 是否首次注册，决定路由行为：首次注册无需判断服务端字段，直接进 Onboarding Step 1。
  const isFirstTime = isFirstLogin.value;

  return UserRegisterLogin(sendData).then((res) => {
    if (!res.data.ok) {
      annotatorLoginErrorTip.value = res.data.message || "Login failed";
      return;
    }

    annotatorLoginErrorTip.value = "";

    // 持久化用户详情到 localStorage，供 Onboarding 页面读取。
    // 首次注册：服务端字段必定都是 false，直接保存即可。
    // 回访登录：使用服务端返回的实际值。
    // 非中国用户不需要 quiz，自动标记 passed_calibration_quiz 为 true。
    const isNeedPassQuizCheck = res.data.country?.toLowerCase() === "china";
    saveCulturalValueAnnotationUserDetail({
      username: res.data.username,
      country: res.data.country,
      language: res.data.language,
      studied_annotation_guidance: isFirstTime ? false : res.data.studied_annotation_guidance === true,
      passed_calibration_quiz: isFirstTime ? !isNeedPassQuizCheck : (res.data.passed_calibration_quiz === true || !isNeedPassQuizCheck),
    });

    // 登录成功后立即同步 i18n 语言设置，确保后续页面使用正确的语言。
    syncLocaleFromUserDetail();

    // ---------- 路由判断逻辑（详细注释） ----------
    //
    // Onboarding 分三个阶段，每个阶段有独立的完成标志：
    //   Step 1 — 培训视频（studied_annotation_guidance，来自服务端）
    //   Step 2 — 校准测验（passed_calibration_quiz，来自服务端）
    //   Step 3 — 问卷（survey，仅保存在本地 localStorage）
    //
    // 完整决策矩阵：
    //   Step 1 视频 │ Step 2 测验 │ Step 3 问卷 │ 行为
    //   ────────────┼─────────────┼─────────────┼──────────────────────────
    //   false       │ false       │  —          │ 进 Onboarding Step 1
    //   true        │ false       │  —          │ 进 Onboarding Step 2
    //   true        │ true        │ false       │ 进 Onboarding Step 3
    //   true        │ true        │ true        │ 全部完成，直接进首页
    //   false       │ true        │  —          │ 防御性：不应出现，进 Step 1
    //
    // 首次注册的用户必定从 Step 1 开始，无需调用判断函数。

    if (isFirstTime) {
      // 首次注册：三项都未完成，直接进 Onboarding Step 1。
      router.push({
        name: "CulturalValueAnnotationOnboarding",
      });
      return;
    }

    // 回访登录：根据 localStorage 中的完成状态决定起始步骤。
    // （saveCulturalValueAnnotationUserDetail 已将服务端字段写入 localStorage）
    const guidanceDone = hasStudiedCulturalValueAnnotationVideoGuidance();
    const quizDone = hasPassedCalibrationQuiz();
    const surveyDone = hasCompletedOnboardingSurveys();

    if (guidanceDone && quizDone && surveyDone) {
      // 三个阶段全部完成，直接进入正式标注首页。
      router.push({
        name: "CulturalValueAnnotationHome",
      });
    } else {
      // 任意一项未完成，进入 Onboarding 补全。
      // Onboarding.vue 的 onMounted 会根据三个阶段的完成状态
      // 自动决定从 Step 1 / Step 2 / Step 3 开始，无需额外传参。
      router.push({
        name: "CulturalValueAnnotationOnboarding",
      });
    }
  });
};

const handleAdminModeLogin = () => {
  return adminLogin({
    username: adminUsername.value.trim(),
    password: adminPassword.value,
    country: adminCountryValue.value,
  }).then((res) => {
    if (!res.data?.ok) {
      adminLoginErrorTip.value = res.data?.message || "Admin login failed";
      return;
    }

    adminLoginErrorTip.value = "";

    const adminDetail = {
      username: res.data.username || adminUsername.value.trim(),
      country: res.data.country || adminCountryValue.value,
      language: res.data.language || "",
      role: res.data.role || "admin",
      token: res.data.token || res.data.access_token || res.data.jwt || "",
    };

    saveCulturalValueAnnotationAdminDetail(adminDetail);
    syncLocaleFromUserDetail(adminDetail);

    return router.push("/CulturalValueAnnotation/admin/UserList");
  });
};

const nextStep = () => {
  if (isDisabled.value) {
    return;
  }

  annotatorLoginErrorTip.value = "";
  isLoading.value = true;
  handleAnnotatorLogin()
    .catch((err) => {
      console.log(err);
      annotatorLoginErrorTip.value = "Login failed";
    })
    .finally(() => {
      isLoading.value = false;
    });
};

const handleAdminLoginClick = () => {
  if (isDisabledAdmin.value) {
    return;
  }

  adminLoginErrorTip.value = "";
  isLoading.value = true;
  handleAdminModeLogin()
    .catch((err) => {
      console.log(err);
      adminLoginErrorTip.value = "Admin login failed";
    })
    .finally(() => {
      isLoading.value = false;
    });
};
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
  min-height: 620px;
  margin: 4em auto;
}
.user-detail {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  font-size: 1rem;
  width: 779px;

  background-color: #fff;
  box-shadow: 0px 32px 64px -12px rgba(25, 28, 30, 0.06);
  border-radius: 12px;
  padding: 40px 97px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.2;
  .mode-switch {
    position: absolute;
    left: 0;
    top: -4.1rem;
    display: inline-flex;
    gap: 0.25rem;
    padding: 0.5rem;
    background: #fff;
    border-radius: 999px;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);

    button {
      border: none;
      background: transparent;
      color: #1f2937;
      height: 2.8em;
      border-radius: 999px;
      cursor: pointer;
      font-size: 1rem;

      &.active {
        background: #0b70c3;
        color: #fff;
      }
    }
  }
  .login-error-tip {
    color: rgba(128, 0, 0, 1);
    font-size: 0.875rem;
    line-height: 1.4;
  }
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
        .el-input__wrapper {
          border-radius: 8px;
        }
      }
      :deep(.login-input-error .el-input__wrapper) {
        box-shadow: 0 0 0 2px rgba(128, 0, 0, 1) inset !important;
      }
      :deep(.login-input-error .el-input__wrapper.is-focus) {
        box-shadow: 0 0 0 2px rgba(128, 0, 0, 1) inset !important;
      }
      :deep(.el-select) {
        .el-select__wrapper {
          height: 57px;
          font-size: 18px;
          border-radius: 8px;
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
