/** @jsxImportSource @emotion/core */
import { Global } from '@emotion/core';
import { useState } from 'react';
import axios from 'axios';

import BoxLayout from '../../components/BoxLayout';
import Game from '../Game';

import { appStyles, globalStyles } from './style';

function App() {
  const [appStatus, setAppStatus] = useState('idle');
  const [countryData, setCountryData] = useState([]);
  const [error, setError] = useState(null);

  useState(() => {
    if (appStatus === 'idle') {
      const params = {
        fields: ['name', 'capital', 'flag'].join(';'),
      };

      axios
        .get('https://restcountries.eu/rest/v2/all', { params })
        .then((response) => {
          setCountryData(response.data);
          setAppStatus('ready');
        })
        .catch((error) => {
          setError(error.message || 'unknown error');
          setAppStatus('error');
        });
    }
  }, [appStatus]);

  return (
    <>
      <Global styles={globalStyles} />
      <main css={appStyles}>
        <BoxLayout>
          {appStatus === 'ready' && <Game countryData={countryData} />}
        </BoxLayout>
      </main>
    </>
  );
}

export default App;
