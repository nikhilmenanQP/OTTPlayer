import {Theme} from '@context/ThemeProviderContext/types';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    actionBtn: {
      alignItems: 'center',
    },
    actionBtnText: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_bold,
      fontSize: theme.fontSize.sm,
      letterSpacing: 1,
      marginTop: theme.spacing.sm_x,
      textTransform: 'uppercase',
    },
  });
