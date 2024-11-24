import {TextStyle, ViewStyle} from 'react-native';

// Props for the audio/subtitle modal component
export interface AudioSubtitleModalProps {
  /**
   * Flag indicating if the modal is displayed in fullscreen mode.
   */
  isFullscreen: boolean;

  /**
   * Callback function to close the modal.
   */
  onClose: () => void;

  /**
   * Controls the visibility of the modal.
   */
  visible: boolean;
}

// Interface for the props used in the option container component
export interface OptionContainerProps {
  /**
   * The currently active tab, either 'audio' or 'subtitles'.
   * Determines which options are shown based on the active tab.
   */
  activeTab: 'audio' | 'subtitles';

  /**
   * Boolean flag indicating if the modal is displayed in fullscreen mode.
   * This affects how the layout and presentation of the options appear.
   */
  isFullscreen: boolean;

  /**
   * The audio option currently selected by the user.
   * This value is used to highlight the active audio option in the UI.
   */
  selectedAudio: string;

  /**
   * The subtitle option currently selected by the user.
   * This value is used to highlight the active subtitle option in the UI.
   */
  selectedSubtitle: string;

  /**
   * Function to update the selected audio option.
   * This is triggered when the user selects a different audio track.
   */
  setSelectedAudio: (option: string) => void;

  /**
   * Function to update the selected subtitle option.
   * This is triggered when the user selects a different subtitle option.
   */
  setSelectedSubtitle: (option: string) => void;
}

// Define a type for the styles
export interface Styles {
  /**
   * Circular close button with padding and centered content.
   */
  closeButton: ViewStyle;

  /**
   * Full-screen modal with a semi-transparent background.
   */
  modalContainer: ViewStyle;

  /**
   * Horizontal option list, wrapping to new lines if needed.
   */
  optionContainer: ViewStyle;

  /**
   * Styled option button with padding and fixed width.
   */
  optionItem: ViewStyle;

  /**
   * Centered, bold, white text inside each option.
   */
  optionText: TextStyle;

  /**
   * Tab button with padding for better touch area.
   */
  tabButton: ViewStyle;

  /**
   * Row layout for tabs (audio/subtitles).
   */
  tabRow: ViewStyle;

  /**
   * Centered text inside tab buttons with fixed width.
   */
  tabText: TextStyle;

  tabSelectedText: TextStyle;

  /**
   * Tab container with underline for active tab.
   */
  tabsContainer: ViewStyle;

  /**
   * Underline for the active tab, positioned at the bottom.
   */
  underline: ViewStyle;
}

// Props for the tab component
export interface TabProps {
  /**
   * Function to close the modal when invoked.
   */
  onClose: () => void;

  /**
   * The currently selected tab, either 'audio' or 'subtitles'.
   */
  selectedTab: 'audio' | 'subtitles';

  /**
   * Function to update the selected tab ('audio' or 'subtitles').
   */
  setSelectedTab: (tab: 'audio' | 'subtitles') => void;
}
