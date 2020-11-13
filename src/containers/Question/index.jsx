/** @jsxImportSource @emotion/core */
import ChoiceButton from '../../components/ChoiceButton';

// assets
import adventureImageSrc from '../../assets/images/undraw_adventure_4hum 1.svg';

import {
  choiceContainerStyle,
  questionStyle,
  headerIllustrationStyle,
  countryFlagStyle,
} from './styles';

function Question({ choices, flag, question, onAnswer }) {
  return (
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
              onClick={() => onAnswer(name)}
            />
          </div>
        ))}
      </section>
    </>
  );
}

export default Question;
