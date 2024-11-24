// Define the types for the props
export interface BottomControlsProps {
  currentTime: number; // The current playback time (in seconds)
  duration: number; // The total duration of the video or media (in seconds)
  formatTime: (time: number) => string; // Function to format time (e.g., from seconds to MM:SS)
  handleAudioSubtitle: () => void; // Function to handle the AudioSubtitle Click
  handleSettingsClick: () => void;
  handleSlidingComplete: (value: number) => void; // Function to handle the completion of the slider interaction
  handleSlidingStart: () => void; // Function to handle the start of the slider interaction
  isFullscreen: boolean;
}
