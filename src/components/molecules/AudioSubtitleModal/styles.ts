import {Theme} from '@context/ThemeProviderContext/types';
import styled from '@emotion/native';

export const ModalContainer = styled.View(({theme}: {theme: Theme}) => ({
  flex: 1,
  backgroundColor: theme.colors.black_50,
}));
