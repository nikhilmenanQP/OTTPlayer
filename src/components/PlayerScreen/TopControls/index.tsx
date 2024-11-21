import Orientation from 'react-native-orientation-locker';
import React, {useCallback} from 'react';

import {ArrowTailLeft, Cast, Expand} from '@assets/images/appIcons';
import {createStyle} from './styles';
import {Styles, TopControlsProps} from './types';
import {Text, View, TouchableOpacity, ViewStyle} from 'react-native';
import {useAppTheme} from '@hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Functional component for the top controls UI, including back button, movie info, and fullscreen toggle
const TopControls: React.FC<TopControlsProps> = ({
  toggleFullscreen,
  isFullscreen,
}) => {
  // Get insets for safe area (to prevent UI elements from overlapping with system UI like the notch)
  const insets = useSafeAreaInsets();

  // Initialize navigation for screen navigation actions
  const navigation = useNavigation();

  // Get the current theme for styling the component
  const {theme} = useAppTheme();

  // Generate styles based on the current theme, fullscreen status, and safe area insets
  const styles: Styles = createStyle(theme);

  // Back button handler that unlocks orientation when navigating back
  const onBackButtonHandler = useCallback(() => {
    Orientation.unlockAllOrientations(); // Unlock all orientations
    if (!Orientation.isLocked()) {
      // Only navigate if the orientation is not locked
      navigation.goBack();
    }
  }, [navigation]);

  // Calculate dynamic container style based on fullscreen mode and top inset (for safe areas)
  const containerStyle: ViewStyle[] = [
    styles.container,
    {top: isFullscreen ? 0 : insets.top}, // Apply top inset when not in fullscreen mode
  ];

  return (
    <View style={containerStyle}>
      {/* Left section containing back button and movie information */}
      <View style={styles.leftControl}>
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={onBackButtonHandler}>
          {/* Arrow icon for navigating back */}
          <ArrowTailLeft width={18} height={18} />
        </TouchableOpacity>
        <View style={styles.movieInfo}>
          {/* Movie title and genre */}
          <Text style={styles.movieTitle}>Movie Title</Text>
          <Text style={styles.movieGenre}>Movie Genre</Text>
        </View>
      </View>

      {/* Right section with cast icon and fullscreen toggle */}
      <View style={styles.rightControl}>
        <View style={styles.iconStyle}>
          {/* Cast icon */}
          <Cast width={18} height={18} />
        </View>
        <TouchableOpacity onPress={toggleFullscreen} style={styles.iconStyle}>
          {/* Expand icon for toggling fullscreen */}
          <Expand />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopControls;
