import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import style from './styles';

import Button from '@button';
import TextInput from '@text-input';

export default props => (
  <SafeAreaView>
    <View style={style.container}>
      <Text style={style.primaryText}>SendCurrency</Text>

      <TextInput labelText="Dirección Destinatario" />

      <TextInput labelText="Monto" />

      <Button title="Enviar" onPress={() => {}} />
    </View>
  </SafeAreaView>
);
