import {StyleSheet} from 'react-native';
import {Theme} from '@styles/theme';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignSelf: 'center',
      backgroundColor: theme.colors.background,
      height: '100%',
      width: '100%',
    },
    controlsContainer: {
      backgroundColor: theme.colors.black_92,
      height: '100%',
      position: 'absolute',
      width: '100%',
    },
    gradientBottom: {
      bottom: theme.spacing.null,
      height: '50%',
      position: 'absolute',
      width: '100%',
    },
    gradientTop: {
      height: '50%',
      position: 'absolute',
      top: theme.spacing.null,
      width: '100%',
    },
    video: {
      flex: 1,
    },
  });
