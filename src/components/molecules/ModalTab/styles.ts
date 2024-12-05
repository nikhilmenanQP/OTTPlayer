import styled from 'styled-components/native';

import {Animated} from 'react-native';
import {TabTextProps} from './types';
// import {Theme} from '@styles/theme';
// import {Theme} from '@react-navigation/native';
import {Theme} from '@context/ThemeProviderContext/types';
import {TouchableOpacity, View, Text} from 'react-native';

export const CloseButton = styled(TouchableOpacity)<{theme: Theme}>(({theme}) => ({
  alignItems: 'center',
  backgroundColor: theme.colors.standardGray_32,
  borderRadius: theme.spacing.lg_llll,
  justifyContent: 'center',
  padding: theme.spacing.sm_lll - theme.spacing.sm_xxxx,
}));

export const TabButton = styled(TouchableOpacity)<{theme: Theme; initialTabWidth: number}>(
  ({theme, initialTabWidth}) => ({
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.sm_lll - theme.spacing.sm_xxxx,
    width: initialTabWidth !== 0 ? initialTabWidth + 50 : undefined, // handle width here
  }),
);

export const TabRow = styled(View)<{theme: Theme}>(() => ({
  flexDirection: 'row',
}));

export const TabText = styled(Text)<TabTextProps>(({theme, isSelected}) => ({
  color: isSelected ? theme.colors.white : theme.colors.standardGray,
  fontFamily: theme.fontFamily.inter_medium,
  fontSize: isSelected ? theme.spacing.sm_llll + theme.spacing.sm_xxxx : theme.spacing.sm_llll - theme.spacing.sm_xxx,
  textAlign: 'center',
}));

export const TabsContainer = styled(View)<{theme: Theme}>(({theme}) => ({
  alignItems: 'flex-start',
  borderBottomColor: theme.colors.white,
  borderBottomWidth: 0.2,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: theme.spacing.sm_lll + theme.spacing.sm_xxxx,
}));

export const Underline = styled(Animated.View)(({theme}) => ({
  backgroundColor: theme.colors.white,
  height: theme.spacing.sm_xxxx + 1,
  position: 'absolute',
  bottom: theme.spacing.null,
}));
