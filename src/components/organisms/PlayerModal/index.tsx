import React from 'react';
import {AudioSubtitleModal, PlayerSettingsModal} from '@components/molecules';
import {ErrorScreen} from '@components/pages';
import {PlayerModalsProps} from './types';

const PlayerModals: React.FC<PlayerModalsProps> = ({
  isAudioSubtitleModalVisible,
  isErrorModalVisible,
  isFullscreen,
  isSettingsModalVisible,
  onAudioSubtitleClose,
  onErrorModalClose,
  onSettingModalClose,
}) => {
  return (
    <>
      <AudioSubtitleModal
        isFullscreen={isFullscreen}
        onClose={onAudioSubtitleClose}
        visible={isAudioSubtitleModalVisible}
      />
      <PlayerSettingsModal isFullscreen={isFullscreen} onClose={onSettingModalClose} visible={isSettingsModalVisible} />
      <ErrorScreen isFullscreen={isFullscreen} onErrorModalClose={onErrorModalClose} visible={isErrorModalVisible} />
    </>
  );
};

export default PlayerModals;
