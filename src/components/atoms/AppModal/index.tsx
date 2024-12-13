import BlurBackground from '../BlurBackground';
import PrimaryButton from '../PrimaryButton';
import React, {useMemo, useCallback} from 'react';

import {AppModalProps} from './types';
import {CloseIcon} from '@assets/images/appIcons';
import {Container, ICON_SIZE, buttonStyle} from './styles';
import {Modal} from 'react-native';

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
  const insets = useSafeAreaInsets();
  const {theme} = useAppTheme();

  /**
   * Calculate the top spacing for the modal
   */
  const topSpacing = useMemo(
    () => (isFullscreen ? theme.spacing.sm_llll : insets.top),
    [isFullscreen, theme.spacing.sm_llll, insets.top],
  );

  /**
   * Memoizing onClose handler to avoid unnecessary re-renders
   */
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <Modal
      animationType="fade"
      onRequestClose={handleClose}
      supportedOrientations={['portrait', 'landscape', 'landscape-left', 'landscape-right']}
      transparent
      visible={visible}>
      <Container style={containerStyle}>
        <BlurBackground />
        {children}
        {showCloseButton && (
          <PrimaryButton
            buttonStyle={{...buttonStyle(theme), top: topSpacing}}
            icon={CloseIcon}
            iconHeight={ICON_SIZE}
            iconWidth={ICON_SIZE}
            onPressHandler={handleClose}
          />
        )}
      </Container>
    </Modal>
  );
};

export default AppModal;
