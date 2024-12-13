import {Theme} from '@context/ThemeProviderContext/types';
import {css} from '@emotion/native';

export const subTitleStyle = (theme: Theme, isFullScreen: Boolean | undefined) =>
  css({
    alignSelf: 'center',
    backgroundColor: theme.colors.black_32,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.inter_medium,
    fontSize: theme.fontSize.sm_lll,
    letterSpacing: 1,
    lineHeight: theme.fontSize.sm_llll,
    marginHorizontal: isFullScreen ? theme.spacing.lg_llll : theme.spacing.sm_llll,
    textAlign: 'center',
  });
