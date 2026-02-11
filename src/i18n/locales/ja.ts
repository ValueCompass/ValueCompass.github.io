export default {
  common: {
    submit: '送信',
    loading: '読み込み中...',
    success: '成功',
    error: 'エラー',
    cancel: 'キャンセル',
    edit: '編集',
    delete: '削除',
    add: '追加',
    new: '新規',
    previous: '前へ',
    next: '次へ',
    taskHistory: 'タスク履歴',
    pleaseFillUserInfo: '先にユーザー情報を入力してください',
    submissionSuccess: '送信が成功しました',
    submissionFailed: '送信に失敗しました',
    cueTextCannotBeEmpty: 'キューテキストは空にできません',
    annotationSubmittedSuccessfully: '注釈が正常に送信されました',
    annotationSubmissionFailed: '注釈の送信に失敗しました'
  },
  culturalValueAnnotation: {
    step1: {
      title: 'ステップ 1. 価値観を含んだ質問を作成するためのトピックを選択してください。',
      note: '2レベルのトピック分類を提供しています。まずレベル1のトピックを選択し、次にレベル2のトピックを選択してください。',
      selectionCriteria: '選択基準:',
      selectionCriteria1: '(1) このトピックは文化的に関連性があり、あなたの文化で重要です（人々はこのトピックを気にかけています）;',
      selectionCriteria2: '(2) このトピックは、価値観、規範、または原則を含む議論を引き起こす可能性があります;',
      selectionCriteria3: '(3) あなたの文化は、このトピックの下で他の文化とは異なる特徴を示します。',
      customNote: 'レベル2のトピックのどれもあなたの要件に合わないと思われる場合は、自分で新しいレベル2のトピックを作成することもできます。',
      topic: 'トピック:'
    },
    step2: {
      title: 'ステップ 2. このトピックに関する文化における重要な価値原則をリストアップしてください。',
      note: 'あなたの文化におけるこのトピックに関連する、最も重要な価値原則/社会規範/行動原則を3〜5つリストアップしてください。これらの原則は、このトピックに関する人々の態度、判断、行動を指導するのに役立ちます。価値原則は簡潔（20文字以内）で、原則的であるべきです。',
      noteExample: '最も重要な原則から先に記載し、順序が重要性のランキングを反映するようにしてください。例：家族の優先、勤勉、社会的調和など。',
      principle: '原則 {index}:'
    },
    step3: {
      title: 'ステップ 3. タスクカテゴリーを選択してください。',
      note: '選択したトピックと価値原則に基づいて、以下のタスクカテゴリーから1つを選択してください。タスクカテゴリーは、あなたが注釈する内容の方向性を決定します。',
      task: 'タスク:'
    },
    step4: {
      title: 'ステップ 4. 価値観を含んだ質問を選択または作成してください。',
      note: '選択したトピックとタスクカテゴリーに基づいて、候補質問のリストを提供します。',
      questionListIncludes: '各質問には以下が含まれます：',
      questionListIncludes1: '(1) <b>重要性スコア</b>：この質問が文化においてどれだけ重要または価値の高いものであるか。',
      questionListIncludes2: '(2) <b>頻度スコア</b>：この問題が日常生活や公の議論でどれだけ頻繁に出現するか。',
      selectCriteria: '選択基準：',
      selectCriteria1: '(1) 重要性と頻度の両方が高い質問を優先します (~70%)。',
      selectCriteria2: '(2) 重要性または頻度のどちらか一方が高い質問もいくつか選択します (~30%);',
      selectCriteria3: '(3) 両方とも低い質問は避けてください。',
      refineNote: '適切な質問がない場合は、「改良」を使用して候補質問を修正するか、「新規作成」を使用して自分で質問を作成してください。',
      question: '質問:',
      selectExisting: '既存のものを選択',
      refine: '改良',
      createNew: '新規作成',
      annotatedQuestions: '注釈付き質問：',
      newQuestions: '新しい質問',
      existingQuestions: '既存の質問',
      refinedQuestions: '改良された質問',
      importanceScore: '重要性スコア',
      frequencyScore: 'スコア'
    },
    step5: {
      title: 'ステップ 5. 文化的価値観に一致するように回答に注釈を付けてください。',
      note: 'これは、選択した質問に対するドラフト回答です。価値観を含むテキストフラグメントを強調表示し、その背後にある価値概念を特定しています。',
      reviewInstructions: '各強調表示されたフラグメントを1つずつ確認し、次のアクションのうち1つを選択してください：',
      action1: '(1) <b>完全に正しいので、保持</b>。テキストフラグメントとその価値概念は正確であり、あなたの文化とよく一致しています。',
      action2: '(2) <b>編集</b>。フラグメントまたは価値概念は部分的に正しく、あなたの文化と一致していますが、変更が必要です。テキストフラグメントおよび/または価値概念を編集し、保存してください。',
      action3: '(3) <b>関連性がないか不正確なので、削除</b>。フラグメントと価値概念は不正確であるか、価値が含まれていないか、あなたの文化的価値観と一致していません。',
      action4: '(4) <b>新規追加</b>。重要な文化的価値内容が欠けている場合は、「新規追加」をクリックして、新しいテキストフラグメントとそれに対応する価値概念を追加してください。',
      textFragment: 'テキストフラグメント',
      valueConcepts: '価値概念',
      keep: '完全に正しいので、保持',
      delete: '関連性がないか不正確なので、削除',
      edit: '編集',
      addNew: '新規追加',
      addNewCueConcept: '新しいキューと概念を追加',
      completelyCorrectKeep: '完全に正しいので、保持',
      irrelevantOrIncorrectDelete: '関連性がないか不正確なので、削除',
      editText: '編集',
      submitEdit: '編集を送信',
      cancelEdit: '編集をキャンセル',
      addNewText: '新規追加',
      previousCue: '前へ',
      nextCue: '次へ',
      submitHighlightAndConcepts: '送信'
    },
    step6: {
      title: 'ステップ 6. あなたの個人の価値観に一致するように回答に注釈を付けてください。',
      note: 'ステップ5と同じ注釈プロセスを繰り返してくださいが、今回は<b>個人の視点</b>を使用してください。各フラグメントが<b>あなた自身の個人の価値観や好み</b>と一致するかどうかを判断してください。文化の主流の規範と一致するかどうかではありません。'
    },
    questionList: {
      number: '番号',
      timestamp: 'タイムスタンプ'
    }
  }
}