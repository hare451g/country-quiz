import produce from 'immer';

import actionCreator from '../../utils/actionCreator';
import questionUtils from './utils';

const CONTEXT = '@QUESTION';

export const QUESTION_STATUSES = {
  IDLE: `${CONTEXT}/IDLE`,
  PENDING: `${CONTEXT}/PENDING`,
  READY: `${CONTEXT}/READY`,
  SHOW_QUESTION: `${CONTEXT}/SHOW_QUESTION`,
  SHOW_ANSWER: `${CONTEXT}/SHOW_ANSWER`,
  DONE: `${CONTEXT}/DONE`,
};

export const initialStates = {
  current: {
    question: '',
    choices: '',
    flag: null,
    correctAnswer: null,
    userAnswer: null,
    isCorrect: null,
  },
  questions: [],
  status: QUESTION_STATUSES.IDLE,
  index: 0,
  points: 0,
  isNext: false,
};

const actionTypes = {
  LOAD_QUESTIONS: `${CONTEXT}/LOAD_QUESTIONS`,
  QUESTIONS_LOADED: `${CONTEXT}/QUESTIONS_LOADED`,
  QUESTIONS_LOAD_ERROR: `${CONTEXT}/QUESTIONS_LOAD_ERROR`,
  START_GAME: `${CONTEXT}/START_GAME`,
  LOAD_QUESTION: `${CONTEXT}/LOAD_QUESTION`,
  ANSWER: `${CONTEXT}/ANSWER`,
  NEXT: `${CONTEXT}/NEXT`,
  TRY_AGAIN: `${CONTEXT}/TRY_AGAIN`,
};

export const actions = {
  // manage question list
  onLoadQuestions: () => actionCreator(actionTypes.LOAD_QUESTIONS),
  onQuestionsLoaded: (questions) =>
    actionCreator(actionTypes.QUESTIONS_LOADED, { questions }),
  onLoadQuestionsError: (error) =>
    actionCreator(actionTypes.QUESTIONS_LOAD_ERROR, {
      error,
    }),

  // manage quiz
  startGame: () => actionCreator(actionTypes.START_GAME),
  loadQuestion: () => actionCreator(actionTypes.LOAD_QUESTION),
  answer: (userAnswer) => actionCreator(actionTypes.ANSWER, { userAnswer }),
  next: () => actionCreator(actionTypes.NEXT),
  tryAgain: () => actionCreator(actionTypes.TRY_AGAIN),
};

// side-effects actions
export const sideEffects = {
  // create 10 questions
  loadQuestions: async (dispatch, countryData = []) => {
    try {
      dispatch(actions.onLoadQuestions());

      if (!countryData) {
        throw new Error('Empty country data');
      }

      const questions = questionUtils.createQuestions(countryData, 10);

      dispatch(actions.onQuestionsLoaded(questions));
    } catch (error) {
      console.error(error);
      dispatch(actions.onLoadQuestionsError(error.message));
    }
  },
};

// state managements
const reducer = produce((draft, action) => {
  switch (action.type) {
    // manage questions
    case actionTypes.LOAD_QUESTIONS:
      draft.status = QUESTION_STATUSES.PENDING;
      break;

    case actionTypes.QUESTIONS_LOADED:
      draft.status = QUESTION_STATUSES.READY;
      draft.questions = action.payload.questions;
      break;

    case actionTypes.START_GAME:
      draft.status = QUESTION_STATUSES.SHOW_QUESTION;
      draft.current = draft.questions[draft.index];
      draft.isNext = true;
      break;

    // manage quiz
    case actionTypes.LOAD_QUESTION:
      draft.status = QUESTION_STATUSES.SHOW_QUESTION;
      draft.current = draft.questions[draft.index];
      draft.isNext = draft.index < draft.questions.length - 1;
      break;

    case actionTypes.ANSWER:
      const isCorrect =
        draft.current.correctAnswer === action.payload.userAnswer;

      draft.status = QUESTION_STATUSES.SHOW_ANSWER;
      draft.current.userAnswer = action.payload.userAnswer;
      draft.current.isCorrect = isCorrect;

      if (isCorrect) {
        draft.points += 1;
      }
      break;

    case actionTypes.NEXT:
      if (draft.isNext) {
        draft.index += 1;
        draft.status = QUESTION_STATUSES.SHOW_QUESTION;
      } else {
        draft.status = QUESTION_STATUSES.DONE;
        draft.isNext = false;
        draft.current = initialStates.current;
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
