import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '@theme';

export default StyleSheet.create({
  container: {
    ...Fonts('XXL', 'GrayDark', 'Bold'),
    textAlign: 'center',
    flexGrow: 1,
    padding: Sizes.M,
    backgroundColor: '#6D6D91',
  },
  primaryText: {
    ...Fonts('XXL', 'GrayDark', 'Bold'),
    textAlign: 'center',
  },
  labelText: {
    ...Fonts('M', 'GraySuperLight'),
  },
  feeLabel: {
    ...Fonts('M', 'GraySuperLight'),
    textAlign: 'center',
  },
  sendButtonWrapper: {
    marginTop: 'auto',
    alignItems: 'center',
    backgroundColor: '#606080',
    padding: 20,
  },
});
