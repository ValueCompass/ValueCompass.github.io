export default {
  common: {
    submit: 'Submit',
    loading: 'Loading...',
    success: 'Success',
    error: 'Error',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    add: 'Add',
    new: 'New',
    previous: 'Previous',
    next: 'Next',
    taskHistory: 'Task History',
    pleaseFillUserInfo: 'Please fill in user information first',
    submissionSuccess: 'Submission successful',
    submissionFailed: 'Submission failed',
    cueTextCannotBeEmpty: 'Cue text cannot be empty',
    annotationSubmittedSuccessfully: 'Annotation submitted successfully',
    annotationSubmissionFailed: 'Annotation submission failed'
  },
  culturalValueAnnotation: {
    step1: {
      title: 'Step 1. Choose a topic to create cultural value-laden query.',
      note: 'We provide a two-level topic taxonomy. Please select a Level-1 topic first then Level-2 topic.',
      selectionCriteria: 'Selection criteria:',
      selectionCriteria1: '(1) This topic is culturally relevant and important in your culture (People care about this topic);',
      selectionCriteria2: '(2) This topic can trigger discussions involved values, norms or principles;',
      selectionCriteria3: '(3) You culture shows features distinctive from other cultures under this topic.',
      customNote: 'If you think none of the level-2 topic fits your requirement, you may create a new Level-2 topic yourself.',
      topic: 'Topic:'
    },
    step2: {
      title: 'Step 2. List key value principles for this topic in your culture.',
      note: 'Please list 3-5 most important value principles / social norms / behavior principles related to this topic in your culture. Under this topic, what values are encouraged and will be prioritized when conflicts arise? What social norms govern behavior? Which actions are considered appropriate and aligned with values, while which are deemed inappropriate and should be avoided?',
      noteExample: 'Write the most important principles first, so that the order reflects the importance ranking. Avoid repeating the same item in different words.',
      noteExampleText: 'Example principle :',
      principle: 'Principle {index}:'
    },
    step3: {
      title: 'Step 3. Choose a task category to create cultural value-laden query.',
      note: 'We provide a <b>two-level task taxonomy</b> designed to elicit value-oriented answers. Please select a task category that can best encourage rich cultural values under your chosen topic.',
      task: 'Task:',
      selectExisting: 'Select Existing',
      refine: 'Refine',
      createNew: 'Create New'
    },
    step4: {
      title: '4. Select or create a value-laden query.',
      note: 'Based on your chosen topic and task category, we provide a list of candidate questions.',
      questionListIncludes: 'Each question includes:',
      questionListIncludes1: '(1) <b>importance score</b>: how important or value-salient the question is in the culture.',
      questionListIncludes2: '(2) <b>frequency score</b>: how often this issue appears in daily life or public discussion.',
      selectCriteria: 'Select Criteria:',
      selectCriteria1: '(1) Prioritize questions that are high in both importance and frequency (~70%).',
      selectCriteria2: '(2) Also select some questions that are high in importance OR high in frequency (~30%);',
      selectCriteria3: '(3) Avoid questions that are low in both.',
      refineNote: 'If there is no appropriate query, please use "Refine" to modify the candidate question, or "Create New" to write your own question.',
      question: 'Question:'
    },
    step5: {
      title: '5. Annotate the answer to align with the cultural values.',
      note: 'This is a draft answer toward the selected question. We highlight text fragments involving values and identify the value concept behind them.',
      reviewInstructions: 'Please review each highlighted fragment one by one, and chose one action:',
      action1: '(1) <b>Completely correct, keep</b>. The text fragment and its value concept are accurate and match your culture well.',
      action2: '(2) <b>Edit</b>. The fragment or value concept is partially correct, aligned with your culture, but needs changes. Please edit the text fragment and/or the value concept, then save.',
      action3: '(3) <b>Irrelevant or incorrect, delete</b>. The fragment and value concept are inaccurate or contains no values, or not aligned with your cultural values.',
      action4: '(4) <b>Add New</b>. If important cultural value content is missing, click "Add New" to add a new text fragment and its corresponding value concept.'
    },
    step6: {
      title: 'Step 6. Annotate the answer to align with your personal values.',
      note: 'Repeat the same annotation process as in Step 5, but now use your <b>personal perspective</b>. Judge whether each fragment aligns with <b>your own personal values and preferences</b>, instead of whether it aligns with your culture\'s mainstream norms.'
    },
    questionList: {
      number: 'Number',
      timestamp: 'Timestamp'
    }
  }
}