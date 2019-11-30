import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

export default props => (
  <View style={[props.wrapperStyle, props.center && styles.center]}>
    <TouchableOpacity
      style={[styles.wrapper, props.disabled && styles.disabled]}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Text style={styles.label}>{props.title}</Text>
    </TouchableOpacity>
  </View>
);
