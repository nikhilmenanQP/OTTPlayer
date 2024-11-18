import {StyleSheet, ViewStyle} from 'react-native';
import {Theme} from '@styles/theme';

export const createStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
    } as ViewStyle,

    contentContainerStyle: {
      paddingBottom: theme.spacing.lg_llll,
    } as ViewStyle,

    headerContainerStyle: {
      position: 'absolute',
      width: '90%',
      zIndex: 1,
    } as ViewStyle,

    sectionContainer: {
      marginTop: theme.spacing.sm_lll + 2,
      paddingLeft: theme.spacing.sm_ll + 2,
    } as ViewStyle,
  });
};
