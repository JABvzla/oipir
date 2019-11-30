const initialState = {
  btc: 0,
  secondaryCurrency: {
    name: 'ARS',
    ammount: 0,
  },
  isLoading: false,
  sucess: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BALANCE': {
      return {
        isLoading: false,
        error: false,
        balance: action.payload.balance,
      };
    }
    default: {
      return state;
    }
  }
};
