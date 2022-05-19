import { getQuote } from './services/services';
import { useEffect } from 'react';

function App() {
  const quote = getQuote();

  useEffect(() => {
    console.log(quote)
  }, [quote]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
