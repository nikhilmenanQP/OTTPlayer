import BlurBackground from '../BlurBackground';
import PrimaryButton from '../PrimaryButton';
import React, {useMemo, useCallback} from 'react';

import {AppModalProps} from './types';
import {CloseIcon} from '@assets/images/appIcons';
import {Modal, View} from 'react-native';

import {createStyle, ICON_SIZE} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const AppModal: React.FC<AppModalProps> = ({
  children,
  containerStyle,
  isFullscreen = false,
  onClose,
  showCloseButton = false,
  visible = true,
}) => {
  const {theme} = useAppTheme();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyle(theme), [theme]);

  // Calculate the top spacing for the modal
  const topSpacing = useMemo(
    () => (isFullscreen ? theme.spacing.sm_llll : insets.top),
    [isFullscreen, theme.spacing.sm_llll, insets.top],
  );

  // Memoizing onClose handler to avoid unnecessary re-renders
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <Modal
      animationType="fade"
      onRequestClose={handleClose}
      supportedOrientations={['landscape', 'landscape-left', 'portrait']}
      transparent
      visible={visible}>
      <View style={[styles.container, containerStyle]}>
        <BlurBackground />
        {children}
        {showCloseButton && (
          <PrimaryButton
            buttonStyle={{...styles.closeButton, top: topSpacing}}
            icon={CloseIcon}
            iconHeight={ICON_SIZE}
            iconWidth={ICON_SIZE}
            onPressHandler={handleClose}
          />
        )}
      </View>
    </Modal>
  );
};

export default AppModal;
