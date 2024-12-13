import styled, {css} from '@emotion/native';
import {StyleProps} from './types';
import {Theme} from '@context/ThemeProviderContext/types';

export const Container = styled.View<StyleProps>(({theme}) => ({
  bottom: theme.spacing.null,
  position: 'absolute',
  width: '100%',
  zIndex: 1,
}));

export const OptionsContainer = styled.View<StyleProps>(({theme}) => ({
  alignSelf: 'flex-end',
  flexDirection: 'row',
  paddingBottom: theme.spacing.md_xxx,
  paddingHorizontal: theme.spacing.sm_llll,
  paddingTop: theme.spacing.sm_lll,
}));

export const Options = styled.TouchableOpacity<StyleProps>(({theme}) => ({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  marginLeft: theme.spacing.sm_lll,
}));

export const optionsTextStyle = (theme: Theme) =>
  css({
    paddingLeft: theme.spacing.sm,
    color: theme.colors.white,
  });

export const SliderContainer = styled.View<StyleProps>(({theme}) => ({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: theme.spacing.sm_llll,
}));

export const sliderStyle = (theme: Theme) =>
  css({
    flex: 1,
  });

export const TimeContainer = styled.View<StyleProps>(({theme}) => ({
  flexDirection: 'row',
  paddingLeft: theme.spacing.sm,
}));

export const timeStyle = (theme: Theme) =>
  css({
    color: theme.colors.white,
    fontSize: theme.spacing.sm_ll + theme.spacing.sm_xxxx,
  });
