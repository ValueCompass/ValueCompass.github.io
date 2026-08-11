const DEFAULT_LOCALE = "en";

export const QUALITY_REVIEW_CRITERIA_CONFIG = {
  "stage1_review": [
    {
      "label": {
        "en": "Complete three questionnaires, and ensure the username entered in the questionnaires matches the system username.",
        "zh": "完成三份问卷，且问卷中填写的username跟系统一致",
        "ja": "3つのアンケートを完了し、アンケートに入力したユーザー名がシステム上のユーザー名と一致していること。",
        "ko": "세 가지 설문지를 모두 완료하고, 설문지에 입력한 사용자 이름이 시스템 사용자 이름과 일치해야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: All questionnaires are completed and the usernames match.",
            "zh": "通过：均填写，且username一致",
            "ja": "合格：すべて回答済みで、ユーザー名が一致している",
            "ko": "통과: 모든 설문을 작성했고 사용자 이름이 일치함"
          }
        },
        {
          "value": "needs_revision",
          "countsAsPass": false,
          "label": {
            "en": "Needs revision: All are completed, but the usernames do not match; add a note.",
            "zh": "待修改：均填写，但username不一致，需注明",
            "ja": "要修正：すべて回答済みだが、ユーザー名が一致していないため注記が必要",
            "ko": "수정 필요: 모두 작성했지만 사용자 이름이 일치하지 않아 설명이 필요함"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: At least one questionnaire is missing and must be completed.",
            "zh": "不通过：任意问卷缺失，需补充",
            "ja": "不合格：いずれかのアンケートが未回答のため補完が必要",
            "ko": "미통과: 설문 중 하나 이상이 누락되어 보완이 필요함"
          }
        }
      ]
    },
    {
      "label": {
        "en": "In the Cultural Values questionnaire, answer the “Personal Values Statement” and “Cultural Values Statement” from at least three perspectives.",
        "zh": "在文化价值观问卷中，“个人价值观陈述”，“文化价值观陈述”从至少3个角度进行回答。",
        "ja": "文化的価値観アンケートで、「個人の価値観に関する記述」と「文化的価値観に関する記述」に少なくとも3つの観点から回答していること。",
        "ko": "문화 가치관 설문지에서 “개인 가치관 진술”과 “문화 가치관 진술”에 대해 최소 세 가지 관점에서 답변해야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: Both statements are answered from at least three perspectives.",
            "zh": "通过：两项均>=3个角度",
            "ja": "合格：両方とも3つ以上の観点から回答している",
            "ko": "통과: 두 진술 모두 3개 이상의 관점에서 답변함"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: Either statement has fewer than three perspectives.",
            "zh": "不通过：任一项少于3个",
            "ja": "不合格：いずれかが3つ未満の観点である",
            "ko": "미통과: 진술 중 하나라도 관점이 3개 미만임"
          }
        }
      ]
    },
    {
      "label": {
        "en": "To ensure careful annotation, the annotator must pass the attention checks in the questionnaire: Schwartz Q6, Q19, Cultural Value Q7, and Q24. For example: “To confirm that you have read the questions carefully, please answer as follows.” Select “Does not apply” for both the personal perspective and cultural perspective.",
        "zh": "通过了问卷中的 Attention测试，Schwartz Q6, Q19, Cultural Value Q7, Q24，如：为了确认您认真阅读了题目，请按如下要求作答。个人视角和文化视角都选择“不符合”。",
        "ja": "慎重にアノテーションしていることを確認するため、アノテーターはアンケート内の注意確認設問（Schwartz Q6、Q19、Cultural Value Q7、Q24）に合格していること。例：「質問を注意深く読んだことを確認するため、次のように回答してください。」個人の視点と文化的視点の両方で「該当しない」を選択すること。",
        "ko": "신중하게 어노테이션했는지 확인하기 위해 어노테이터는 설문지의 주의력 확인 문항인 Schwartz Q6, Q19, Cultural Value Q7, Q24를 통과해야 합니다. 예: “질문을 주의 깊게 읽었는지 확인하기 위해 다음과 같이 답변해 주세요.” 개인 관점과 문화적 관점 모두에서 “해당하지 않음”을 선택해야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: All four attention checks are correct.",
            "zh": "通过：四道检查题全部满足",
            "ja": "合格：4つの注意確認問題をすべて満たしている",
            "ko": "통과: 네 개의 주의력 확인 문항을 모두 충족함"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: At least one check is incorrect; redo the corresponding questionnaire.",
            "zh": "不通过：任一题错误，要求重新填写相应问卷",
            "ja": "不合格：いずれかが誤っているため、該当アンケートの再回答が必要",
            "ko": "미통과: 하나 이상 틀려 해당 설문을 다시 작성해야 함"
          }
        }
      ]
    },
    {
      "label": {
        "en": "To ensure careful annotation, labels for opposite questions must show directional differences. Schwartz (Q15, Q4), (Q7, Q10), and Cultural Value (Q17, Q23). For example: “You believe that everyone in the world should be treated equally” and “It is reasonable for people of different social status to be treated differently.”",
        "zh": "在相反的测试问题上选项有方向差异。Schwartz (Q15,Q4), (Q7,Q10)；CulturalValue (Q17, Q23)。如：“你们相信，世界上的每一个人都应该被平等对待。”和“社会地位不同的人，受到不同对待是合理的。”",
        "ja": "慎重にアノテーションしていることを確認するため、反対の内容を持つ設問へのラベルは方向性に違いがあること。Schwartz（Q15、Q4）、（Q7、Q10）、Cultural Value（Q17、Q23）。例：「世界中のすべての人が平等に扱われるべきだと思う」と「社会的地位が異なる人々が異なる扱いを受けるのは合理的である」。",
        "ko": "신중하게 어노테이션했는지 확인하기 위해 반대되는 문항의 레이블은 방향성 차이를 보여야 합니다. Schwartz (Q15, Q4), (Q7, Q10), Cultural Value (Q17, Q23). 예: “세상의 모든 사람은 평등하게 대우받아야 한다고 생각한다”와 “사회적 지위가 다른 사람을 다르게 대우하는 것은 합리적이다.”"
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: All three pairs show reasonable directional differences.",
            "zh": "通过：三组方向全部合理",
            "ja": "合格：3組すべての方向性が妥当である",
            "ko": "통과: 세 쌍의 방향성이 모두 합리적임"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: At least one answer is unreasonable; redo the corresponding questionnaire.",
            "zh": "不通过：任一题不合理，要求重新填写相应问卷",
            "ja": "不合格：いずれかが不合理なため、該当アンケートの再回答が必要",
            "ko": "미통과: 하나 이상 불합리하여 해당 설문을 다시 작성해야 함"
          }
        }
      ]
    }
  ],
  "topic_review": [
    {
      "label": {
        "en": "Selected topic follows the prioritization criteria: i) receives widespread attention, ii) involves values/social norms/behavior principles and iii) is culturally distinctive.",
        "zh": "话题满足： i) 在文化中广受关注， ii) 能引发价值观、社会规范的讨论， iii) 目标文化表现出差异性",
        "ja": "選択したトピックが優先基準を満たしていること：i) 広く関心を集めている、ii) 価値観・社会規範・行動原則に関わる、iii) 文化的な独自性がある。",
        "ko": "선택한 주제가 다음 우선순위 기준을 충족해야 합니다: i) 폭넓은 관심을 받고, ii) 가치관·사회 규범·행동 원칙을 포함하며, iii) 문화적 차별성이 있어야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: The topic meets all three requirements.",
            "zh": "通过：话题满足三项要求",
            "ja": "合格：トピックが3つの要件をすべて満たしている",
            "ko": "통과: 주제가 세 가지 요건을 모두 충족함"
          }
        },
        {
          "value": "acceptable",
          "countsAsPass": true,
          "label": {
            "en": "Acceptable: One of the three conditions is relatively weak.",
            "zh": "可接受：三项条件中有一项较弱",
            "ja": "許容可能：3条件のうち1つがやや弱い",
            "ko": "수용 가능: 세 조건 중 하나가 다소 약함"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: The topic is unrelated to values, lacks real-world discussion, or does not reflect cultural differences.",
            "zh": "不通过：话题与价值观无关、缺乏现实讨论或无法体现文化差异",
            "ja": "不合格：価値観と無関係、現実的な議論がない、または文化差を反映できない",
            "ko": "미통과: 가치관과 무관하거나 현실적 논의가 부족하거나 문화적 차이를 보여주지 못함"
          }
        }
      ]
    }
  ],
  "principles_review": [
    {
      "label": {
        "en": "At least three items; each item is clearly expressed.",
        "zh": "不少于三条原则，每条内容表达清晰",
        "ja": "少なくとも3項目あり、各項目が明確に表現されていること。",
        "ko": "최소 세 항목이며, 각 항목이 명확하게 표현되어야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: Every principle has a clear meaning.",
            "zh": "通过：所有原则含义明确",
            "ja": "合格：すべての原則の意味が明確である",
            "ko": "통과: 모든 원칙의 의미가 명확함"
          }
        },
        {
          "value": "acceptable",
          "countsAsPass": true,
          "label": {
            "en": "Acceptable: Some wording is awkward but the meaning remains clear.",
            "zh": "可接受：个别原则表述不流畅，但不影响理解含义",
            "ja": "許容可能：一部の表現は不自然だが、意味の理解には影響しない",
            "ko": "수용 가능: 일부 표현이 매끄럽지 않지만 의미 이해에는 영향이 없음"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: At least one principle is unclear or cannot be understood precisely.",
            "zh": "不通过：存在表述不清、无法明确理解的准则",
            "ja": "不合格：表現が不明確で、正確に理解できない原則がある",
            "ko": "미통과: 표현이 불명확하여 정확히 이해하기 어려운 원칙이 있음"
          }
        }
      ]
    },
    {
      "label": {
        "en": "Follow the given templates or templates similar to that.",
        "zh": "遵循给定模板或相近的模板",
        "ja": "提示されたテンプレート、またはそれに類似したテンプレートに従っていること。",
        "ko": "제공된 템플릿 또는 이와 유사한 템플릿을 따라야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: Every principle follows the template or a similar format.",
            "zh": "通过：所有原则均符合模板或相近格式",
            "ja": "合格：すべての原則がテンプレートまたは類似形式に従っている",
            "ko": "통과: 모든 원칙이 템플릿 또는 유사한 형식을 따름"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: At least one principle uses a nonstandard format.",
            "zh": "不通过：存在表达格式不规范的原则",
            "ja": "不合格：形式が不適切な原則がある",
            "ko": "미통과: 표현 형식이 부적절한 원칙이 있음"
          }
        }
      ]
    },
    {
      "label": {
        "en": "The central idea of different principles should not be repetitive, and they should not copy the examples.",
        "zh": "多条行为准则之间，中心思想不重复，且不照抄示例",
        "ja": "異なる原則の中心的な考えが重複しておらず、例をそのままコピーしていないこと。",
        "ko": "서로 다른 원칙의 핵심 내용이 반복되지 않아야 하며, 예시를 그대로 복사해서는 안 됩니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: The principles do not repeat each other or copy examples.",
            "zh": "通过：准则之间不重复，无照抄",
            "ja": "合格：原則間に重複や例文のコピーがない",
            "ko": "통과: 원칙 간 중복이나 예시 복사가 없음"
          }
        },
        {
          "value": "acceptable",
          "countsAsPass": true,
          "label": {
            "en": "Acceptable: Some overlap exists, but each principle adds a distinct meaning.",
            "zh": "可接受：准则局部重叠，但各自有新增含义",
            "ja": "許容可能：一部重複するが、それぞれ新しい意味がある",
            "ko": "수용 가능: 일부 겹치지만 각각 새로운 의미가 있음"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: At least two principles have the same core meaning, or an example was copied.",
            "zh": "不通过：至少两条核心含义相同，或照抄示例",
            "ja": "不合格：少なくとも2つの中心的意味が同一、または例文をコピーしている",
            "ko": "미통과: 최소 두 원칙의 핵심 의미가 같거나 예시를 복사함"
          }
        }
      ]
    },
    {
      "label": {
        "en": "The value principles should fit the target culture, without obviously inappropriate principles.",
        "zh": "价值原则符合目标文化，没有明显不符的原则",
        "ja": "価値原則が対象文化に適合し、明らかに不適切な原則が含まれていないこと。",
        "ko": "가치 원칙이 대상 문화에 부합하고 명백히 부적절한 원칙이 없어야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: The principles reflect broadly recognized norms.",
            "zh": "通过：符合广泛认可的规范",
            "ja": "合格：広く認められた規範に適合している",
            "ko": "통과: 널리 인정되는 규범에 부합함"
          }
        },
        {
          "value": "acceptable",
          "countsAsPass": true,
          "label": {
            "en": "Acceptable: A non-mainstream but genuinely held group perspective.",
            "zh": "可接受：非主流，但属于真实存在的群体观点",
            "ja": "許容可能：主流ではないが、実在する集団の見解である",
            "ko": "수용 가능: 비주류이지만 실제 존재하는 집단의 관점임"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: Clearly inaccurate, stereotypical, or extremely marginal views.",
            "zh": "不通过：明显失真、刻板化、极少数的观点",
            "ja": "不合格：明らかに事実と異なる、ステレオタイプ、または極端に少数の見解である",
            "ko": "미통과: 명백히 부정확하거나 고정관념적이거나 극소수의 관점임"
          }
        }
      ]
    }
  ],
  "question_review": [
    {
      "label": {
        "en": "The score of three dimensions for the selected question are >= 4.",
        "zh": "所选问题三个维度的打分 >=4",
        "ja": "選択した質問の3つの次元のスコアがすべて4以上であること。",
        "ko": "선택한 질문의 세 가지 차원 점수가 모두 4 이상이어야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: Every dimension is scored at least 4.",
            "zh": "通过：所有维度 >= 4",
            "ja": "合格：すべての評価軸が4以上",
            "ko": "통과: 모든 차원의 점수가 4 이상임"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: At least one dimension is scored below 4.",
            "zh": "不通过：任一维度 < 4",
            "ja": "不合格：いずれかの評価軸が4未満",
            "ko": "미통과: 하나 이상의 차원이 4 미만임"
          }
        }
      ]
    },
    {
      "label": {
        "en": "Evaluating from the perspective of a cultural expert, the selected question scores >= 4 on value importance, cultural distinctiveness, and question real-life plausibility.",
        "zh": "你从文化专家的角度评估，所选问题在价值重要性、文化差异性、问题真实性上的打分 >= 4",
        "ja": "文化の専門家の視点から評価し、選択した質問の価値の重要性、文化的独自性、現実的妥当性の各スコアが4以上であること。",
        "ko": "문화 전문가의 관점에서 평가할 때, 선택한 질문의 가치 중요성, 문화적 차별성, 현실적 개연성 점수가 모두 4 이상이어야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: Expert scores are at least 4.",
            "zh": "通过：专家评分 >= 4",
            "ja": "合格：専門家評価が4以上",
            "ko": "통과: 전문가 점수가 4 이상임"
          }
        },
        {
          "value": "acceptable",
          "countsAsPass": true,
          "label": {
            "en": "Acceptable: Importance is at least 4 and the other two scores are at least 3.",
            "zh": "可接受：重要性 >= 4，其他两项 >= 3",
            "ja": "許容可能：重要性が4以上で、他の2項目が3以上",
            "ko": "수용 가능: 중요성은 4 이상이고 다른 두 항목은 3 이상임"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: The question clearly fails the requirements and must be reselected.",
            "zh": "不通过：问题明显不满足要求，需要重新选择",
            "ja": "不合格：要件を明らかに満たさず、再選択が必要",
            "ko": "미통과: 요건을 명백히 충족하지 않아 다시 선택해야 함"
          }
        }
      ]
    }
  ],
  "cultural_perspective_review": [
    {
      "label": {
        "en": "The selected values are indeed related to the question; no completely unrelated values are selected.",
        "zh": "选择的价值观确实与问题相关，没有选择完全无关的价值观",
        "ja": "選択した価値観が実際に質問と関連しており、まったく関連のない価値観が選択されていないこと。",
        "ko": "선택한 가치관이 질문과 실제로 관련되어 있으며, 전혀 관련 없는 가치관이 선택되지 않아야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: All selected values are directly relevant and affect judgment of the question.",
            "zh": "通过： 所选价值观均直接相关，会影响问题的判断",
            "ja": "合格：選択した価値観がすべて直接関連し、問題の判断に影響する",
            "ko": "통과: 선택한 가치관이 모두 직접 관련되며 문제 판단에 영향을 줌"
          }
        },
        {
          "value": "acceptable",
          "countsAsPass": true,
          "label": {
            "en": "Acceptable: Some values are weakly related but still reasonable.",
            "zh": "可接受： 存在与问题关联较弱、但仍合理的价值观",
            "ja": "許容可能：関連性は弱いが妥当な価値観が含まれる",
            "ko": "수용 가능: 관련성은 약하지만 여전히 합리적인 가치관이 있음"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: A clearly unrelated value was selected.",
            "zh": "不通过： 选择了与问题明显无关的价值观",
            "ja": "不合格：問題と明らかに無関係な価値観を選択している",
            "ko": "미통과: 문제와 명백히 무관한 가치관을 선택함"
          }
        }
      ]
    },
    {
      "label": {
        "en": "For an annotator, the value rankings under all questions should not all match the order of values in the list on the left. (If they all match, we suspect that the annotator only selected values and skipped the priority-ranking step.)",
        "zh": "对于一个标注者，不是所有问题下的价值观排序都与价值观在左侧列表中的顺序一致 【标注者级别，需最终综合判断】",
        "ja": "同一のアノテーターについて、すべての質問での価値観の順位が左側のリストの順序と完全に一致していないこと。（すべて一致する場合、価値観を選択しただけで優先順位付けを省略した可能性がある。）",
        "ko": "한 어노테이터의 경우 모든 질문에서 가치관 순위가 왼쪽 목록의 가치관 순서와 전부 일치해서는 안 됩니다. (모두 일치하면 어노테이터가 가치관만 선택하고 우선순위 지정 단계를 건너뛴 것으로 의심할 수 있습니다.)"
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: Consistency rate < 30%.",
            "zh": "通过： 一致率 < 30%",
            "ja": "合格：一致率30%未満",
            "ko": "통과: 일치율 30% 미만"
          }
        },
        {
          "value": "needs_review",
          "countsAsPass": false,
          "label": {
            "en": "Needs review: Consistency rate is 30%-60%; remind the annotator.",
            "zh": "需审查： 一致率 30% ～ 60%，提醒标注者",
            "ja": "要確認：一致率30%-60%。回答者に注意を促す",
            "ko": "검토 필요: 일치율 30%-60%, 어노테이터에게 알림"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: Consistency rate > 60%; review is also required.",
            "zh": "不通过： 一致率 > 60%，同样需审查",
            "ja": "不合格：一致率60%超。同様に確認が必要",
            "ko": "미통과: 일치율 60% 초과, 동일하게 검토 필요"
          }
        }
      ]
    },
    {
      "label": {
        "en": "The values reflected in the answer are consistent with the determined value priorities.",
        "zh": "问题回答所反映的价值观与确定的价值观优先级是一致的",
        "ja": "回答に反映された価値観が、決定した価値観の優先順位と一致していること。",
        "ko": "답변에 반영된 가치관이 정해진 가치관 우선순위와 일치해야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: High-priority values lead the answer while lower-priority values are also reflected.",
            "zh": "通过： 高优先级价值观主导回答，同时体现低优先级",
            "ja": "合格：高優先度の価値観が回答を主導し、低優先度も反映されている",
            "ko": "통과: 높은 우선순위 가치관이 답변을 주도하고 낮은 우선순위도 반영됨"
          }
        },
        {
          "value": "priority_mismatch",
          "countsAsPass": false,
          "label": {
            "en": "Fail: Priorities are reversed and lower-priority values lead the answer.",
            "zh": "不通过： 优先级错位，低优先级价值观主导回答",
            "ja": "不合格：優先順位が逆で、低優先度の価値観が回答を主導している",
            "ko": "미통과: 우선순위가 뒤바뀌어 낮은 우선순위 가치관이 답변을 주도함"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: The answer does not reflect the selected values or mainly reflects unrelated values.",
            "zh": "不通过： 回答未体现所选价值观，或主要体现了无关价值观",
            "ja": "不合格：選択した価値観が反映されていない、または無関係な価値観が中心である",
            "ko": "미통과: 선택한 가치관이 반영되지 않거나 무관한 가치관이 주로 반영됨"
          }
        }
      ]
    },
    {
      "label": {
        "en": "The answer includes (i) a direct response to the question and (ii) culturally appropriate norms and behavior practices.",
        "zh": "问题回答包括(i)对问题的直接回应；(ii)符合文化的行为准则和做法",
        "ja": "回答に、(i) 質問への直接的な回答と、(ii) 文化的に適切な規範および行動慣行が含まれていること。",
        "ko": "답변에는 (i) 질문에 대한 직접적인 응답과 (ii) 문화적으로 적절한 규범 및 행동 관행이 포함되어야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: The question is answered directly with specific reasons and behavioral principles.",
            "zh": "通过： 对问题直接回应，并给出具体理由和行为准则",
            "ja": "合格：問題に直接回答し、具体的な理由と行動原則を示している",
            "ko": "통과: 질문에 직접 답하고 구체적인 이유와 행동 원칙을 제시함"
          }
        },
        {
          "value": "acceptable",
          "countsAsPass": true,
          "label": {
            "en": "Acceptable: The structure or wording is disorganized, but both parts can still be inferred.",
            "zh": "可接受： 结构、表述较乱，但依然可推断出这两部分",
            "ja": "許容可能：構成や表現は乱れているが、両方の要素を推測できる",
            "ko": "수용 가능: 구조나 표현이 다소 혼란스럽지만 두 부분을 추론할 수 있음"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: A direct response, specific reasons, or practices are missing.",
            "zh": "不通过： 缺少直接回应或者具体理由、做法。",
            "ja": "不合格：直接回答、具体的理由、または実践が欠けている",
            "ko": "미통과: 직접 답변, 구체적 이유 또는 실천 내용이 부족함"
          }
        }
      ]
    },
    {
      "label": {
        "en": "List 1–3 inappropriate practices that should be avoided, in bullet points.",
        "zh": "分点列出1-3条不合适、应该避免的做法",
        "ja": "避けるべき不適切な慣行を1～3項目、箇条書きで示していること。",
        "ko": "피해야 할 부적절한 관행 1~3개를 글머리표로 나열해야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: Lists 1-3 specific and clear inappropriate practices.",
            "zh": "通过： 分点列出1-3条具体、明确的不合适做法",
            "ja": "合格：避けるべき具体的で明確な行動を1-3項目列挙している",
            "ko": "통과: 피해야 할 구체적이고 명확한 행동을 1-3개 항목으로 제시함"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: The content is unclear and the specific behavior to avoid cannot be identified.",
            "zh": "不通过： 内容不清晰，无法判断应避免的具体行为",
            "ja": "不合格：内容が不明確で、避けるべき具体的行動を判断できない",
            "ko": "미통과: 내용이 불명확하여 피해야 할 구체적 행동을 판단할 수 없음"
          }
        }
      ]
    },
    {
      "label": {
        "en": "Evaluating from the perspective of a cultural expert, both the answer and the inappropriate practices basically align with the culture’s mainstream values. [Note: Request revisions only when there is an obvious mismatch.]",
        "zh": "你从文化专家的角度来看，问题回答和不合适的做法都基本符合文化主流价值观 【注:只有明显不符合的要求修改】",
        "ja": "文化の専門家の視点から評価し、回答と不適切な慣行の両方がその文化の主流の価値観と概ね一致していること。［注：明らかな不一致がある場合のみ修正を求めること。］",
        "ko": "문화 전문가의 관점에서 평가할 때, 답변과 부적절한 관행이 모두 해당 문화의 주류 가치관과 대체로 일치해야 합니다. [참고: 명백한 불일치가 있을 때만 수정을 요청하세요.]"
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: Aligns with values broadly recognized today.",
            "zh": "通过： 符合当代广泛认可的价值观",
            "ja": "合格：現代に広く認められた価値観に適合している",
            "ko": "통과: 현대에 널리 인정되는 가치관에 부합함"
          }
        },
        {
          "value": "acceptable",
          "countsAsPass": true,
          "label": {
            "en": "Acceptable: A non-mainstream but genuinely held group perspective.",
            "zh": "可接受： 非主流，但属于真实存在的群体观点",
            "ja": "許容可能：主流ではないが、実在する集団の見解である",
            "ko": "수용 가능: 비주류이지만 실제 존재하는 집단의 관점임"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: Clearly inaccurate, stereotypical, or extremely marginal views.",
            "zh": "不通过： 明显失真、刻板化、极少数的观点",
            "ja": "不合格：明らかに事実と異なる、ステレオタイプ、または極端に少数の見解である",
            "ko": "미통과: 명백히 부정확하거나 고정관념적이거나 극소수의 관점임"
          }
        }
      ]
    }
  ],
  "personal_perspective_review": [
    {
      "label": {
        "en": "The selected values are indeed related to the question; no completely unrelated values are selected.",
        "zh": "选择的价值观确实与问题相关，没有选择完全无关的价值观",
        "ja": "選択した価値観が実際に質問と関連しており、まったく関連のない価値観が選択されていないこと。",
        "ko": "선택한 가치관이 질문과 실제로 관련되어 있으며, 전혀 관련 없는 가치관이 선택되지 않아야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: All selected values are directly relevant and affect judgment of the question.",
            "zh": "通过： 所选价值观均直接相关，会影响问题的判断",
            "ja": "合格：選択した価値観がすべて直接関連し、問題の判断に影響する",
            "ko": "통과: 선택한 가치관이 모두 직접 관련되며 문제 판단에 영향을 줌"
          }
        },
        {
          "value": "acceptable",
          "countsAsPass": true,
          "label": {
            "en": "Acceptable: Some values are weakly related but still reasonable.",
            "zh": "可接受： 存在与问题关联较弱、但仍合理的价值观",
            "ja": "許容可能：関連性は弱いが妥当な価値観が含まれる",
            "ko": "수용 가능: 관련성은 약하지만 여전히 합리적인 가치관이 있음"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: A clearly unrelated value was selected.",
            "zh": "不通过： 选择了与问题明显无关的价值观",
            "ja": "不合格：問題と明らかに無関係な価値観を選択している",
            "ko": "미통과: 문제와 명백히 무관한 가치관을 선택함"
          }
        }
      ]
    },
    {
      "label": {
        "en": "For an annotator, the value rankings under all questions should not all match the order of values in the list on the left. (If they all match, we suspect that the annotator only selected values and skipped the priority-ranking step.)",
        "zh": "对于一个标注者，不是所有问题下的价值观排序都与价值观在左侧列表中的顺序一致 【标注者级别，需最终综合判断】",
        "ja": "同一のアノテーターについて、すべての質問での価値観の順位が左側のリストの順序と完全に一致していないこと。（すべて一致する場合、価値観を選択しただけで優先順位付けを省略した可能性がある。）",
        "ko": "한 어노테이터의 경우 모든 질문에서 가치관 순위가 왼쪽 목록의 가치관 순서와 전부 일치해서는 안 됩니다. (모두 일치하면 어노테이터가 가치관만 선택하고 우선순위 지정 단계를 건너뛴 것으로 의심할 수 있습니다.)"
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: Consistency rate < 30%.",
            "zh": "通过： 一致率 < 30%",
            "ja": "合格：一致率30%未満",
            "ko": "통과: 일치율 30% 미만"
          }
        },
        {
          "value": "needs_review",
          "countsAsPass": false,
          "label": {
            "en": "Needs review: Consistency rate is 30%-60%; remind the annotator.",
            "zh": "需审查： 一致率 30% ～ 60%，提醒标注者",
            "ja": "要確認：一致率30%-60%。回答者に注意を促す",
            "ko": "검토 필요: 일치율 30%-60%, 어노테이터에게 알림"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: Consistency rate > 60%; review is also required.",
            "zh": "不通过： 一致率 > 60%，同样需审查",
            "ja": "不合格：一致率60%超。同様に確認が必要",
            "ko": "미통과: 일치율 60% 초과, 동일하게 검토 필요"
          }
        }
      ]
    },
    {
      "label": {
        "en": "The values reflected in the answer are consistent with the determined value priorities.",
        "zh": "问题回答所反映的价值观与确定的价值观优先级是一致的",
        "ja": "回答に反映された価値観が、決定した価値観の優先順位と一致していること。",
        "ko": "답변에 반영된 가치관이 정해진 가치관 우선순위와 일치해야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: High-priority values lead the answer while lower-priority values are also reflected.",
            "zh": "通过： 高优先级价值观主导回答，同时体现低优先级",
            "ja": "合格：高優先度の価値観が回答を主導し、低優先度も反映されている",
            "ko": "통과: 높은 우선순위 가치관이 답변을 주도하고 낮은 우선순위도 반영됨"
          }
        },
        {
          "value": "priority_mismatch",
          "countsAsPass": false,
          "label": {
            "en": "Fail: Priorities are reversed and lower-priority values lead the answer.",
            "zh": "不通过： 优先级错位，低优先级价值观主导回答",
            "ja": "不合格：優先順位が逆で、低優先度の価値観が回答を主導している",
            "ko": "미통과: 우선순위가 뒤바뀌어 낮은 우선순위 가치관이 답변을 주도함"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: The answer does not reflect the selected values or mainly reflects unrelated values.",
            "zh": "不通过： 回答未体现所选价值观，或主要体现了无关价值观",
            "ja": "不合格：選択した価値観が反映されていない、または無関係な価値観が中心である",
            "ko": "미통과: 선택한 가치관이 반영되지 않거나 무관한 가치관이 주로 반영됨"
          }
        }
      ]
    },
    {
      "label": {
        "en": "The answer includes (i) a direct response to the question and (ii) culturally appropriate norms and behavior practices.",
        "zh": "问题回答包括(i)对问题的直接回应；(ii)符合文化的行为准则和做法",
        "ja": "回答に、(i) 質問への直接的な回答と、(ii) 文化的に適切な規範および行動慣行が含まれていること。",
        "ko": "답변에는 (i) 질문에 대한 직접적인 응답과 (ii) 문화적으로 적절한 규범 및 행동 관행이 포함되어야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: The question is answered directly with specific reasons and behavioral principles.",
            "zh": "通过： 对问题直接回应，并给出具体理由和行为准则",
            "ja": "合格：問題に直接回答し、具体的な理由と行動原則を示している",
            "ko": "통과: 질문에 직접 답하고 구체적인 이유와 행동 원칙을 제시함"
          }
        },
        {
          "value": "acceptable",
          "countsAsPass": true,
          "label": {
            "en": "Acceptable: The structure or wording is disorganized, but both parts can still be inferred.",
            "zh": "可接受： 结构、表述较乱，但依然可推断出这两部分",
            "ja": "許容可能：構成や表現は乱れているが、両方の要素を推測できる",
            "ko": "수용 가능: 구조나 표현이 다소 혼란스럽지만 두 부분을 추론할 수 있음"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: A direct response, specific reasons, or practices are missing.",
            "zh": "不通过： 缺少直接回应或者具体理由、做法。",
            "ja": "不合格：直接回答、具体的理由、または実践が欠けている",
            "ko": "미통과: 직접 답변, 구체적 이유 또는 실천 내용이 부족함"
          }
        }
      ]
    },
    {
      "label": {
        "en": "List 1–3 inappropriate practices that should be avoided, in bullet points.",
        "zh": "分点列出1-3条不合适、应该避免的做法",
        "ja": "避けるべき不適切な慣行を1～3項目、箇条書きで示していること。",
        "ko": "피해야 할 부적절한 관행 1~3개를 글머리표로 나열해야 합니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: Lists 1-3 specific and clear inappropriate practices.",
            "zh": "通过： 分点列出1-3条具体、明确的不合适做法",
            "ja": "合格：避けるべき具体的で明確な行動を1-3項目列挙している",
            "ko": "통과: 피해야 할 구체적이고 명확한 행동을 1-3개 항목으로 제시함"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: The content is unclear and the specific behavior to avoid cannot be identified.",
            "zh": "不通过： 内容不清晰，无法判断应避免的具体行为",
            "ja": "不合格：内容が不明確で、避けるべき具体的行動を判断できない",
            "ko": "미통과: 내용이 불명확하여 피해야 할 구체적 행동을 판단할 수 없음"
          }
        }
      ]
    },
    {
      "label": {
        "en": "The cultural-perspective and personal-perspective answers must not be completely identical.",
        "zh": "个人与文化视角高度一致的样本不超过80% 【标注者级别，需最终综合判断】",
        "ja": "文化的視点と個人的視点の回答が完全に同一でないこと。",
        "ko": "문화적 관점과 개인적 관점의 답변이 완전히 동일해서는 안 됩니다."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: Consistency rate < 60%.",
            "zh": "通过： 一致率 < 60%",
            "ja": "合格：一致率60%未満",
            "ko": "통과: 일치율 60% 미만"
          }
        },
        {
          "value": "needs_review",
          "countsAsPass": false,
          "label": {
            "en": "Needs review: Consistency rate is 60%-80%.",
            "zh": "需审查： 一致率 60% ～ 80%",
            "ja": "要確認：一致率60%-80%",
            "ko": "검토 필요: 일치율 60%-80%"
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: Consistency rate > 80%.",
            "zh": "不通过： 一致率 > 80%",
            "ja": "不合格：一致率80%超",
            "ko": "미통과: 일치율 80% 초과"
          }
        }
      ]
    }
  ],
  "overall_quality_review": [
    {
      "label": {
        "en": "Samples annotated in under 8 minutes must not exceed 50% (annotator-level; final judgment required).",
        "zh": "标注时长小于8min的样本不超过50% 【标注者级别，需最终综合判断】",
        "ja": "8分未満でアノテーションされたサンプルが50%を超えないこと（アノテーター単位、最終的な総合判断が必要）。",
        "ko": "8분 미만으로 주석 처리된 샘플이 50%를 초과하지 않아야 합니다(주석자 단위, 최종 종합 판단 필요)."
      },
      "options": [
        {
          "value": "pass",
          "countsAsPass": true,
          "label": {
            "en": "Pass: Samples completed in under 8 minutes account for no more than 50%.",
            "zh": "通过：时长 < 8分钟的样本占比≤50%",
            "ja": "合格：8分未満のサンプルの割合が50%以下。",
            "ko": "통과: 8분 미만 샘플 비율이 50% 이하입니다."
          }
        },
        {
          "value": "fail",
          "countsAsPass": false,
          "label": {
            "en": "Fail: Samples completed in under 8 minutes exceed 50%; revision or re-annotation is required.",
            "zh": "不通过：时长 < 8分钟的样本占比 > 50%，需修改或重新标注",
            "ja": "不合格：8分未満のサンプルが50%を超えているため、修正または再アノテーションが必要。",
            "ko": "미통과: 8분 미만 샘플 비율이 50%를 초과하여 수정 또는 재주석이 필요합니다."
          }
        }
      ]
    }
  ]
};

