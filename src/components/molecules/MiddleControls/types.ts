import {Theme} from '@context/ThemeProviderContext/types';
import {ViewStyle} from 'react-native';

export interface MiddleControlsProps {
  handleFastForward: () => void;
  handlePlayPause: () => void;
  handleRewind: () => void;
  paused: boolean;
}

export interface Styles {
  container: ViewStyle;
  middlePlayerIcon: ViewStyle;
}

export interface StyleProps {
  theme?: Theme;
}
