import React, {createContext, useEffect, useState} from 'react';

import {darkTheme, lightTheme, Theme} from '@styles/theme';
import {useColorScheme} from 'react-native';
import {ThemeContextType, ThemeProviderProps} from './types';

/**
 * @type {Hook} Defining the default context value for the theme
 * @param theme
 * @param toggleTheme
 */
export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {}, // Default empty function
});

/**
 * @type {Component} ThemeProvider component to manage theme state and provide context
 * @param param0
 * @returns
 */
export const ThemeProviderContext: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const colorScheme = useColorScheme(); // 'light' or 'dark'

  // State to hold the current theme
  const [theme, setTheme] = useState<Theme>(
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  // Effect to update the theme based on the current state
  useEffect(() => {
    // setTheme(colorScheme === 'dark' ? darkTheme : lightTheme); // Un-comment this code later
    setTheme(darkTheme);
  }, [colorScheme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    // setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme)); // Un-comment this code later
    setTheme(darkTheme);
  };

  // Returning the ThemeContext provider with the current theme and toggle function
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
