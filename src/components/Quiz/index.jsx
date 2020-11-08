/** @jsxImportSource @emotion/core */
import ChoiceButton from '../ChoiceButton';

// assets
import adventureImageSrc from '../../assets/images/undraw_adventure_4hum 1.svg';

import {
  choiceContainerStyle,
  questionStyle,
  headerIllustrationStyle,
  countryFlagStyle,
} from './styles';
import BoxLayout from '../BoxLayout';

function Quiz({ question, flag, choices }) {
  return (
    <BoxLayout>
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
        {choices.map(({ label, answer }) => (
          <div css={choiceContainerStyle} key={`choice-${label}`}>
            <ChoiceButton label={label} answer={answer} />
          </div>
        ))}
      </section>
    </BoxLayout>
  );
}

export default Quiz;
