// Importing necessary components and libraries
import BottomControls from '@components/PlayerScreen/BottomControls'; // Controls for the bottom section of the player
import GradientSeparator from '@components/AppComponents/AppGradient'; // Gradient separator between controls
import MiddleControls from '@components/PlayerScreen/MiddleControls'; // Middle controls for play/pause, fast-forward, rewind
import Orientation from 'react-native-orientation-locker'; // To lock/unlock screen orientation
import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react'; // React hooks
import TopControls from '@components/PlayerScreen/TopControls'; // Top controls for fullscreen toggle
import Video, {OnProgressData, OnLoadData, VideoRef, OnBufferData} from 'react-native-video'; // Video component

import {AppHeader} from '@components/AppComponents'; // Custom app header
import {PlayerState} from './types'; // Player state types for managing video playback
import {View, StyleProp, ViewStyle} from 'react-native'; // View and style components for layout
import {createStyle} from './styles'; // Styling function for the player screen
import {useAppTheme} from '@hooks/useAppTheme'; // Custom hook to fetch the current app theme
import PlayerSettingsModal from '@components/PlayerScreen/SettingsModal'; // Modal for player settings
import AudioSubtitleModal from '@components/PlayerScreen/AudioSubtitleModal'; // Modal for audio and subtitle settings
import ErrorScreen from '@components/AppComponents/ErrorScreen'; // Error screen component
import LottieLoader from '@components/AppComponents/LottieLoader';

/**
 * PlayerScreen Component
 * This component renders the video player, including video controls (play, pause, fullscreen, etc.)
 * It also manages various modals like settings, audio/subtitle selection, and error handling.
 * @returns JSX Element representing the PlayerScreen UI.
 */
