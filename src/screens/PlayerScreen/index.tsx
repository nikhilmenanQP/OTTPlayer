// Importing necessary components and libraries
import BottomControls from '@components/PlayerScreen/BottomControls'; // Controls for the bottom section of the player
import GradientSeparator from '@components/AppComponents/AppGradient'; // Gradient separator between controls
import MiddleControls from '@components/PlayerScreen/MiddleControls'; // Middle controls for play/pause, fast-forward, rewind
import Orientation from 'react-native-orientation-locker'; // To lock/unlock screen orientation
import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react'; // React hooks
import TopControls from '@components/PlayerScreen/TopControls'; // Top controls for fullscreen toggle
import Video, {OnProgressData, OnLoadData, VideoRef} from 'react-native-video'; // Video component

import {AppHeader} from '@components/AppComponents'; // Custom app header
import {PlayerState} from './types'; // Player state types for managing video playback
import {View, StyleProp, ViewStyle} from 'react-native'; // View and style components for layout
import {createStyle} from './styles'; // Styling function for the player screen
import {useAppTheme} from '@hooks/useAppTheme'; // Custom hook to fetch the current app theme
import PlayerSettingsModal from '@components/PlayerScreen/SettingsModal'; // Modal for player settings
import AudioSubtitleModal from '@components/PlayerScreen/AudioSubtitleModal'; // Modal for audio and subtitle settings
import ErrorScreen from '@components/AppComponents/ErrorScreen'; // Error screen component

/**
 * @type {Component} PlayerScreen Component
 * @returns JSX
 */
