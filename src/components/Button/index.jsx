/** @jsxImportSource @emotion/core */
import { buttonStyle } from './styles';

function Button(props) {
  return (
    <button {...props} css={buttonStyle}>
      {props.children}
    </button>
  );
}

export default Button;
