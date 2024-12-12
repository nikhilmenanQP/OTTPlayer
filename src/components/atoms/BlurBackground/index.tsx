import React from 'react';

import {BlurBackgroundProps} from './types';
import {BlurView} from '@react-native-community/blur';

import {blurViewStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

/**
 * @type {Component}
 * @param {BlurBackgroundProps} props
 */
const BlurBackground: React.FC<BlurBackgroundProps> = ({
  blurAmount = 5, // Default to 5
  blurType = 'chromeMaterialDark', // Default to 'dark'
  style,
}) => {
  const {theme} = useAppTheme();

  return <BlurView blurAmount={blurAmount} blurType={blurType} style={[blurViewStyle(theme), style]} />;
};

export default BlurBackground;
