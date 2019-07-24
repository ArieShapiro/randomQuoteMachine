import React from 'react';
import { observer, inject } from 'mobx-react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import './styles.css';
// import './sharingButtons.css';


@inject('store')
@observer
class App extends React.Component {
  onNewQuote = () => {
    this.props.store.chooseRandomQuoteAndColor();
  }
  render() {
    const quote = this.props.store.chosenQuote;
    const color = this.props.store.chosenColor;
    const twitterUrl = `https://twitter.com/intent/tweet?text=+${quote.text}+ - +${quote.author}`
    console.log(color)
    return (

      <div className="App" style={{ backgroundColor: color }}>
        <Grid container justify="center" >
          <Box textAlign="center" width="40%" align="center">
            <Card className="card">
              <h3 className="text" style={{ color: color }}>❝ {quote.text} ❞</h3>
              <p style={{ color: color }} className="author">- {quote.author} </p>
              <Button onClick={this.onNewQuote} variant="contained" className="btn" style={{ backgroundColor: color }}>New Quote</Button>

              <a href={twitterUrl} target="_blank">Share on Twitter</a>


            </Card>
          </Box>
        </Grid>
      </div>


    );
  }
}

export default App;


