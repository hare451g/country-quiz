import produce from 'immer';

// utils
import actionCreator from '../../utils/actionCreator';
import questionUtils from '../Question/utils';

// constants
const CONTEXT = '@Game';

export const SESSION_STATUS = {
  IDLE: `${CONTEXT}/IDLE`,
  READY: `${CONTEXT}/READY`,
  STARTED: `${CONTEXT}/STARTED`,
  COMPLETE: `${CONTEXT}/COMPLETE`,
  ERROR: `${CONTEXT}/ERROR`,
  STOPPED: `${CONTEXT}/STOPPED`,
};

export const initialState = {
  answers: [],
  questions: [],
  error: null,
  status: SESSION_STATUS.IDLE,
};

const actionTypes = {
  SESSION_READY: `${CONTEXT}/SESSION_READY`,
  SESSION_START: `${CONTEXT}/SESSION_START`,
  SESSION_ERROR: `${CONTEXT}/SESSION_ERROR`,
  SESSION_END: `${CONTEXT}/SESSION_END`,
};

// actions
export const actions = {
  onSessionReady: (questions) =>
    actionCreator(actionTypes.SESSION_READY, { questions }),
  onSessionError: (error = 'Unhandled error') =>
    actionCreator(actionTypes.SESSION_ERROR, { error }),
  onSessionEnd: () => actionCreator(actionTypes.SESSION_END),
};

// thunks
export const thunks = {
  // create 10 questions
  startSession: async (dispatch, countryData = []) => {
    try {
      if (!countryData) {
        throw new Error('Empty country data');
      }
      const questions = questionUtils.createQuestions(countryData, 10);
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
      draft.status = SESSION_STATUS.STARTED;
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

    default:
      return draft;
  }
});

export default reducer;
