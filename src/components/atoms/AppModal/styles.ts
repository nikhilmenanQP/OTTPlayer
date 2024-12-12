import styled, {css} from '@emotion/native';
import {StyleProps} from './types';
import {Theme} from '@context/ThemeProviderContext/types';

export const ICON_SIZE = 14;

export const buttonStyle = (theme: Theme) =>
  css({
    alignItems: 'center',
    backgroundColor: theme.colors.standardGray_32,
    borderRadius: theme.spacing.lg_llll,
    justifyContent: 'center',
    marginHorizontal: theme.spacing.null,
    padding: ICON_SIZE,
    position: 'absolute',
    right: theme.spacing.md_xxxx,
  });

export const Container = styled.View<StyleProps>(({theme}) => ({
  backgroundColor: theme.colors.modalBackground,
  flex: 1,
}));
