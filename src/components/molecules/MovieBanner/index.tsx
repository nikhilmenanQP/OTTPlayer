import LinearGradient from 'react-native-linear-gradient';
import {MovieBannerProps} from './types';
import {PrimaryText} from '@components/atoms';
import {bottomGradientStyle, MovieBannerImage, movieInfoTextStyle, topGradientStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const MovieBanner: React.FC<MovieBannerProps> = ({imageUri, movieInfo}) => {
  const {theme} = useAppTheme();

  return (
    <MovieBannerImage source={{uri: imageUri}}>
      <LinearGradient colors={[theme.colors.background, 'transparent']} style={topGradientStyle(theme)} />
      <PrimaryText style={movieInfoTextStyle(theme)}>{movieInfo}</PrimaryText>
      <LinearGradient colors={['transparent', theme.colors.background]} style={bottomGradientStyle(theme)} />
    </MovieBannerImage>
  );
};

export default MovieBanner;
