import { css } from '@emotion/core';

// style
const buttonStyle = css`
  background-color: transparent;
  border: 2px solid #1d355d;
  border-radius: 12px;

  width: 100%;
  padding: 14px 18px;

  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #1d355d;

  cursor: pointer;

  transition: all 0.6s;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #ffffff;
    background-color: #1d355d;
  }

  &.yellow {
    border-color: #f9ab26;
    background-color: #f9ab26;
    color: #fff;
  }

  &:disabled {
    color: #8a8a8a;
    border-color: #8a8a8a;
    background-color: #dedede;
    cursor: not-allowed;
  }
`;

export { buttonStyle };
