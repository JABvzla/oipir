import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

function CurrentBalance(props) {
  const {btc, secondaryName, secondaryValue} = props;

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
  secondaryName: state.balance.secondaryCurrency.name,
  secondaryValue: state.balance.secondaryCurrency.value,
});

export default connect(mapStateToProps)(CurrentBalance);
