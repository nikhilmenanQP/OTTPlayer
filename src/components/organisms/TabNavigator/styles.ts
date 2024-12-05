// import {Theme} from '@styles/theme';
import {Theme} from '@context/ThemeProviderContext/types';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    tab: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: theme.spacing.lg_llll + theme.spacing.md_llll,
    },
    tabIndicator: {
      alignSelf: 'center',
      height: theme.spacing.sm_xxxx,
      width: '100%',
    },
    tabText: {
      fontFamily: 'inter_semiBold',
      fontSize: theme.spacing.sm_ll + 3,
      letterSpacing: 1,
      paddingVertical: theme.spacing.sm_ll,
      textTransform: 'uppercase',
    },
  });
