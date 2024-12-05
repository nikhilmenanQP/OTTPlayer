import {Theme} from '@context/ThemeProviderContext/types';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    horiZontalRule: {
      alignSelf: 'center',
      backgroundColor: theme.colors.standardGray,
      height: 0.5,
      width: '100%',
    },
    moreText: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_bold,
      fontSize: theme.spacing.sm_ll + 2,
      letterSpacing: 1,
      paddingVertical: theme.spacing.sm_lll,
      textTransform: 'uppercase',
    },
  });
