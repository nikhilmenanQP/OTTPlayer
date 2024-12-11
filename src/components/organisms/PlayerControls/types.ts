import {Animated} from 'react-native';

export interface PlayerControlsProps {
  controlsOpacity: Animated.Value;
  handleAudioSubtitle: () => void;
  handleFastForward: () => void;
  handlePlayPause: () => void;
  handleRewind: () => void;
  handleSettingsClick: () => void;
  handleSlidingComplete: (value: number) => void;
  handleSlidingStart: () => void;
  handleToggleScreen: () => void;
  playerState: PlayerState;
}

export interface PlayerState {
  controlsVisible: boolean;
  currentTime: number;
  duration: number;
  isErrorVisible: boolean;
  isFullscreen: boolean;
  isLoading: boolean;
  isSliding: boolean;
  paused: boolean;
}
