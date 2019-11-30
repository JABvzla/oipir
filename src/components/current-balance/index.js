import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

function CurrentBalance(props) {
  const {btc, secondaryName, secondaryAmmount, isLoading} = props;

  if (isLoading) {
    return <ActivityIndicator style={styles.wrapper} />;
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.primaryText}>BTC</Text>
      <Text style={styles.primaryText}>{btc}</Text>
      <Text style={styles.secondaryText}>
        {secondaryName}: {secondaryAmmount}
      </Text>
    </View>
  );
}

const mapStateToProps = state => ({
  btc: state.balance.btc,
  isLoading: state.balance.isLoading,
  secondaryName: state.balance.secondaryCurrency.name,
  secondaryAmmount: state.balance.secondaryCurrency.ammount,
});

export default connect(mapStateToProps)(CurrentBalance);
