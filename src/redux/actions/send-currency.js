import axios from 'axios';

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

// Helper
function satoshiToBtc(n) {
  return '0.00000000'.substring(0, 10 - n.toString().length) + n;
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

const SendCurrencyActions = {setAddress, setAmount, getFees};
export default SendCurrencyActions;
