import {BlurViewProps} from '@react-native-community/blur';
import {StyleSheet} from 'react-native';
// import {Theme} from '@styles/theme';
import {Theme} from '@context/ThemeProviderContext/types';

// Styles for the component
export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    absolute: {
      bottom: theme.spacing.null,
      left: theme.spacing.null,
      position: 'absolute',
      right: theme.spacing.null,
      top: theme.spacing.null,
    } as BlurViewProps,
  });
