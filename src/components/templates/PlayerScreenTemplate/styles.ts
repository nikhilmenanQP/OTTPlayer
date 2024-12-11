import {StyleSheet, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignSelf: 'center',
      backgroundColor: theme.colors.background,
      height: '100%',
      width: '100%',
    } as ViewStyle,
  });
