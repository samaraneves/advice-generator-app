import { useEffect, useState } from 'react';
import { getQuote } from './services/services';
import HomeQuote from './pages/HomeQuote/index';

function App() {
  const [ quote, setQuote ] = useState()
  const quoteAdvice = getQuote()

  function getNewQuote() {
    quoteAdvice.then(response => setQuote(response.data))
  }

  useEffect(() => {
    getNewQuote()
  }, []);

  return (
    <>
      {
        quote &&
        <HomeQuote
          id={quote.slip.id}
          quote={quote.slip.advice} 
          handleClick={getNewQuote}
        />
      }
    </>
  );
}

export default App;
