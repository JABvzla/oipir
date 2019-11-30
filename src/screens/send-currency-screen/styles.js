import {StyleSheet} from 'react-native';
import {Fonts} from '@theme';

export default StyleSheet.create({
  container: {
    ...Fonts('XXL', 'GrayDark', 'Bold'),
    textAlign: 'center',
    flexGrow: 1,
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
  sendButtonWrapper: {
    marginTop: 'auto',
    alignItems: 'center',
  },
});
