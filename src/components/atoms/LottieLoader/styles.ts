import {StyleSheet} from 'react-native';
// import {Theme} from '@styles/theme';
import {Theme} from '@context/ThemeProviderContext/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    loaderContainer: {
      ...StyleSheet.absoluteFillObject, // This makes the loader take up the full screen
      alignItems: 'center', // Centers the loader horizontally
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: adds a semi-transparent dark overlay
      justifyContent: 'center', // Centers the loader vertically
    },
  });
