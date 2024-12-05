import {StyleSheet} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    dotsContainer: {
      alignSelf: 'center',
      bottom: theme.spacing.sm,
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: theme.spacing.sm_ll,
      marginTop: theme.spacing.sm,
      position: 'absolute',
      zIndex: 1,
    },
    dotStyle: {
      alignSelf: 'center',
      borderRadius: theme.spacing.sm_x,
      margin: theme.spacing.sm_xxx,
      // transition: 'width 0.3s ease',
    },
    header: {
      height: theme.spacing.lg_llll * 5,
    },
    topGradient: {
      position: 'absolute',
      width: '100%',
      height: '30%',
      top: theme.spacing.null,
    },
    bottomGradient: {
      position: 'absolute',
      width: '100%',
      height: '30%',
      bottom: theme.spacing.null,
      justifyContent: 'flex-end',
    },
  });
};
