import {Theme} from '@styles/theme';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: theme.spacing.null,
      width: '100%',
      zIndex: 1,
    },
    options: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: theme.spacing.sm_lll,
    },
    optionsContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      paddingBottom: theme.spacing.md_xxx,
      paddingTop: theme.spacing.sm_lll,
      paddingHorizontal: theme.spacing.sm_llll,
    },
    optionsText: {
      paddingLeft: theme.spacing.sm,
      color: theme.colors.white,
    },
    slider: {
      flex: 1,
    },
    sliderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.sm_llll,
    },
    time: {
      color: theme.colors.white,
      fontSize: theme.spacing.sm_ll + theme.spacing.sm_xxxx,
    },
    timeContainer: {
      flexDirection: 'row',
      paddingLeft: theme.spacing.sm,
    },
  });
