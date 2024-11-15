import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {createStyleReturnProps, createStylesProps} from './types';

export const createStyles = ({
  cardHeight,
  cardWidth,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  theme,
}: createStylesProps): createStyleReturnProps => {
  return StyleSheet.create({
    card: {
      marginBottom: marginBottom && theme.spacing.sm,
      marginLeft: marginLeft && theme.spacing.sm,
      marginRight: marginRight && theme.spacing.sm,
      marginTop: marginTop && theme.spacing.sm,
    } as ViewStyle,

    cardSubTitle: {
      color: theme.colors.bottomNavText,
      fontSize: theme.spacing.sm_ll + 1,
      marginTop: theme.spacing.sm_xxxx,
      textAlign: 'left',
    } as TextStyle,

    cardTitle: {
      alignSelf: 'flex-start',
      color: theme.colors.white,
      fontSize: theme.spacing.sm_ll + 1,
      marginTop: theme.spacing.sm_x,
      textAlign: 'left',
      width: theme.spacing.lg_llll + theme.spacing.sm_lll,
    } as TextStyle,

    section: {
      // marginTop: theme.spacing.sm_lll + 2,
      // paddingLeft: theme.spacing.sm_ll + 2,
    } as ViewStyle,

    sectionTitle: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_semiBold,
      fontSize: theme.fontSize.sm_ll,
      letterSpacing: theme.spacing.sm_xxxx,
      marginBottom: theme.spacing.sm,
      textTransform: 'uppercase',
    } as TextStyle,

    // Conditionally style the card based on whether it's for Continue Watching or WatchList
    cardImageNarrow: {
      borderRadius: theme.spacing.sm_xx,
      height: theme.spacing.lg_llll + theme.spacing.lg_lll,
      width: theme.spacing.lg_llll + theme.spacing.sm_lll,
    } as ImageStyle,

    cardImageWide: {
      borderRadius: theme.spacing.sm_xx,
      height: cardHeight || theme.spacing.lg_lll + theme.spacing.sm_lll,
      width: cardWidth || theme.spacing.lg_llll + theme.spacing.lg_lll,
    } as ImageStyle,
  });
};
