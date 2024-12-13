import styled, {css} from '@emotion/native';
import {StyleProps} from './types';
import {Theme} from '@context/ThemeProviderContext/types';

export const Container = styled.View<StyleProps>(({theme}) => ({
  alignItems: 'flex-end',
  height: theme.spacing.lg_llll,
  marginBottom: theme.spacing.sm,
}));

export const DeleteButton = styled.TouchableOpacity<StyleProps>(({theme}) => ({
  alignItems: 'center',
  backgroundColor: theme.colors.firebrickRed,
  height: theme.spacing.lg_llll,
  justifyContent: 'center',
  width: theme.spacing.lg_llll,
}));

export const deleteIconStyle = (theme: Theme) =>
  css({
    marginBottom: theme.spacing.sm_x,
  });

export const deleteTextStyle = (theme: Theme) =>
  css({
    color: theme.colors.white,
    fontFamily: theme.fontFamily.inter_regular,
    fontSize: theme.spacing.sm_ll + 1,
  });
