import {Theme} from '@context/ThemeProviderContext/types';

export interface BottomControlsProps {
  currentTime: number;
  duration: number;
  formatTime: (time: number) => string;
  handleAudioSubtitle: () => void;
  handleSettingsClick: () => void;
  handleSlidingComplete: (value: number) => void;
  handleSlidingStart: () => void;
}

export interface StyleProps {
  theme?: Theme;
}
