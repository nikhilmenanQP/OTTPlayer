import React from 'react';
import {Animated} from 'react-native';

import {BottomControls, MiddleControls, TopControls} from '@components/molecules';
import {GradientSeparator, LottieLoader} from '@components/atoms';
import {PlayerControlsProps} from './types';

import {createStyle} from './styles';
import {formatTime} from '@utils/formatTime';
import {useAppTheme} from '@hooks/useAppTheme';

const PlayerControls: React.FC<PlayerControlsProps> = ({
  controlsOpacity,
  handleAudioSubtitle,
  handleFastForward,
  handlePlayPause,
  handleRewind,
  handleSettingsClick,
  handleSlidingComplete,
  handleSlidingStart,
  handleToggleScreen,
  playerState,
}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  return (
    <Animated.View style={[styles.controlsContainer, {opacity: controlsOpacity, zIndex: 1}]}>
      <GradientSeparator position="top" />
      <TopControls isFullscreen={playerState.isFullscreen} toggleFullscreen={handleToggleScreen} />
      {playerState.isLoading ? (
        <LottieLoader isFullScreen={playerState.isFullscreen} />
      ) : (
        <MiddleControls
          handleFastForward={handleFastForward}
          handlePlayPause={handlePlayPause}
          handleRewind={handleRewind}
          paused={playerState.paused}
        />
      )}
      <BottomControls
        currentTime={playerState.currentTime}
        duration={playerState.duration}
        formatTime={formatTime}
        handleAudioSubtitle={handleAudioSubtitle}
        handleSettingsClick={handleSettingsClick}
        handleSlidingComplete={handleSlidingComplete}
        handleSlidingStart={handleSlidingStart}
      />
      <GradientSeparator position="bottom" />
    </Animated.View>
  );
};

export default PlayerControls;
