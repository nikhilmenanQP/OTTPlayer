import {Dimensions, ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

const {width} = Dimensions.get('window');

/**
 * Function to create styles based on the provided theme and insets
 * @param theme
 * @param insets
 * @returns {} StyleSheet Object
 */
export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    appHeaderContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      height: theme.spacing.md_llll,
      justifyContent: 'center',
      marginHorizontal: theme.spacing.sm_lll,
      marginTop: insets.top,
      position: 'absolute',
      width: '90%',
      zIndex: 1,
    } as ViewStyle,

    backButtonContainer: {
      backgroundColor: theme.colors.midnightBlue,
      borderRadius: theme.spacing.lg_llll,
      left: theme.spacing.null,
      padding: theme.spacing.sm_ll + 2,
      position: 'absolute',
    } as ViewStyle,

    profileIconStyle: {
      borderRadius: theme.spacing.lg_llll,
    } as ImageStyle,

    profileName: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_bold,
      fontSize: theme.spacing.sm_lll - 2,
      letterSpacing: 1,
      maxWidth: width * 0.65,
      textTransform: 'uppercase',
    } as TextStyle,

    showMenuContainer: {
      alignItems: 'center',
      borderColor: theme.colors.musselBlue,
      borderRadius: theme.spacing.lg_llll,
      borderWidth: theme.spacing.sm_xxxx,
      height: theme.spacing.md_llll,
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'absolute',
      right: theme.spacing.null,
      width: theme.spacing.md_llll,
    } as ViewStyle,
  });
};
