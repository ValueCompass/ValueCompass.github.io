export default {
  common: {
    submit: '제출',
    loading: '로딩 중...',
    success: '성공',
    error: '오류',
    cancel: '취소',
    edit: '편집',
    delete: '삭제',
    add: '추가',
    new: '새로운',
    previous: '이전',
    next: '다음',
    taskHistory: '작업 내역',
    pleaseFillUserInfo: '먼저 사용자 정보를 입력해 주세요',
    submissionSuccess: '제출에 성공했습니다',
    submissionFailed: '제출에 실패했습니다',
    cueTextCannotBeEmpty: '큐 텍스트는 비워둘 수 없습니다',
    annotationSubmittedSuccessfully: '주석이 성공적으로 제출되었습니다',
    annotationSubmissionFailed: '주석 제출에 실패했습니다'
  },
  culturalValueAnnotation: {
    step1: {
      title: '단계 1. 가치 관점이 담긴 질문을 생성하기 위한 주제를 선택하세요.',
      note: '2단계 주제 분류를 제공합니다. 먼저 레벨 1 주제를 선택한 후, 레벨 2 주제를 선택하세요.',
      selectionCriteria: '선택 기준:',
      selectionCriteria1: '(1) 이 주제는 문화적으로 관련이 있고 귀하의 문화에서 중요합니다(사람들이 이 주제를 중요시합니다);',
      selectionCriteria2: '(2) 이 주제는 가치관, 규범 또는 원칙과 관련된 논의를 유발할 수 있습니다;',
      selectionCriteria3: '(3) 귀하의 문화는 이 주제에서 다른 문화와 구별되는 특징을 보입니다.',
      customNote: '레벨 2 주제 중 어느 것도 귀하의 요구 사항에 맞지 않는다고 생각되는 경우 직접 새 레벨 2 주제를 생성할 수도 있습니다.',
      topic: '주제:'
    },
    step2: {
      title: '단계 2. 이 주제에 관한 문화에서 중요한 가치 원칙을 나열하세요.',
      note: '귀하의 문화에서 이 주제와 관련된 가장 중요한 가치 원칙/사회 규범/행동 원칙 3~5개를 나열하세요. 이러한 원칙은 이 주제와 관련하여 사람들의 태도, 판단 및 행동을 안내하는 데 도움이 됩니다. 가치 원칙은 간결하게(20자 이내) 작성하고 원칙적이어야 합니다.',
      noteExample: '가장 중요한 원칙부터 작성하여 순서가 중요성 순위를 반영하도록 하세요. 예: 가족 우선, 근면, 사회적 화합 등.',
      principle: '원칙 {index}:'
    },
    step3: {
      title: '단계 3. 작업 카테고리를 선택하세요.',
      note: '선택한 주제와 가치 원칙에 기반하여 아래 작업 카테고리 중 하나를 선택하세요. 작업 카테고리는 귀하가 주석을 달 내용의 방향을 결정합니다.',
      task: '작업:'
    },
    step4: {
      title: '단계 4. 가치 관점이 담긴 질문을 선택하거나 생성하세요.',
      note: '선택한 주제와 작업 카테고리에 기반하여 후보 질문 목록을 제공합니다.',
      questionListIncludes: '각 질문에는 다음이 포함됩니다:',
      questionListIncludes1: '(1) <b>중요성 점수</b>: 이 질문이 문화에서 얼마나 중요하거나 가치가 있는지.',
      questionListIncludes2: '(2) <b>빈도 점수</b>: 이 문제가 일상 생활이나 공공 논의에서 얼마나 자주 나타나는지.',
      selectCriteria: '선택 기준:',
      selectCriteria1: '(1) 중요성과 빈도가 모두 높은 질문을 우선시합니다 (~70%).',
      selectCriteria2: '(2) 중요성 또는 빈도 중 하나가 높은 질문도 일부 선택합니다 (~30%);',
      selectCriteria3: '(3) 둘 다 낮은 질문은 피하세요.',
      refineNote: '적절한 질문이 없으면 "개선"을 사용하여 후보 질문을 수정하거나 "새로 생성"을 사용하여 직접 질문을 작성하세요.',
      question: '질문:',
      selectExisting: '기존 선택',
      refine: '개선',
      createNew: '새로 생성',
      annotatedQuestions: '주석이 달린 질문:',
      newQuestions: '새로운 질문',
      existingQuestions: '기존 질문',
      refinedQuestions: '개선된 질문',
      importanceScore: '중요성 점수',
      frequencyScore: '점수'
    },
    step5: {
      title: '단계 5. 문화적 가치에 부합하도록 답변에 주석을 달아주세요.',
      note: '이것은 선택한 질문에 대한 초안 답변입니다. 가치를 포함하는 텍스트 조각을 강조 표시하고 그 뒤에 숨겨진 가치 개념을 식별합니다.',
      reviewInstructions: '각 강조 표시된 조각을 하나씩 검토하고 다음 작업 중 하나를 선택하세요:',
      action1: '(1) <b>완전히 정확하므로 유지</b>. 텍스트 조각과 그 가치 개념은 정확하며 귀하의 문화와 잘 일치합니다.',
      action2: '(2) <b>편집</b>. 조각이나 가치 개념이 부분적으로 정확하고 귀하의 문화와 일치하지만 변경이 필요합니다. 텍스트 조각 및/또는 가치 개념을 편집한 후 저장하세요.',
      action3: '(3) <b>관련이 없거나 정확하지 않으므로 삭제</b>. 조각과 가치 개념이 정확하지 않거나 가치가 포함되어 있지 않거나 귀하의 문화적 가치와 일치하지 않습니다.',
      action4: '(4) <b>새로 추가</b>. 중요한 문화적 가치 내용이 누락된 경우 "새로 추가"를 클릭하여 새 텍스트 조각과 해당 가치 개념을 추가하세요.',
      textFragment: '텍스트 조각',
      valueConcepts: '가치 개념',
      keep: '완전히 정확하므로 유지',
      delete: '관련이 없거나 정확하지 않으므로 삭제',
      edit: '편집',
      addNew: '새로 추가',
      addNewCueConcept: '새로운 단서와 개념 추가',
      completelyCorrectKeep: '완전히 정확하므로 유지',
      irrelevantOrIncorrectDelete: '관련이 없거나 정확하지 않으므로 삭제',
      editText: '편집',
      submitEdit: '편집 제출',
      cancelEdit: '편집 취소',
      addNewText: '새로 추가',
      previousCue: '이전',
      nextCue: '다음',
      submitHighlightAndConcepts: '제출'
    },
    step6: {
      title: '단계 6. 귀하의 개인 가치와 일치하도록 답변에 주석을 달아주세요.',
      note: '단계 5와 동일한 주석 프로세스를 반복하지만 이번에는 <b>개인적 관점</b>을 사용하세요. 각 조각이 <b>귀하 자신의 개인 가치와 선호도</b>와 일치하는지 여부를 판단하세요. 문화의 주류 규범과 일치하는지 여부가 아니라 개인 가치와의 일치성을 판단하세요.'
    },
    questionList: {
      number: '번호',
      timestamp: '타임스탬프'
    }
  }
}