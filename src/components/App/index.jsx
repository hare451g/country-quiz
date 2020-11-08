/** @jsxImportSource @emotion/core */
import { Global } from '@emotion/core';

import Quiz from '../Quiz';

import { appStyles, globalStyles } from './style';

// Mock quiz
const mockQuizProps = {
  question: 'Kuala Lumpur is the capital of which country?',
  correctAnswer: 'Malaysia',
  choices: [
    { label: 'A', answer: 'Vietnam' },
    { label: 'B', answer: 'Indonesia' },
    { label: 'C', answer: 'Malaysia' },
    { label: 'D', answer: 'Thailand' },
  ],
};

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <main css={appStyles}>
        <Quiz
          choices={mockQuizProps.choices}
          correctAnswer={mockQuizProps.choices}
          question={mockQuizProps.question}
        />
      </main>
    </>
  );
}

export default App;
