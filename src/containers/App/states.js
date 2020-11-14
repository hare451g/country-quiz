import Axios from 'axios';
import produce from 'immer';

// utils
import actionCreator from '../../utils/actionCreator';

// constants
const CONTEXT = '@App';

export const APP_STATUS = {
  IDLE: `${CONTEXT}/IDLE`,
  PENDING: `${CONTEXT}/STARTED`,
  READY: `${CONTEXT}/COMPLETE`,
  ERROR: `${CONTEXT}/ERROR`,
  STOPPED: `${CONTEXT}/STOPPED`,
};

export const initialState = {
  data: [],
  error: null,
  status: APP_STATUS.IDLE,
};

const actionTypes = {
  FETCH_COUNTRY: `${CONTEXT}/FETCH_COUNTRY`,
  FETCH_COUNTRY_SUCCESS: `${CONTEXT}/FETCH_COUNTRY_SUCCESS`,
  FETCH_COUNTRY_FAILED: `${CONTEXT}/FETCH_COUNTRY_FAILED`,
};

// actions
export const actions = {
  onFetchStarted: () => actionCreator(actionTypes.FETCH_COUNTRY),
  onFetchSuccess: (data) =>
    actionCreator(actionTypes.FETCH_COUNTRY_SUCCESS, { data }),
  onFetchFailed: () => actionCreator(actionTypes.FETCH_COUNTRY_FAILED),
};

// thunks
export const thunks = {
  // create 10 questions
  startApp: async (dispatch) => {
    try {
      const params = {
        fields: ['name', 'capital', 'flag'].join(';'),
      };

      const response = await Axios.get('https://restcountries.eu/rest/v2/all', {
        params,
      });

      dispatch(actions.onFetchSuccess(response.data));
    } catch (error) {
      console.error(error);
      dispatch(actions.onFetchFailed(error));
    }
  },
};

// state managements
const appReducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COUNTRY:
      draft.status = APP_STATUS.PENDING;
      break;

    case actionTypes.FETCH_COUNTRY_SUCCESS:
      draft.status = APP_STATUS.READY;
      draft.error = null;
      draft.data = action.payload.data;
      break;

    case actionTypes.FETCH_COUNTRY_FAILED:
      draft.status = APP_STATUS.ERROR;
      draft.error = action.payload.error;
      break;

    default:
      return draft;
  }
});

export default appReducer;
