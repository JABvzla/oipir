import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '@theme';

export default StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'transparent',
  },
  description: {
    padding: Sizes.M,
    width: '100%',
    textAlign: 'center',
    ...Fonts('MS', 'GrayLight', 'Bold'),
  },
});
