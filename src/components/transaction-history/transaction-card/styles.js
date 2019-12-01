import {StyleSheet} from 'react-native';
import {Fonts} from '@theme';
import {Sizes} from '@theme';

export default StyleSheet.create({
  idText: {
    ...Fonts('XXS', 'GrayLight', 'Medium'),
  },
  addressText: {
    ...Fonts('XS', 'GrayLight'),
    width: '100%',
    textAlign: 'center',
  },
  btcText: {
    ...Fonts('L', 'White', 'Bold'),
  },
  muted: {
    height: 135,
  },
  secondaryText: {
    ...Fonts('XS', 'GraySuperLight', 'Bold'),
  },
  dateText: {
    marginTop: 5,
    ...Fonts('M', 'GrayLight', 'Medium'),
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  card: {
    paddingVertical: Sizes.M,
    paddingHorizontal: Sizes.M,
    backgroundColor: '#6D6D91',
  },
  oddCard: {
    backgroundColor: '#606080',
  },
});
