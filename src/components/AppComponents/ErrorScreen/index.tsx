import BlurBackground from '../BlurBackGround';
import React, {useCallback} from 'react';

import {CloseIcon, Danger, Refresh} from '@assets/images/appIcons';
import {ErrorScreenProps} from './types';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {createStyle, ICON_SIZE} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

/**
 * @type {Component} ErrorScreen component that displays an error modal with options to refresh or close
 * @param param0
 * @returns
 */
const ErrorScreen: React.FC<ErrorScreenProps> = ({visible = true, isFullscreen = true, onErrorModalClose}) => {
  // Access the theme from the custom hook for styling
  const {theme} = useAppTheme();

  // Get the safe area insets (e.g., top padding for notches or status bars)
  const insets = useSafeAreaInsets();

  // Generate styles dynamically based on the current theme
  const styles = createStyle(theme);

  // Memoized calculation of the top offset for the close button.
  // If fullscreen, use the theme's spacing, otherwise use the safe area top inset.
  const top = React.useMemo(
    () => (isFullscreen ? theme.spacing.sm_llll : insets.top),
    [isFullscreen, theme.spacing.sm_llll, insets.top],
  );

  // Memoize the modal close handler to avoid unnecessary re-renders of the close button
  const handleClose = useCallback(() => {
    // If the close function is provided, call it to close the modal
    if (onErrorModalClose) {
      onErrorModalClose();
    }
  }, [onErrorModalClose]);

  return (
    <Modal
      // Modal configuration to animate from the bottom with slide animation
      animationType="fade"
      // Ensure the modal supports both portrait and landscape orientations
      supportedOrientations={['landscape', 'landscape-left', 'portrait']}
      // Make the modal transparent and control its visibility
      transparent
      visible={visible}>
      <View style={styles.container}>
        {/* Add a blurred background to the modal for a better UX */}
        <BlurBackground />

        {/* Render the Danger icon with a fixed size */}
        <Danger width={ICON_SIZE.danger} height={ICON_SIZE.danger} style={styles.icon} />

        {/* Display the error title */}
        <Text style={styles.titleText}>Something Went Wrong!</Text>

        {/* Display a brief description of the error */}
        <Text style={styles.descriptionText}>Please refresh the page to load content</Text>

        {/* Button for retrying the operation (refreshing the page) */}
        <TouchableOpacity style={styles.button}>
          {/* Refresh icon inside the button */}
          <Refresh />
          <Text style={styles.tryAgainText}>Try again</Text>
        </TouchableOpacity>

        {/* Close button positioned at the top of the screen */}
        <TouchableOpacity onPress={handleClose} style={[styles.closeButton, {top}]}>
          <CloseIcon width={ICON_SIZE.close} height={ICON_SIZE.close} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ErrorScreen;
