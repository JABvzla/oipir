import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import CurrentBalance from '@current-balance';
import CransactionHistory from '@transaction-history';
import Button from '@button';

export default props => (
  <SafeAreaView>
    <View>
      <CurrentBalance />
    </View>
    <Button
      title="Transferir Moneda"
      onPress={() => props.navigation.navigate('SendCurrency')}
    />
    <ScrollView>
      <CransactionHistory />
      <CransactionHistory />
      <CransactionHistory />
      <CransactionHistory />
      <CransactionHistory />
      <CransactionHistory />
    </ScrollView>
  </SafeAreaView>
);
