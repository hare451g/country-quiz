/** @jsxImportSource @emotion/core */
import { useEffect, useReducer } from 'react';

// components
import Result from './Result';
import Question from './Question';
import MainMenu from './MainMenu';

import reducer, {
  actions,
  initialStates,
  QUESTION_STATUSES,
  sideEffects,
} from './states';

function Game({ countryData }) {
  const [state, dispatch] = useReducer(reducer, initialStates);
  const { status, index, points } = state;

  useEffect(() => {
    if (status === QUESTION_STATUSES.IDLE) {
      sideEffects.loadQuestions(dispatch, countryData);
    }
  }, [status, countryData]);

  useEffect(() => {
    if (index > 0) {
      dispatch(actions.loadQuestion());
    }
  }, [index]);

  switch (status) {
    case QUESTION_STATUSES.SHOW_QUESTION:
    case QUESTION_STATUSES.SHOW_ANSWER:
      const {
        question,
        choices,
        flag,
        correctAnswer,
        userAnswer,
      } = state.current;

      return (
        <Question
          flag={flag}
          question={question}
          choices={choices}
          userAnswer={userAnswer}
          correctAnswer={correctAnswer}
          isAnswerVisible={status === QUESTION_STATUSES.SHOW_ANSWER}
          onSelectAnswer={(userAnswer) => dispatch(actions.answer(userAnswer))}
          onNextClicked={() => dispatch(actions.next())}
        />
      );

    case QUESTION_STATUSES.DONE:
      return (
        <Result
          points={points}
          onTryAgainClick={() => dispatch(actions.tryAgain())}
        />
      );

    case QUESTION_STATUSES.IDLE:
    default:
      return (
        <MainMenu onStartGameClick={() => dispatch(actions.startGame())} />
      );
  }
}

export default Game;
