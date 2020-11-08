/** @jsxImportSource @emotion/core */
import Box from '../Box';

import { layoutContainerStyle, titleStyle } from './styles';

function BoxLayout({ children }) {
  return (
    <div css={layoutContainerStyle}>
      <h1 css={titleStyle}>Country Quiz</h1>
      <Box>{children}</Box>
    </div>
  );
}

export default BoxLayout;
