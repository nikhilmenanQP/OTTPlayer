// import {Theme} from '@styles/theme';
import {Theme} from '@context/ThemeProviderContext/types';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    // Button Section
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

    // Account Section
    accountSection: {
      backgroundColor: theme.colors.blueGray,
      borderRadius: theme.spacing.sm_xx,
      marginVertical: theme.spacing.sm_ll,
      padding: theme.spacing.sm_ll + 3,
    },

    // Info Section
    infoRow: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    infoText: {
      color: theme.colors.white,
      marginBottom: theme.spacing.sm_xxxx,
    },

    // Text styles
    changePasswordText: {
      color: theme.colors.white,
      fontSize: theme.spacing.sm_ll + theme.spacing.sm_xxxx,
      fontFamily: theme.fontFamily.inter_medium,
    },
    editButton: {
      color: theme.colors.white,
      fontSize: theme.fontSize.sm_ll + theme.fontSize.sm_xxxx,
      fontFamily: theme.fontFamily.inter_medium,
    },
    planText: {
      fontSize: theme.fontSize.sm_ll,
      letterSpacing: 0.5,
    },
    activePlan: {
      color: theme.colors.appleGreen,
      fontSize: theme.spacing.sm_lll - theme.spacing.sm_xxxx,
      fontWeight: 'bold',
      marginTop: theme.spacing.sm_x,
    },
    noActivePlan: {
      color: theme.colors.appleRed,
      fontSize: theme.spacing.sm_lll - theme.spacing.sm_xxxx,
      fontWeight: 'bold',
      marginTop: theme.spacing.sm_x,
    },

    // Miscellaneous
    container: {
      flex: 1,
      padding: theme.spacing.sm_ll + theme.spacing.sm_xxxx,
    },
    horizontalRule: {
      height: 0.2,
      marginVertical: theme.spacing.sm,
    },
  });
