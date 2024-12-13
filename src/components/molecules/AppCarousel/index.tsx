import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState, useCallback} from 'react';
import {AppCarouselProps, BannerProps} from './types';
import {Banner, bottomGradient, DotContainer, Dots, topGradient} from './styles';
import {Dimensions} from 'react-native';
import {useAppTheme} from '@hooks/useAppTheme';

const {width: screenWidth} = Dimensions.get('window');

const AppCarousel: React.FC<AppCarouselProps> = ({banners}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const {theme} = useAppTheme();

  const renderItem = useCallback(({item}: {item: BannerProps}) => {
    return <Banner source={{uri: item?.image}} />;
  }, []);

  const renderDots = useCallback(() => {
    return banners.map((_, index) => {
      const isActive = index === activeSlide;
      return (
        <Dots
          key={index}
          style={{
            backgroundColor: isActive ? theme.colors.dotIconActive : theme.colors.dotIconNotActive,
            height: isActive ? theme.spacing.sm : theme.spacing.sm_x,
            width: isActive ? theme.spacing.sm : theme.spacing.sm_x,
          }}
        />
      );
    });
  }, [banners, activeSlide]);

  return (
    <>
      <Carousel
        autoPlay
        data={banners}
        height={screenWidth + theme.spacing.lg_llll}
        onSnapToItem={setActiveSlide}
        renderItem={renderItem}
        scrollAnimationDuration={1000}
        width={screenWidth}
      />
      <LinearGradient colors={[theme.colors.background, 'transparent']} style={topGradient(theme)} />
      <DotContainer>{renderDots()}</DotContainer>
      <LinearGradient colors={['transparent', theme.colors.background]} style={bottomGradient(theme)} />
    </>
  );
};

export default React.memo(AppCarousel);
