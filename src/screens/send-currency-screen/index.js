import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';
import style from './styles';

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
  } = props;

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

  if (feesError) {
    return (
      <ErrorConnection description="No se pudo conectar con el servidor obteniendo la comisión de cambio." />
    );
  }

  return (
    <KeyboardAvoidingView
      style={GlobalStyles.screenWrapper}
      keyboardVerticalOffset={5}
      behavior={isIos ? 'padding' : ''}>
      <CurrentBalance />
      <View style={style.container}>
        <Text style={GlobalStyles.titleScreen}>Enviar BTC</Text>

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
        <Text style={style.feeLabel}>Comisión en BTC: {fastestFee}</Text>
        <Text style={style.feeLabel}>Total de la transacción: {total}</Text>
      </View>
      <Button
        wrapperStyle={style.sendButtonWrapper}
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
  getFees: disptach(SendCurrencyActions.getFees()),
  getTransactions: () => disptach(TransactionsActions.getTransactions()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendCurrencyScreen);
