import styled from '@emotion/native';
import {StyledProps} from './types';

export const Container = styled.View<StyledProps>(({theme}) => ({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: theme.spacing.md_xx,
  paddingVertical: theme.spacing.sm_llll,
}));
