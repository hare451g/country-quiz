import { css } from '@emotion/core';

const mainMenuContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
    padding: 16px 16px;
  }
`;

const heroIllustrationStyle = css`
  height: 120px;
  margin-bottom: 32px;
`;

const descriptionStyle = css`
  font-size: 18px;
  color: #1d355d;
  font-weight: 500;
  text-align: center;
`;

const headerIllustrationStyle = css`
  position: absolute;
  right: 0;
  top: 0;
  @media (max-width: 500px) {
    display: none;
  }
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
  min-height: 72px;

  @media (max-width: 500px) {
    min-height: 36px;
  }
`;

const resultContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #1d355d;
`;

const resultTitleStyle = css`
  font-size: 48px;
  margin-bottom: 0px;
`;

const pointLabelStyle = css`
  font-size: 36px;
  font-weight: 700;
  color: #6fcf97;
  margin-top: 0;
`;

const tryAgainStyle = css`
  margin-bottom: 14px;
`;

export {
  mainMenuContainerStyle,
  heroIllustrationStyle,
  descriptionStyle,
  headerIllustrationStyle,
  choiceContainerStyle,
  countryFlagStyle,
  questionStyle,
  resultContainerStyle,
  resultTitleStyle,
  pointLabelStyle,
  tryAgainStyle,
};
