import styled from '@emotion/native';
import {StyleProps} from './types';

export const ICON_SIZE = 24;

export const Container = styled.View(({}) => ({
  alignItems: 'center',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
}));

export const PlayerIconContainer = styled.TouchableOpacity<StyleProps>(({theme}) => ({
  alignItems: 'center',
  backgroundColor: theme.colors.black_32,
  borderRadius: theme.spacing.lg_llll,
  justifyContent: 'center',
  margin: theme.spacing.lg_xxxx,
  padding: theme.spacing.sm_ll,
}));
