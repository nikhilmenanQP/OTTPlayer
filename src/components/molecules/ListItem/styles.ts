import styled, {css} from '@emotion/native';
import {Dimensions} from 'react-native';
import {StyleProps} from './types';
import {Theme} from '@context/ThemeProviderContext/types';

const {width} = Dimensions.get('window');

export const Container = styled.View<StyleProps>(({theme}) => ({
  alignItems: 'center',
  backgroundColor: theme.colors.background,
  flexDirection: 'row',
  height: theme.spacing.lg_llll,
  marginBottom: theme.spacing.sm,
}));

export const Details = styled.View<StyleProps>(({theme}) => ({
  flex: 1,
  marginLeft: theme.spacing.sm,
}));

export const metaStyle = (theme: Theme) =>
  css({
    color: theme.colors.bottomNavText,
    fontFamily: theme.fontFamily.inter_light,
    fontSize: theme.spacing.sm_ll + theme.spacing.sm_xxxx,
  });

export const Thumbnail = styled.Image<StyleProps>(({theme}) => ({
  borderRadius: theme.spacing.sm_xxx,
  height: width / theme.spacing.sm_xxx,
  width: width / 2.5,
}));

export const titleStyle = (theme: Theme) =>
  css({
    color: theme.colors.white,
    fontFamily: theme.fontFamily.inter_bold,
    fontSize: theme.spacing.sm_lll - theme.spacing.sm_xxxx,
    marginBottom: theme.spacing.sm_xx,
  });
