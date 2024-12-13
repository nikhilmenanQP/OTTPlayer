import ModalOptions from '../ModalOptions';
import ModalTab from '../ModalTab';
import React, {useState, useCallback, useEffect, useMemo} from 'react';

import {AppModal, BlurBackground} from '@components/atoms';
import {AudioSubtitleModalProps} from './types';
import {ModalContainer} from './styles';

import {useAppTheme} from '@hooks/useAppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

/**
 * @type {Component} AudioSubtitleModal component
 */
const AudioSubtitleModal: React.FC<AudioSubtitleModalProps> = React.memo(
  ({isFullscreen = false, onClose, visible = true}) => {
    const [activeTab, setActiveTab] = useState<'audio' | 'subtitles'>('audio');
    const [selectedAudio, setSelectedAudio] = useState<string>('English');
    const [selectedSubtitle, setSelectedSubtitle] = useState<string>('English');

    const insets = useSafeAreaInsets();
    const {theme} = useAppTheme();

    /**
     * Compute modal padding dynamically based on fullscreen and insets
     */
    const modalPadding = useMemo(
      () => ({
        paddingHorizontal: isFullscreen ? insets.right : theme.spacing.sm_lll + theme.spacing.sm_xxxx,
        paddingVertical: isFullscreen ? theme.spacing.sm_lll + theme.spacing.sm_xxxx : insets.top,
      }),
      [isFullscreen, insets],
    );

    /**
     * Handler to change the active tab
     */
    const handleTabChange = useCallback((tab: 'audio' | 'subtitles') => {
      setActiveTab(tab);
    }, []);

    /**
     * Reset active tab to 'audio' when modal becomes visible
     */
    useEffect(() => {
      if (visible) {
        setActiveTab('audio');
      }
    }, [visible]);

    return (
      <AppModal visible={visible}>
        <ModalContainer style={[modalPadding]}>
          {/* Background with blur effect */}
          <BlurBackground />
          {/* Tabs for audio and subtitle selection */}
          <ModalTab onClose={onClose} selectedTab={activeTab} setSelectedTab={handleTabChange} />
          {/* Options for audio and subtitle */}
          <ModalOptions
            activeTab={activeTab}
            isFullscreen={isFullscreen}
            selectedAudio={selectedAudio}
            selectedSubtitle={selectedSubtitle}
            setSelectedAudio={setSelectedAudio}
            setSelectedSubtitle={setSelectedSubtitle}
          />
        </ModalContainer>
      </AppModal>
    );
  },
);

export default AudioSubtitleModal;
