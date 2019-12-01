import React from 'react';
import {View, Text} from 'react-native';
import {GlobalStyles} from '@theme';
import styles from './styles';

export default props => (
  <View style={[GlobalStyles.screenWrapper, styles.wrapper]}>
    <Text style={[GlobalStyles.titleScreen, styles.text]}>
      Error de Conexión
    </Text>
    <Text style={styles.description}>{props.description}</Text>
  </View>
);
