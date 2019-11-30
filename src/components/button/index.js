import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

export default props => (
  <View style={props.wrapperStyle}>
    <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
      <Text style={styles.label}>{props.title}</Text>
    </TouchableOpacity>
  </View>
);
