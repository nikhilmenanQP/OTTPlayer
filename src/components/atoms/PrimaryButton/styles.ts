import {Theme} from '@context/ThemeProviderContext/types';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    watchNowBtn: {
      alignItems: 'center',
      backgroundColor: theme.colors.bootstrapBlue,
      borderRadius: theme.spacing.sm_xxx,
      flexDirection: 'row',
      justifyContent: 'center',
      marginHorizontal: theme.spacing.sm_lll,
      padding: theme.spacing.sm_lll,
    },
    watchNowBtnText: {
      color: theme.colors.white,
      fontSize: theme.fontSize.sm_ll + 4,
      marginLeft: theme.spacing.sm_ll,
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  });
