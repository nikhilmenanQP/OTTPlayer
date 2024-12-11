import Orientation from 'react-native-orientation-locker';
import PlayerControls from '@components/organisms/PlayerControls';
import PlayerModals from '@components/organisms/PlayerModal';
import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import VideoPlayer from '@components/organisms/VideoPlayer';

import {OnProgressData, OnLoadData, VideoRef, OnBufferData} from 'react-native-video';
import {PlayerState} from './types';
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
  const [playerState, setPlayerState] = useState<PlayerState>({
    controlsVisible: true,
    currentTime: 0,
    duration: 0,
    isErrorVisible: false,
    isFullscreen: false,
    isLoading: true,
    isSliding: false,
    paused: true,
  });

  const controlsOpacity = useRef(new Animated.Value(1)).current;
  const subTitleBottomValue = useRef(new Animated.Value(0)).current;
  const videoRef = useRef<VideoRef | null>(null);

  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  /**
   * Toggle the visibility of the Audio/Subtitles modal
   */
  const handleAudioSubtitle = () => {
    setIsAudioSubtitleModal(!isAudioSubtitleModal);
  };

  /**
   * Handle play/pause functionality
   * Toggles between playing and pausing the video
   */
  const handlePlayPause = useCallback(() => {
    setPlayerState(prevState => ({
      ...prevState,
      paused: !prevState.paused,
    }));
  }, []);

  /**
   * Toggle controls visibility on screen tap
   */
  const handleScreenTap = () => {
    setPlayerState(prevState => ({
      ...prevState,
      controlsVisible: !playerState.controlsVisible,
    }));
  };

  /**
   * Toggle the visibility of the settings modal
   */
  const handleSettingsClick = () => {
    setIsSettingsModal(!isSettingsModal);
  };

  /**
   * Handle the seek bar interaction completion
   * Updates the playback time and resumes video playback after seeking
   */
  const handleSlidingComplete = useCallback(
    (value: number) => {
      if (value !== playerState.currentTime) {
        setPlayerState(prevState => ({
          ...prevState,
          currentTime: value,
          isLoading: true,
          isSliding: false,
        }));

        videoRef.current?.seek(value);
      }
    },
    [playerState.currentTime],
  );

  // Listen to seek completion through the onSeek event
  const handleSeek = useCallback(() => {
    setPlayerState(prevState => ({
      ...prevState,
      isLoading: false,
      paused: false,
    }));
  }, []);

  /**
   * Triggered when the user starts interacting with the seek bar
   * Marks the player state as 'sliding'
   */
  const handleSlidingStart = useCallback(() => {
    setPlayerState(prevState => ({
      ...prevState,
      isSliding: true,
    }));
  }, []);

  /**
   * Fast forward the video by 10 seconds
   */
  const handleFastForward = useCallback(() => {
    const newTime = Math.min(playerState.currentTime + 10, playerState.duration);
    videoRef.current?.seek(newTime);
    setPlayerState(prevState => ({
      ...prevState,
      currentTime: newTime,
    }));
  }, [playerState.currentTime, playerState.duration]);

  /**
   * Rewind the video by 10 seconds
   */
  const handleRewind = useCallback(() => {
    const newTime = Math.max(playerState.currentTime - 10, 0);
    videoRef.current?.seek(newTime);
    setPlayerState(prevState => ({
      ...prevState,
      currentTime: newTime,
    }));
  }, [playerState.currentTime]);

  /**
   * Closes the Audio/Subtitles modal
   */
  const onAudioSubTitleClose = () => {
    setIsAudioSubtitleModal(!isAudioSubtitleModal);
  };

  /**
   * Closes the error modal
   */
  const onErrorModalClose = () => {
    setPlayerState(prevState => ({
      ...prevState,
      isErrorVisible: false,
    }));
  };

  /**
   * Handles video load event
   * Updates the video duration and stops the loading spinner
   */
  const onLoad = useCallback((data: OnLoadData) => {
    setPlayerState(prevState => ({
      ...prevState,
      duration: data.duration,
      isLoading: false,
    }));
  }, []);

  // Starts loading the video and shows a loading spinner
  const onLoadStart = () => {
    setPlayerState(prevState => ({
      ...prevState,
      isLoading: true,
    }));
  };

  /**
   * Updates the current playback time as the video progresses
   */
  const onProgress = useCallback(
    (data: OnProgressData) => {
      if (!playerState.isSliding && playerState.currentTime !== data.currentTime) {
        setPlayerState(prevState => ({
          ...prevState,
          currentTime: data.currentTime,
        }));
      }
    },
    [playerState.isSliding, playerState.currentTime],
  );

  // Marks the video as ready to be displayed (removes loading spinner)
  const onReadyForDisplay = () => {
    setPlayerState(prevState => ({
      ...prevState,
      isLoading: false,
    }));
  };

  /**
   * Closes the settings modal
   */
  const onSettingModalClose = () => {
    setIsSettingsModal(!isSettingsModal);
  };

  /**
   * Handles buffering state of the video (displays loader during buffering)
   */
  const onVideoBuffer = (param: OnBufferData) => {
    setPlayerState(prevState => ({
      ...prevState,
      isLoading: param.isBuffering,
    }));
  };

  const onVideoError = () => {
    setPlayerState(prevState => ({
      ...prevState,
      isErrorVisible: true,
    }));
  };

  /**
   * Toggles fullscreen mode
   * Locks orientation based on fullscreen state
   */
  const handleToggleScreen = useCallback(() => {
    if (playerState.isFullscreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscapeLeft();
    }
    setPlayerState(prevState => ({
      ...prevState,
      isFullscreen: !prevState.isFullscreen,
    }));
  }, [playerState.isFullscreen]);

  /**
   * Effect to unlock orientation and reset fullscreen state when the component is unmounted
   */
  useEffect(() => {
    setPlayerState(prevState => ({...prevState, paused: !prevState.paused}));

    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  /**
   * Effect to fade out player controls after change video start to play
   */
  useEffect(() => {
    if (!playerState.paused) {
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
      // Fade in controls if the video is paused
      Animated.timing(controlsOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [playerState.paused, playerState.controlsVisible]);

  /**
   * Toggle Player Controls on screen tap
   */
  useEffect(() => {
    if (!playerState.controlsVisible) {
      // Fade out controls if they are not visible
      Animated.timing(controlsOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      // Fade in controls if they are visible
      Animated.timing(controlsOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [playerState.controlsVisible, controlsOpacity]);

  /**
   * Smooth transition when controlsVisible changes
   */
  useEffect(() => {
    if (playerState.controlsVisible) {
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
  }, [playerState.controlsVisible]);

  return (
    <TouchableWithoutFeedback onPress={handleScreenTap}>
      <View style={styles.container as StyleProp<ViewStyle>}>
        <VideoPlayer
          currentTime={playerState.currentTime}
          isFullscreen={playerState.isFullscreen}
          onBuffer={onVideoBuffer}
          onError={onVideoError}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          onReadyForDisplay={onReadyForDisplay}
          onSeek={handleSeek}
          paused={playerState.paused}
          subTitleBottomValue={subTitleBottomValue}
          subtitleUri="https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt"
          videoRef={videoRef}
          videoUri="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
        {/* Controls section */}
        <PlayerControls
          controlsOpacity={controlsOpacity}
          handleAudioSubtitle={handleAudioSubtitle}
          handleFastForward={handleFastForward}
          handlePlayPause={handlePlayPause}
          handleRewind={handleRewind}
          handleSettingsClick={handleSettingsClick}
          handleSlidingComplete={handleSlidingComplete}
          handleSlidingStart={handleSlidingStart}
          handleToggleScreen={handleToggleScreen}
          playerState={playerState}
        />
        {/* Modals for settings, audio/subtitle, and errors */}
        <PlayerModals
          isAudioSubtitleModalVisible={isAudioSubtitleModal}
          isErrorModalVisible={playerState.isErrorVisible}
          isFullscreen={playerState.isFullscreen}
          isSettingsModalVisible={isSettingsModal}
          onAudioSubtitleClose={onAudioSubTitleClose}
          onErrorModalClose={onErrorModalClose}
          onSettingModalClose={onSettingModalClose}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PlayerScreenTemplate;
