// import BlurBackground from '@components/AppComponents/BlurBackGround';
// import BlurBackground from '@components/atoms/BlurBackground';
import {BlurBackground} from '@components/atoms';
import React, {useState, useCallback, useEffect, useMemo} from 'react';
// import Tab from '../ModalTab';
import ModalTab from '../ModalTab';

import {AudioSubtitleModalProps} from './types';
import {ModalContainer} from './styles';
// import {ModalOptions} from '../ModalOptions';
import ModalOptions from '../ModalOptions';
import {Modal} from 'react-native';
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
      <Modal
        animationType="slide"
        supportedOrientations={['portrait', 'landscape', 'landscape-left', 'landscape-right']}
        transparent
        visible={visible}>
        <ModalContainer style={[modalPadding]}>
          {/* Background with blur effect */}
          <BlurBackground />
          {/* Tabs for audio and subtitle selection */}
          <ModalTab selectedTab={activeTab} setSelectedTab={handleTabChange} onClose={onClose} />
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
      </Modal>
    );
  },
);

export default AudioSubtitleModal;
