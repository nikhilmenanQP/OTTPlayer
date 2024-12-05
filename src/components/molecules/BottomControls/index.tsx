import React, {useMemo} from 'react';
import Slider from '@react-native-community/slider';

import {BottomControlsProps} from './types';
import {Setting, SubTitle} from '@assets/images/appIcons';
import {Text, TouchableOpacity, View} from 'react-native';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

/**
 * @type {Component} The BottomControls component
 * @param param0
 * @returns
 */
const BottomControls: React.FC<BottomControlsProps> = ({
  currentTime,
  duration,
  formatTime,
  handleAudioSubtitle,
  handleSettingsClick,
  handleSlidingComplete,
  handleSlidingStart,
}) => {
  // Get the current theme and memoize styles to prevent unnecessary recalculations on each render
  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  return (
    <View style={styles.container}>
      {/* Slider container */}
      <View style={styles.sliderContainer}>
        <Slider
          maximumTrackTintColor={theme.colors.white} // Color of the maximum track (after the thumb)
          maximumValue={duration} // Maximum value of the slider (end of the video)
          minimumTrackTintColor={theme.colors.dodgerBlue} // Color of the minimum track (before the thumb)
          minimumValue={0} // Minimum value of the slider (start of the video)
          onSlidingComplete={handleSlidingComplete} // Callback for when sliding completes
          onSlidingStart={handleSlidingStart} // Callback for when sliding starts
          style={styles.slider}
          thumbTintColor={theme.colors.dodgerBlue} // Color of the thumb (slider handle)
          value={currentTime} // Current playback position
        />
        {/* Time display container */}
        <View style={styles.timeContainer}>
          {/* Display the formatted current time */}
          <Text style={styles.time}>{formatTime(currentTime)}</Text>
          <Text style={styles.time}> / </Text>
          {/* Display the formatted total duration */}
          <Text style={styles.time}>{formatTime(duration)}</Text>
        </View>
      </View>

      {/* Options container for additional actions (like subtitles or settings) */}
      <View style={styles.optionsContainer}>
        {/* Audio subtitles option */}
        <TouchableOpacity style={styles.options} onPress={handleAudioSubtitle}>
          <SubTitle />
          <Text style={styles.optionsText}>Audio Subtitles</Text>
        </TouchableOpacity>
        {/* Settings option */}
        <TouchableOpacity style={styles.options} onPress={handleSettingsClick}>
          <Setting />
          <Text style={styles.optionsText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomControls;
