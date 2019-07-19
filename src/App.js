import React from 'react';
import { observer } from 'mobx-react'; 

const App = observer(({store}) => {
  console.log('from App component: ', store.quotes)
  const quotes = store.quotes;
  return (
    <div className="App">
      <h1>{quotes.map(quote => <p key={quote}>{quote}</p>)}</h1>
    </div>
  );
})

export default App;

