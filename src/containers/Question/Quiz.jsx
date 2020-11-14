/** @jsxImportSource @emotion/core */
// components
import ChoiceButton from '../../components/ChoiceButton';
import Button from '../../components/Button';

// assets
import adventureImageSrc from '../../assets/images/undraw_adventure_4hum 1.svg';

import {
  choiceContainerStyle,
  questionStyle,
  headerIllustrationStyle,
  countryFlagStyle,
} from './styles';

const getStatus = (answer, userAnswer, correctAnswer) => {
  if (answer === userAnswer && userAnswer !== correctAnswer) {
    return 'incorrect';
  }
  if (answer === correctAnswer) {
    return 'correct';
  }
  return '';
};

const Quiz = ({
  flag,
  question,
  choices,
  userAnswer,
  correctAnswer,
  isAnswerVisible,
  onSelectAnswer,
  onNextClicked,
}) => (
  <>
    <section>
      <img
        src={adventureImageSrc}
        alt="adventure illustration"
        css={headerIllustrationStyle}
      />
    </section>
    <section>
      {!!flag && <img alt="country flag" src={flag} css={countryFlagStyle} />}
      <p css={questionStyle}>{question}</p>
    </section>
    <section>
      {choices.map(({ label, name }) => (
        <div css={choiceContainerStyle} key={`choice-${label}`}>
          <ChoiceButton
            label={label}
            answer={name}
            onClick={() => onSelectAnswer(name)}
            status={
              (isAnswerVisible && getStatus(name, userAnswer, correctAnswer)) ||
              ''
            }
            disabled={isAnswerVisible}
          />
        </div>
      ))}
      {isAnswerVisible && (
        <Button className="yellow" onClick={onNextClicked}>
          Next{' '}
        </Button>
      )}
    </section>
  </>
);

export default Quiz;
