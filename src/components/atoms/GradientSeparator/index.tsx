import LinearGradient from 'react-native-linear-gradient';
import React, {useMemo} from 'react';
import {GradientSeparatorProps} from './types';
import {ViewStyle} from 'react-native';
import {useAppTheme} from '@hooks/useAppTheme';

const GradientSeparator: React.FC<GradientSeparatorProps> = ({position, style}) => {
  const {theme} = useAppTheme();
  /**
   * Memoize the color configuration based on the 'position' prop
   * The gradient for the top has a black transparent fade, while the bottom has the inverse.
   */
  const colors = useMemo<string[]>(
    () => (position === 'top' ? [theme.colors.black_92, 'transparent'] : ['transparent', theme.colors.black_92]),
    [position], // Only recompute colors when 'position' changes
  );

  /**
   * Memoize the gradient style based on the 'position' prop
   * This dynamically sets the position to either 'top' or 'bottom' to control the gradient's placement
   */
  const gradientStyle = useMemo<ViewStyle>(
    () => ({
      [position]: theme.spacing.null,
      height: '50%',
      position: 'absolute',
      width: '100%',
    }),
    [position],
  );

  return <LinearGradient colors={colors} style={[gradientStyle, style]} />;
};

export default GradientSeparator;
