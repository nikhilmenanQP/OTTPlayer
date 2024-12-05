import {Theme} from '@context/ThemeProviderContext/types';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    bottomGradient: {
      bottom: theme.spacing.null,
      height: '20%',
      justifyContent: 'flex-end',
      position: 'absolute',
      width: '100%',
    },
    movieBanner: {
      width: '100%',
      height: theme.spacing.lg_llll * 5,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    movieInfoText: {
      color: theme.colors.white,
      zIndex: 1,
      marginBottom: theme.spacing.sm_llll,
      textTransform: 'uppercase',
      letterSpacing: theme.spacing.sm_xxxx,
      fontSize: theme.fontSize.sm_ll,
    },
    topGradient: {
      position: 'absolute',
      width: '100%',
      height: '30%',
      top: theme.spacing.null,
      justifyContent: 'flex-start',
    },
  });
