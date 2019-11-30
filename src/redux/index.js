import {combineReducers} from 'redux';
import balanceReducer from './reducers/balance';
import sendCurrencyReducer from './reducers/send-currency';

// Root Reducer
const rootReducer = combineReducers({
  balance: balanceReducer,
  sendCurrency: sendCurrencyReducer,
});

export default rootReducer;
