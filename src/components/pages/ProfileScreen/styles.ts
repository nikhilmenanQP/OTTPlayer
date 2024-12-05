// import {Theme} from '@styles/theme';
import {Theme} from '@context/ThemeProviderContext/types';
import {StyleSheet, ViewStyle} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    } as ViewStyle,
  });
