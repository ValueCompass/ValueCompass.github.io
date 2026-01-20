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
      title: '步骤 1. 选择一个主题来创建包含文化价值观的查询。',
      note: '我们提供了一个两级主题分类。请先选择一级主题，然后选择二级主题。',
      selectionCriteria: '选择标准：',
      selectionCriteria1: '(1) 该主题在您的文化中具有文化相关性和重要性（人们关心这个主题）；',
      selectionCriteria2: '(2) 该主题可以引发涉及价值观、规范或原则的讨论；',
      selectionCriteria3: '(3) 您的文化在该主题下表现出与其他文化不同的特征。',
      customNote: '如果您认为没有任何二级主题符合您的要求，您可以自己创建一个新的二级主题。',
      topic: '主题：'
    },
    step2: {
      title: '步骤 2. 列出该主题在您文化中的关键价值原则。',
      note: '请列出3-5个与该主题相关的您文化中最重要的价值原则/社会规范/行为原则。在这个主题下，当冲突出现时，哪些价值观会被鼓励和优先考虑？哪些社会规范支配行为？哪些行为被认为是适当的和符合价值观的，而哪些被认为是不适当的应该避免？',
      noteExample: '请先写出最重要的原则，以便顺序反映重要性排名。避免用不同的词语重复相同的内容。',
      noteExampleText: '示例原则：',
      principle: '原则 {index}：'
    },
    step3: {
      title: '步骤 3. 选择一个任务类别来创建包含文化价值观的查询。',
      note: '我们提供了一个<b>两级任务分类</b>，旨在引出以价值观为导向的答案。请选择一个最能鼓励您所选主题下丰富文化价值观的任务类别。',
      task: '任务：',
      selectExisting: '选择现有',
      refine: '改进',
      createNew: '创建新'
    },
    step4: {
      title: '4. 选择或创建包含价值观的查询。',
      note: '基于您选择的主题和任务类别，我们提供了一系列候选问题。',
      questionListIncludes: '每个问题包括：',
      questionListIncludes1: '(1) <b>重要性得分</b>：该问题在文化中的重要性或价值显著性如何。',
      questionListIncludes2: '(2) <b>频率得分</b>：这个问题在日常生活或公共讨论中出现的频率如何。',
      selectCriteria: '选择标准：',
      selectCriteria1: '(1) 优先选择重要性和频率都较高的问题（约70%）。',
      selectCriteria2: '(2) 也选择一些重要性高或频率高的问题（约30%）；',
      selectCriteria3: '(3) 避免选择两者都低的问题。',
      refineNote: '如果没有合适的查询，请使用"改进"来修改候选问题，或使用"创建新"来编写您自己的问题。',
      question: '问题：'
    },
    step5: {
      title: '5. 注释答案以符合文化价值观。',
      note: '这是针对所选问题的草稿答案。我们突出显示了涉及价值观的文本片段，并确定了其背后的价值概念。',
      reviewInstructions: '请逐一查看每个突出显示的片段，并选择一个操作：',
      action1: '(1) <b>完全正确，保留</b>。文本片段及其价值概念准确且与您的文化相符。',
      action2: '(2) <b>编辑</b>。片段或价值概念部分正确，与您的文化相符，但需要更改。请编辑文本片段和/或价值概念，然后保存。',
      action3: '(3) <b>无关或不正确，删除</b>。片段和价值概念不准确，或不包含价值观，或与您的文化价值观不符。',
      action4: '(4) <b>添加新</b>。如果缺少重要的文化价值内容，请点击"添加新"来添加一个新的文本片段及其对应的价值概念。'
    },
    step6: {
      title: '步骤 6. 注释答案以符合您的个人价值观。',
      note: '重复步骤5中的相同注释过程，但现在使用您的<b>个人视角</b>。判断每个片段是否符合<b>您自己的个人价值观和偏好</b>，而不是是否符合您文化的主流规范。'
    },
    questionList: {
      number: '序号',
      timestamp: '时间戳'
    }
  }
}