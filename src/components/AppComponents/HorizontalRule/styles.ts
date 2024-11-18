import {Theme} from '@styles/theme';
import {StyleSheet, ViewStyle} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    horiZontalRule: {
      alignSelf: 'center',
      backgroundColor: theme.colors.standardGray,
      height: 0.5,
      marginBottom: theme.spacing.sm_lll,
      marginTop: theme.spacing.sm_lll,
      width: '100%',
    } as ViewStyle,
  });
