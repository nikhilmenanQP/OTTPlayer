import styled from '@emotion/native';
import {StyleProps} from './types';

export const Container = styled.TouchableOpacity<StyleProps>(({theme}) => ({
  backgroundColor: theme.colors.midnightBlue,
  borderRadius: theme.spacing.lg_llll,
  left: theme.spacing.null,
  padding: theme.spacing.sm_ll + 2,
  position: 'absolute',
}));
