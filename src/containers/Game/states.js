import produce from 'immer';

// utils
import actionCreator from '../../utils/actionCreator';
import randomizer from '../../utils/randomizer';

// constants
const CONTEXT = '@Game';

const MAX_QUESTIONS = 10;

export const SESSION_STATUS = {
  IDLE: `${CONTEXT}/IDLE`,
  READY: `${CONTEXT}/READY`,
  STARTED: `${CONTEXT}/STARTED`,
  COMPLETE: `${CONTEXT}/COMPLETE`,
  ERROR: `${CONTEXT}/ERROR`,
  STOPPED: `${CONTEXT}/STOPPED`,
};

export const ANSWER_STATUS = {
  NOT_ANSWERED: null,
  CORRECT: 'CORRECT',
  INCORRECT: 'INCORRECT',
};

export const initialState = {
  answers: [],
  questions: [],
  error: null,
  status: SESSION_STATUS.IDLE,
  current: {
    choices: [],
    question: '',
    correctAnswer: undefined,
    userAnswer: ANSWER_STATUS.NOT_ANSWERED,
    isCorrect: ANSWER_STATUS.NOT_ANSWERED, // 'CORRECT' | 'INCORRECT'
  },
};

const actionTypes = {
  CREATE_QUESTIONS: `${CONTEXT}/CREATE_QUESTIONS`,
  CREATE_QUESTIONS_DONE: `${CONTEXT}/CREATE_QUESTIONS_DONE`,

  ANSWER_QUESTION: `${CONTEXT}/ANSWER_QUESTION`,
  CHECK_ANSWER: `${CONTEXT}/CHECK_ANSWER`,
  NEXT_QUESTION: `${CONTEXT}/NEXT_QUESTION`,

  SESSION_READY: `${CONTEXT}/SESSION_READY`,
  SESSION_START: `${CONTEXT}/SESSION_START`,
  SESSION_ERROR: `${CONTEXT}/SESSION_ERROR`,
  SESSION_END: `${CONTEXT}/SESSION_END`,
};

// actions
export const actions = {
  onSessionReady: (questions) =>
    actionCreator(actionTypes.SESSION_READY, { questions }),
  onSessionStart: () => actionCreator(actionTypes.SESSION_START),
  onSessionError: (error = 'Unhandled error') =>
    actionCreator(actionTypes.SESSION_ERROR, { error }),
  onSessionEnd: () => actionCreator(actionTypes.SESSION_END),
  onAnswer: (userAnswer, correctAnswer) =>
    actionCreator(actionTypes.ANSWER_QUESTION, {
      userAnswer,
      isCorrect:
        userAnswer === correctAnswer
          ? ANSWER_STATUS.CORRECT
          : ANSWER_STATUS.INCORRECT,
    }),
  onCheckAnswer: () => actionCreator(),
  onNextQuestion: () => actionCreator(actionTypes.NEXT_QUESTION),
};

const createChoices = (data) =>
  ['A', 'B', 'C', 'D'].map((label) => ({
    ...data[randomizer(data.length - 1)],
    label,
  }));

const getQuestionedCountry = (data) => data[randomizer(data.length - 1)];

// thunks
export const thunks = {
  // create 10 questions
  startSession: async (dispatch, countryData = []) => {
    try {
      if (!countryData) {
        throw new Error('Empty country data');
      }

      const questions = [...Array(MAX_QUESTIONS)]
        // then create question
        .reduce((previous, _) => {
          const choices = createChoices(countryData);
          const questionedCountry = getQuestionedCountry(choices);

          return [
            ...previous,
            {
              correctAnswer: questionedCountry.name,
              userAnswer: ANSWER_STATUS.NOT_ANSWERED,
              question: `${questionedCountry.capital} is the capital of`,
              choices,
            },
          ];
        }, []);

      dispatch(actions.onSessionReady(questions));
    } catch (error) {
      console.error(error);
      dispatch(actions.onSessionError(error));
    }
  },
};

// state managements
const reducer = produce((draft, action) => {
  switch (action.type) {
    case actionTypes.SESSION_READY:
      draft.questions = action.payload.questions;
      draft.status = SESSION_STATUS.READY;
      break;

    case actionTypes.SESSION_START:
      draft.status = SESSION_STATUS.STARTED;
      draft.current = draft.questions[0];
      draft.answers = [];
      break;

    case actionTypes.SESSION_ERROR:
      draft.error = action.payload.error;
      draft.status = SESSION_STATUS.ERROR;
      break;

    case actionTypes.SESSION_END:
      draft.answers = initialState.answers;
      draft.questions = initialState.questions;
      draft.error = initialState.error;
      draft.status = initialState.status;
      draft.current = initialState.current;
      break;

    case actionTypes.ANSWER_QUESTION:
      draft.current.isCorrect = action.payload.isCorrect;
      draft.current.userAnswer = action.payload.userAnswer;
      draft.answers.push({
        ...draft.current,
        ...action.payload,
      });
      break;

    default:
      return draft;
  }
});

export default reducer;
