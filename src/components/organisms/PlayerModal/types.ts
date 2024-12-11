export interface PlayerModalsProps {
  isAudioSubtitleModalVisible: boolean;
  isErrorModalVisible: boolean;
  isFullscreen: boolean;
  isSettingsModalVisible: boolean;
  onAudioSubtitleClose: () => void;
  onErrorModalClose: () => void;
  onSettingModalClose: () => void;
}
