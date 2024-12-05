import {Theme} from '@context/ThemeProviderContext/types';
import {StyleSheet, ViewStyle} from 'react-native';

/**
 * @type {CSS}
 * @param theme
 * @returns
 */
export const alignSelf = (isFirst: boolean, isLast: boolean) => {
  if (isFirst) {
    return 'flex-start';
  } else if (isLast) {
    return 'flex-end';
  } else {
    return 'center';
  }
};

export const createStyle = (theme: Theme) => {
  const outerCircleStyle = {
    borderRadius: theme.spacing.lg_llll,
    height: theme.spacing.md_xx,
    justifyContent: 'center',
    marginBottom: theme.spacing.sm_llll,
    overflow: 'hidden',
    width: theme.spacing.md_xx,
  };

  return StyleSheet.create({
    /**
     * Modal container style: Sets the background color and ensures the modal takes up the full screen.
     */
    modalContainer: {
      backgroundColor: theme.colors.black_50, // Modal background with slight transparency
      flex: 1, // Full-screen modal
    },

    /**
     * Close button style: Positioned to the top-right corner with transparent background and rounded shape.
     */
    closeButton: {
      alignItems: 'center', // Center icon inside the button
      backgroundColor: theme.colors.standardGray_32, // Semi-transparent gray background
      borderRadius: theme.spacing.lg_llll, // Round button
      justifyContent: 'center', // Center icon vertically
      padding: theme.spacing.sm_lll - theme.spacing.sm_xxxx, // Add padding around the button
    },

    /**
     * Container for the list of options, applied to both quality and speed options lists.
     */
    flatListContainer: {
      flexDirection: 'row', // Arrange items in a row (horizontal scrolling for speed options)
      flexWrap: 'wrap', // Allow wrapping to new lines if needed
      paddingVertical: theme.spacing.sm_lll - theme.spacing.sm_xxxx, // Add vertical padding
      width: '100%', // Full width of the container
    },

    innerCheckCircle: {
      backgroundColor: theme.colors.white, // White background color when the circle is checked
      borderRadius: theme.spacing.lg_llll, // Large border radius to make the circle fully rounded
      padding: theme.spacing.sm, // Small padding for inner content when selected
    },

    innerUncheckCircle: {
      backgroundColor: theme.colors.white, // White background color for the unchecked circle (same as the checked state for consistency)
      borderRadius: theme.spacing.lg_llll, // Large border radius to maintain the circular shape
      padding: theme.spacing.sm_x, // Slightly smaller padding when the circle is not selected
    },

    /**
     * Style for each option item in the list (both quality and speed options).
     */
    option: {
      alignItems: 'center', // Center content horizontally
      backgroundColor: 'transparent', // Transparent background by default
      flexDirection: 'row', // Align text and icon horizontally
      justifyContent: 'center', // Center the option horizontally
      marginBottom: theme.spacing.sm, // Space below each option
      padding: theme.spacing.sm, // Add padding around the option
      width: theme.spacing.lg_llll, // Set fixed width for each option button
    },

    /**
     * Style for the text inside the option button
     */
    optionText: {
      color: 'white', // White text color for better contrast
      fontSize: theme.spacing.sm_lll - theme.spacing.sm_xxxx, // Font size for option text
      fontFamily: theme.fontFamily.inter_semiBold,
    },

    outerCheckCircle: {
      ...outerCircleStyle, // Inherits common circle styles (e.g., size, shape)
      borderColor: theme.colors.bootstrapBlue, // White border to indicate the circle is selected
      borderWidth: theme.spacing.sm_xxxx, // Thin border to enhance the visual distinction of the selected state
    } as ViewStyle, // Explicitly asserting this object as ViewStyle for TypeScript compatibility

    outerUncheckCircle: {
      ...outerCircleStyle, // Inherits common circle styles for consistency
      borderColor: 'transparent', // No visible border when the circle is unselected
      borderWidth: theme.spacing.null, // No border width for unselected state
    } as ViewStyle, // Explicitly asserting this object as ViewStyle for TypeScript compatibility

    playbackContentContainer: {
      alignItems: 'flex-start', // Align items to the start of the cross-axis (top for a row layout)
      flex: 1, // Take up full available space
      flexDirection: 'row', // Arrange child elements horizontally
      justifyContent: 'space-between', // Distribute space evenly between elements
    },

    playbackListHeader: {
      backgroundColor: 'white', // White background for the header section
      height: theme.spacing.sm_xxxx, // Define the height of the header for spacing purposes
      marginTop: theme.spacing.sm_lll, // Add margin to space the header from the top
      position: 'absolute', // Make the header positioned absolutely within its container
      width: '100%', // Ensure the header spans the full width of the container
    },

    /**
     * Style for selected options: Highlighted with blue background and rounded corners.
     */
    selectedOption: {
      alignItems: 'center', // Center content horizontally
      backgroundColor: theme.colors.bootstrapBlue, // Highlighted background color (blue)
      borderRadius: theme.spacing.sm_xxx + 1, // Rounded corners for selected option
      flexDirection: 'row', // Align text and icon horizontally
      justifyContent: 'center', // Center the option horizontally
      marginBottom: theme.spacing.sm, // Space below selected option
      padding: theme.spacing.sm, // Add padding around the selected option
      width: theme.spacing.lg_llll, // Fixed width for selected option
    },

    /**
     * Style for the selected text in the option button
     */
    selectedText: {
      marginLeft: theme.spacing.sm, // Add space between the icon and the text for selected options
      color: 'white', // White text color for better contrast
      fontSize: theme.spacing.sm_lll - theme.spacing.sm_xxxx, // Font size for option text
      fontFamily: theme.fontFamily.inter_extraBold,
    },

    /**
     * Button for each tab in the settings modal (quality/speed tabs).
     */
    tabButton: {
      // marginRight: theme.spacing.sm, // Space between the tab buttons
      padding: theme.spacing.sm_lll - theme.spacing.sm_xxxx, // Add padding inside each tab button
      alignItems: 'center',
      justifyContent: 'center',
    },

    /**
     * Row for tabs (quality and speed), arranged horizontally.
     */
    tabRow: {
      flexDirection: 'row', // Arrange tabs in a row
    },

    /**
     * Text style for tab buttons (quality/speed tabs).
     */
    tabText: {
      color: theme.colors.standardGray, // White text for tabs
      fontSize: theme.spacing.sm_llll - theme.spacing.sm_xxx, // Font size for tab text
      fontFamily: theme.fontFamily.inter_medium,
      textAlign: 'center',
    },

    tabSelectedText: {
      color: theme.colors.white, // White text for tabs
      fontSize: theme.spacing.sm_llll + theme.spacing.sm_xxxx, // Font size for tab text
      fontFamily: theme.fontFamily.inter_medium,
      textAlign: 'center',
    },

    /**
     * Container for tabs, including the underline effect for the selected tab.
     */
    tabsContainer: {
      alignItems: 'flex-start', // Align tabs to the left
      borderBottomColor: theme.colors.white, // White underline color for active tab
      borderBottomWidth: 0.2, // Thin border to represent active tab
      flexDirection: 'row', // Arrange tabs in a row
      justifyContent: 'space-between', // Distribute space evenly between tabs
      marginBottom: theme.spacing.sm_lll + theme.spacing.sm_xxxx, // Space below the tabs
    },

    /**
     * Underline effect for the selected tab (animated width and position).
     */
    underline: {
      backgroundColor: theme.colors.white, // White underline color
      height: theme.spacing.sm_xxxx, // Height of the underline
      left: theme.spacing.null, // Start from the left of the tab container
      position: 'absolute', // Positioned absolutely within the tab container
      bottom: theme.spacing.null, // Align at the bottom of the tab
    },
  });
};
