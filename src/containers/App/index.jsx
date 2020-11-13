/** @jsxImportSource @emotion/core */
import { Global } from '@emotion/core';
import { useEffect, useReducer } from 'react';

import BoxLayout from '../../components/BoxLayout';
import Game from '../Game';

import { appStyles, globalStyles } from './style';
import appReducer, { APP_STATUS, initialState, thunks } from './states';

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { data, error, status } = state;

  useEffect(() => {
    if (status === APP_STATUS.IDLE) {
      thunks.startApp(dispatch);
    }
  }, [status]);

  return (
    <>
      <Global styles={globalStyles} />
      <main css={appStyles}>
        <BoxLayout>
          {status === APP_STATUS.IDLE && <p>Waiting for action</p>}
          {status === APP_STATUS.PENDING && <p>Getting ready . . .</p>}
          {status === APP_STATUS.READY && <Game countryData={data} />}
          {status === APP_STATUS.ERROR && <p>{error.message}</p>}
        </BoxLayout>
      </main>
    </>
  );
}

export default App;
