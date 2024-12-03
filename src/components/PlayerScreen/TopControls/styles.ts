import {StyleSheet} from 'react-native';
import {Styles} from './types';
import {Theme} from '@styles/theme';

// Create the style sheet
export const createStyle = (theme: Theme): Styles =>
  StyleSheet.create({
    // General Icon Style
    iconStyle: {
      backgroundColor: theme.colors.black_32,
      borderRadius: theme.spacing.md_llll, // Simplified value for clarity
      marginHorizontal: theme.spacing.sm_x,
      padding: theme.spacing.sm_x,
    },

    // Main container to hold controls
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      position: 'absolute',
      top: theme.spacing.null,
      width: '100%',
      zIndex: 1,
    },

    // Movie Info Styling
    movieInfo: {
      paddingHorizontal: theme.spacing.sm,
    },
    movieTitle: {
      color: theme.colors.white,
      fontSize: theme.fontSize.sm * 2,
      fontFamily: theme.fontFamily.inter_semiBold,
    },
    movieGenre: {
      color: theme.colors.white,
      fontSize: theme.fontSize.sm_lll - 2,
      fontFamily: theme.fontFamily.inter_regular,
    },

    // Controls Layout
    leftControl: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.sm_lll - 2,
      paddingVertical: theme.spacing.sm_lll,
    },
    rightControl: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.sm_lll - 2,
      paddingVertical: theme.spacing.sm_lll,
    },
  });
