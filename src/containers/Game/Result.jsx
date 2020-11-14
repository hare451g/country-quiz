/** @jsxImportSource @emotion/core */
import Button from '../../components/Button';

import winnersImgSrc from '../../assets/images/undraw_winners_ao2o 2.svg';

import {
  resultContainerStyle,
  pointLabelStyle,
  resultTitleStyle,
  tryAgainStyle,
} from './styles';

const Result = ({ points, onTryAgainClick }) => (
  <section css={resultContainerStyle}>
    <img alt="winner's illustration" src={winnersImgSrc} />
    <h1 css={resultTitleStyle}>Results</h1>
    <p>
      You got <span css={pointLabelStyle}>{points}</span> correct answers
    </p>
    <Button css={tryAgainStyle} onClick={onTryAgainClick}>
      Try Again
    </Button>
  </section>
);

export default Result;
