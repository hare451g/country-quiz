import { useEffect, useReducer } from 'react';

import reducer, {
  RestCountryContext,
  thunks,
} from '../../store/RestCountry/reducer';

import './index.css';

function App() {
  const [state, dispatch] = useReducer(reducer);

  useEffect(() => {
    thunks.fetchAllCountry(dispatch);
  }, [dispatch]);

  return (
    <RestCountryContext.Provider value={{ state, dispatch }}>
      <h1>Country Quiz</h1>
    </RestCountryContext.Provider>
  );
}

export default App;
