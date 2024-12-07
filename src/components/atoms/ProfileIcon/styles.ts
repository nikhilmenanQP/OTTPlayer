import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    profileIconStyle: {
      borderRadius: theme.spacing.lg_llll,
    } as ImageStyle,

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
