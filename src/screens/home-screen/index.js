import React from 'react';
import {View, Text} from 'react-native';

import Button from '@button';
import {GlobalStyles} from '@theme';
import TransactionHistory from '@transaction-history';

export default function(props) {
  return (
    <View style={GlobalStyles.screenWrapper}>
      <Button
        wrapperStyle={{
          width: '100%',
          alignItems: 'center',
        }}
        onPress={() => props.navigation.navigate('SendCurrency')}
        title="Enviar"
      />
      <Text style={GlobalStyles.titleScreen}>Transacciones</Text>
      <TransactionHistory />
    </View>
  );
}
