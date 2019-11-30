const initialState = {
  btc: 1.00041,
  secondaryCurrency: {
    name: 'ARS',
    amount: 0,
  },
  isLoading: false,
  sucess: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'BALANCE_SET': {
      return {
        ...state,
        btc: action.payload.btc,
      };
    }
    case 'BALANCE_GET': {
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
