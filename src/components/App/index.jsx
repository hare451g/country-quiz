import ChoiceButton from '../ChoiceButton';

function App() {
  return (
    <>
      <h1>Country Quiz</h1>
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
    </>
  );
}

export default App;
