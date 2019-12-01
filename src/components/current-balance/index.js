import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

import {BalanceActions} from '@redux/actions';

function CurrentBalance(props) {
  const {btc, secondaryName, secondaryValue, isLoading} = props;

  if (isLoading) {
    return <ActivityIndicator style={styles.wrapper} />;
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.primaryText}>BTC</Text>
      <Text style={styles.primaryText}>{btc}</Text>
      <Text style={styles.secondaryText}>
        {secondaryName}: {(secondaryValue * btc).toFixed(2)}
      </Text>
    </View>
  );
}

const mapStateToProps = state => ({
  btc: state.balance.btc,
  isLoading: state.balance.isLoading,
  secondaryName: state.balance.secondaryCurrency.name,
  secondaryValue: state.balance.secondaryCurrency.value,
});

const mapDispatchToProps = disptach => ({
  getBalance: disptach(BalanceActions.getBalance()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrentBalance);
