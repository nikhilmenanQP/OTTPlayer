import styled from '@emotion/native';
import {StyleProps} from './types';

export const Container = styled.View<StyleProps>(({theme}) => ({
  alignSelf: 'center',
  backgroundColor: theme.colors.standardGray,
  height: 0.5,
  marginBottom: theme.spacing.sm_lll,
  marginTop: theme.spacing.sm_lll,
  width: '100%',
}));
