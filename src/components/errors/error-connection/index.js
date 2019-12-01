import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {GlobalStyles} from '@theme';
import styles from './styles';
import Button from '@button';

export default props => {
  const [disabled, setDisabled] = useState(false);

  return (
    <View style={[GlobalStyles.screenWrapper, styles.wrapper]}>
      <Text style={[GlobalStyles.titleScreen, styles.text]}>
        Error de Conexión
      </Text>
      <Text style={styles.description}>{props.description}</Text>
      <Button
        center
        onPress={() => {
          props.onRetry();
          setDisabled(true);
          setTimeout(() => setDisabled(false), 5000);
        }}
        title="Reintentar"
        disabled={disabled}
      />
    </View>
  );
};
