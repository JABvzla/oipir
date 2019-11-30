import React from 'react';
import {View, Text, KeyboardAvoidingView, Platform} from 'react-native';
import style from './styles';

import {GlobalStyles} from '@theme';
import Button from '@button';
import TextInput from '@text-input';

const isIos = Platform.OS === 'ios';

export default _props => (
  <KeyboardAvoidingView
    style={GlobalStyles.screenWrapper}
    keyboardVerticalOffset={200}
    behavior={isIos ? 'padding' : ''}>
    <View style={style.container}>
      <Text style={GlobalStyles.titleScreen}>Enviar BTC</Text>

      <TextInput labelText="Dirección Destinatario" />

      <TextInput labelText="Monto" keyboardType={'numeric'} />

      <Text style={style.feeLabel}>Comisión: 0.001btc</Text>
    </View>
    <Button
      wrapperStyle={style.sendButtonWrapper}
      title="Enviar"
      onPress={() => {}}
    />
  </KeyboardAvoidingView>
);
