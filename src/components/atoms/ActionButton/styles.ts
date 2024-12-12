import {Theme} from '@context/ThemeProviderContext/types';
import styled from '@emotion/native';

export const ButtonContainer = styled.TouchableOpacity(({}) => ({
  alignItems: 'center',
}));

export const ButtonText = styled.Text(({theme}: {theme: Theme}) => ({
  color: theme.colors.white,
  fontFamily: theme.fontFamily.inter_bold,
  fontSize: theme.fontSize.sm,
  letterSpacing: 1,
  marginTop: theme.spacing.sm_x,
  textTransform: 'uppercase',
}));
