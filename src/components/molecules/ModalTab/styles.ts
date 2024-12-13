import styled from '@emotion/native';
import {Animated} from 'react-native';
import {StyleProps, TabButtonStyle, TabTextProps} from './types';
import {TouchableOpacity, View, Text} from 'react-native';

export const CloseButton = styled(TouchableOpacity)<StyleProps>(({theme}) => ({
  alignItems: 'center',
  backgroundColor: theme.colors.standardGray_32,
  borderRadius: theme.spacing.lg_llll,
  justifyContent: 'center',
  padding: theme.spacing.sm_lll - theme.spacing.sm_xxxx,
}));

export const TabButton = styled(TouchableOpacity)<TabButtonStyle>(({theme, initialTabWidth}) => ({
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing.sm_lll - theme.spacing.sm_xxxx,
  width: initialTabWidth !== 0 ? initialTabWidth + 50 : undefined,
}));

export const TabsContainer = styled(View)<StyleProps>(({theme}) => ({
  alignItems: 'flex-start',
  borderBottomColor: theme.colors.white,
  borderBottomWidth: 0.2,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: theme.spacing.sm_lll + theme.spacing.sm_xxxx,
}));

export const TabRow = styled(View)<StyleProps>(() => ({
  flexDirection: 'row',
}));

export const TabText = styled(Text)<TabTextProps>(({theme, isSelected}) => ({
  color: isSelected ? theme.colors.white : theme.colors.standardGray,
  fontFamily: theme.fontFamily.inter_medium,
  fontSize: isSelected ? theme.spacing.sm_llll + theme.spacing.sm_xxxx : theme.spacing.sm_llll - theme.spacing.sm_xxx,
  textAlign: 'center',
}));

export const Underline = styled(Animated.View)<StyleProps>(({theme}) => ({
  backgroundColor: theme.colors.white,
  bottom: theme.spacing.null,
  height: theme.spacing.sm_xxxx + 1,
  position: 'absolute',
}));
