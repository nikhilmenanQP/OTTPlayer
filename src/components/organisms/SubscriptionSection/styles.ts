import {Theme} from '@context/ThemeProviderContext/types';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    accountSection: {
      backgroundColor: theme.colors.blueGray,
      borderRadius: theme.spacing.sm_xx,
      marginVertical: theme.spacing.sm_ll,
      padding: theme.spacing.sm_ll + 3,
    },
    activePlan: {
      color: theme.colors.appleGreen,
      fontSize: theme.spacing.sm_lll - theme.spacing.sm_xxxx,
      fontWeight: 'bold',
      marginTop: theme.spacing.sm_x,
    },
    arrowRightIcon: {
      marginRight: theme.spacing.sm_x,
    },
    buttonContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing.sm_llll,
    },
    buttonText: {
      backgroundColor: theme.colors.charcoalGray,
      borderRadius: theme.spacing.sm_xxx + 1,
      color: theme.colors.white,
      paddingHorizontal: theme.spacing.md_lll,
      paddingVertical: theme.spacing.sm,
    },
    noActivePlan: {
      color: theme.colors.appleRed,
      fontSize: theme.spacing.sm_lll - theme.spacing.sm_xxxx,
      fontWeight: 'bold',
      marginTop: theme.spacing.sm_x,
    },
    planText: {
      fontSize: theme.fontSize.sm_ll,
      letterSpacing: 0.5,
    },
  });
