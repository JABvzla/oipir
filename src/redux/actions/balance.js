import axios from 'axios';

function setBalance(btc) {
  return {
    type: 'BALANCE_SET',
    payload: {
      btc: btc,
    },
  };
}

function getBalance() {
  return dispatch => {
    dispatch({type: 'BALANCE_GET_START'});

    return axios
      .get('https://ripio.com/api/v1/rates/')
      .then(r => {
        const {rates} = r.data;

        dispatch({
          type: 'BALANCE_GET_SUCCESS',
          payload: {
            btc: 1,
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

const BalanceActions = {setBalance, getBalance};
export default BalanceActions;
