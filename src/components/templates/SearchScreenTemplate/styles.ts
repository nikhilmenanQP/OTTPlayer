import {StyleSheet, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    appHeaderStyle: {
      position: 'relative',
    } as ViewStyle,

    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingHorizontal: theme.spacing.sm_lll,
    } as ViewStyle,
  });
