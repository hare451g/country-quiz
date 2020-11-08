/** @jsxImportSource @emotion/core */
import Box from '../Box';
import ChoiceButton from '../ChoiceButton';

import { choiceContainerStyle, questionStyle } from './styles';

function Quiz({ question, choices }) {
  return (
    <Box>
      <section>
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
  );
}

export default Quiz;
