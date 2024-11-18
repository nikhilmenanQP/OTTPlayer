import {Theme} from '@styles/theme';
import {StyleSheet, ViewStyle} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    } as ViewStyle,
  });
