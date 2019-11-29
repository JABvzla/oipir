import React from 'react';
import {View, Button} from 'react-native';
import styles from './styles';
import {Colors} from '@theme';

export default props => (
  <View style={styles.wrapper}>
    <Button
      title={props.title}
      color={Colors.PurpleSemiDark}
      onPress={props.onPress}
    />
  </View>
);
