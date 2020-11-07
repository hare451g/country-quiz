import Axios from 'axios';
import { produce } from 'immer';
import { createContext } from 'react';

// constants
const initialState = {
  error: null,
  data: [],
  progress: 0,
  status: 'IDLE',
};

const HOST_URL = 'https://restcountries.eu/rest/v2';

const TARGET_FIELDS = ['name', 'capital', 'flag'].join(';');

const CONTEXT = '@Service/RestCountry';

const actionTypes = {
  FETCH_START: `${CONTEXT}/FETCH_START`,
  FETCH_PROGRESS_UPDATE: `${CONTEXT}/FETCH_PROGRESS_UPDATE`,
  FETCH_FULLFILLED: `${CONTEXT}/FETCH_FULLFILLED`,
  FETCH_REJECTED: `${CONTEXT}/FETCH_REJECTED`,
};

// state managements
const reducer = produce((draft, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      draft.status = 'PENDING';
      draft.error = null;
      break;

    case actionTypes.FETCH_PROGRESS_UPDATE:
      draft.status = 'IDLE';
      draft.progress = action.payload.progress;
      break;

    case actionTypes.FETCH_FULLFILLED:
      draft.status = 'FULLFILLED';
      draft.error = null;
      draft.data = action.payload.data;
      draft.progress = initialState.progress;
      break;

    case actionTypes.FETCH_REJECTED:
      draft.status = 'REJECTED';
      draft.error = action.payload.error;
      draft.progress = initialState.progress;
      break;
    default:
      break;
  }
}, initialState);

const actionCreator = (type, payload) => ({ type, payload });

// actions
export const actions = {
  onFetchStart: () => actionCreator(actionTypes.FETCH_START),
  onfetchProgressUpdate: (progress) =>
    actionCreator(actionTypes.FETCH_PROGRESS_UPDATE, { progress }),
  onfetchFullfilled: (data) =>
    actionCreator(actionTypes.FETCH_FULLFILLED, { data }),
  onfetchRejected: (error) =>
    actionCreator(actionTypes.FETCH_REJECTED, { error }),
};

// thunks
export const thunks = {
  fetchAllCountry: async (dispatch) => {
    try {
      dispatch(actions.onFetchStart());

      // fetch from REST API
      const endpointURL = `${HOST_URL}/all`;

      const config = {
        params: {
          fields: TARGET_FIELDS,
        },
      };

      const response = await Axios.get(endpointURL, {
        ...config,
        onDownloadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percentage = Math.round((loaded / total) * 100);
          dispatch(actions.onfetchProgressUpdate(percentage));
        },
      });

      if (response && response.data) {
        dispatch(actions.onfetchFullfilled(response.data));
      }
    } catch (error) {
      dispatch(actions.onfetchRejected(error));
    }
  },
};

// context
export const RestCountryContext = createContext();

export default reducer;
