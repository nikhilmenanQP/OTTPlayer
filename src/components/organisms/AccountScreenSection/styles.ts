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
    horizontalRule: {
      height: 0.2,
      marginVertical: theme.spacing.sm,
    },
    infoRow: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    infoText: {
      color: theme.colors.white,
      marginBottom: theme.spacing.sm_xxxx,
    },
  });
