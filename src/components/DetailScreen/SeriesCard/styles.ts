import {Theme} from '@styles/theme';
import {Dimensions, ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

const {width} = Dimensions.get('window');

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    // General containers
    episodeContainer: {
      borderRadius: theme.spacing.sm_xxx,
      flexDirection: 'row',
      marginBottom: theme.spacing.sm_lll,
      overflow: 'hidden',
    } as ViewStyle,

    seasonSelectorContainer: {
      backgroundColor: theme.colors.darkCharcoal,
      bottom: theme.spacing.null,
      position: 'absolute',
      width: '100%',
    } as ViewStyle,

    titleContainer: {
      alignItems: 'center',
      borderRadius: theme.spacing.sm_xxx,
      flexDirection: 'row',
      height: theme.spacing.md_ll,
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing.sm_lll,
    } as ViewStyle,

    // Episode-specific styles
    episodeImage: {
      height: width * 0.7,
      width: '100%',
    } as ImageStyle,

    episodeTextContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      padding: theme.spacing.sm_ll + 2,
      zIndex: 1,
    } as ViewStyle,

    episodeTitle: {
      color: theme.colors.white,
      fontSize: theme.spacing.sm_lll - 2,
      fontWeight: 'bold',
    } as TextStyle,

    episodeMeta: {
      color: theme.colors.white,
      fontSize: theme.fontSize.sm_ll,
    } as TextStyle,

    episodeDescription: {
      color: theme.colors.mediumGray,
      fontSize: theme.fontSize.sm_ll,
    } as TextStyle,

    // Buttons
    episodePickerBtnContainer: {
      alignItems: 'center',
      backgroundColor: theme.colors.darkCharcoal,
      borderRadius: theme.spacing.sm_xxx,
      flexDirection: 'row',
      height: theme.spacing.md_ll,
      justifyContent: 'space-between',
      marginBottom: theme.spacing.sm_lll,
      paddingHorizontal: theme.spacing.sm_lll,
    } as ViewStyle,

    closeBtn: {
      alignItems: 'center',
      backgroundColor: theme.colors.standardGray,
      borderRadius: theme.spacing.lg_llll,
      justifyContent: 'center',
      padding: theme.spacing.sm,
    } as ViewStyle,

    // Text styles
    moreText: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_bold,
      fontSize: theme.spacing.sm_ll + 2,
      letterSpacing: 1,
      paddingVertical: theme.spacing.sm_lll,
      textTransform: 'uppercase',
    } as TextStyle,

    episodePickerBtnText: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_regular,
      fontSize: theme.spacing.sm_ll + theme.spacing.sm_xxxx,
      textTransform: 'uppercase',
    } as TextStyle,

    titleText: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_regular,
      fontSize: theme.fontSize.sm_ll + theme.fontSize.sm_xxxx,
      letterSpacing: 1,
      textTransform: 'uppercase',
    } as TextStyle,

    headerTitleText: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_bold,
      fontSize: theme.fontSize.sm_ll + theme.fontSize.sm_xxxx,
      letterSpacing: 1,
      textTransform: 'uppercase',
    } as TextStyle,

    // Header container
    headerTitleContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: theme.spacing.sm_xx,
      paddingHorizontal: theme.spacing.sm_lll,
      paddingTop: theme.spacing.sm,
    } as ViewStyle,

    // Horizontal Rule
    horiZontalRule: {
      alignSelf: 'center',
      backgroundColor: theme.colors.standardGray,
      height: 0.5,
      marginBottom: theme.spacing.sm_lll,
      width: '100%',
    } as ViewStyle,

    bottomGradient: {
      bottom: theme.spacing.null,
      height: '20%',
      justifyContent: 'flex-end',
      position: 'absolute',
      width: '100%',
    } as ViewStyle,
  });
