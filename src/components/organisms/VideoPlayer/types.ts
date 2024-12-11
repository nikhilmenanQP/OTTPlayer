import {Animated} from 'react-native';
import {
  OnBufferData,
  OnLoadData,
  OnLoadStartData,
  OnProgressData,
  OnSeekData,
  OnVideoErrorData,
  VideoRef,
} from 'react-native-video';

export interface VideoWithSubtitlesProps {
  currentTime: number;
  isFullscreen: boolean;
  onBuffer: (param: OnBufferData) => void;
  onError: (data: OnVideoErrorData) => void;
  onLoad: (data: OnLoadData) => void;
  onLoadStart: (data: OnLoadStartData) => void;
  onProgress: (data: OnProgressData) => void;
  onReadyForDisplay: () => void;
  onSeek: (data: OnSeekData) => void;
  paused: boolean;
  subTitleBottomValue: Animated.Value;
  subtitleUri: string;
  videoRef: React.RefObject<VideoRef>;
  videoUri: string;
}
