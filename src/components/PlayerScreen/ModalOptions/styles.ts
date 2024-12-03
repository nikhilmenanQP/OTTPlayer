import styled from 'styled-components/native';
import {OptionItemProps, OptionProps, OptionTextProps} from './types';

export const ICON_SIZE = 13;

export const OptionContainer = styled.View<OptionProps>(({theme, justifyContent}) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent,
  paddingVertical: theme.spacing.sm_lll - theme.spacing.sm_xxxx,
  width: '100%',
}));

export const OptionItem = styled.TouchableOpacity<OptionItemProps>(({theme, backgroundColor}) => ({
  alignItems: 'center',
  backgroundColor,
  borderRadius: theme.spacing.sm_xxx + 1,
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: theme.spacing.sm,
  marginRight: theme.spacing.sm,
  padding: theme.spacing.sm,
  width: theme.spacing.lg_llll,
}));

export const OptionText = styled.Text<OptionTextProps>(({theme, marginLeft}) => ({
  color: theme.colors.white,
  fontFamily: theme.fontFamily.inter_bold,
  fontSize: theme.fontSize.sm_ll + 1,
  marginLeft,
  textAlign: 'center',
}));
