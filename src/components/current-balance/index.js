import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default props => (
  <View style={{flex: 1}}>
    <Text style={styles.primaryText}>BTC</Text>
    <Text style={styles.primaryText}>1.5</Text>
    <Text style={styles.secondaryText}>ARS: 1500000</Text>
  </View>
);
