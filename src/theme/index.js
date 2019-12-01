import {StyleSheet} from 'react-native';
import Fonts from './fonts';
import Colors from './colors';
import Sizes from './sizes';

const GlobalStyles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#334',
  },
  headerContainer: {
    flex: 0,
    justifyContent: 'space-around',
    margin: Sizes.M,
    marginTop: Sizes.L,
  },
  titleScreen: {
    ...Fonts('XL', 'White', 'Bold'),
    textAlign: 'center',
    paddingVertical: Sizes.M,
    backgroundColor: '#262633',
  },
});

export {Fonts, Colors, Sizes, GlobalStyles};
