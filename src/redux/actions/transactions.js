import AsyncStorage from '@react-native-community/async-storage';
import {getFormatedDate, getRandomHash} from '@helpers';

const TRANSACTIONS_HISTORY = '@transactions_history';

async function createTransaction(btc, btcAddress, status) {
  let history = await getStorageTransactions();

  history = [
    {
      id: getRandomHash(),
      btc: (+btc).toFixed(8),
      date: getFormatedDate(),
      btcAddress: btcAddress.toString(),
      status,
    },
    ...history,
  ];

  await AsyncStorage.setItem(TRANSACTIONS_HISTORY, JSON.stringify(history));
}

function getTransactions() {
  return async dispatch => {
    dispatch({type: 'TRANSACTIONS_GET_START'});
    const history = await getStorageTransactions();

    if (history == null) {
      return dispatch({type: 'TRANSACTIONS_GET_FAIL'});
    }

    return dispatch({type: 'TRANSACTIONS_GET_SUCCESS', payload: {history}});
  };
}

async function getStorageTransactions() {
  try {
    const history = await AsyncStorage.getItem(TRANSACTIONS_HISTORY);
    if (history != null) {
      return JSON.parse(history);
    }
    return [];
  } catch (error) {
    return null;
  }
}

const BalanceActions = {createTransaction, getTransactions};
export default BalanceActions;
