/** @jsxImportSource @emotion/core */
import { useEffect, useReducer } from 'react';

import MainMenu from './MainMenu';
import gameReducer, { initialState, SESSION_STATUS, thunks } from './states';

function Game({ countryData }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    if (state.status === SESSION_STATUS.IDLE) {
      thunks.startSession(dispatch, countryData);
    }
  }, [countryData, state.status]);

  switch (state.status) {
    case SESSION_STATUS.IDLE:
      return <div>Waiting for country data</div>;
    case SESSION_STATUS.STARTED:
      return <MainMenu />;
    case SESSION_STATUS.ERROR:
      return <div>{state.error}</div>;
    default:
      return <div>error occured: {state.status}</div>;
  }
}

export default Game;
