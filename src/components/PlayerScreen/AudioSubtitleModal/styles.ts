import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {Theme} from '@styles/theme'; // Assuming you have a Theme type defined
import {Styles} from './types';

export const ICON_SIZE = 13;

// Create styles using the Theme object
export const createStyle = (theme: Theme): Styles =>
  StyleSheet.create<Styles>({
    /**
     * Modal background style with semi-transparent black color
     * Used for darkening the background when the modal is active
     */
    modalContainer: {
      flex: 1, // Take full height
      backgroundColor: theme.colors.black_50, // Semi-transparent black background
    },

    /**
     * Close button style
     * Circular button with centered icon or text for closing the modal
     */
    closeButton: {
      padding: theme.spacing.sm_lll - theme.spacing.sm_xxxx, // Button padding for touchable area
      backgroundColor: theme.colors.standardGray_32, // Grey background with some transparency
      borderRadius: theme.spacing.lg_llll, // Fully circular button
      justifyContent: 'center', // Center content vertically
      alignItems: 'center', // Center content horizontally
    },

    /**
     * Container for the options (audio/subtitles)
     * It arranges the options horizontally and wraps them if necessary
     */
    optionContainer: {
      flexDirection: 'row', // Items arranged in a row
      flexWrap: 'wrap', // Allow items to wrap to the next line if needed
      paddingVertical: theme.spacing.sm_lll - theme.spacing.sm_xxxx, // Padding on top and bottom of the container
      width: '100%', // Full width container
    },

    /**
     * Each option (audio/subtitles) button style
     * Contains text and/or icon with background and padding
     */
    optionItem: {
      alignItems: 'center', // Center text/icon horizontally
      backgroundColor: theme.colors.bootstrapBlue, // Blue background color
      borderRadius: theme.spacing.sm_xxx + 1, // Rounded corners for the button
      flexDirection: 'row', // Horizontal alignment for content
      justifyContent: 'center', // Center content inside the button
      marginBottom: theme.spacing.sm, // Space between rows of buttons
      marginRight: theme.spacing.sm, // Space between items in the same row
      padding: theme.spacing.sm, // Padding inside the button for better touchable area
      width: theme.spacing.lg_llll, // Fixed width for each option button
    },

    /**
     * Text inside each option button (audio/subtitles)
     * Styled with white color, bold, and centered
     */
    optionText: {
      color: theme.colors.white, // White text color from theme
      fontSize: theme.fontSize.sm_ll + 1, // Slightly smaller font size
      fontFamily: theme.fontFamily.inter_bold, // Bold text for emphasis
      textAlign: 'center', // Center-align text inside the button
    },

    /**
     * Tab button style (audio or subtitles tab)
     * Padding applied to make the tab more touch-friendly
     */
    tabButton: {
      padding: theme.spacing.sm_lll - theme.spacing.sm_xxxx, // Padding around the tab button to increase touch area
    },

    /**
     * Row layout for the tabs (audio and subtitles)
     * Arranges tabs horizontally
     */
    tabRow: {
      flexDirection: 'row', // Tabs aligned horizontally in a row
    },

    /**
     * Text inside the tab buttons (audio or subtitles)
     * Styled with theme color, medium font size, and centered
     */
    tabText: {
      color: theme.colors.white, // White text color from theme
      fontSize: theme.spacing.sm_lll - theme.spacing.sm_xxxx, // Medium-sized font for tab labels
      textAlign: 'center', // Center-align text within the tab
      width: theme.spacing.lg_lll, // Fixed width to ensure consistent size across tabs
    },

    /**
     * Container for the tab buttons (audio/subtitles)
     * Includes a bottom border as a visual indicator for the active tab
     */
    tabsContainer: {
      alignItems: 'flex-start', // Align the tabs to the left
      borderBottomColor: theme.colors.white, // White color for the active tab underline
      borderBottomWidth: 0.2, // Thin underline for the tab container
      flexDirection: 'row', // Horizontal layout for the tabs
      justifyContent: 'space-between', // Space tabs evenly across the container
      marginBottom: theme.spacing.sm_lll + theme.spacing.sm_xxxx, // Margin below the tabs for separation from content
    },

    /**
     * Underline for the active tab (audio or subtitles)
     * Positioned at the bottom of the active tab
     */
    underline: {
      backgroundColor: theme.colors.white, // White underline for the active tab
      height: theme.spacing.sm_xxxx + 1, // Thickness of the underline
      position: 'absolute', // Positioned absolutely to overlap the tab container
      bottom: theme.spacing.null, // Positioned at the bottom of the tab container
    },
  });
