import { css } from '@emotion/core';

// style
const buttonStyle = css`
  border-color: rgb(169, 172, 221);

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: rgb(96, 102, 208);

  &:hover {
    border-color: #f9ab26;
    background-color: #f9ab26;
    color: #fff;
  }

  &.incorrect {
    border-color: #ea8282;
    background-color: #ea8282;
    color: #fff;
  }

  &.correct {
    border-color: #60bf88;
    background-color: #60bf88;
    color: #fff;
  }
`;

const answerStyle = css`
  width: 100%;
  text-align: start;
  padding-left: 16px;
`;

export { buttonStyle, answerStyle };
