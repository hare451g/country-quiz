/** @jsxImportSource @emotion/core */
import { Global } from '@emotion/core';
import BoxLayout from '../../components/BoxLayout';
import MainMenu from '../MainMenu';

import { appStyles, globalStyles } from './style';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <main css={appStyles}>
        <BoxLayout>
          <MainMenu />
        </BoxLayout>
      </main>
    </>
  );
}

export default App;
