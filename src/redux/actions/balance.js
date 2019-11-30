function setBalance(btc) {
  return {
    type: 'BALANCE_SET',
    payload: {
      btc: btc,
    },
  };
}

const BalanceActions = {setBalance};
export default BalanceActions;
