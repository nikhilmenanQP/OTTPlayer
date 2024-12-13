import React, {memo} from 'react';
import {ArrowLeft} from '@assets/images/appIcons';
import {BackButtonProps} from './types';
import {Container} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';

const BackButton: React.FC<BackButtonProps> = memo(({onPressHandler, iconContainerStyle, iconStyle}) => {
  const {theme} = useAppTheme();
  const navigation = useNavigation();

  /**
   * Handler for back button; uses the provided handler or defaults to going back in navigation
   */
  const onPress = onPressHandler || (() => navigation.goBack());

  return (
    <Container onPress={onPress} style={iconContainerStyle}>
      <ArrowLeft height={theme.spacing.sm_ll} style={iconStyle} width={theme.spacing.sm_ll} />
    </Container>
  );
});

export default BackButton;