const PlayerScreen: React.FC = () => {
  // State hooks for managing modals and error visibility
  const [isAudioSubtitleModal, setIsAudioSubtitleModal] = useState<boolean>(false); // Toggle for Audio/Subtitles modal
  const [isSettingsModal, setIsSettingsModal] = useState<boolean>(false); // Toggle for settings modal
  // const [isErrorVisible, setIsErrorVisible] = useState<boolean>(false); // Toggle for error modal visibility

  const videoRef = useRef<VideoRef | null>(null); // Reference to the video player instance for controlling playback

  // Initial state of the player (current time, duration, fullscreen, play/pause state)
  const [playerState, setPlayerState] = useState<PlayerState>({
    currentTime: 0, // Current playback time in seconds
    duration: 0, // Total duration of the video
    isErrorVisible: false,
    isFullscreen: false, // Fullscreen state (true/false)
    isLoading: true, // Flag for loading state (true when the video is buffering or loading)
    isSliding: false, // Flag indicating if the seek bar is being dragged
    paused: true, // Play/Pause state (true for paused)
  });

  // Fetch the current theme using the custom hook and apply memoization to optimize styling updates
  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]); // Memoized styles for performance

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
      paused: !prevState.paused, // Invert the paused state
    }));
  }, []);

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
  const handleSlidingComplete = useCallback((value: number) => {
    setPlayerState(prevState => ({
      ...prevState,
      isSliding: false, // Stop sliding
      currentTime: value, // Update the current playback time
      isLoading: true, // Show loader while seeking
    }));
    videoRef.current?.seek(value); // Seek to the specified time in the video

    // Resume playing the video and hide loader after a short delay
    setTimeout(() => {
      setPlayerState(prevState => ({
        ...prevState,
        isLoading: false, // Hide loader after seeking
        paused: false, // Resume playback
      }));
    }, 500); // Adjust timeout for smooth transition
  }, []);

  /**
   * Triggered when the user starts interacting with the seek bar
   * Marks the player state as 'sliding'
   */
  const handleSlidingStart = useCallback(() => {
    setPlayerState(prevState => ({
      ...prevState,
      isSliding: true, // Indicate that the seek bar is being dragged
    }));
  }, []);

  /**
   * Formats the playback time (in seconds) to a 'mm:ss' format for display
   */
  const formatTime = useCallback((seconds: number): string => {
    const mins = Math.floor(seconds / 60).toString();
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');
    return `${mins}:${secs}`;
  }, []);

  /**
   * Fast forward the video by 10 seconds
   */
  const handleFastForward = useCallback(() => {
    const newTime = Math.min(playerState.currentTime + 10, playerState.duration); // Calculate new time
    videoRef.current?.seek(newTime); // Seek the video
    setPlayerState(prevState => ({
      ...prevState,
      currentTime: newTime, // Update current time in state
    }));
  }, [playerState.currentTime, playerState.duration]);

  /**
   * Rewind the video by 10 seconds
   */
  const handleRewind = useCallback(() => {
    const newTime = Math.max(playerState.currentTime - 10, 0); // Calculate new time
    videoRef.current?.seek(newTime); // Seek the video
    setPlayerState(prevState => ({
      ...prevState,
      currentTime: newTime, // Update current time in state
    }));
  }, [playerState.currentTime]);

  /**
   * Closes the Audio/Subtitles modal
   */
  const onAudioSubTitleClose = () => {
    setIsAudioSubtitleModal(!isAudioSubtitleModal); // Toggle modal visibility
  };

  /**
   * Closes the error modal
   */
  const onErrorModalClose = () => {
    setPlayerState(prevState => ({
      ...prevState,
      isErrorVisible: true, // Update current time in state
    })); // Toggle error modal visibility
  };

  /**
   * Handles video load event
   * Updates the video duration and stops the loading spinner
   */
  const onLoad = useCallback((data: OnLoadData) => {
    setPlayerState(prevState => ({
      ...prevState,
      duration: data.duration, // Set video duration
      isLoading: false, // Stop loading spinner
    }));
  }, []);

  // Starts loading the video and shows a loading spinner
  const onLoadStart = () => {
    setPlayerState(prevState => ({
      ...prevState,
      isLoading: true, // Show loader during video load
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
          currentTime: data.currentTime, // Update current time based on progress
        }));
      }
    },
    [playerState.isSliding, playerState.currentTime],
  );

  // Marks the video as ready to be displayed (removes loading spinner)
  const onReadyForDisplay = () => {
    setPlayerState(prevState => ({
      ...prevState,
      isLoading: false, // Hide loader once video is ready
    }));
  };

  /**
   * Closes the settings modal
   */
  const onSettingModalClose = () => {
    setIsSettingsModal(!isSettingsModal); // Toggle settings modal visibility
  };

  /**
   * Handles buffering state of the video (displays loader during buffering)
   */
  const onVideoBuffer = (param: OnBufferData) => {
    setPlayerState(prevState => ({
      ...prevState,
      isLoading: param.isBuffering, // Show or hide loader based on buffering state
    }));
  };

  /**
   * Toggles fullscreen mode
   * Locks orientation based on fullscreen state
   */
  const toggleFullscreen = useCallback(() => {
    if (playerState.isFullscreen) {
      Orientation.lockToPortrait(); // Lock to portrait mode when exiting fullscreen
    } else {
      Orientation.lockToLandscapeLeft(); // Lock to landscape when entering fullscreen
    }
    setPlayerState(prevState => ({
      ...prevState,
      isFullscreen: !prevState.isFullscreen, // Toggle fullscreen state
    }));
  }, [playerState.isFullscreen]);

  /**
   * Effect to unlock orientation and reset fullscreen state when the component is unmounted
   */
  useEffect(() => {
    setPlayerState(prevState => ({...prevState, paused: !prevState.paused}));

    return () => {
      Orientation.unlockAllOrientations(); // Unlock orientation when component unmounts
    };
  }, []);

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
        onLoadStart={onLoadStart} // Show loader when video starts loading
        onBuffer={onVideoBuffer}
        onReadyForDisplay={onReadyForDisplay}
      />
      {/* Controls section */}
      <View style={styles.controlsContainer as StyleProp<ViewStyle>}>
        <GradientSeparator position="top" /> {/* Gradient separator on top */}
        <TopControls
          isFullscreen={playerState.isFullscreen} // Fullscreen state
          toggleFullscreen={toggleFullscreen} // Toggle fullscreen function
        />
        {playerState.isLoading ? (
          <LottieLoader isFullScreen={playerState.isFullscreen} />
        ) : (
          <MiddleControls
            handleFastForward={handleFastForward} // Fast-forward control
            handlePlayPause={handlePlayPause} // Play/pause control
            handleRewind={handleRewind} // Rewind control
            paused={playerState.paused} // Play/pause icon state
          />
        )}
        <BottomControls
          currentTime={playerState.currentTime} // Current time of playback
          duration={playerState.duration} // Total video duration
          formatTime={formatTime} // Time formatting function
          handleSlidingComplete={handleSlidingComplete} // Seek bar completion handler
          handleSlidingStart={handleSlidingStart} // Seek bar start handler
          handleAudioSubtitle={handleAudioSubtitle} // Audio/subtitle settings handler
          handleSettingsClick={handleSettingsClick} // Settings modal toggle
          isFullscreen={playerState.isFullscreen} // Fullscreen state
        />
        <GradientSeparator position="bottom" /> {/* Gradient separator on bottom */}
      </View>
      {/* Modals for settings, audio/subtitle, and errors */}
      <AudioSubtitleModal
        isFullscreen={playerState.isFullscreen} // Fullscreen state
        onClose={onAudioSubTitleClose}
        visible={isAudioSubtitleModal}
      />
      <PlayerSettingsModal
        isFullscreen={playerState.isFullscreen} // Fullscreen state
        onClose={onSettingModalClose}
        visible={isSettingsModal}
      />
      <ErrorScreen
        isFullscreen={playerState.isFullscreen} // Fullscreen state
        onErrorModalClose={onErrorModalClose}
        visible={playerState.isErrorVisible}
      />
    </View>
  );
};

export default PlayerScreen;
