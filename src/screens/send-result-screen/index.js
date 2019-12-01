import React from 'react';
import {View, Text} from 'react-native';
import {GlobalStyles} from '@theme';
import styles from './styles';

export default props => {
  const {navigation} = props;
  const success = navigation.getParam('success');
  const message = success
    ? 'Operacion Realizada con Exito'
    : 'Ha ocurrido un error al realizar la operación';

  setTimeout(() => {
    props.navigation.navigate('Home');
  }, 3000);
  return (
    <View style={[styles.wrapper, success && styles.successWrapper]}>
      <Text style={[GlobalStyles.titleScreen, styles.text]}>{message}</Text>
    </View>
  );
};
