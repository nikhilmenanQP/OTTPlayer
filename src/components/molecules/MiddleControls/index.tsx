import React from 'react';
import {BackwardTenSec, ForwardTenSec, Pause, Play} from '@assets/images/appIcons';
import {Container, ICON_SIZE, PlayerIconContainer} from './styles';
import {MiddleControlsProps} from './types';

const MiddleControls: React.FC<MiddleControlsProps> = ({handleFastForward, handlePlayPause, handleRewind, paused}) => {
  return (
    <Container>
      {/* Button to rewind the video by 10 seconds */}
      <PlayerIconContainer accessibilityLabel="Rewind 10 seconds" onPress={handleRewind}>
        <BackwardTenSec width={ICON_SIZE} height={ICON_SIZE} />
      </PlayerIconContainer>

      {/* Play/Pause Button - changes based on paused state */}
      <PlayerIconContainer accessibilityLabel={paused ? 'Play' : 'Pause'} onPress={handlePlayPause}>
        {paused ? <Play width={ICON_SIZE} height={ICON_SIZE} /> : <Pause width={ICON_SIZE} height={ICON_SIZE} />}
      </PlayerIconContainer>

      {/* Button to fast-forward the video by 10 seconds */}
      <PlayerIconContainer accessibilityLabel="Fast forward 10 seconds" onPress={handleFastForward}>
        <ForwardTenSec width={ICON_SIZE} height={ICON_SIZE} />
      </PlayerIconContainer>
    </Container>
  );
};

export default MiddleControls;
