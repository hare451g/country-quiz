import { css } from '@emotion/core';

const containerStyle = css`
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
  margin-top: 20px;
  width: 200px;
`;

export { containerStyle, resultTitleStyle, pointLabelStyle, tryAgainStyle };
