import {Theme} from '@context/ThemeProviderContext/types';
import styled from '@emotion/native';

export const SectionContainer = styled.View(({theme}) => ({
  // marginTop: theme.spacing.sm_lll + 2,
  // paddingLeft: theme.spacing.sm_ll + 2,
}));

export const SectionTitle = styled.Text(({theme}: {theme: Theme}) => ({
  color: theme.colors.white,
  fontFamily: theme.fontFamily.inter_semiBold,
  fontSize: theme.fontSize.sm_ll,
  letterSpacing: theme.spacing.sm_xxxx,
  marginBottom: theme.spacing.sm,
  textTransform: 'uppercase',
}));
