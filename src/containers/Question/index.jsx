/** @jsxImportSource @emotion/core */
import { useEffect, useReducer } from 'react';

// components
import Result from './Result';
import Quiz from './Quiz';

import reducer, { actions, initialStates, QUESTION_STATUSES } from './states';
import MainMenu from './MainMenu';

function Question({ questions }) {
  const [state, dispatch] = useReducer(reducer, initialStates);
  const { status, index, points } = state;

  useEffect(() => {
    dispatch(
      actions.loadQuestion(questions[index], index < questions.length - 1)
    );
  }, [index, questions]);

  switch (status) {
    case QUESTION_STATUSES.READY:
    case QUESTION_STATUSES.SHOW_ANSWER:
      const {
        question,
        choices,
        flag,
        correctAnswer,
        userAnswer,
      } = state.current;

      return (
        <Quiz
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
        <MainMenu
          onStartGameClick={() =>
            dispatch(
              actions.loadQuestion(
                questions[index],
                index < questions.length - 1
              )
            )
          }
        />
      );
  }
}

export default Question;
