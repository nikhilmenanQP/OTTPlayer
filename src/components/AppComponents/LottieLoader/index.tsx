import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing, Image, ImageSourcePropType} from 'react-native';
import {createStyles} from './styles'; // Import styles generator
import {lottieLoaderProps} from './types';
import {useAppTheme} from '@hooks/useAppTheme'; // Import theme hook to get the current theme

/**
 * LottieLoader Component
 * Displays a loader animation with a rotating image.
 * The rotation is achieved using React Native's Animated API for smooth and performant animation.
 * @returns JSX.Element - A component rendering a circular rotating loader.
 */
const LottieLoader: React.FC<lottieLoaderProps> = ({isFullScreen}) => {
  // Retrieve the current theme from the app's theme provider
  const {theme} = useAppTheme();
  // Generate the styles based on the current theme
  const styles = createStyles(theme);

  // Create an animated value to control the rotation animation
  const rotateValue = useRef(new Animated.Value(0)).current;

  /**
   * useEffect Hook
   * Starts the continuous circular rotation animation when the component mounts.
   * Cleans up the animation when the component unmounts to prevent memory leaks.
   */
  useEffect(() => {
    // Define and start the circular rotation animation with looping
    const animation = Animated.loop(
      Animated.timing(rotateValue, {
        duration: 2000, // Duration of one complete rotation (in milliseconds)
        easing: Easing.linear, // Linear easing for smooth continuous motion
        toValue: 1, // Rotate from 0 to 360 degrees
        useNativeDriver: true, // Use native driver for better performance
      }),
    );
    animation.start();

    // Clean up the animation when the component unmounts
    return () => {
      animation.stop();
    };
  }, [rotateValue]);

  // Interpolate the animated value to a rotation angle from '0deg' to '360deg'
  const rotateInterpolation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], // Complete rotation in degrees
  });

  // Define the animated style that applies the rotation to the loader
  const animatedStyle = {
    transform: [{rotate: rotateInterpolation}],
  };

  return (
    <View style={styles.loaderContainer}>
      {/* Apply the animated style to the image for the rotating effect */}
      <Animated.View style={animatedStyle}>
        <Image
          source={require('@assets/images/appIcons/loader.png') as ImageSourcePropType}
          style={{
            width: isFullScreen ? theme.spacing.lg_ll : theme.spacing.md_xx,
            height: isFullScreen ? theme.spacing.lg_ll : theme.spacing.md_xx,
          }}
        />
      </Animated.View>
    </View>
  );
};

export default LottieLoader;
