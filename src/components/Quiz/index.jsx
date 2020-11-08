/** @jsxImportSource @emotion/core */
import Box from '../Box';
import ChoiceButton from '../ChoiceButton';

// assets
import adventureImageSrc from '../../assets/images/undraw_adventure_4hum 1.svg';

import {
  questionContainerStyle,
  titleStyle,
  choiceContainerStyle,
  questionStyle,
  headerIllustrationStyle,
  countryFlagStyle,
} from './styles';

function Quiz({ question, flag, choices }) {
  return (
    <div css={questionContainerStyle}>
      <h1 css={titleStyle}>Country Quiz</h1>
      <Box>
        <section>
          <img
            src={adventureImageSrc}
            alt="adventure illustration"
            css={headerIllustrationStyle}
          />
        </section>
        <section>
          {!!flag && (
            <img alt="country flag" src={flag} css={countryFlagStyle} />
          )}
          <p css={questionStyle}>{question}</p>
        </section>
        <section>
          {choices.map(({ label, answer }) => (
            <div css={choiceContainerStyle} key={`choice-${label}`}>
              <ChoiceButton label={label} answer={answer} />
            </div>
          ))}
        </section>
      </Box>
    </div>
  );
}

export default Quiz;
