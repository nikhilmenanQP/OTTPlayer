import styled, {css} from '@emotion/native';
import {StyleProps} from './types';
import {Theme} from '@context/ThemeProviderContext/types';

export const Banner = styled.ImageBackground<StyleProps>(({theme}) => ({
  height: theme.spacing.lg_llll * 5,
}));

export const bottomGradient = (theme: Theme) =>
  css({
    bottom: theme.spacing.null,
    height: '30%',
    justifyContent: 'flex-end',
    position: 'absolute',
    width: '100%',
  });

export const DotContainer = styled.View<StyleProps>(({theme}) => ({
  alignSelf: 'center',
  bottom: theme.spacing.sm,
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: theme.spacing.sm_ll,
  marginTop: theme.spacing.sm,
  position: 'absolute',
  zIndex: 1,
}));

export const Dots = styled.View<StyleProps>(({theme}) => ({
  alignSelf: 'center',
  borderRadius: theme.spacing.sm_x,
  margin: theme.spacing.sm_xxx,
  // transition: 'width 0.3s ease',
}));

export const topGradient = (theme: Theme) =>
  css({
    height: '30%',
    position: 'absolute',
    top: theme.spacing.null,
    width: '100%',
  });
