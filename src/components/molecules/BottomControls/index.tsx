import React from 'react';
import Slider from '@react-native-community/slider';
import {BottomControlsProps} from './types';
import {
  Container,
  Options,
  OptionsContainer,
  SliderContainer,
  TimeContainer,
  optionsTextStyle,
  sliderStyle,
  timeStyle,
} from './styles';
import {PrimaryText} from '@components/atoms';
import {Setting, SubTitle} from '@assets/images/appIcons';
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
  const {theme} = useAppTheme();

  return (
    <Container>
      {/* Slider container */}
      <SliderContainer>
        <Slider
          maximumTrackTintColor={theme.colors.white}
          maximumValue={duration}
          minimumTrackTintColor={theme.colors.dodgerBlue}
          minimumValue={0}
          onSlidingComplete={handleSlidingComplete}
          onSlidingStart={handleSlidingStart}
          style={sliderStyle(theme)}
          thumbTintColor={theme.colors.dodgerBlue}
          value={currentTime}
        />
        {/* Time display container */}
        <TimeContainer>
          <PrimaryText style={timeStyle(theme)}>{formatTime(currentTime)}</PrimaryText>
          <PrimaryText style={timeStyle(theme)}> / </PrimaryText>
          <PrimaryText style={timeStyle(theme)}>{formatTime(duration)}</PrimaryText>
        </TimeContainer>
      </SliderContainer>

      {/* Options container for additional actions (like subtitles or settings) */}
      <OptionsContainer>
        <Options onPress={handleAudioSubtitle}>
          <SubTitle />
          <PrimaryText style={optionsTextStyle(theme)}>Audio Subtitles</PrimaryText>
        </Options>
        <Options onPress={handleSettingsClick}>
          <Setting />
          <PrimaryText style={optionsTextStyle(theme)}>Settings</PrimaryText>
        </Options>
      </OptionsContainer>
    </Container>
  );
};

export default BottomControls;
