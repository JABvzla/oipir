import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import style from './styles';

import {SendCurrencyActions} from '@redux/actions';
import {GlobalStyles} from '@theme';
import Button from '@button';
import TextInput from '@text-input';
import CurrentBalance from '@current-balance';

const isIos = Platform.OS === 'ios';

function SendCurrencyScreen(props) {
  const {
    address,
    amount,
    errorAddress,
    errorAmount,
    fastestFee,
    feesError,
    isLoading,
    setAmount,
    setAddress,
    total,
  } = props;

  if (isLoading) {
    return <ActivityIndicator style={GlobalStyles.screenWrapper} />;
  }

  if (feesError) {
    return (
      <View style={GlobalStyles.screenWrapper}>
        <Text>
          Se ha producido un error Obteniendo la comisión de cambio, intente de
          nuevo.
        </Text>
      </View>
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
          !address.length || !amount.length || !!errorAddress || !!errorAmount
        }
        onPress={() => {}}
      />
    </KeyboardAvoidingView>
  );
}

const mapStateToProps = state => ({
  isLoading: state.sendCurrency.isLoading,
  btc: state.balance.btc,
  address: state.sendCurrency.address,
  amount: state.sendCurrency.amount,
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
  getFees: disptach(SendCurrencyActions.getFees()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendCurrencyScreen);
