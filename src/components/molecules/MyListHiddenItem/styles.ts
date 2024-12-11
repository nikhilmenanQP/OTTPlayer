import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    deleteButton: {
      alignItems: 'center',
      backgroundColor: theme.colors.firebrickRed,
      height: theme.spacing.lg_llll,
      justifyContent: 'center',
      width: theme.spacing.lg_llll,
    } as ViewStyle,

    deleteIcon: {
      marginBottom: theme.spacing.sm_x,
    } as ViewStyle,

    deleteText: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_regular,
      fontSize: theme.spacing.sm_ll + 1,
    } as TextStyle,

    hiddenItem: {
      alignItems: 'flex-end',
      height: theme.spacing.lg_llll,
      marginBottom: theme.spacing.sm,
    } as ViewStyle,
  });
