const FontColors = {
  Black: '#000000',
  White: '#FFFFFF',
  Danger: '#FFAAAA',
  WhiteLight: '#EEE',
  Primary: '#AAA',
  // Grays.
  GraySuperLight: '#D6D9E1',
  GrayLight: '#AAAFC1',
  GraySemiLigth: '#7C7A89',
  Gray: '#6F6E82',
  GraySemiDark: '#6D6D6D',
  GrayDark: '#444444',
  GraySuperDark: '#4A4A4A',
};

const FontSizes = {
  XXS: 12,
  XS: 14,
  S: 16,
  MS: 18,
  M: 20,
  ML: 24,
  L: 26,
  XL: 32,
  XXL: 36,
};

const FontsWeight = {
  Skinny: '100',
  Regular: 'normal',
  Medium: '300',
  Bold: 'bold',
  DemiBold: '600',
};

function Fonts(size, color, weight = 'Regular') {
  return {
    fontSize: FontSizes[size],
    color: FontColors[color],
    fontWeight: FontsWeight[weight],
  };
}

export default Fonts;
