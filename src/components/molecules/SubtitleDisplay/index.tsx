import React from 'react';
import {Animated} from 'react-native';
import {SubtitleOverlay} from '@components/atoms';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

interface SubtitleDisplayProps {
  currentTime: number;
  isFullscreen: boolean;
  subTitleBottomValue: Animated.Value;
  subtitleUri: string;
}

const SubtitleDisplay: React.FC<SubtitleDisplayProps> = ({
  currentTime,
  isFullscreen,
  subTitleBottomValue,
  subtitleUri,
}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme, subTitleBottomValue);

  return (
    <Animated.View style={styles.subTitle}>
      <SubtitleOverlay currentTime={currentTime} isFullScreen={isFullscreen} subtitleUri={subtitleUri} />
    </Animated.View>
  );
};

export default SubtitleDisplay;
