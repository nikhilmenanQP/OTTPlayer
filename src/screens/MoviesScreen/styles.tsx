import {Theme} from '@styles/theme';
import {StyleSheet, ViewStyle} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
    } as ViewStyle,

    contentContainerStyle: {
      paddingVertical: theme.spacing.lg_llll,
    } as ViewStyle,

    sectionContainer: {
      marginTop: theme.spacing.sm_lll + 2,
      paddingLeft: theme.spacing.sm_ll + 2,
    } as ViewStyle,
  });
