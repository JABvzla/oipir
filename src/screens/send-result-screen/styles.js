import {StyleSheet} from 'react-native';
import {Sizes, Colors} from '@theme';

export default StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.Fail,
    padding: Sizes.M,
  },
  successWrapper: {
    backgroundColor: Colors.Success,
  },
  text: {
    color: '#fff',
  },
});
