import {ViewStyle} from 'react-native';

export interface MiddleControlsProps {
  handleFastForward: () => void; // Function to handle fast-forward action
  handlePlayPause: () => void; // Function to handle play/pause action
  handleRewind: () => void; // Function to handle rewind action
  paused: boolean; // State to track whether the media is paused or playing
}

export interface Styles {
  container: ViewStyle; // Style for the container view
  middlePlayerIcon: ViewStyle; // Style for each icon button
}
