export interface PlayerState {
  currentTime: number; // Current playback time in seconds
  duration: number; // Total duration of the video
  isErrorVisible: boolean;
  isFullscreen: boolean; // Whether the video is in fullscreen mode
  isLoading: boolean;
  isSliding: boolean; // If the user is interacting with the seek bar
  paused: boolean; // Whether the video is paused
}
