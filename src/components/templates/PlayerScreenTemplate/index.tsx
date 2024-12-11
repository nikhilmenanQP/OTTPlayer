import Orientation from 'react-native-orientation-locker';
import PlayerControls from '@components/organisms/PlayerControls';
import PlayerModals from '@components/organisms/PlayerModal';
import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import VideoPlayer from '@components/organisms/VideoPlayer';

import {OnProgressData, OnLoadData, VideoRef, OnBufferData} from 'react-native-video';
import {View, StyleProp, ViewStyle, TouchableWithoutFeedback, Animated} from 'react-native';

import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

/**
 * PlayerScreenTemplate Component
 * This component renders the video player, including video controls (play, pause, fullscreen, etc.)
 * It also manages various modals like settings, audio/subtitle selection, and error handling.
 * @returns JSX Element representing the PlayerScreen UI.
 */
const PlayerScreenTemplate: React.FC = () => {
  const [isAudioSubtitleModal, setIsAudioSubtitleModal] = useState<boolean>(false);
  const [isSettingsModal, setIsSettingsModal] = useState<boolean>(false);

  // Individual states for player controls
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isErrorVisible, setIsErrorVisible] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSliding, setIsSliding] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(true);

  const playerState = {
    controlsVisible,
    currentTime,
    duration,
    isErrorVisible,
    isFullscreen,
    isLoading,
    isSliding,
    paused,
  };

  const controlsOpacity = useRef(new Animated.Value(1)).current;
  const subTitleBottomValue = useRef(new Animated.Value(0)).current;
  const videoRef = useRef<VideoRef | null>(null);

  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  // Toggle the visibility of the Audio/Subtitles modal
  const handleAudioSubtitle = () => {
    setIsAudioSubtitleModal(!isAudioSubtitleModal);
  };

  // Handle play/pause functionality
  const handlePlayPause = useCallback(() => {
    setPaused(prev => !prev);
  }, []);

  // Toggle controls visibility on screen tap
  const handleScreenTap = () => {
    setControlsVisible(prev => !prev);
  };

  // Toggle the visibility of the settings modal
  const handleSettingsClick = () => {
    setIsSettingsModal(!isSettingsModal);
  };

  // Handle the seek bar interaction completion
  const handleSlidingComplete = useCallback(
    (value: number) => {
      if (value !== currentTime) {
        setCurrentTime(value);
        setIsLoading(true);
        setIsSliding(false);
        videoRef.current?.seek(value);
      }
    },
    [currentTime],
  );

  const handleSeek = useCallback(() => {
    setIsLoading(false);
    setPaused(false);
  }, []);

  // Handle fast forward and rewind functionality
  const handleFastForward = useCallback(() => {
    const newTime = Math.min(currentTime + 10, duration);
    videoRef.current?.seek(newTime);
    setCurrentTime(newTime);
  }, [currentTime, duration]);

  const handleRewind = useCallback(() => {
    const newTime = Math.max(currentTime - 10, 0);
    videoRef.current?.seek(newTime);
    setCurrentTime(newTime);
  }, [currentTime]);

  // Handle video load event
  const onLoad = useCallback((data: OnLoadData) => {
    setDuration(data.duration);
    setIsLoading(false);
  }, []);

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onProgress = useCallback(
    (data: OnProgressData) => {
      if (!isSliding && currentTime !== data.currentTime) {
        setCurrentTime(data.currentTime);
      }
    },
    [isSliding, currentTime],
  );

  const onVideoBuffer = (param: OnBufferData) => {
    setIsLoading(param.isBuffering);
  };

  const onVideoError = () => {
    setIsErrorVisible(true);
  };

  const handleToggleScreen = useCallback(() => {
    if (isFullscreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscapeLeft();
    }
    setIsFullscreen(prev => !prev);
  }, [isFullscreen]);

  useEffect(() => {
    setPaused(!paused);

    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  useEffect(() => {
    if (!paused) {
      const fadeOutControls = Animated.timing(controlsOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      });

      const hideControlsTimeout = setTimeout(() => {
        fadeOutControls.start();
      }, 4000);

      return () => {
        clearTimeout(hideControlsTimeout);
      };
    } else {
      Animated.timing(controlsOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [paused, controlsVisible]);

  useEffect(() => {
    if (!controlsVisible) {
      Animated.timing(controlsOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(controlsOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [controlsVisible, controlsOpacity]);

  useEffect(() => {
    if (controlsVisible) {
      Animated.timing(subTitleBottomValue, {
        toValue: theme.spacing.lg_llll + theme.spacing.sm_lll,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(subTitleBottomValue, {
        toValue: theme.spacing.md,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [controlsVisible]);

  return (
    <TouchableWithoutFeedback onPress={handleScreenTap}>
      <View style={styles.container as StyleProp<ViewStyle>}>
        <VideoPlayer
          currentTime={currentTime}
          isFullscreen={isFullscreen}
          onBuffer={onVideoBuffer}
          onError={onVideoError}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          onReadyForDisplay={() => setIsLoading(false)}
          onSeek={handleSeek}
          paused={playerState.paused}
          subTitleBottomValue={subTitleBottomValue}
          subtitleUri="https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt"
          videoRef={videoRef}
          videoUri="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
        <PlayerControls
          controlsOpacity={controlsOpacity}
          handleAudioSubtitle={handleAudioSubtitle}
          handleFastForward={handleFastForward}
          handlePlayPause={handlePlayPause}
          handleRewind={handleRewind}
          handleSettingsClick={handleSettingsClick}
          handleSlidingComplete={handleSlidingComplete}
          handleSlidingStart={() => setIsSliding(true)}
          handleToggleScreen={handleToggleScreen}
          playerState={playerState}
        />
        <PlayerModals
          isAudioSubtitleModalVisible={isAudioSubtitleModal}
          isErrorModalVisible={isErrorVisible}
          isFullscreen={isFullscreen}
          isSettingsModalVisible={isSettingsModal}
          onAudioSubtitleClose={() => setIsAudioSubtitleModal(false)}
          onErrorModalClose={() => setIsErrorVisible(false)}
          onSettingModalClose={() => setIsSettingsModal(false)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PlayerScreenTemplate;
