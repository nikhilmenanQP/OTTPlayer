import {Theme} from '@context/ThemeProviderContext/types';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native'; // Importing StyleSheet for creating styles

/**
 * Function to create styles dynamically based on the current theme
 * @param {Theme} theme - The current theme object that provides colors, spacing, and fonts
 * @returns {Object} - A collection of styles based on the theme
 */
export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    /**
     * Style for the genre button
     * - Centers content horizontally and vertically
     * - Uses theme.spacing for dynamic spacing and dimensions
     */
    genreButton: {
      alignItems: 'center', // Center content horizontally
      borderRadius: theme.spacing.md, // Rounded corners using theme spacing
      height: theme.spacing.lg_lll, // Height based on theme.spacing value
      justifyContent: 'center', // Center content vertically
      marginRight: theme.spacing.sm, // Space between buttons (right side)
      width: theme.spacing.lg_lll, // Width based on theme.spacing value
    } as ViewStyle,

    /**
     * Style for the genre list container
     * - Adds padding at the bottom of the list for spacing
     */
    genreList: {
      paddingBottom: 20, // Adds spacing around the bottom of the genre list
    } as ViewStyle,

    /**
     * Text style for genre names
     * - Uses white color, bold font, and uppercase transformation
     * - Dynamic font size from the theme.fontSize property
     */
    genreText: {
      color: theme.colors.white, // White text color based on the theme
      fontFamily: theme.fontFamily.inter_bold, // Bold font from theme
      fontSize: theme.fontSize.sm_ll, // Dynamic font size from theme
      letterSpacing: 1, // Adds spacing between letters
      textTransform: 'uppercase', // Converts text to uppercase for consistency
    } as TextStyle,

    /**
     * Style for the "Explore Genres" heading text
     * - Semi-bold font and dynamic margin values
     * - Ensures readability and consistency with the theme
     */
    exploreText: {
      color: theme.colors.white, // White color text for better contrast
      fontFamily: theme.fontFamily.inter_semiBold, // Semi-bold font for emphasis
      fontSize: theme.fontSize.sm_ll + 1, // Slightly larger font size than genre text
      letterSpacing: 1, // Letter spacing for readability
      marginBottom: theme.spacing.sm_lll, // Bottom margin for spacing
      marginTop: theme.spacing.md_xxx, // Top margin for spacing from other elements
      textTransform: 'uppercase', // Uppercase for consistency in UI
    } as TextStyle,

    /**
     * Style for the selected genre button
     * - Adds a border when the genre is selected to provide visual feedback
     */
    selectedGenreButton: {
      borderColor: theme.colors.standardGray, // Gray border for selected state
      borderWidth: 0.3, // Thin border for subtle emphasis
    } as ViewStyle,
  });
