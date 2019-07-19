import {observable, autorun} from 'mobx';
import axios from 'axios';
import quotes from '../quotes.js';



let store = window.store = observable({
    quotes: quotes
});

export default store;

// autorun(() => {
//     console.log(store.quotes) 
// });