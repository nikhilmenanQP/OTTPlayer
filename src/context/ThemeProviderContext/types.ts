import {ReactNode} from 'react';

export interface BaseTheme {
  colors?: Record<string, string>;
  fontFamily: Record<string, string>;
  fontSize: Record<string, number>;
  spacing: Record<string, number>;
}

export interface Theme extends BaseTheme {
  colors: Record<string, string>;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
