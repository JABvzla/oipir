import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_BALANCE = '@btc_balance';

function setBalance(btc) {
  AsyncStorage.setItem(STORAGE_BALANCE, btc);

  return {
    type: 'BALANCE_SET',
    payload: {
      btc,
    },
  };
}

function getBalance() {
  return async dispatch => {
    dispatch({type: 'BALANCE_GET_START'});

    const btc = await getStorageBalance();

    return axios
      .get('https://ripio.com/api/v1/rates/')
      .then(r => {
        const {rates} = r.data;

        dispatch({
          type: 'BALANCE_GET_SUCCESS',
          payload: {
            btc: (+btc).toFixed(8),
            secondaryCurrency: {
              name: 'ARS',
              value: rates.ARS_SELL,
            },
          },
        });
      })
      .catch(e => {
        console.warn(e);
        dispatch({
          type: 'BALANCE_GET_FAIL',
        });
      });
  };
}

async function getStorageBalance() {
  try {
    let value = await AsyncStorage.getItem(STORAGE_BALANCE);
    if (value != null) {
      return value;
    }

    value = '1';
    await AsyncStorage.setItem(STORAGE_BALANCE, value);
    return value;
  } catch (e) {
    console.warn('error', e);
    return '0';
  }
}

const BalanceActions = {setBalance, getBalance};
export default BalanceActions;
