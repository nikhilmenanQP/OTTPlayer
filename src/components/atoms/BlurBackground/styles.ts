import {css} from '@emotion/native';
import {Theme} from '@context/ThemeProviderContext/types';

export const blurViewStyle = (theme: Theme) =>
  css({
    bottom: theme.spacing.null,
    left: theme.spacing.null,
    position: 'absolute',
    right: theme.spacing.null,
    top: theme.spacing.null,
  });
