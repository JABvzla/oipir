import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '@theme';

export default StyleSheet.create({
  container: {
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
  feeLabel: {
    ...Fonts('M', 'GraySemiLigth'),
    textAlign: 'center',
  },
});
