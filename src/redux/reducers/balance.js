const initialState = {
  btc: 0,
  secondaryCurrency: {
    name: 'ARS',
    value: 0,
  },
  isLoading: false,
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
    case 'BALANCE_GET_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'BALANCE_GET_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        error: false,
        btc: action.payload.btc,
        secondaryCurrency: action.payload.secondaryCurrency,
      };
    }
    case 'BALANCE_GET_FAIL': {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
