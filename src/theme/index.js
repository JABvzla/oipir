import {StyleSheet} from 'react-native';
import Fonts from './fonts';
import Colors from './colors';
import Sizes from './sizes';

const GlobalStyles = StyleSheet.create({
  screenWrapper: {
    margin: Sizes.M,
    marginTop: Sizes.L,
    flex: 1,
  },
  titleScreen: {
    ...Fonts('XXL', 'GrayDark', 'Bold'),
    textAlign: 'center',
    marginBottom: Sizes.M,
  },
});

export {Fonts, Colors, Sizes, GlobalStyles};
