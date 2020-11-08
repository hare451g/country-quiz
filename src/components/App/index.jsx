/** @jsxImportSource @emotion/core */
import { Global } from '@emotion/core';
import MainMenu from '../MainMenu';

import { appStyles, globalStyles } from './style';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <main css={appStyles}>
        <MainMenu />
      </main>
    </>
  );
}

export default App;
