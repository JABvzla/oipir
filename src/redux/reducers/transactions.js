const initialState = {
  history: [],
  isLoading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSACTIONS_GET_START': {
      return {
        ...initialState,
        isLoading: true,
      };
    }
    case 'TRANSACTIONS_GET_SUCCESS': {
      return {
        ...initialState,
        history: action.payload.history,
      };
    }
    case 'TRANSACTIONS_GET_FAIL': {
      return {
        ...initialState,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
