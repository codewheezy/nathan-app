import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

export const COLORS = {
  //base color
  primary: '#58B681',
  secondary: '#656565',
  accent: '#FE8100',
  tertiary: '#FF7C00',
  success: '#219653',
  error: '#fe3b30',
  background: '#F9FCFC',
  profileLine: '#D7E2E4',

  //neutral
  black: '#000000',
  white: '#ffffff',

  //color variations
  darkGray: '#707070',
  midGrey: '#656565',
  lightGrey: '#999999',
  darkerGrey: '#414141',
  lighterGrey: '#ABAFB3',
  inputGrey: '#eaf0f1',
  communityGrey: '#F4F6F7',
  SettingTabGrey: '#F8F8F8',
  inputBackground: '#F5F7F7',
};

export const SIZES = {
  //font sizes
  xbase: 10,
  base: 9,
  xsmall: 12,
  smallish: 13,
  small: 14,
  medium: 15,
  large: 20,
  xlarge: 24,
  xxlarge: 39,
  xxxlarge: 40,
  xxxxlarge: 32,

  //margin
  marginHorizontal: 10,
  marginVertical: 10,

  //padding
  padding: 24,

  //radius
  buttonRadius: 50,
  cardRadius: 5,
  radius: 4,

  //dimensions
  screenWidth,
  screenHeight,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54
};

export const FONTS = {
  base: { fontSize: SIZES.base, letterSpacing: 0.15 },
  xbase: { fontSize: SIZES.xbase, letterSpacing: 0.15},
  xsmall: { fontSize: SIZES.xsmall, letterSpacing: 0.15 },
  smallish: { fontSize: SIZES.smallish, letterSpacing: 0 },
  small: { fontSize: SIZES.small, letterSpacing: 0 },
  medium: { fontSize: SIZES.medium, letterSpacing: 0 },
  large: { fontSize: SIZES.large, letterSpacing: 0 },
  xlarge: { fontSize: SIZES.xlarge, letterSpacing: 0 },
  xxlarge: { fontSize: SIZES.xxlarge, letterSpacing: 0 },
  xxxlarge: { fontSize: SIZES.xxxlarge, letterSpacing: 0 },
  xxxxlarge: { fontSize: SIZES.xxxxlarge, letterSpacing: 0 }
};

export default { COLORS, SIZES, FONTS };