import {TextStyle, ViewStyle} from 'react-native';

// Define types for props and styles
export interface TopControlsProps {
  isFullscreen: boolean;
  toggleFullscreen: () => void;
}

// Define a Styles interface for type safety
export interface Styles {
  container: ViewStyle;
  iconStyle: ViewStyle;
  leftControl: ViewStyle;
  movieGenre: TextStyle;
  movieInfo: ViewStyle;
  movieTitle: TextStyle;
  rightControl: ViewStyle;
}
