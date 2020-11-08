/** @jsxImportSource @emotion/core */
import Button from '../Button';
import MaterialIcon from '../MaterialIcons';

import { answerStyle, buttonStyle } from './styles';
import { getIcon } from './utils';

function ChoiceButton({ label, answer, status = '' }) {
  const icon = getIcon(status);
  return (
    <Button css={buttonStyle} className={status.toLowerCase()}>
      <span>{label}</span>
      <span css={answerStyle}>{answer}</span>
      <MaterialIcon iconName={icon} />
    </Button>
  );
}

export default ChoiceButton;
