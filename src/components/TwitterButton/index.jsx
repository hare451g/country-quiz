/** @jsxImportSource @emotion/core */
import twitterIconSrc from '../../assets/images/Twitter_Social_Icon_Circle_White.svg';
import Button from '../Button';

import { buttonStyle, linkStyle, twitterIconStyle } from './styles';
import { createShareableURL } from './utils';

function TwitterButton({ children, points, ...rest }) {
  const href = createShareableURL(points);
  return (
    <a css={linkStyle} href={href}>
      <Button css={buttonStyle} {...rest}>
        <img alt="twitter logo" css={twitterIconStyle} src={twitterIconSrc} />
        {children}
      </Button>
    </a>
  );
}

export default TwitterButton;
