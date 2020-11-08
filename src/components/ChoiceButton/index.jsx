/** @jsxImportSource @emotion/core */
import MaterialIcon from '../MaterialIcons';

import { answerStyle, buttonStyle } from './styles';
import { getIcon } from './utils';

function ChoiceButton({ label, answer, status = '' }) {
  const icon = getIcon(status);
  return (
    <button css={buttonStyle} className={status.toLowerCase()}>
      <span>{label}</span>
      <span css={answerStyle}>{answer}</span>
      <MaterialIcon iconName={icon} />
    </button>
  );
}

export default ChoiceButton;
