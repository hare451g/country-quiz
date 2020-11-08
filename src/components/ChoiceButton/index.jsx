/** @jsxImportSource @emotion/core */
import { css } from '@emotion/core';

// style
const style = css`
  background-color: transparent;
  border: 2px solid rgba(169, 172, 221, 0.7);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: rgba(96, 102, 208, 0.7);

  cursor: pointer;

  transition: all 200ms;
  padding: 14px 18px;
  &:focus {
    outline: none;
  }

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

function ChoiceButton({ label, answer, status = '' }) {
  return (
    <button css={style} className={status.toLowerCase()}>
      <span>{label}</span> <span>{answer}</span> <span>X</span>
    </button>
  );
}

export default ChoiceButton;
