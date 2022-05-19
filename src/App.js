import { useEffect, useState } from 'react';
import { getQuote } from './services/services';
import HomeQuote from './pages/HomeQuote/index';
import Button from './components/Button';

function App() {
  const [ quote, setQuote ] = useState()

  function getNewQuote() {
    const quoteAdvice = getQuote()
    quoteAdvice.then(response => setQuote(response.data))
  }

  useEffect(() => {
    getNewQuote()
  }, [quote]);

  return (
    <>
      <HomeQuote
        id={quote.slip.id}
        quote={quote.slip.advice} 
      />
      <Button
        handleClick={getNewQuote}
      />
    </>
  );
}

export default App;
