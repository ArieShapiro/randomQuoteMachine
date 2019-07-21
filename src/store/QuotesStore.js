import { observable, computed } from 'mobx';
// import axios from 'axios';
import quotes from '../quotes.js';

class QuotesStore {
    @observable quotes = quotes;

    @computed get shortQuotes() {
        return this.quotes.filter(quote => quote.split(' ').length <= 4)
    }
}

const store = window.store = new QuotesStore;

export default store;



// export default new QuotesStore;









/////////////////////////////////////////////
// let store = window.store = observable({
//     quotes: quotes
// });

// export default store;
////////////////////////////////////////////

