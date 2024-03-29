import React from 'react';
import {ScrollView} from 'react-native';
import TransactionCard from '@transaction-card';
import {connect} from 'react-redux';
import {TransactionsActions} from '@redux/actions';

function TransactionHistory(props) {
  const {transactionsHistory} = props;

  return (
    <ScrollView>
      {transactionsHistory.map((t, k) => (
        <TransactionCard
          key={k}
          odd={k % 2 === 0}
          id={t.id}
          status={t.status}
          btcAddress={t.btcAddress}
          btc={t.btc}
          secondaryAmount={(t.btc * props.secondaryValue).toFixed(2)}
          date={t.date}
        />
      ))}
    </ScrollView>
  );
}
const mapStateToProps = state => ({
  transactionsHistory: state.transactions.history,
  secondaryValue: state.balance.secondaryCurrency.value,
});

const mapDispatchToProps = disptach => ({
  getTransactions: disptach(TransactionsActions.getTransactions()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionHistory);
