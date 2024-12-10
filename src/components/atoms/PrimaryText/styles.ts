import {Theme} from '@context/ThemeProviderContext/types';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.primary,
      fontFamily: theme.fontFamily.primary,
      fontSize: theme.fontSize.medium,
      lineHeight: theme.spacing.sm_llll,
    },
  });
