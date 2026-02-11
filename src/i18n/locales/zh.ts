export default {
  common: {
    submit: '提交',
    loading: '加载中...',
    success: '成功',
    error: '错误',
    cancel: '取消',
    edit: '编辑',
    delete: '删除',
    add: '添加',
    new: '新建',
    previous: '上一个',
    next: '下一个',
    taskHistory: '任务历史',
    pleaseFillUserInfo: '请先填写用户信息',
    submissionSuccess: '提交成功',
    submissionFailed: '提交失败',
    cueTextCannotBeEmpty: '提示文本不能为空',
    annotationSubmittedSuccessfully: '标注提交成功',
    annotationSubmissionFailed: '标注提交失败'
  },
  culturalValueAnnotation: {
    step1: {
      title: '第一步、选择 Topic用于生成文化价值观问题',
      note: '我们提供一个两层的 Topic 分类体系。请先选择 一级 Topic再选择 二级 Topic。',
      selectionCriteria: '选择标准：',
      selectionCriteria1: '1.	该 Topic 在你的文化中具有相关性和重要性（人们确实关心这个话题）；',
      selectionCriteria2: '2.	该 Topic 能够自然引发涉及价值观、社会规范或行为原则的讨论；',
      selectionCriteria3: '3.	在该 Topic 下，你的文化具有区别与其他文化的特点。',
      customNote: '如果你认为现有的二级 Topic 都不符合你的需求，可以自行创建新的二级 Topic。',
      topic: '主题：'
    },
    step2: {
      title: '第二步、列出在你文化中该 Topic的关键价值原则',
      note: '请列出与你所选 Topic 相关的 <b>3–5 条</b>最重要的<b>价值原则 / 社会规范 / 行为准则</b>。即在这个Topic下，有哪些价值取向是被鼓励的、当发生冲突时会被优先考虑，有什么样的社会规范来约束行为；什么行为被认为是得体、符合价值观的，而什么行为又是不合适、应该避免的。',
      noteExample: '请将你认为<b>最重要的原则写在前面</b>，使顺序体现重要性排序；请避免使用不同表述重复描述同一原则。',
      noteExampleText: '示例原则：',
      principle: '原则 {index}：'
    },
    step3: {
      title: '第三步、选择 任务 类型以生成文化价值观问题',
      note: '我们提供一个<b>两层的 任务分类体系</b>，用于激发价值导向的回答。<br>请在你选择的 Topic 下，选取一个<b>最能促进丰富文化价值表达</b>的 Task 类型。',
      task: '任务：',
      selectExisting: '选择现有问题',
      refine: '修改',
      createNew: '创建新问题'
    },
    step4: {
      title: '第四步、选择或创建一个价值导向问题',
      note: '基于你选择的 <b>Topic 和 任务类型</b>，系统会提供一组候选问题。',
      questionListIncludes: '每个问题包含以下信息：',
      questionListIncludes1: '(1) <b>重要性评分</b>：该问题在对应文化中的重要程度或价值相关性；',
      questionListIncludes2: '(2) <b>频率得分</b>：该问题在日常生活或公共讨论中出现的频率。',
      selectCriteria: '<b>选择建议</b>：',
      selectCriteria1: '1.	大概率选择 <b>重要性高且频率高</b> 的问题（约 70%）；',
      selectCriteria2: '2.	同时部分概率选择 <b>重要性高或频率高</b> 的问题（约 30%）；',
      selectCriteria3: '3.	尽量避免选择 <b>重要性和频率都较低</b> 的问题。',
      refineNote: '如果没有合适的问题，请使用 <b>“修改”</b> 修改候选问题，或使用 <b>“创建新问题”</b> 自行创建问题。',
      question: '问题：',
      annotatedQuestions: '已标注问题：',
      newQuestions: '新问题',
      existingQuestions: '现有问题',
      refinedQuestions: '修改问题',
      importanceScore: '重要性评分',
      frequencyScore: '频率评分'
    },
    step5: {
      title: '第五步、从文化视角标注回答，使其与文化价值观对齐',
      note: '系统会生成一个针对所选问题的<b>初步回答</b>。平台会高亮其中涉及价值观的<b>文本片段</b>，并标注每个片段对应的<b>价值观要点</b>。',
      reviewInstructions: '请逐条检查每一个高亮片段，并选择以下操作之一：',
      action1: '(1) <b>完全正确，保留</b>。文本片段及其价值观要点准确，并且与对应文化的表达和价值取向高度一致。',
      action2: '(2) <b>编辑</b>。文本片段或价值观要点部分正确，部分与文化的价值取向基本一致，但需要调整改动。<br>请修改文本片段和/或价值观要点，然后保存。',
      action3: '(3) <b>无关或不正确，删除</b>。文本片段不体现价值观或文本片段和价值观要点不准确、与您的文化价值观不一致。',
      action4: '(4) <b>新增内容</b>。如果回答中缺少重要的文化价值内容，请点击 <b>“添加新内容”</b>，新增一个文本片段，并提供对应的价值观要点。'
    },
    step6: {
      title: '第六步、从个人视角标注回答，使其与个人价值观对齐',
      note: '重复第五步的标注流程，但请改为使用<b>个人视角</b>进行判断：判断每个文本片段是否符合你<b>个人的价值观和偏好</b>；而不是判断其是否符合你所属文化中的主流规范。'
    },
    questionList: {
      number: '序号',
      timestamp: '时间戳'
    }
  }
}