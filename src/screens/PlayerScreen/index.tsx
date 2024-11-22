import BottomControls from '@components/PlayerScreen/BottomControls';
import GradientSeparator from '@components/AppComponents/AppGradient';
import MiddleControls from '@components/PlayerScreen/MiddleControls';
import Orientation from 'react-native-orientation-locker';
import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import TopControls from '@components/PlayerScreen/TopControls';
import Video, {OnProgressData, OnLoadData, VideoRef} from 'react-native-video';

import {AppHeader} from '@components/AppComponents';
import {PlayerState} from './types';
import {View, StyleProp, ViewStyle} from 'react-native';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';
import PlayerSettingsModal from '@components/PlayerScreen/SettingsModal';
import AudioSubtitleModal from '@components/PlayerScreen/AudioSubtitleModal';

const PlayerScreen: React.FC = () => {
  const [isAudioSubtitleModal, setIsAudioSubtitleModal] = useState<boolean>(false);
  const [isSettingsModal, setIsSettingsModal] = useState<boolean>(false);
  const videoRef = useRef<VideoRef | null>(null); // Reference to the video player

  // State to manage video controls, playback time, and fullscreen mode
  const [playerState, setPlayerState] = useState<PlayerState>({
    currentTime: 0,
    duration: 0,
    isFullscreen: false,
    isSliding: false,
    paused: true,
  });

  // Get the current app theme and generate styles accordingly
  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  /**
   * Toggle play/pause state
   */
  const handlePlayPause = useCallback(() => {
    setPlayerState(prevState => ({
      ...prevState,
      paused: !prevState.paused,
    }));
  }, []);

  /**
   * Handle video progress updates and update current playback time
   * @param data - The progress data from the video player
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
   * Handle video load event and update the total duration
   * @param data - The data received when the video is loaded
   */
  const onLoad = useCallback((data: OnLoadData) => {
    setPlayerState(prevState => ({
      ...prevState,
      duration: data.duration,
    }));
  }, []);

  /**
   * Mark that the user started interacting with the seek bar
   */
  const handleSlidingStart = useCallback(() => {
    setPlayerState(prevState => ({
      ...prevState,
      isSliding: true,
    }));
  }, []);

  /**
   * Handle seek bar interaction completion and update the current playback time
   * @param value - The value (time) selected on the seek bar
   */
  const handleSlidingComplete = useCallback((value: number) => {
    setPlayerState(prevState => ({
      ...prevState,
      isSliding: false,
      currentTime: value,
    }));
    videoRef.current?.seek(value); // Seek to the selected time in the video
  }, []);

  const handleAudioSubtitle = () => {
    setIsAudioSubtitleModal(!isAudioSubtitleModal);
  };

  const onAudioSubTitleClose = () => {
    setIsAudioSubtitleModal(!isAudioSubtitleModal);
  };

  const handleSettingsClick = () => {
    setIsSettingsModal(!isSettingsModal);
  };

  const onSettingModalClose = () => {
    setIsSettingsModal(!isSettingsModal);
  };

  /**
   * Format time (seconds) into mm:ss format
   * @param seconds - Time in seconds
   * @returns Formatted time string
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
    const newTime = Math.min(playerState.currentTime + 10, playerState.duration);
    videoRef.current?.seek(newTime); // Seek forward by 10 seconds
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
    videoRef.current?.seek(newTime); // Seek backward by 10 seconds
    setPlayerState(prevState => ({
      ...prevState,
      currentTime: newTime,
    }));
  }, [playerState.currentTime]);

  /**
   * Toggle fullscreen mode and lock the orientation
   */
  const toggleFullscreen = useCallback(() => {
    if (playerState.isFullscreen) {
      Orientation.lockToPortrait(); // Lock to portrait on exit fullscreen
    } else {
      Orientation.lockToLandscapeLeft(); // Lock to landscape on entering fullscreen
    }
    setPlayerState(prevState => ({
      ...prevState,
      isFullscreen: !prevState.isFullscreen,
    }));
  }, [playerState.isFullscreen]);

  /**
   * Start playing video on mount, and unlock all orientations on unmount
   */
  useEffect(() => {
    setPlayerState(prevState => ({...prevState, paused: !prevState.paused}));

    return () => {
      Orientation.unlockAllOrientations(); // Unlock orientation when the component unmounts
    };
  }, []);

  return (
    <View style={styles.container as StyleProp<ViewStyle>}>
      <AppHeader />
      <Video
        onLoad={onLoad} // Handle video load event
        onProgress={onProgress} // Handle video progress updates
        paused={playerState.paused} // Control playback state (paused or playing)
        ref={videoRef}
        resizeMode="contain" // Resize the video to maintain aspect ratio
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // Video source
        }}
        style={styles.video}
        // rate={selectedSpeed}
      />

      <View style={styles.controlsContainer as StyleProp<ViewStyle>}>
        <GradientSeparator position="top" /> {/* Gradient effect */}
        <TopControls
          isFullscreen={playerState.isFullscreen} // Fullscreen toggle button
          toggleFullscreen={toggleFullscreen}
        />
        <MiddleControls
          handleFastForward={handleFastForward} // Fast forward control
          handlePlayPause={handlePlayPause} // Play/pause control
          handleRewind={handleRewind} // Rewind control
          paused={playerState.paused} // Control play/pause icon
        />
        <BottomControls
          currentTime={playerState.currentTime} // Current playback time
          duration={playerState.duration} // Video duration
          formatTime={formatTime} // Time formatting function
          handleSlidingComplete={handleSlidingComplete} // Handle seek completion
          handleSlidingStart={handleSlidingStart} // Handle seek start
          handleAudioSubtitle={handleAudioSubtitle}
          handleSettingsClick={handleSettingsClick}
        />
        <GradientSeparator position="bottom" /> {/* Gradient effect */}
      </View>

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
    </View>
  );
};

export default PlayerScreen;
