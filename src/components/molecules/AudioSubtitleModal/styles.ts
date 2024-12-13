import styled from '@emotion/native';
import {StyleProps} from './types';

export const ModalContainer = styled.View<StyleProps>(({theme}) => ({
  backgroundColor: theme.colors.black_50,
  flex: 1,
}));
