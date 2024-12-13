import {TextStyle} from 'react-native';

export interface Subtitle {
  endTime: string;
  startTime: string;
  text: string;
}

export interface SubtitleOverlayProps {
  currentTime: number;
  isFullScreen?: boolean;
  subtitleTextStyle?: TextStyle;
  subtitleUri: string;
}
