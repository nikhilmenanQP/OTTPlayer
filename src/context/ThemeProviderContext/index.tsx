import React, {createContext, useEffect, useState} from 'react';

import {BaseTheme, Theme, ThemeContextType, ThemeProviderProps} from './types';
import {DARK_THEME_COLORS, LIGHT_THEME_COLORS} from '@constants/colors';
import {FONT_FAMILY} from '@constants/fontsFamily';
import {FONT_SIZE, SPACING} from '@constants/spacing';
import {ThemeProvider} from 'styled-components/native';

import {useColorScheme} from 'react-native';

const baseTheme: BaseTheme = {
  fontFamily: FONT_FAMILY,
  fontSize: FONT_SIZE,
  spacing: SPACING,
};

export const darkTheme: Theme = {...baseTheme, colors: DARK_THEME_COLORS};
export const lightTheme: Theme = {...baseTheme, colors: LIGHT_THEME_COLORS};

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
});

/**
 * @type {Component} ThemeProvider component to manage theme state and provide context
 * @param param0
 * @returns
 */
export const ThemeProviderContext: React.FC<ThemeProviderProps> = ({children}) => {
  const colorScheme = useColorScheme(); // 'light' or 'dark'
  const [theme, setTheme] = useState<Theme>(colorScheme === 'dark' ? darkTheme : lightTheme);

  useEffect(() => {
    // setTheme(colorScheme === 'dark' ? darkTheme : lightTheme); // Un-comment this code later
    setTheme(darkTheme);
  }, [colorScheme]);

  const toggleTheme = () => {
    // setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme)); // Un-comment this code later
    setTheme(darkTheme); // Un-comment this code later. This is just for testing the default theme of application (dark).
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
