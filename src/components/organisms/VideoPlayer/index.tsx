import React from 'react';
import SubtitleDisplay from '@components/molecules/SubtitleDisplay';
import {VideoWithSubtitlesProps} from './types';
import {Video} from 'react-native-video';
import {createStyle} from './styles';

const VideoPlayer: React.FC<VideoWithSubtitlesProps> = ({
  currentTime,
  isFullscreen,
  onBuffer,
  onError,
  onLoad,
  onLoadStart,
  onProgress,
  onReadyForDisplay,
  onSeek,
  paused,
  subTitleBottomValue,
  subtitleUri,
  videoRef,
  videoUri,
}) => {
  const styles = createStyle();
  return (
    <>
      {/* Video Player */}
      <Video
        onBuffer={onBuffer}
        onError={onError}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        onReadyForDisplay={onReadyForDisplay}
        onSeek={onSeek}
        paused={paused}
        ref={videoRef}
        resizeMode="contain"
        source={{uri: videoUri}}
        style={styles.video}
      />
      {/* Subtitle Display */}
      <SubtitleDisplay
        currentTime={currentTime}
        isFullscreen={isFullscreen}
        subTitleBottomValue={subTitleBottomValue}
        subtitleUri={subtitleUri}
      />
    </>
  );
};

export default VideoPlayer;
