import {Animated, StyleSheet, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export const createStyle = (theme: Theme, subTitleBottomValue: Animated.Value) =>
  StyleSheet.create({
    subTitle: {
      alignItems: 'center',
      bottom: subTitleBottomValue,
      justifyContent: 'center',
      position: 'absolute',
      width: '100%',
      zIndex: 2,
    } as ViewStyle,
  });
