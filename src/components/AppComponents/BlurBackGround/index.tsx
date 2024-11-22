import React from 'react';
import {BlurBackgroundProps} from './types';
import {BlurView} from '@react-native-community/blur';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

/**
 * @type {Component}
 * @param {BlurBackgroundProps} props
 */
const BlurBackground: React.FC<BlurBackgroundProps> = ({
  blurAmount = 5, // Default to 10
  blurType = 'chromeMaterialDark', // Default to 'dark'
  style,
}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  return (
    <BlurView
      style={[styles.absolute, style]}
      blurType={blurType}
      blurAmount={blurAmount}
    />
  );
};

export default BlurBackground;
