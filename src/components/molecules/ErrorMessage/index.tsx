import PrimaryText from '@components/atoms/PrimaryText';
import React from 'react';

import {ErrorMessageProps} from './types';

import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const ErrorMessage: React.FC<ErrorMessageProps> = ({title, description}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  return (
    <>
      <PrimaryText style={styles.titleText}>{title}</PrimaryText>
      <PrimaryText style={styles.descriptionText}>{description}</PrimaryText>
    </>
  );
};

export default React.memo(ErrorMessage);
