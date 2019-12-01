import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import {BalanceActions} from '@redux/actions';
import Button from '@button';
import {GlobalStyles} from '@theme';
import TransactionHistory from '@transaction-history';
import CurrentBalance from '@current-balance';
import ErrorConnection from '@error-connection';

function HomeScreen(props) {
  const {isLoading, error} = props;

  if (error) {
    return (
      <ErrorConnection description="No se pudo conectar con el servidor" />
    );
  }

  if (isLoading) {
    return <ActivityIndicator style={GlobalStyles.screenWrapper} />;
  }

  return (
    <View style={GlobalStyles.screenWrapper}>
      <View style={GlobalStyles.headerContainer}>
        <CurrentBalance />
        <Button
          center
          onPress={() => props.navigation.navigate('SendCurrency')}
          title="Enviar"
        />
      </View>
      <TransactionHistory />
    </View>
  );
}

const mapStateToProps = state => ({
  btc: state.balance.btc,
  isLoading: state.balance.isLoading,
  error: state.balance.error,
});

const mapDispatchToProps = disptach => ({
  getBalance: disptach(BalanceActions.getBalance()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