const getLocalizedText = (translations, locale) =>
  translations?.[locale] || translations?.[DEFAULT_LOCALE] || "";

export const localizeQualityReviewCriteria = (locale = DEFAULT_LOCALE) => Object.fromEntries(
  Object.entries(QUALITY_REVIEW_CRITERIA_CONFIG).map(([reviewKey, criteria]) => [
    reviewKey,
    criteria.map((criterion) => ({
      ...criterion,
      label: getLocalizedText(criterion.label, locale),
      options: criterion.options.map((reviewOption) => ({
        ...reviewOption,
        label: getLocalizedText(reviewOption.label, locale),
      })),
    })),
  ]),
);

export const normalizeQualityReviewSelection = (criterion, value) => {
  if (criterion.options.some((reviewOption) => reviewOption.value === value)) {
    return value;
  }

  if (value === true) {
    return criterion.options.find((reviewOption) => reviewOption.countsAsPass)?.value ?? null;
  }

  if (value === false) {
    return [...criterion.options]
      .reverse()
      .find((reviewOption) => !reviewOption.countsAsPass)?.value ?? null;
  }

  return null;
};

export const isQualityReviewSelectionComplete = (criterion, value) =>
  criterion.options.some((reviewOption) => reviewOption.value === value);

export const isQualityReviewSelectionPassing = (criterion, value) =>
  criterion.options.some(
    (reviewOption) => reviewOption.value === value && reviewOption.countsAsPass,
  );
