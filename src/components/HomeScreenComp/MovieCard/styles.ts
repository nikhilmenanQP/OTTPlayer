import {Theme} from '@styles/theme';
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

export const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    card: {
      marginRight: theme.spacing.sm,
      marginVertical: theme.spacing.sm,
    } as ViewStyle,

    cardSubTitle: {
      color: theme.colors.bottomNavText,
      fontSize: theme.spacing.sm_ll + 1,
      marginTop: theme.spacing.sm_xxx,
    } as ViewStyle,

    cardTitle: {
      alignSelf: 'flex-start',
      color: theme.colors.white,
      fontSize: theme.spacing.sm_ll + 1,
      marginTop: theme.spacing.sm_x,
      textAlign: 'center',
    } as TextStyle,

    section: {
      marginTop: theme.spacing.sm_lll + 2,
      paddingLeft: theme.spacing.sm_ll + 2,
    } as ViewStyle,

    sectionTitle: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_semiBold,
      fontSize: theme.fontSize.sm_ll,
      letterSpacing: theme.spacing.sm_xxxx,
      textTransform: 'uppercase',
    } as TextStyle,

    // Conditionally style the card based on whether it's for Continue Watching or WatchList
    cardNarrow: {
      borderRadius: theme.spacing.sm_xx,
      height: theme.spacing.lg_llll + theme.spacing.lg_lll,
      width: theme.spacing.lg_llll + theme.spacing.sm_lll,
    } as ImageStyle,

    cardWide: {
      borderRadius: theme.spacing.sm_xx,
      height: theme.spacing.lg_lll + theme.spacing.sm_lll,
      width: theme.spacing.lg_llll + theme.spacing.lg_lll,
    } as ImageStyle,
  });
};
