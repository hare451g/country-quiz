/** @jsxImportSource @emotion/core */
import { useEffect, useReducer } from 'react';

import Question from '../Question';

import MainMenu from './MainMenu';
import gameReducer, {
  actions,
  initialState,
  SESSION_STATUS,
  thunks,
} from './states';

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
    case SESSION_STATUS.READY:
      return (
        <MainMenu onStartGameClick={() => dispatch(actions.onSessionStart())} />
      );
    case SESSION_STATUS.STARTED:
      const { choices, correctAnswer, flag, question } = state.current;
      return (
        <Question
          choices={choices}
          flag={flag}
          question={question}
          onAnswer={(userAnswer) =>
            dispatch(actions.onAnswer(userAnswer, correctAnswer))
          }
        />
      );
    case SESSION_STATUS.ERROR:
      return <div>{state.error}</div>;
    default:
      return <div>error occured: {state.status}</div>;
  }
}

export default Game;