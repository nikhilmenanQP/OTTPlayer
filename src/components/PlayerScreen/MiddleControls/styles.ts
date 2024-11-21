import {Theme} from '@styles/theme';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    middlePlayerIcon: {
      alignItems: 'center',
      backgroundColor: theme.colors.black_32,
      borderRadius: theme.spacing.lg_llll,
      justifyContent: 'center',
      margin: theme.spacing.lg_xxxx,
      padding: theme.spacing.sm_ll,
    },
  });
