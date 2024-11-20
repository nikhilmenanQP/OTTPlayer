import {StyleSheet, ViewStyle} from 'react-native';
import {Theme} from '@styles/theme';

/**
 * Creates a set of styles for the screen components.
 * The styles are dynamically based on the provided theme.
 * @param {Theme} theme - The current theme, containing color and style information.
 * @returns {Object} The generated styles object.
 */
export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    /**
     * Style for the app header.
     * Positioned relative for any child components or absolute positioning inside it.
     */
    appHeaderStyle: {
      position: 'relative',
    } as ViewStyle,

    /**
     * Main container style for the screen.
     * Applies the background color based on the current theme and ensures it fills the screen.
     * Also applies horizontal padding for layout spacing.
     */
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingHorizontal: theme.spacing.sm_lll,
    } as ViewStyle,
  });
