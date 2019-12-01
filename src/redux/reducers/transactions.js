const initialState = {
  history: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSACTIONS_CREATE': {
      return {
        history: [action.payload.transaction, ...state.history],
      };
    }
    default: {
      return state;
    }
  }
};
