import {Theme} from '@styles/theme';
import {StyleSheet} from 'react-native';

/**
 * @type {CSS}
 * @param theme
 * @returns
 */
export const createStyle = (theme: Theme) =>
  StyleSheet.create({
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
     * Style for selected options: Highlighted with blue background and rounded corners.
     */
    selectedOption: {
      alignItems: 'center', // Center content horizontally
      backgroundColor: '#007AFF', // Highlighted background color (blue)
      borderRadius: theme.spacing.sm_xxx + 1, // Rounded corners for selected option
      flexDirection: 'row', // Align text and icon horizontally
      justifyContent: 'center', // Center the option horizontally
      marginBottom: theme.spacing.sm, // Space below selected option
      padding: theme.spacing.sm, // Add padding around the selected option
      width: theme.spacing.lg_llll, // Fixed width for selected option
    },

    /**
     * Style for the text inside the option button
     */
    optionText: {
      color: 'white', // White text color for better contrast
      fontSize: theme.spacing.sm_lll - theme.spacing.sm_xxxx, // Font size for option text
    },

    /**
     * Style for the selected text in the option button
     */
    selectedText: {
      marginLeft: theme.spacing.sm, // Add space between the icon and the text for selected options
    },

    /**
     * Button for each tab in the settings modal (quality/speed tabs).
     */
    tabButton: {
      // marginRight: theme.spacing.sm, // Space between the tab buttons
      padding: theme.spacing.sm_lll - theme.spacing.sm_xxxx, // Add padding inside each tab button
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
      color: '#fff', // White text for tabs
      fontSize: theme.spacing.sm_lll - theme.spacing.sm_xxxx, // Font size for tab text
    },

    /**
     * Container for tabs, including the underline effect for the selected tab.
     */
    tabsContainer: {
      alignItems: 'flex-start', // Align tabs to the left
      borderBottomColor: '#fff', // White underline color for active tab
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
