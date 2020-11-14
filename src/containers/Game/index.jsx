/** @jsxImportSource @emotion/core */
import { useEffect, useReducer } from 'react';

// assets
import correctAudioSrc from '../../assets/sounds/correct.wav';
import incorrectAudioSrc from '../../assets/sounds/incorrect.wav';
import booAudioSrc from '../../assets/sounds/boo.wav';
import celebrateAudioSrc from '../../assets/sounds/celebrate.wav';

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

const correctSound = new Audio(correctAudioSrc);
const incorrectSound = new Audio(incorrectAudioSrc);
const booSound = new Audio(booAudioSrc);
const celebrateSound = new Audio(celebrateAudioSrc);

function Game({ countryData }) {
  const [state, dispatch] = useReducer(reducer, initialStates);
  const { status, index, points, current } = state;

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

  useEffect(() => {
    if (status === QUESTION_STATUSES.SHOW_ANSWER) {
      const { isCorrect } = current;
      if (isCorrect) {
        correctSound.play();
      } else {
        incorrectSound.play();
      }
    }

    if (status === QUESTION_STATUSES.DONE) {
      if (points > 5) {
        celebrateSound.play();
      } else {
        booSound.play();
      }
    }
  }, [status, points, current]);

  const handleAnswer = (userAnswer) => {
    dispatch(actions.answer(userAnswer));
  };

  switch (status) {
    case QUESTION_STATUSES.SHOW_QUESTION:
    case QUESTION_STATUSES.SHOW_ANSWER:
      const { question, choices, flag, correctAnswer, userAnswer } = current;

      return (
        <Question
          flag={flag}
          question={question}
          choices={choices}
          userAnswer={userAnswer}
          correctAnswer={correctAnswer}
          isAnswerVisible={status === QUESTION_STATUSES.SHOW_ANSWER}
          onSelectAnswer={handleAnswer}
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
