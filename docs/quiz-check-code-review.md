# QuizCheck 组件代码审查报告

## 一、核心流程

```
Login.vue → localStorage (passed_calibration_quiz)
  ↓
Onboarding.vue → isNeedPassQuizCheck → 控制 quiz 步骤显隐
  ↓
QuizCheck.vue → 答题 → passedCalibrationQuiz() → localStorage
```

### 答题流程

```
选择答案 → Check Answer
  → 正确 → showCorrectFeedback → Next Quiz / Complete
  → 错误（首次） → Try Again（清空选择，解锁选项）
  → 错误（最终） → showIncorrectFeedback(fail) → Next Quiz / Complete
```

### 中国/非中国用户逻辑

| 逻辑 | 中国用户 | 非中国用户 |
|------|---------|-----------|
| quiz 步骤 | 显示 | 隐藏 |
| canEnterSurvey | 视频+quiz完成 | 视频完成即可 |
| 路由 step 2 | quiz | survey |
| 进度条 | 含 quiz | quiz 已通过则计入，否则不计 |

---

## 二、已修复的问题

### 1. quiz 弹窗被 alert 覆盖 (z-index)

**文件:** `QuizCheck.vue`
**修复:** 全局 CSS `.el-message-box__wrapper { z-index: 3000 !important; }`

### 2. 第二次错误显示 hint 而非 explanation

**文件:** `QuizCheck.vue` L377-381
**修复:** `isFinalAttempt` 为 true 时显示 `explanation_native`，否则显示 `hint_native`

### 3. 属性名拼写错误

**文件:** `AnnotationComponent.vue` L301
**修复:** `initialMismatchplanations` → `initialMismatchExplanations`

### 4. use_new_logic 初始化逻辑

**文件:** `AnnotationComponent.vue` L291-304
**修复:** 将 `highlightCuesStatus` 等初始化移到公共区域，不依赖 `use_new_logic`

### 5. originalResponse 赋值错误

**文件:** `AnnotationComponent.vue` L268, L376
**修复:** `newVal.response` → `newVal.originalResponse`

### 6. 编辑模式删除的 cue 不可见

**问题:** `processAnnotationData()` 保存的 response 已删除 cue 文本，再次编辑时 cue 在 response 中不存在

**修复方案:** 
- `processAnnotationData()` 返回 `originalResponse` 字段
- 保存到数据库时包含 `originalResponse`
- 编辑加载时，`use_new_logic` 情况下用 `originalResponse` 作为 response 基础

---

## 三、发现的待处理问题

### P0 - 高优先级

| # | 问题 | 文件 | 位置 |
|---|------|------|------|
| 1 | **轮询同步机制:** 300ms setInterval，组件销毁未清理 timer | QuizDialog.vue | L155-170 |
| 2 | **submitQuiz 无校验:** 缺少 allQuizAnswered 检查，按钮 disabled 可绕过 | QuizCheck.vue | L410 |

### P1 - 中优先级

| # | 问题 | 文件 | 位置 |
|---|------|------|------|
| 3 | **selectedAnswer 未保存:** 切换题目时选择丢失 | QuizCheck.vue | L335-342 |
| 4 | **attemptCounts 未持久化:** questionFeedbackMap 未保存尝试次数 | QuizCheck.vue | L335-342 |
| 5 | **tryAgain 清空选择:** 用户需重新选择答案 | QuizCheck.vue | L503-508 |
| 6 | **硬编码中文:** "正确"/"错误" 未使用 i18n | QuizCheck.vue | L71-72 |

### P2 - 低优先级

| # | 问题 | 文件 | 位置 |
|---|------|------|------|
| 7 | CSS 样式重复: `.is-complete` 定义了两次 | QuizCheck.vue | L620-622, L770-775 |
| 8 | 未使用的 `lastCheckedAnswerByQuestion` | QuizCheck.vue | - |

---

## 四、修复建议

### 立即修复 (P0)
1. 清理 QuizDialog 中重复声明的 syncTimer
2. 在 `submitQuiz()` 中添加 `allQuizAnswered` 校验

### 短期修复 (P1)
1. 在 `saveCurrentQuestionState` 中保存 `selectedAnswer` 到 `quizAnswers`
2. 在 `questionFeedbackMap` 中增加 `attemptCount`
3. 修复 `handleTryAgain` 清空选择的问题
4. 修复硬编码中文文案

### 中期优化 (P2)
1. 重构为事件驱动架构（替代轮询）
2. 移除未使用的 `lastCheckedAnswerByQuestion`
3. 清理重复 CSS 样式
