import {Dimensions, StyleSheet, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

const {width} = Dimensions.get('window');

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      margin: theme.spacing.sm_lll - theme.spacing.sm_xxxx,
      paddingBottom: width * 0.3,
    } as ViewStyle,
  });
