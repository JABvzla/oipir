const initialState = {
  address: '',
  amount: '',
  errorAddress: '',
  errorAmount: '',
  fees: {
    fastestFee: 0,
    halfHourFee: 0,
    hourFee: 0,
  },
  total: '0',
  feesError: false,
  isLoading: false,
  sucess: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_CURRENCY_SET_ADDRESS': {
      return {
        ...state,
        address: action.payload.address,
        errorAddress: action.payload.errorAddress,
      };
    }
    case 'SEND_CURRENCY_SET_AMOUNT': {
      return {
        ...state,
        amount: action.payload.amount,
        total: action.payload.total,
        errorAmount: action.payload.errorAmount,
      };
    }
    case 'SEND_CURRENCY_GET_FEES_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SEND_CURRENCY_GET_FEES_SUCCESS': {
      return {
        ...state,
        feesError: false,
        isLoading: false,
        fees: action.payload.fees,
        total: action.payload.total,
      };
    }
    case 'SEND_CURRENCY_GET_FEES_FAIL': {
      return {
        ...state,
        isLoading: false,
        feesError: true,
      };
    }
    default: {
      return state;
    }
  }
};
