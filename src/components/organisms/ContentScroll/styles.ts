import {Theme} from '@context/ThemeProviderContext/types';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    contentContainer: {
      paddingBottom: theme.spacing.lg_llll + theme.spacing.sm,
    },
    descriptionContainer: {
      paddingHorizontal: theme.spacing.sm_lll,
      paddingTop: theme.spacing.sm_xxx,
    },
    descriptionText: {
      color: theme.colors.bottomNavText,
      fontFamily: theme.fontFamily.inter_light,
      fontSize: theme.spacing.sm_ll + 2,
      letterSpacing: 0.5,
      lineHeight: theme.spacing.sm_lll,
    },
    scrollView: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    showMoreText: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_bold,
      fontSize: theme.spacing.sm_ll + 2,
      letterSpacing: 0.5,
      lineHeight: theme.spacing.sm_lll,
      marginTop: theme.spacing.sm_xxxx,
    },
  });
