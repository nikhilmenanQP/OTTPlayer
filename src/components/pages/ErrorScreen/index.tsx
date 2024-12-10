import ErrorScreenTemplate from '@components/templates/ErrorScreenTemplate';
import React, {useCallback, memo} from 'react';
import {ErrorScreenProps} from './types';

/**
 * ErrorScreen component that displays an error modal with options to refresh or close.
 * It uses ErrorScreenTemplate for reusability and clarity.
 *
 * @param {boolean} visible - Determines if the error modal is visible.
 * @param {boolean} isFullscreen - Determines if the modal is in fullscreen mode.
 * @param {Function} onErrorModalClose - Callback function to handle modal close action.
 * @returns {React.FC}
 */
const ErrorScreen: React.FC<ErrorScreenProps> = ({visible, isFullscreen, onErrorModalClose}) => {
  const handleModalClose = useCallback(() => {
    if (onErrorModalClose) {
      onErrorModalClose();
    }
  }, [onErrorModalClose]);

  // Return the ErrorScreenTemplate with passed props
  return <ErrorScreenTemplate visible={visible} isFullscreen={isFullscreen} onModalClose={handleModalClose} />;
};

export default memo(ErrorScreen);
