const initialState = {
  history: [
    {
      id: 'Aca1231daA',
      btc: '0.0001',
      date: '2019/11/30',
      btcAddress: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT',
      status: 'success',
    },
    {
      id: 'Aca1231daA',
      btc: '0.0001',
      date: '2019/11/30',
      btcAddress: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT',
      status: 'success',
    },
    {
      id: 'Aca1231daA',
      btc: '0.0001',
      date: '2019/11/30',
      btcAddress: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT',
      status: 'success',
    },
    {
      id: 'Aca1231daA',
      btc: '0.0001',
      date: '2019/11/30',
      btcAddress: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT',
      status: 'success',
    },
    {
      id: 'Aca1231daA',
      btc: '0.0001',
      date: '2019/11/30',
      btcAddress: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT',
      status: 'success',
    },
    {
      id: 'Aca1231daA',
      btc: '0.0001',
      date: '2019/11/30',
      btcAddress: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT',
      status: 'success',
    },
    {
      id: 'Aca1231daA',
      btc: '0.0001',
      date: '2019/11/30',
      btcAddress: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT',
      status: 'success',
    },
    {
      id: 'penultimo',
      btc: '0.0001',
      date: '2019/11/30',
      btcAddress: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT',
      status: 'success',
    },
    {
      id: 'ultimoo',
      btc: '0.0001',
      date: '2019/11/30',
      btcAddress: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT',
      status: 'success',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSACTIONS_CREATE': {
      return {
        transactions: action.payload.transactions,
      };
    }
    default: {
      return state;
    }
  }
};
