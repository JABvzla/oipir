import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default props => (
  <View style={[styles.card, props.first && styles.firstCard]}>
    <View style={styles.row}>
      <Text style={styles.idText}>id: {props.id} </Text>
      <Text style={styles.idText}>estado: {props.status} </Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.btcText}>BTC: {props.btc}</Text>
      <Text style={styles.dateText}>{props.date}</Text>
    </View>
    <Text style={styles.secondaryText}>ARS: 1500000</Text>
    <Text style={styles.addressText}>destino</Text>
    <Text style={styles.addressText}> {props.btcAddress}</Text>
  </View>
);
