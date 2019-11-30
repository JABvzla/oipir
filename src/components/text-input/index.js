import React from 'react';
import {View, Text, TextInput} from 'react-native';
import style from './styles';

export default props => (
  <View style={style.container}>
    <Text style={style.labelText}>{props.labelText}</Text>
    <TextInput
      style={[style.textInput, props.error && style.errorInput]}
      keyboardType={props.keyboardType}
      onChangeText={props.onChangeText}
      value={props.value}
    />
    <Text style={style.labelError}>{props.error && props.errorMessage}</Text>
  </View>
);
