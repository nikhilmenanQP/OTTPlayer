import styled from 'styled-components/native';

export const Container = styled.View(({theme}) => ({
  alignSelf: 'center',
  backgroundColor: theme.colors.standardGray,
  height: 0.5,
  marginBottom: theme.spacing.sm_lll,
  marginTop: theme.spacing.sm_lll,
  width: '100%',
}));
