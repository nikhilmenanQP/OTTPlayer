import React, {memo} from 'react';

import {ArrowLeft} from '@assets/images/appIcons';
import {BackButtonProps} from './types';
import {TouchableOpacity} from 'react-native';

import {createStyles} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';

const BackButton: React.FC<BackButtonProps> = memo(({onPressHandler}) => {
  const {theme} = useAppTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  // Handler for back button; uses the provided handler or defaults to going back in navigation
  const onPress = onPressHandler || (() => navigation.goBack());

  return (
    <TouchableOpacity onPress={onPress} style={styles.backButtonContainer}>
      <ArrowLeft width={theme.spacing.sm_ll} height={theme.spacing.sm_ll} />
    </TouchableOpacity>
  );
});

export default BackButton;
