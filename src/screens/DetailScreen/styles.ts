import {Theme} from '@styles/theme';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    bottomGradient: {
      position: 'absolute',
      width: '100%',
      height: '20%',
      bottom: theme.spacing.null,
      justifyContent: 'flex-end',
    },
    topGradient: {
      position: 'absolute',
      width: '100%',
      height: '30%',
      top: theme.spacing.null,
      justifyContent: 'flex-start',
    },
    actionBtnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: theme.spacing.sm_llll,
      paddingHorizontal: theme.spacing.md_xx,
    },
    actionBtn: {
      alignItems: 'center',
    },
    actionBtnText: {
      color: theme.colors.white,
      marginTop: theme.spacing.sm_x,
      fontSize: theme.fontSize.sm,
      textTransform: 'uppercase',
      fontFamily: theme.fontFamily.inter_bold,
      letterSpacing: 1,
    },
    descriptionContainer: {
      paddingHorizontal: theme.spacing.sm_lll,
      paddingVertical: theme.spacing.sm_xxx,
    },
    descriptionText: {
      color: theme.colors.bottomNavText,
      fontSize: theme.spacing.sm_ll + 2,
      fontFamily: theme.fontFamily.inter_light,
      letterSpacing: 0.5,
      lineHeight: theme.spacing.sm_lll,
    },
    showMoreText: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_bold,
      letterSpacing: 0.5,
      marginTop: theme.spacing.sm_xxxx,
      fontSize: theme.spacing.sm_ll + 2,
      lineHeight: theme.spacing.sm_lll,
    },
    watchNowBtn: {
      backgroundColor: theme.colors.bootstrapBlue,
      padding: theme.spacing.sm_lll,
      marginHorizontal: theme.spacing.sm_lll,
      borderRadius: theme.spacing.sm_xxx,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    watchNowBtnText: {
      color: theme.colors.white,
      textAlign: 'center',
      fontSize: theme.fontSize.sm_ll + 4,
      textTransform: 'uppercase',
      marginLeft: theme.spacing.sm_ll,
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
    extraSectionText: {
      color: theme.colors.white,
      fontSize: theme.spacing.sm_ll + 2,
      padding: theme.spacing.sm_lll,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontFamily: theme.fontFamily.inter_bold,
    },
    cardContainer: {
      marginRight: theme.spacing.sm,
      width: theme.spacing.lg_llll + 20,
    },
    cardImage: {
      width: theme.spacing.lg_llll + 20,
      height: theme.spacing.lg_llll + theme.spacing.lg_lll,
      borderRadius: theme.spacing.sm_xx,
    },
    cardText_1: {
      color: theme.colors.white,
      paddingVertical: theme.spacing.sm_xx,
      fontFamily: theme.fontFamily.inter_regular,
      fontSize: theme.fontSize.sm_ll + 1,
      lineHeight: theme.fontSize.sm_ll + 4,
    },
    cardText_2: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_regular,
      fontSize: theme.fontSize.sm_ll,
    },

    horiZontalRule: {
      width: '90%',
      height: 0.5,
      backgroundColor: theme.colors.standardGray,
      alignSelf: 'center',
      marginBottom: theme.spacing.sm_lll,
    },
    scrollView: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    contentContainer: {
      paddingBottom: theme.spacing.lg_llll + theme.spacing.sm,
    },
  });
