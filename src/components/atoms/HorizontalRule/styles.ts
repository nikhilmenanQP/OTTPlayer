import {Theme} from '@context/ThemeProviderContext/types';
import styled from '@emotion/native';

export const Container = styled.View(({theme}: {theme: Theme}) => ({
  alignSelf: 'center',
  backgroundColor: theme.colors.standardGray,
  height: 0.5,
  marginBottom: theme.spacing.sm_lll,
  marginTop: theme.spacing.sm_lll,
  width: '100%',
}));
