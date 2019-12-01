import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '@theme';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: Sizes.MS,
    borderRadius: 5,
    width: 200,
    backgroundColor: '#fff',
  },
  disabled: {
    backgroundColor: Colors.Disabled,
  },
  label: {
    ...Fonts('S', 'GrayDark', 'Bold'),
  },
  center: {
    width: '100%',
    alignItems: 'center',
  },
});
