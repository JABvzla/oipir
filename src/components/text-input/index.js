import React from 'react';
import {View, Text, TextInput} from 'react-native';
import style from './styles';

export default props => (
  <View style={style.container}>
    <Text style={style.labelText}>{props.labelText}</Text>
    <TextInput></TextInput>
  </View>
);
