/** @jsxImportSource @emotion/core */
import { Global } from '@emotion/core';
import Box from '../Box';
import ChoiceButton from '../ChoiceButton';
import { appStyles, globalStyles } from './style';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <main css={appStyles}>
        <h1>Country Quiz</h1>
        <Box>
          <div style={{ marginBottom: '20px' }}>
            <ChoiceButton label="A" answer="Vietnam" />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <ChoiceButton label="B" answer="Indonesia" status="CORRECT" />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <ChoiceButton label="C" answer="Malaysia" status="INCORRECT" />
          </div>
          <div>
            <ChoiceButton label="D" answer="Thailand" />
          </div>
        </Box>
      </main>
    </>
  );
}

export default App;
