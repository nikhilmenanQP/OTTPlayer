import styled from '@emotion/native';
import {StyleProps} from './types';

export const ButtonContainer = styled.TouchableOpacity(({}) => ({
  alignItems: 'center',
}));

export const ButtonText = styled.Text<StyleProps>(({theme}) => ({
  color: theme.colors.white,
  fontFamily: theme.fontFamily.inter_bold,
  fontSize: theme.fontSize.sm,
  letterSpacing: 1,
  marginTop: theme.spacing.sm_x,
  textTransform: 'uppercase',
}));
