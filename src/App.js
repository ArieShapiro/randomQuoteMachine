import React from 'react';
import { observer } from 'mobx-react';

@observer
class App extends React.Component {
  render() {

    console.log('from App component: ', this.props.store.quotes)
    const quotes = this.props.store.quotes;
    return (
      <div className="App">
        <p>All Quotes:</p>
        <h2>{quotes.map(quote => <p key={quote}>{quote}</p>)}</h2>
        <p>Short Quotes:</p>
        <h2>{this.props.store.shortQuotes.map(quote => <p key={quote}>{quote}</p>)}</h2>
      </div>
    );
  }
}

export default App;

