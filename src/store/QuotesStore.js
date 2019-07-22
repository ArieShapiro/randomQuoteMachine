import { observable, computed, action } from 'mobx';
// import axios from 'axios';
import quotes from '../quotes.js';

class QuotesStore {
    @observable quotes = quotes;
    @observable chosen = this.quotes[Math.floor(Math.random()*this.quotes.length)];

    @action chooseRandomQuote() {
       this.chosen =  this.quotes[Math.floor(Math.random()*this.quotes.length)];
       console.log('from store: ', this.chose)
    }

}

const store = window.store = new QuotesStore;

export default store;




