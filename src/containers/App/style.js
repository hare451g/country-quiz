import { css } from '@emotion/core';

import background from '../../assets/images/background.png';

const globalStyles = css`
  :root {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    height: 100vh;

    margin: 0;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const appStyles = css`
  width: 464px;
  margin: auto;
`;

export { appStyles, globalStyles };
