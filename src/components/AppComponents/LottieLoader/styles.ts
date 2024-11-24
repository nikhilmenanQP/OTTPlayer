import {StyleSheet} from 'react-native';
import {Theme} from '@styles/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    loaderContainer: {
      ...StyleSheet.absoluteFillObject, // This makes the loader take up the full screen
      alignItems: 'center', // Centers the loader horizontally
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: adds a semi-transparent dark overlay
      justifyContent: 'center', // Centers the loader vertically
      zIndex: 10, // Ensures the loader stays on top of other elements
    },
  });
