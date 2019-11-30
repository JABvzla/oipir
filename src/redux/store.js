import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '@redux';

export default initialState => {
  const middleware = applyMiddleware(thunk);

  return createStore(rootReducer, initialState, middleware);
};
