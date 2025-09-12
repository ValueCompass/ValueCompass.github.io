import { defineStore } from 'pinia'

// let question_info_data = null;
// let answer_info_data = null;

export const useCulturalAlignmentStore = defineStore('culturalAlignmentStore', {
  state: () => ({
    question_info_data: null,
    answer_info_data: null,

    isTopicSelectionPageUpdateData: true,
    isComparesionPageUpdateData: true,
    isArenaPageUpdateData: true,

    currentQuestion: null,
  }),
  actions: {
    setQuestion(payload) {
      this.currentQuestion = payload
    },
    clearQuestion() {
      this.currentQuestion = null
    }
  }
})