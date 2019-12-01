import {StyleSheet} from 'react-native';
import {Fonts} from '@theme';
import {Sizes} from '@theme';

export default StyleSheet.create({
  idText: {
    ...Fonts('XXS', 'GrayDark', 'Medium'),
  },
  addressText: {
    ...Fonts('XS', 'Black'),
    width: '100%',
    textAlign: 'center',
  },
  btcText: {
    ...Fonts('L', 'GrayDark', 'Bold'),
  },
  muted: {
    height: 135,
  },
  secondaryText: {
    ...Fonts('XS', 'GrayDark', 'Bold'),
  },
  dateText: {
    marginTop: 5,
    ...Fonts('M', 'GrayDark', 'Medium'),
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  card: {
    borderBottomWidth: 1,
    paddingVertical: Sizes.M,
    paddingHorizontal: Sizes.M,
  },
  firstCard: {
    borderTopWidth: 1,
  },
});
