import {StyleSheet, TextStyle} from 'react-native';
import {Theme} from '@styles/theme';

export const createStyle = (theme: Theme, isFullScreen: boolean = true) =>
  StyleSheet.create({
    subTitle: {
      alignSelf: 'center',
      backgroundColor: theme.colors.black_32,
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_medium,
      fontSize: theme.fontSize.sm_lll,
      letterSpacing: 1,
      lineHeight: theme.fontSize.sm_llll,
      marginHorizontal: isFullScreen ? theme.spacing.lg_llll : theme.spacing.sm_llll,
      textAlign: 'center',
    } as TextStyle,
  });
