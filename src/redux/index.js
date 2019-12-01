import {combineReducers} from 'redux';
import balanceReducer from './reducers/balance';
import sendCurrencyReducer from './reducers/send-currency';
import transactionsReducer from './reducers/transactions';

// Root Reducer
const rootReducer = combineReducers({
  balance: balanceReducer,
  sendCurrency: sendCurrencyReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
