import styled from '@emotion/native';
import {StyledProps} from './types';

export const Container = styled.TouchableOpacity<StyledProps>(({theme}) => ({
  alignItems: 'center',
  backgroundColor: theme.colors.bootstrapBlue,
  borderRadius: theme.spacing.sm_xxx,
  flexDirection: 'row',
  justifyContent: 'center',
  marginHorizontal: theme.spacing.sm_lll,
  padding: theme.spacing.sm_lll,
}));

export const Text = styled.Text<StyledProps>(({theme}) => ({
  color: theme.colors.white,
  fontSize: theme.fontSize.sm_ll + 4,
  marginLeft: theme.spacing.sm_ll,
  textAlign: 'center',
  textTransform: 'uppercase',
}));
