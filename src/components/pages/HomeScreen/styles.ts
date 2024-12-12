import {Theme} from '@context/ThemeProviderContext/types';
import styled from '@emotion/native';

export const HomeScreenContainer = styled.View(({theme}: {theme: Theme}) => ({
  backgroundColor: theme.colors.background,
  flex: 1,
}));
