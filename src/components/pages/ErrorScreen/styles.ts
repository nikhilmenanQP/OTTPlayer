import {StyleSheet} from 'react-native';
import {Styles} from './types';
// import {Theme} from '@styles/theme';
import {Theme} from '@context/ThemeProviderContext/types';

// Define types for ICON_SIZE to ensure that all icon sizes are consistent numbers
export const ICON_SIZE: {[key: string]: number} = {
  refresh: 18, // Size of the refresh icon
  danger: 50, // Size of the danger icon
  close: 14, // Size of the close button icon
};

// createStyle: Function that generates styles based on the provided theme.
export const createStyle = (theme: Theme): Styles => {
  /**
   * Extract common theme values to avoid repetitive access to theme properties.
   */
  const {colors, fontSize, fontFamily, spacing} = theme;

  // Reusable spacing values for consistency and easier adjustments later.
  const smSpacing = spacing.sm; // Small spacing
  const smLLSpacing = spacing.sm_ll; // Small large-left spacing
  const smLLLLSpacing = spacing.sm_llll; // Small extra-large spacing
  const mdXxSpacing = spacing.md_xx; // Medium extra-large spacing
  const mdXxxxSpacing = spacing.md_xxxx; // Medium extra-extra-large spacing
  const lgLLLLSpacing = spacing.lg_llll; // Large extra-large spacing

  /**
   * @returns StyleSheet {}
   * Return styles as an object with appropriate types
   */
  return StyleSheet.create({
    /**
     * Container style that holds all elements in the modal
     */
    container: {
      backgroundColor: colors.black_95, // Semi-transparent black background
      flex: 1, // Flexbox to fill the screen
      justifyContent: 'center', // Center the content vertically
      alignItems: 'center', // Center the content horizontally
    },

    /**
     * Style for the icon in the modal
     */
    icon: {
      marginBottom: smLLSpacing, // Space between the icon and the text
    },

    /**
     * Title text style that appears at the top of the modal
     */
    titleText: {
      textAlign: 'center', // Center the title text
      color: colors.white, // White text color for visibility on dark background
      fontSize: fontSize.sm_llll, // Font size based on theme settings
      fontFamily: fontFamily.inter_medium, // Font family from the theme
      marginBottom: smLLSpacing, // Margin below the title
    },

    /**
     * Description text style providing additional info under the title
     */
    descriptionText: {
      textAlign: 'center', // Center the description text
      color: colors.standardGray, // Use a gray color for the description
      fontSize: fontSize.sm_lll, // Slightly smaller font size for description
      marginBottom: mdXxSpacing, // Margin below the description text
    },

    /**
     * Style for the "Try again" button
     */
    button: {
      flexDirection: 'row', // Arrange icon and text horizontally
      justifyContent: 'center', // Center the button content horizontally
      alignItems: 'center', // Align the icon and text vertically
      backgroundColor: colors.bootstrapBlue, // Button background color from the theme
      paddingHorizontal: smLLLLSpacing, // Horizontal padding inside the button
      paddingVertical: smSpacing, // Vertical padding inside the button
      borderRadius: spacing.sm_xx, // Rounded corners for the button
    },

    /**
     * Text style for the "Try again" label inside the button
     */
    tryAgainText: {
      marginLeft: smSpacing, // Space between the icon and the text
      fontSize: fontSize.sm_ll + 3, // Slightly larger font size for the retry text
      fontFamily: fontFamily.inter_medium, // Font family for retry text
      color: colors.white, // White text for visibility
    },

    /**
     * Style for the close button positioned at the top right of the modal
     */
    closeButton: {
      backgroundColor: colors.standardGray_32, // Semi-transparent gray background
      padding: ICON_SIZE.close, // Padding based on the size of the close icon
      position: 'absolute', // Absolute positioning within the container
      right: mdXxxxSpacing, // Space from the right edge of the screen
      borderRadius: lgLLLLSpacing, // Large rounded corners for the button
      justifyContent: 'center', // Center the content inside the button
      alignItems: 'center', // Align the close icon in the middle of the button
    },
  });
};
