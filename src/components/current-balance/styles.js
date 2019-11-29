import {StyleSheet} from 'react-native';
import {Fonts} from '@theme';

export default StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  primaryText: {
    ...Fonts('XXL', 'GrayDark', 'Bold'),
    textAlign: 'center',
  },
  secondaryText: {
    ...Fonts('M', 'GraySemiLigth'),
    textAlign: 'center',
  },
});
