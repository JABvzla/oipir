import {combineReducers} from 'redux';
import balanceReducer from './reducers/balance';

// Root Reducer
const rootReducer = combineReducers({
  balance: balanceReducer,
});

export default rootReducer;
