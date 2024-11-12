import {ThemeContext} from '@context/ThemeProviderContext';
import {useContext} from 'react';

/**
 * @type {Hook} Custom hook to use the theme context
 * @returns function
 */
export const useAppTheme = () => useContext(ThemeContext);
