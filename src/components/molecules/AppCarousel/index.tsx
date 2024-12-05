import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState, useCallback} from 'react';
import {AppCarouselProps} from './types';
import {View, Dimensions, ImageBackground} from 'react-native';
import {createStyles} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const {width: screenWidth} = Dimensions.get('window');

const AppCarousel: React.FC<AppCarouselProps> = ({banners}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const {theme} = useAppTheme();
  const styles = createStyles(theme);

  const renderItem = useCallback(() => {
    return (
      <ImageBackground
        source={{uri: 'https://picsum.photos/200/300'}} // Placeholder image
        style={styles.header}
      />
    );
  }, [styles]);

  const renderDots = () => {
    return banners.map((_, index) => {
      const isActive = index === activeSlide;
      return (
        <View
          key={index}
          style={[
            styles.dotStyle,
            {
              backgroundColor: isActive ? theme.colors.dotIconActive : theme.colors.dotIconNotActive,
              height: isActive ? theme.spacing.sm : theme.spacing.sm_x,
              width: isActive ? theme.spacing.sm : theme.spacing.sm_x,
            },
          ]}
        />
      );
    });
  };

  return (
    <View>
      <Carousel
        autoPlay
        data={banners}
        height={screenWidth + theme.spacing.lg_llll}
        onSnapToItem={setActiveSlide}
        renderItem={renderItem}
        scrollAnimationDuration={1000}
        width={screenWidth}
      />
      <LinearGradient colors={[theme.colors.background, 'transparent']} style={styles.topGradient} />
      <View style={styles.dotsContainer}>{renderDots()}</View>
      <LinearGradient colors={['transparent', theme.colors.background]} style={styles.bottomGradient} />
    </View>
  );
};

export default AppCarousel;
