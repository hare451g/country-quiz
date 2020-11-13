/** @jsxImportSource @emotion/core */
import BoxLayout from '../../components/BoxLayout';
import Button from '../../components/Button';

import winnersImgSrc from '../../assets/images/undraw_winners_ao2o 2.svg';
import {
  containerStyle,
  pointLabelStyle,
  resultTitleStyle,
  tryAgainStyle,
} from './styles';

function Result({ points }) {
  return (
    <BoxLayout>
      <section css={containerStyle}>
        <img alt="winner's illustration" src={winnersImgSrc} />
        <h1 css={resultTitleStyle}>Results</h1>
        <p>
          You got <span css={pointLabelStyle}>{points}</span> correct answers
        </p>
        <Button css={tryAgainStyle}>Try Again</Button>
      </section>
    </BoxLayout>
  );
}

export default Result;
