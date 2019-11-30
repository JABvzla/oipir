import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '@theme';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: Sizes.MS,
    borderRadius: 5,
    width: 200,
    backgroundColor: Colors.Primary,
  },
  label: {
    ...Fonts('S', 'White', 'Bold'),
  },
});
