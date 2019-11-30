import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '@theme';

export default StyleSheet.create({
  primaryText: {
    ...Fonts('XXL', 'GrayDark', 'Bold'),
    textAlign: 'center',
  },
  secondaryText: {
    ...Fonts('M', 'GraySemiLigth'),
    textAlign: 'center',
  },
  wrapper: {
    height: 135,
  },
});
