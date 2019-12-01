import React from 'react';
import {View, Text} from 'react-native';

import Button from '@button';
import {GlobalStyles} from '@theme';
import TransactionHistory from '@transaction-history';
import CurrentBalance from '@current-balance';
import styles from './styles';

export default function(props) {
  return (
    <View style={styles.wrapper}>
      <View style={[GlobalStyles.screenWrapper, styles.container]}>
        <CurrentBalance />
        <Button
          center
          onPress={() => props.navigation.navigate('SendCurrency')}
          title="Enviar"
        />
      </View>
      <Text style={GlobalStyles.titleScreen}>Transacciones</Text>
      <TransactionHistory />
    </View>
  );
}
