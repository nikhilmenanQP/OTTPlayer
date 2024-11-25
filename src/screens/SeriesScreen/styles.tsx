import {Theme} from '@styles/theme';
import {StyleSheet, ViewStyle} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    } as ViewStyle,

    notification: {
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.standardGray,
      borderRadius: theme.spacing.sm_ll,
      borderWidth: 1,
      height: '30%',
      justifyContent: 'center',
      padding: theme.spacing.md_xxx,
      width: '80%',
    } as ViewStyle,

    notificationText: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_medium,
      fontSize: theme.fontSize.sm_lll,
      textAlign: 'center',
    } as ViewStyle,

    scrollView: {
      backgroundColor: theme.colors.background,
      flex: 1,
    } as ViewStyle,
  });
