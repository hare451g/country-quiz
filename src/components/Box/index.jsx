/** @jsxImportSource @emotion/core */
import { boxStyle } from './style';

function Box({ children }) {
  return <div css={boxStyle}>{children}</div>;
}

export default Box;
