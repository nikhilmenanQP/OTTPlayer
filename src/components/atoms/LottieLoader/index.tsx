import React, {useEffect, useRef} from 'react';

import {Animated, Easing, Image, ImageSourcePropType} from 'react-native';
import {Container} from './styles';

import {lottieLoaderProps} from './types';
import {useAppTheme} from '@hooks/useAppTheme';

/**
 * LottieLoader Component
 * Displays a loader animation with a rotating image.
 * The rotation is achieved using React Native's Animated API for smooth and performant animation.
 * @returns JSX.Element - A component rendering a circular rotating loader.
 */
const LottieLoader: React.FC<lottieLoaderProps> = ({isFullScreen}) => {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const {theme} = useAppTheme();

  /**
   * Starts the continuous circular rotation animation when the component mounts.
   * Cleans up the animation when the component unmounts to prevent memory leaks.
   */
  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(rotateValue, {
        duration: 2000,
        easing: Easing.linear,
        toValue: 1,
        useNativeDriver: true,
      }),
    );
    animation.start();

    return () => {
      animation.stop();
    };
  }, [rotateValue]);

  /**
   * Interpolate the animated value to a rotation angle from '0deg' to '360deg'
   */
  const rotateInterpolation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], // Complete rotation in degrees
  });

  const animatedStyle = {
    transform: [{rotate: rotateInterpolation}],
  };

  return (
    <Container>
      <Animated.View style={animatedStyle}>
        <Image
          source={require('@assets/images/appIcons/loader.png') as ImageSourcePropType}
          style={{
            width: isFullScreen ? theme.spacing.lg_ll : theme.spacing.md_xx,
            height: isFullScreen ? theme.spacing.lg_ll : theme.spacing.md_xx,
          }}
        />
      </Animated.View>
    </Container>
  );
};

export default LottieLoader;
