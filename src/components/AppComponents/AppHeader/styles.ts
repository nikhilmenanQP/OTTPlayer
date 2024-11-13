import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {Theme} from '@styles/theme';

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    appHeaderContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      height: theme.spacing.md_llll,
      justifyContent: 'center',
      marginHorizontal: theme.spacing.sm_lll,
      marginTop: insets.top,
    } as ViewStyle,

    backButtonContainer: {
      backgroundColor: theme.colors.midnightBlue,
      borderRadius: theme.spacing.lg_llll,
      left: theme.spacing.null,
      padding: theme.spacing.sm_ll + 2,
      position: 'absolute',
    } as ViewStyle,

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

    profileIconStyle: {
      borderRadius: theme.spacing.lg_llll,
    } as ImageStyle,
  });
};
