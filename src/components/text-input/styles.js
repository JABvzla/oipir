import {StyleSheet} from 'react-native';
import {Fonts, Colors, Sizes} from '@theme';

export default StyleSheet.create({
  wrapper: {
    padding: 20,
    ...Fonts('XXL', 'GrayDark', 'Bold'),
    textAlign: 'center',
  },
  primaryText: {
    ...Fonts('XXL', 'GrayDark', 'Bold'),
    textAlign: 'center',
  },
  labelText: {
    ...Fonts('S', 'GraySemiLigth'),
  },
  textInput: {
    ...Fonts('M', 'GraySuperDark'),
    borderColor: Colors.PurpleSemiDark,
    borderWidth: Sizes.XXS,
    borderRadius: Sizes.XS,
    paddingVertical: Sizes.XS,
    paddingHorizontal: Sizes.S,
  },
  // Error
  labelError: {
    ...Fonts('XS', 'Danger'),
  },
  errorInput: {
    borderColor: Colors.Danger,
  },
});
