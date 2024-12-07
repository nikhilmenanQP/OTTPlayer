import {StyleSheet, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    backButtonContainer: {
      backgroundColor: theme.colors.midnightBlue,
      borderRadius: theme.spacing.lg_llll,
      left: theme.spacing.null,
      padding: theme.spacing.sm_ll + 2,
      position: 'absolute',
    } as ViewStyle,
  });
};
