import {Theme} from '@context/ThemeProviderContext/types';
import {css} from '@emotion/native';

export const titleTextStyle = (theme: Theme) =>
  css({
    color: theme.colors.white,
    fontFamily: theme.fontFamily.inter_medium,
    fontSize: theme.fontSize.sm_llll,
    marginBottom: theme.spacing.sm_ll,
    textAlign: 'center',
  });

export const descriptionTextStyle = (theme: Theme) =>
  css({
    color: theme.colors.standardGray,
    fontSize: theme.fontSize.sm_lll,
    marginBottom: theme.spacing.md_xx,
    textAlign: 'center',
  });
