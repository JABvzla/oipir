import {StyleSheet} from 'react-native';
import {Fonts} from '@theme';

export default StyleSheet.create({
  primaryText: {
    ...Fonts('XXL', 'WhiteLight', 'Bold'),
    textAlign: 'center',
  },
  secondaryText: {
    ...Fonts('M', 'GraySuperLight'),
    textAlign: 'center',
  },
  wrapper: {
    height: 135,
  },
});
