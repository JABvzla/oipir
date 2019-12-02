import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import TransactionActions from './transactions';
import MockAsyncStorage from 'mock-async-storage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockAsnyc = new MockAsyncStorage();
jest.mock('@react-native-community/async-storage', () => mockAsnyc);

describe('TRANSACTIONS_GET_START', () => {
  it('When has error should respond TRANSACTIONS_GET_FAIL', () => {
    // Arrange
    const expectedActions = [
      {type: 'TRANSACTIONS_GET_START'},
      {type: 'TRANSACTIONS_GET_FAIL'},
    ];
    const store = mockStore({});

    // Action
    return store.dispatch(TransactionActions.getTransactions()).then(() => {
      // Arrange
      expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
      expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
    });
  });
});
