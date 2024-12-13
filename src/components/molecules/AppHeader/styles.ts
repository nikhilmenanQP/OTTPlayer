import {Dimensions, ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';
import styled, {css} from '@emotion/native';
import {StyleProps} from './types';

const {width} = Dimensions.get('window');

export const Container = styled.View<StyleProps>(({theme, insets}) => ({
  alignItems: 'center',
  flexDirection: 'row',
  height: theme.spacing.md_llll,
  justifyContent: 'center',
  marginHorizontal: theme.spacing.sm_lll,
  marginTop: insets.top,
  position: 'absolute',
  width: '90%',
  zIndex: 1,
}));

export const profileNameStyle = (theme: Theme) =>
  css({
    color: theme.colors.white,
    fontFamily: theme.fontFamily.inter_bold,
    fontSize: theme.spacing.sm_lll - 2,
    letterSpacing: 1,
    maxWidth: width * 0.65,
    textTransform: 'uppercase',
  });