const PlayerScreen: React.FC = () => {
  // State hooks to manage modal visibility and player state
  const [isAudioSubtitleModal, setIsAudioSubtitleModal] = useState<boolean>(false); // Audio/subtitle modal visibility
  const [isSettingsModal, setIsSettingsModal] = useState<boolean>(false); // Settings modal visibility
  const videoRef = useRef<VideoRef | null>(null); // Reference to the video player for controlling playback
  const [isErrorVisible, setIsErrorVisible] = useState<boolean>(false); // Error modal visibility

  // Player state management (playback, fullscreen, and progress)
  const [playerState, setPlayerState] = useState<PlayerState>({
    currentTime: 0, // Current playback time
    duration: 0, // Total duration of the video
    isFullscreen: false, // Fullscreen mode state
    isSliding: false, // Whether the user is interacting with the seek bar
    paused: true, // Play/pause state
  });

  // Get the current app theme and use memoization to optimize style recalculation
  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  /**
   * @type {Function} Handle play/pause toggle
   */
  const handlePlayPause = useCallback(() => {
    setPlayerState(prevState => ({
      ...prevState,
      paused: !prevState.paused,
    }));
  }, []);

  /**
   * @type {Function} Handle video progress update, tracking current playback time
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

  /**
   * @type {Function} Update the duration of the video once loaded
   */
  const onLoad = useCallback((data: OnLoadData) => {
    setPlayerState(prevState => ({
      ...prevState,
      duration: data.duration,
    }));
  }, []);

  /**
   * @type {Function} Mark that the user started interacting with the seek bar
   */
  const handleSlidingStart = useCallback(() => {
    setPlayerState(prevState => ({
      ...prevState,
      isSliding: true,
    }));
  }, []);

  /**
   * @type {Function} Handle the completion of seek bar interaction and update the playback time
   */
  const handleSlidingComplete = useCallback((value: number) => {
    setPlayerState(prevState => ({
      ...prevState,
      isSliding: false,
      currentTime: value,
    }));
    videoRef.current?.seek(value); // Seek to the selected time
  }, []);

  /**
   * @type {Function} Toggle visibility of the audio/subtitle modal
   */
  const handleAudioSubtitle = () => {
    setIsAudioSubtitleModal(!isAudioSubtitleModal);
  };

  /**
   * @type {Function} Close the audio/subtitle modal
   */
  const onAudioSubTitleClose = () => {
    setIsAudioSubtitleModal(!isAudioSubtitleModal);
  };

  /**
   * @type {Function} Toggle visibility of the settings modal
   */
  const handleSettingsClick = () => {
    setIsSettingsModal(!isSettingsModal);
  };

  /**
   * @type {Function} Close the settings modal
   */
  const onSettingModalClose = () => {
    setIsSettingsModal(!isSettingsModal);
  };

  /**
   * @type {Function} Close the error modal
   */
  const onErrorModalClose = () => {
    setIsErrorVisible(!isErrorVisible);
  };

  /**
   * @type {Function} Format time from seconds to mm:ss format
   */
  const formatTime = useCallback((seconds: number): string => {
    const mins = Math.floor(seconds / 60).toString();
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');
    return `${mins}:${secs}`;
  }, []);

  /**
   * @type {Function} Fast forward the video by 10 seconds
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
   * @type {Function} Rewind the video by 10 seconds
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
   * @type {Function} Toggle fullscreen mode and lock the orientation accordingly
   */
  const toggleFullscreen = useCallback(() => {
    if (playerState.isFullscreen) {
      Orientation.lockToPortrait(); // Lock orientation to portrait
    } else {
      Orientation.lockToLandscapeLeft(); // Lock orientation to landscape
    }
    setPlayerState(prevState => ({
      ...prevState,
      isFullscreen: !prevState.isFullscreen,
    }));
  }, [playerState.isFullscreen]);

  // Start playing video when mounted, and unlock orientation on unmount
  useEffect(() => {
    setPlayerState(prevState => ({...prevState, paused: !prevState.paused}));

    return () => {
      Orientation.unlockAllOrientations(); // Unlock orientation when component unmounts
    };
  }, []);

  // Rendering the player UI with video and controls
  return (
    <View style={styles.container as StyleProp<ViewStyle>}>
      <AppHeader /> {/* Header component */}
      <Video
        onLoad={onLoad} // Event handler for video load
        onProgress={onProgress} // Event handler for video progress
        paused={playerState.paused} // Control the play/pause state
        ref={videoRef}
        resizeMode="contain" // Resize video to maintain aspect ratio
        // rate={selectedSpeed}
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // Sample video URI
        }}
        style={styles.video} // Styling for the video element
      />
      {/* Controls section */}
      <View style={styles.controlsContainer as StyleProp<ViewStyle>}>
        <GradientSeparator position="top" /> {/* Gradient separator on top */}
        <TopControls
          isFullscreen={playerState.isFullscreen} // Fullscreen state
          toggleFullscreen={toggleFullscreen} // Toggle fullscreen function
        />
        <MiddleControls
          handleFastForward={handleFastForward} // Fast-forward control
          handlePlayPause={handlePlayPause} // Play/pause control
          handleRewind={handleRewind} // Rewind control
          paused={playerState.paused} // Play/pause icon state
        />
        <BottomControls
          currentTime={playerState.currentTime} // Current time of playback
          duration={playerState.duration} // Total video duration
          formatTime={formatTime} // Time formatting function
          handleSlidingComplete={handleSlidingComplete} // Seek bar completion handler
          handleSlidingStart={handleSlidingStart} // Seek bar start handler
          handleAudioSubtitle={handleAudioSubtitle} // Audio/subtitle settings handler
          handleSettingsClick={handleSettingsClick} // Settings modal toggle
        />
        <GradientSeparator position="bottom" /> {/* Gradient separator on bottom */}
      </View>
      {/* Modals for settings, audio/subtitle, and errors */}
      <AudioSubtitleModal
        isFullscreen={playerState.isFullscreen}
        onClose={onAudioSubTitleClose}
        visible={isAudioSubtitleModal}
      />
      <PlayerSettingsModal
        isFullscreen={playerState.isFullscreen}
        onClose={onSettingModalClose}
        visible={isSettingsModal}
      />
      <ErrorScreen
        isFullscreen={playerState.isFullscreen}
        visible={isErrorVisible}
        onErrorModalClose={onErrorModalClose}
      />
    </View>
  );
};

export default PlayerScreen;
