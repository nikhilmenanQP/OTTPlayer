import {appColors} from './colors';

// Define the type for font sizes, font families, and spacing
type FontSize = {
  [key: string]: number;
};

type FontFamily = {
  [key: string]: string;
};

type Spacing = {
  [key: string]: number;
};

// Define the base theme type
type BaseTheme = {
  fontFamily: FontFamily;
  fontSize: FontSize;
  spacing: Spacing;
};

// Define the colors for light and dark themes
type ThemeColors = {
  background: string;
  borderColor: string;
  bottomNavText: string;
  cardBackground: string;
  darkCharcoal: string;
  dotIconActive: string;
  dotIconNotActive: string;
  linearGradient: string;
  midnightBlue: string;
  musselBlue: string;
  sectionTitle: string;
  standardGray: string;
  textPrimary: string;
  white: string;
  bootstrapBlue: string;
  mediumGray: string;
  firebrickRed: string;
  blueGray: string;
};

// Extend the base theme with colors for light and dark themes
export type Theme = BaseTheme & {
  colors: ThemeColors;
};

// Define the base theme with font sizes, font families, and spacing
const baseTheme: BaseTheme = {
  fontFamily: {
    interDisplay_black: 'InterDisplay-Black',
    interDisplay_blackItalic: 'InterDisplay-BlackItalic',
    interDisplay_bold: 'InterDisplay-Bold',
    interDisplay_boldItalic: 'InterDisplay-BoldItalic',
    interDisplay_extraBold: 'InterDisplay-ExtraBold',
    interDisplay_extraBoldItalic: 'InterDisplay-ExtraBoldItalic',
    interDisplay_extraLight: 'InterDisplay-ExtraLight',
    interDisplay_extraLightItalic: 'InterDisplay-ExtraLightItalic',
    interDisplay_italic: 'InterDisplay-Italic',
    interDisplay_light: 'InterDisplay-Light',
    interDisplay_lightItalic: 'InterDisplay-LightItalic',
    interDisplay_medium: 'InterDisplay-Medium',
    interDisplay_mediumItalic: 'InterDisplay-MediumItalic',
    interDisplay_regular: 'InterDisplay-Regular',
    interDisplay_semiBold: 'InterDisplay-SemiBold',
    interDisplay_semiBoldItalic: 'InterDisplay-SemiBoldItalic',
    interDisplay_thin: 'InterDisplay-Thin',
    interDisplay_thinItalic: 'InterDisplay-ThinItalic',
    interVariable: 'InterVariable',
    interVariable_italic: 'InterVariable-Italic',
    inter_Thin: 'Inter-Thin', // 100
    inter_ThinItalic: 'Inter-ThinItalic',
    inter_black: 'Inter-Black', // 900
    inter_blackItalic: 'Inter-BlackItalic',
    inter_bold: 'Inter-Bold', // 700
    inter_boldItalic: 'Inter-BoldItalic',
    inter_extraBold: 'Inter-ExtraBold', // 800
    inter_extraBoldItalic: 'Inter-ExtraBoldItalic',
    inter_extraLight: 'Inter-ExtraLight', // 200
    inter_extraLightItalic: 'Inter-ExtraLightItalic',
    inter_italic: 'Inter-Italic',
    inter_light: 'Inter-Light', // 300
    inter_lightItalic: 'Inter-LightItalic',
    inter_medium: 'Inter-Medium', // 500
    inter_mediumItalic: 'Inter-MediumItalic',
    inter_mediumRegular: 'Inter-Regular',
    inter_mediumSemiBold: 'Inter-SemiBold',
    inter_mediumSemiBoldItalic: 'Inter-SemiBoldItalic',
    inter_mediumThin: 'Inter-Thin',
    inter_mediumThinItalic: 'Inter-ThinItalic',
    inter_regular: 'Inter-Regular', // 400
    inter_semiBold: 'Inter-SemiBold', // 600
    inter_semiBoldItalic: 'Inter-SemiBoldItalic',
  },
  fontSize: {
    // small
    sm_xxxx: 2,
    sm_xxx: 4,
    sm_xx: 6,
    sm_x: 8,
    sm: 10,
    sm_ll: 12,
    sm_lll: 18,
    sm_llll: 24,
    // medium
    md_xxxx: 28,
    md_xxx: 32,
    md_xx: 36,
    md: 40,
    md_ll: 42,
    md_lll: 46,
    md_llll: 50,
    // large
    lg_xxxx: 52,
    lg_xxx: 56,
    lg_xx: 60,
    lg: 64,
    lg_ll: 70,
    lg_lll: 80,
    lg_llll: 100,
  },
  spacing: {
    null: 0,
    // small
    sm_xxxx: 2,
    sm_xxx: 4,
    sm_xx: 6,
    sm_x: 8,
    sm: 10,
    sm_ll: 12,
    sm_lll: 18,
    sm_llll: 24,
    // medium
    md_xxxx: 28,
    md_xxx: 32,
    md_xx: 36,
    md: 40,
    md_ll: 42,
    md_lll: 46,
    md_llll: 50,
    // large
    lg_xxxx: 52,
    lg_xxx: 56,
    lg_xx: 60,
    lg: 64,
    lg_ll: 70,
    lg_lll: 80,
    lg_llll: 100,
  },
};

// Define dark theme by extending the base theme
export const darkTheme: Theme = {
  ...baseTheme,
  colors: {
    ...appColors,
    background: '#0e141c',
    borderColor: '#333333',
    bottomNavText: '#CCCCCC',
    cardBackground: '#1A1A1A',
    darkCharcoal: '#2D2D2D',
    dotIconActive: '#ffffff',
    dotIconNotActive: '#888888',
    linearGradient: '#000000',
    midnightBlue: '#0E141C99',
    musselBlue: '#5450FF',
    sectionTitle: '#FFFFFF',
    standardGray: '#808080',
    textPrimary: '#FFFFFF',
    white: '#ffffff',
    bootstrapBlue: '#007bff',
    mediumGray: '#aaa',
    firebrickRed: '#B72B31',
    blueGray: '#262c34',
  },
};

// Define light theme by extending the base theme
export const lightTheme: Theme = {
  ...baseTheme,
  colors: {
    ...appColors,
    background: '#FFFFFF',
    borderColor: '#E0E0E0',
    bottomNavText: '#555555',
    cardBackground: '#F5F5F5',
    darkCharcoal: '#2D2D2D',
    dotIconActive: '#ffffff',
    dotIconNotActive: '#888888',
    linearGradient: '#000000',
    midnightBlue: '#0E141C99',
    musselBlue: '#5450FF',
    sectionTitle: '#000000',
    standardGray: '#808080',
    textPrimary: '#000000',
    white: '#ffffff',
    bootstrapBlue: '#007bff',
    mediumGray: '#aaa',
    firebrickRed: '#B72B31',
    blueGray: '#262c34',
  },
};
