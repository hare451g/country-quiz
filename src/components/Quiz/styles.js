import { css } from '@emotion/core';

const questionContainerStyle = css`
  position: relative;
  z-index: 1;
`;

const titleStyle = css`
  color: white;
  padding: 8px 16px;
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
`;

const headerIllustrationStyle = css`
  position: absolute;
  right: 0;
  top: 0;
`;

const choiceContainerStyle = css`
  margin-bottom: 18px;
`;

const countryFlagStyle = css`
  width: 84px;
  height: 54px;
`;

const questionStyle = css`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #2f527b;
`;

export {
  questionContainerStyle,
  titleStyle,
  headerIllustrationStyle,
  choiceContainerStyle,
  countryFlagStyle,
  questionStyle,
};
