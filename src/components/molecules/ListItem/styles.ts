import {Dimensions, ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

const {width} = Dimensions.get('window');

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    details: {marginLeft: theme.spacing.sm, flex: 1} as ViewStyle,

    image: {
      borderRadius: theme.spacing.sm_xxx,
      height: width / theme.spacing.sm_xxx,
      width: width / 2.5,
    } as ImageStyle,

    listItem: {
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      flexDirection: 'row',
      height: theme.spacing.lg_llll,
      marginBottom: theme.spacing.sm,
    } as ViewStyle,

    meta: {
      color: theme.colors.bottomNavText,
      fontFamily: theme.fontFamily.inter_light,
      fontSize: theme.spacing.sm_ll + theme.spacing.sm_xxxx,
    } as TextStyle,

    title: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.inter_bold,
      fontSize: theme.spacing.sm_lll - theme.spacing.sm_xxxx,
      marginBottom: theme.spacing.sm_xx,
    } as TextStyle,
  });
