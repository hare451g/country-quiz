import produce from 'immer';

import actionCreator from '../../utils/actionCreator';

const CONTEXT = '@QUESTION';

export const QUESTION_STATUSES = {
  IDLE: `${CONTEXT}/IDLE`,
  PENDING: `${CONTEXT}/PENDING`,
  READY: `${CONTEXT}/READY`,
  SHOW_ANSWER: `${CONTEXT}/SHOW_ANSWER`,
  DONE: `${CONTEXT}/DONE`,
};

export const initialStates = {
  question: '',
  choices: '',
  flag: null,
  correctAnswer: null,
  userAnswer: null,
  isCorrect: null,
  status: 'idle',
  index: 0,
  points: 0,
  isNext: false,
};

const actionTypes = {
  LOAD_QUESTION: `${CONTEXT}/LOAD_QUESTION`,
  ANSWER: `${CONTEXT}/ANSWER`,
  NEXT: `${CONTEXT}/NEXT`,
  TRY_AGAIN: `${CONTEXT}/TRY_AGAIN`,
};

export const actions = {
  loadQuestion: (question, isNext) =>
    actionCreator(actionTypes.LOAD_QUESTION, { ...question, isNext }),
  answer: (userAnswer) => actionCreator(actionTypes.ANSWER, { userAnswer }),
  next: () => actionCreator(actionTypes.NEXT),
  tryAgain: () => actionCreator(actionTypes.TRY_AGAIN),
};

// state managements
const reducer = produce((draft, action) => {
  switch (action.type) {
    case actionTypes.LOAD_QUESTION:
      draft.question = action.payload.question;
      draft.choices = action.payload.choices;
      draft.flag = action.payload.flag;
      draft.correctAnswer = action.payload.correctAnswer;
      draft.userAnswer = action.payload.userAnswer;
      draft.isCorrect = null;
      draft.status = QUESTION_STATUSES.READY;
      draft.isNext = action.payload.isNext;
      break;

    case actionTypes.ANSWER:
      draft.status = QUESTION_STATUSES.SHOW_ANSWER;
      draft.userAnswer = action.payload.userAnswer;
      draft.isCorrect = draft.correctAnswer === action.payload.userAnswer;

      if (draft.correctAnswer === action.payload.userAnswer) {
        draft.points += 1;
      }
      break;

    case actionTypes.NEXT:
      if (draft.isNext) {
        draft.index += 1;
      } else {
        draft.status = QUESTION_STATUSES.DONE;
        draft.question = initialStates.question;
        draft.choices = initialStates.choices;
        draft.flag = initialStates.flag;
        draft.correctAnswer = initialStates.correctAnswer;
        draft.userAnswer = initialStates.userAnswer;
        draft.isCorrect = initialStates.isCorrect;
        draft.isNext = initialStates.isNext;
      }
      break;

    case actionTypes.TRY_AGAIN:
      draft.status = QUESTION_STATUSES.IDLE;
      draft.index = initialStates.index;
      draft.points = initialStates.points;
      draft.isNext = initialStates.isNext;
      break;

    default:
      return draft;
  }
});

export default reducer;
