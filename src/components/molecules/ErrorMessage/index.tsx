import PrimaryText from '@components/atoms/PrimaryText';
import React from 'react';
import {ErrorMessageProps} from './types';
import {descriptionTextStyle, titleTextStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const ErrorMessage: React.FC<ErrorMessageProps> = ({title, description}) => {
  const {theme} = useAppTheme();

  return (
    <>
      <PrimaryText style={titleTextStyle(theme)}>{title}</PrimaryText>
      <PrimaryText style={descriptionTextStyle(theme)}>{description}</PrimaryText>
    </>
  );
};

export default React.memo(ErrorMessage);
