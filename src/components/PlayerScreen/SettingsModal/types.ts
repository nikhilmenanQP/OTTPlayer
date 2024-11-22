/**
 * Define the properties expected by the PlayerSettingsModal component
 */
export type PlayerSettingsModalProps = {
  // Boolean indicating if the modal is in fullscreen mode
  isFullscreen: boolean;
  // Function to handle closing the modal
  onClose: () => void;
  // Boolean indicating the visibility of the modal
  visible: boolean;
};

/**
 * Define the possible video quality options
 */
export type Option = 'Auto' | '4K' | '1080p' | '720p' | '480p' | '360p' | '240p';

/**
 * Define the possible playback speed options
 */
export type SpeedOption = '0.5x' | '0.75x' | '1x' | '1.25x' | '1.5x';

/**
 * Interface for the Tab component properties, which handles tab selection and closing modal
 */
export interface TabProps {
  // Function to handle closing the modal
  onClose: () => void;
  // The currently selected tab, can be either 'quality' or 'speed'
  selectedTab: 'quality' | 'speed';
  // Function to update the selected tab, either to 'quality' or 'speed'
  setSelectedTab: (tab: 'quality' | 'speed') => void;
}
