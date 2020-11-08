/** @jsxImportSource @emotion/core */
import { iconStyle } from './styles';

function MaterialIcon({ iconName, size = 'md' }) {
  return (
    <i className={`material-icons ${size}`} css={iconStyle}>
      {iconName}
    </i>
  );
}

export default MaterialIcon;
