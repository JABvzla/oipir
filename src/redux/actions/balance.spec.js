import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import BalanceActions from './balance';
import MockAsyncStorage from 'mock-async-storage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockAsnyc = new MockAsyncStorage();
jest.mock('@react-native-community/async-storage', () => mockAsnyc);

describe('BALANCE_GET_START', () => {
  it('When has connection should respond BALANCE_GET_SUCCESS', () => {
    // Arrange
    const expectedActions = [
      {type: 'BALANCE_GET_START'},
      {type: 'BALANCE_GET_SUCCESS'},
    ];
    const store = mockStore({});

    // Action
    return store.dispatch(BalanceActions.getBalance()).then(() => {
      // Arrange
      expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
      expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
    });
  });
});
