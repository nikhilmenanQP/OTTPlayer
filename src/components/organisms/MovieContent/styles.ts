import {Theme} from '@context/ThemeProviderContext/types';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native'; // Import StyleSheet to create styles for React Native components

/**
 * This function generates styles for the MovieContent component using the provided theme.
 * The styles are optimized for layout, error handling, and visual consistency.
 * @param {Theme} theme - The theme object containing colors, fonts, and other design-related properties.
 * @returns {object} The styles object containing different style rules for the component.
 */
export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    /**
     * Style for the section container.
     * This ensures the section takes up all available space and adds top and bottom margins for proper spacing.
     */
    sectionContainerStyle: {
      flex: 1, // Allows the container to take up all available space in the parent container
      marginTop: theme.spacing.sm, // Adds top margin to give spacing from the top
      paddingBottom: theme.spacing.lg_llll, // Adds bottom padding for additional spacing at the bottom
    } as ViewStyle,

    /**
     * Styles related to error handling (shown when no results are found or an error occurs)
     * Container for displaying error messages.
     * It centers the content both vertically and horizontally and adds padding for spacing.
     */
    errorContainer: {
      alignItems: 'center', // Centers the content horizontally
      justifyContent: 'center', // Centers the content vertically
      padding: theme.spacing.sm_lll, // Adds padding inside the container for spacing
    } as ViewStyle,

    /**
     * Gradient background style for error state.
     * Uses the theme color for a consistent visual appearance across the app.
     * The border radius and margin provide visual separation and rounded edges.
     */
    errorGradient: {
      backgroundColor: theme.colors.charcoalGray, // Sets a consistent background color from the theme
      borderRadius: theme.spacing.sm_xxx, // Adds rounded corners to the error container
      marginVertical: theme.spacing.sm_lll, // Adds margin around the error container for spacing
    } as ViewStyle,

    /**
     * Style for the error message text.
     * Uses a light gray color to ensure good contrast for readability.
     */
    errorMessage: {
      color: theme.colors.mediumGray, // Light gray color for the text
      fontSize: theme.fontSize.sm_ll + theme.fontSize.sm_xxxx, // Smaller font size for error messages
      textAlign: 'center', // Centers the error message text within its container
    } as TextStyle,

    /**
     * Style for the "no results" text when a search yields no results.
     * The white text color makes it stand out against the darker background.
     */
    noResultsText: {
      color: theme.colors.white, // White text color for high contrast on dark background
      fontSize: theme.fontSize.sm_lll, // Larger font size to highlight the message
      marginVertical: theme.spacing.sm, // Vertical margin to space the message out from surrounding elements
    } as TextStyle,
  });
