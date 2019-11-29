import {StyleSheet} from 'react-native';
import {Fonts} from '@theme';

export default StyleSheet.create({
  wrapper: {
    padding: 20,
    ...Fonts('XXL', 'GrayDark', 'Bold'),
    textAlign: 'center',
  },
  primaryText: {
    ...Fonts('XXL', 'GrayDark', 'Bold'),
    textAlign: 'center',
  },
  labelText: {
    ...Fonts('M', 'GraySemiLigth'),
  },
});
