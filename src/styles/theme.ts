import {DARK_THEME_COLORS, LIGHT_THEME_COLORS} from '@constants/colors';
import {FONT_SIZE, SPACING} from '@constants/spacing';
import {FONT_FAMILY} from '@constants/fontsFamily';

type Colors = {
  [key: string]: string;
};

type FontFamily = {
  [key: string]: string;
};

type FontSize = {
  [key: string]: number;
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

// Extend the base theme with colors for light and dark themes
export type Theme = BaseTheme & {
  colors: Colors;
};

// Define the base theme with font sizes, font families, and spacing
const baseTheme: BaseTheme = {
  fontFamily: FONT_FAMILY,
  fontSize: FONT_SIZE,
  spacing: SPACING,
};

// Define dark theme by extending the base theme
export const darkTheme: Theme = {
  ...baseTheme,
  colors: DARK_THEME_COLORS,
};

// Define light theme by extending the base theme
export const lightTheme: Theme = {
  ...baseTheme,
  colors: LIGHT_THEME_COLORS,
};
