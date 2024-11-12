import {ReactNode} from 'react';
import {Theme} from '@styles/theme';

/**
 * Define the shape of the ThemeContext
 */
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

/**
 * Define the type for the ThemeProviderContext's props
 */
export interface ThemeProviderProps {
  children: ReactNode;
}
