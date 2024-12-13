import styled, {css} from '@emotion/native';
import {StyleProps} from './types';
import {Theme} from '@context/ThemeProviderContext/types';

export const bottomGradientStyle = (theme: Theme) =>
  css({
    bottom: theme.spacing.null,
    height: '20%',
    justifyContent: 'flex-end',
    position: 'absolute',
    width: '100%',
  });

export const MovieBannerImage = styled.ImageBackground<StyleProps>(({theme}) => ({
  alignItems: 'center',
  height: theme.spacing.lg_llll * 5,
  justifyContent: 'flex-end',
  width: '100%',
}));

export const movieInfoTextStyle = (theme: Theme) =>
  css({
    color: theme.colors.white,
    fontSize: theme.fontSize.sm_ll,
    letterSpacing: theme.spacing.sm_xxxx,
    marginBottom: theme.spacing.sm_llll,
    textTransform: 'uppercase',
    zIndex: 1,
  });

export const topGradientStyle = (theme: Theme) =>
  css({
    height: '30%',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: theme.spacing.null,
    width: '100%',
  });
