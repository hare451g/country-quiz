/** @jsxImportSource @emotion/core */
import Button from '../Button';
import MaterialIcon from '../MaterialIcons';

import { answerStyle, buttonStyle } from './styles';
import { getIcon } from './utils';

function ChoiceButton({ label, answer, status = '', ...rest }) {
  const icon = getIcon(status);
  return (
    <Button css={buttonStyle} className={status.toLowerCase()} {...rest}>
      <span>{label}</span>
      <span css={answerStyle}>{answer}</span>
      <MaterialIcon iconName={icon} />
    </Button>
  );
}

export default ChoiceButton;
