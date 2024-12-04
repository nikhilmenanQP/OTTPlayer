import BlurBackground from '../BlurBackGround';
import React, {useCallback} from 'react';

import {CloseIcon, Danger, Refresh} from '@assets/images/appIcons';
import {ERROR_MESSAGES} from '@constants/strings';
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
  const {theme} = useAppTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyle(theme);

  const top = React.useMemo(
    () => (isFullscreen ? theme.spacing.sm_llll : insets.top),
    [isFullscreen, theme.spacing.sm_llll, insets.top],
  );

  const handleClose = useCallback(() => {
    if (onErrorModalClose) {
      onErrorModalClose();
    }
  }, [onErrorModalClose]);

  return (
    <Modal
      animationType="fade"
      supportedOrientations={['landscape', 'landscape-left', 'portrait']}
      transparent
      visible={visible}>
      <View style={styles.container}>
        <BlurBackground />
        <Danger width={ICON_SIZE.danger} height={ICON_SIZE.danger} style={styles.icon} />

        {/* Title */}
        <Text style={styles.titleText}>{ERROR_MESSAGES.title}</Text>

        {/* Description */}
        <Text style={styles.descriptionText}>{ERROR_MESSAGES.description}</Text>

        {/* Refresh Button */}
        <TouchableOpacity style={styles.button}>
          <Refresh />
          <Text style={styles.tryAgainText}>{ERROR_MESSAGES.tryAgain}</Text>
        </TouchableOpacity>

        {/* Close Button */}
        <TouchableOpacity onPress={handleClose} style={[styles.closeButton, {top}]}>
          <CloseIcon width={ICON_SIZE.close} height={ICON_SIZE.close} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ErrorScreen;
