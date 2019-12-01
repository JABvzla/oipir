import axios from 'axios';
import {getFormatedDate, satoshiToBtc, getRandomHash} from '@helpers';

function setAddress(address) {
  return {
    type: 'SEND_CURRENCY_SET_ADDRESS',
    payload: {
      address,
      errorAddress: validateAddress(address),
    },
  };
}

function setAmount(amount) {
  return (dispatch, getState) => {
    const {balance, sendCurrency} = getState();

    let total = (+amount + +sendCurrency.fees.fastestFee).toFixed(8);

    if (isNaN(total)) {
      total = sendCurrency.fees.fastestFee;
    }

    return dispatch({
      type: 'SEND_CURRENCY_SET_AMOUNT',
      payload: {
        amount,
        errorAmount: validateAmount(amount, balance.btc, total),
        total,
      },
    });
  };
}

function getFees() {
  return dispatch => {
    dispatch({
      type: 'SEND_CURRENCY_GET_FEES_START',
    });

    return axios
      .get('https://bitcoinfees.earn.com/api/v1/fees/recommended')
      .then(r => {
        const {fastestFee, halfHourFee, hourFee} = r.data;

        dispatch({
          type: 'SEND_CURRENCY_GET_FEES_SUCCESS',
          payload: {
            fees: {
              fastestFee: satoshiToBtc(fastestFee),
              halfHourFee,
              hourFee,
            },
            total: satoshiToBtc(fastestFee),
          },
        });
      })
      .catch(e => {
        console.warn(e);
        dispatch({
          type: 'SEND_CURRENCY_GET_FEES_FAIL',
        });
      });
  };
}

function reset() {
  return {type: 'SEND_CURRENCY_RESET'};
}

function send() {
  return (dispatch, getState) => {
    const {balance, sendCurrency} = getState();
    const newValue = balance.btc - sendCurrency.total;

    dispatch({type: 'SEND_CURRENCY_START'});

    if (!newValue || isNaN(sendCurrency.total)) {
      dispatch({
        type: 'TRANSACTIONS_CREATE',
        payload: {
          transaction: {
            id: getRandomHash(),
            btc: sendCurrency.amount,
            date: getFormatedDate(),
            btcAddress: sendCurrency.address,
            status: 'failed',
          },
        },
      });

      return dispatch({type: 'SEND_CURRENCY_GET_FEES_FAIL'});
    }

    setTimeout(() => {
      dispatch({type: 'BALANCE_SET', payload: {btc: newValue.toFixed(8)}});

      dispatch({
        type: 'TRANSACTIONS_CREATE',
        payload: {
          transaction: {
            id: getRandomHash(),
            btc: sendCurrency.amount,
            date: getFormatedDate(),
            btcAddress: sendCurrency.address,
            status: 'success',
          },
        },
      });
      dispatch({type: 'SEND_CURRENCY_SUCCESS'});
    }, 3000);
  };
}

// Validations
function validateAddress(address) {
  if (address.length && !/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address)) {
    return 'Dirección de bitcoin Invalida';
  }
}

function validateAmount(amount, btc, total) {
  if (!/[0-9]{1,2}([.][0-9]{1,2})?$/.test(amount)) {
    return 'Solo debe contener numeros';
  }

  if (total > btc) {
    return 'El monto sumado a la comision no puede superar el saldo actual';
  }
}

const SendCurrencyActions = {setAddress, setAmount, getFees, send, reset};
export default SendCurrencyActions;
