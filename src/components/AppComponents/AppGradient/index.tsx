import LinearGradient from 'react-native-linear-gradient';
import React, {useMemo} from 'react';

import {GradientSeparatorProps} from './types';
import {ViewStyle} from 'react-native';
import {useAppTheme} from '@hooks/useAppTheme';

const GradientSeparator: React.FC<GradientSeparatorProps> = ({position, style}) => {
  const {theme} = useAppTheme();
  // Memoize the color configuration based on the 'position' prop
  // The gradient for the top has a black transparent fade, while the bottom has the inverse.
  const colors = useMemo<string[]>(
    () => (position === 'top' ? [theme.colors.black_92, 'transparent'] : ['transparent', theme.colors.black_92]),
    [position], // Only recompute colors when 'position' changes
  );

  // Memoize the gradient style based on the 'position' prop
  // This dynamically sets the position to either 'top' or 'bottom' to control the gradient's placement
  const gradientStyle = useMemo<ViewStyle>(
    () => ({
      [position]: theme.spacing.null, // Dynamically sets either 'top' or 'bottom' based on 'position'
      height: '50%', // The gradient covers half the height of the container
      position: 'absolute', // The gradient is absolutely positioned within the container
      width: '100%', // Full width of the container
    }),
    [position], // Recompute the gradient style only when 'position' changes
  );

  // Render the LinearGradient component with the calculated colors and styles
  return <LinearGradient colors={colors} style={[gradientStyle, style]} />;
};

export default GradientSeparator;
