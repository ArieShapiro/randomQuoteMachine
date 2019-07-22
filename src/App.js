import React from 'react';
import { observer } from 'mobx-react';

@observer
class App extends React.Component {
  onNewQuote = () => {
    console.log('onNewQuote...');
    this.props.store.chooseRandomQuote();
  }
  render() {
    const quote = this.props.store.chosen;
    return (
      <div className="App">
        <h2>{quote}</h2>
        <button onClick={this.onNewQuote}>New Quote</button>
      </div>
    );
  }
}

export default App;

