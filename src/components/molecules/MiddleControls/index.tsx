import React, {useMemo} from 'react';
import {BackwardTenSec, ForwardTenSec, Pause, Play} from '@assets/images/appIcons';
import {createStyle} from './styles';
import {MiddleControlsProps} from './types';
import {TouchableOpacity, View} from 'react-native';
import {useAppTheme} from '@hooks/useAppTheme';

// Define constants for icon size to ensure consistent sizing across controls
const ICON_SIZE = 24;

// The MiddleControls component
const MiddleControls: React.FC<MiddleControlsProps> = ({handleFastForward, handlePlayPause, handleRewind, paused}) => {
  // Get the current theme and memoize styles to avoid recalculating on every render
  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  return (
    <View style={styles.container}>
      {/* Button to rewind the video by 10 seconds */}
      <TouchableOpacity accessibilityLabel="Rewind 10 seconds" onPress={handleRewind} style={styles.middlePlayerIcon}>
        <BackwardTenSec width={ICON_SIZE} height={ICON_SIZE} />
      </TouchableOpacity>

      {/* Play/Pause Button - changes based on paused state */}
      <TouchableOpacity
        accessibilityLabel={paused ? 'Play' : 'Pause'}
        onPress={handlePlayPause}
        style={styles.middlePlayerIcon}>
        {paused ? <Play width={ICON_SIZE} height={ICON_SIZE} /> : <Pause width={ICON_SIZE} height={ICON_SIZE} />}
      </TouchableOpacity>

      {/* Button to fast-forward the video by 10 seconds */}
      <TouchableOpacity
        accessibilityLabel="Fast forward 10 seconds"
        onPress={handleFastForward}
        style={styles.middlePlayerIcon}>
        <ForwardTenSec width={ICON_SIZE} height={ICON_SIZE} />
      </TouchableOpacity>
    </View>
  );
};

export default MiddleControls;
