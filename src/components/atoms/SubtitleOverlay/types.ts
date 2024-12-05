import {TextStyle} from 'react-native';

/**
 * Define the structure of a subtitle (start time, end time, and the actual text).
 */
export interface Subtitle {
  endTime: string;
  startTime: string;
  text: string;
}

/**
 * Define the expected props for the SubtitleOverlay component.
 */
export interface SubtitleOverlayProps {
  currentTime: number; // Current time of the video (in seconds).
  isFullScreen?: boolean; // Boolean indicating if the video is in fullscreen mode.
  subtitleTextStyle?: TextStyle;
  subtitleUri: string; // URL to fetch subtitle VTT file.
}
