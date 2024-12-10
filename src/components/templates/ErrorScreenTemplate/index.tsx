import PrimaryButton from '@components/atoms/PrimaryButton';
import React, {useCallback} from 'react';

import {AppModal} from '@components/atoms';
import {Danger, Refresh} from '@assets/images/appIcons';
import {ERROR_MESSAGES} from '@constants/strings';
import {ErrorMessage} from '@components/molecules';
import {ErrorScreenProps} from './types';
import {View} from 'react-native';

import {createStyle, ICON_SIZE} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

/**
 * @type {Component} ErrorScreen component that displays an error modal with options to refresh or close
 * @param param0
 * @returns
 */
const ErrorScreenTemplate: React.FC<ErrorScreenProps> = ({visible, isFullscreen = false, onModalClose}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  const handleClose = useCallback(() => {
    if (onModalClose) {
      onModalClose();
    }
  }, [onModalClose]);

  return (
    <AppModal isFullscreen={isFullscreen} showCloseButton onClose={handleClose} visible={visible}>
      <View style={styles.container}>
        {/* Danger Button */}
        <PrimaryButton
          buttonStyle={styles.dangerButtonStyle}
          icon={Danger}
          iconHeight={ICON_SIZE.danger}
          iconWidth={ICON_SIZE.danger}
        />

        {/* Error Message Display */}
        <ErrorMessage description={ERROR_MESSAGES.description} title={ERROR_MESSAGES.title} />

        {/* Try Again Button */}
        <PrimaryButton
          buttonStyle={styles.button}
          icon={Refresh}
          iconHeight={ICON_SIZE.refresh}
          iconWidth={ICON_SIZE.refresh}
          text={ERROR_MESSAGES.tryAgain}
          textStyle={styles.tryAgainText}
        />
      </View>
    </AppModal>
  );
};

export default ErrorScreenTemplate;
