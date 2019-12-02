import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';
import styles from './styles';

import {SendCurrencyActions, TransactionsActions} from '@redux/actions';
import {GlobalStyles} from '@theme';
import Button from '@button';
import TextInput from '@text-input';
import CurrentBalance from '@current-balance';
import ErrorConnection from '@error-connection';

const isIos = Platform.OS === 'ios';

function SendCurrencyScreen(props) {
  const {
    address,
    amount,
    errorAddress,
    errorAmount,
    fastestFee,
    feesError,
    error,
    isLoading,
    total,
    setAmount,
    setAddress,
    sendCurrency,
    success,
    getTransactions,
    getFeesRefresh,
  } = props;

  if (feesError) {
    return (
      <ErrorConnection
        description="No se pudo conectar con el servidor obteniendo la comisión de cambio."
        onRetry={getFeesRefresh}
      />
    );
  }

  if (isLoading) {
    return <ActivityIndicator style={GlobalStyles.screenWrapper} />;
  }

  if (success || error) {
    props.reset();
    getTransactions();

    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Home'}),
        NavigationActions.navigate({routeName: 'SendResult'}),
      ],
    });
    props.navigation.dispatch(resetAction);

    return props.navigation.navigate('SendResult', {success});
  }

  return (
    <KeyboardAvoidingView
      style={GlobalStyles.screenWrapper}
      keyboardVerticalOffset={0}
      behavior={isIos ? 'padding' : ''}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={GlobalStyles.headerContainer}>
          <CurrentBalance />
        </View>
        <View style={styles.container}>
          <TextInput
            labelText="Dirección Destinatario"
            error={!!errorAddress}
            errorMessage={errorAddress}
            onChangeText={setAddress}
            value={address}
          />

          <TextInput
            labelText="Monto"
            keyboardType={'numeric'}
            error={!!errorAmount}
            errorMessage={errorAmount}
            onChangeText={setAmount}
            value={amount}
          />
          <Text style={styles.feeLabel}>Comisión en BTC: {fastestFee}</Text>
          <Text style={styles.feeLabel}>Total de la transacción: {total}</Text>
        </View>
      </ScrollView>
      <Button
        wrapperStyle={styles.sendButtonWrapper}
        title="Enviar"
        disabled={
          !address.length ||
          !amount.length ||
          !!errorAddress ||
          !!errorAmount ||
          !!feesError
        }
        onPress={sendCurrency}
      />
    </KeyboardAvoidingView>
  );
}

const mapStateToProps = state => ({
  isLoading: state.sendCurrency.isLoading,
  success: state.sendCurrency.success,
  btc: state.balance.btc,
  address: state.sendCurrency.address,
  amount: state.sendCurrency.amount,
  error: state.sendCurrency.error,
  errorAddress: state.sendCurrency.errorAddress,
  errorAmount: state.sendCurrency.errorAmount,
  fastestFee: state.sendCurrency.fees.fastestFee,
  total: state.sendCurrency.total,
  halfHourFee: state.sendCurrency.fees.halfHourFee,
  hourFee: state.sendCurrency.fees.hourFee,
  feesError: state.sendCurrency.feesError,
});

const mapDispatchToProps = disptach => ({
  setAddress: address => disptach(SendCurrencyActions.setAddress(address)),
  setAmount: amount => disptach(SendCurrencyActions.setAmount(amount)),
  sendCurrency: () => disptach(SendCurrencyActions.send()),
  reset: () => disptach(SendCurrencyActions.reset()),
  getFeesRefresh: () => disptach(SendCurrencyActions.getFees()),
  getFees: disptach(SendCurrencyActions.getFees()),
  getTransactions: () => disptach(TransactionsActions.getTransactions()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendCurrencyScreen);
