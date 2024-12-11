import {StyleSheet, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    controlsContainer: {
      backgroundColor: theme.colors.black_92,
      height: '100%',
      position: 'absolute',
      width: '100%',
    } as ViewStyle,
  });
