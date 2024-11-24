import {Theme} from '@styles/theme';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    loaderContainer: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
    },
  });
