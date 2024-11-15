import LinearGradient from 'react-native-linear-gradient';

import {ImageBackground, Text} from 'react-native';
import {MovieBannerProps} from './types';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

export const MovieBanner: React.FC<MovieBannerProps> = ({
  imageUri,
  movieInfo,
}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  return (
    <ImageBackground source={{uri: imageUri}} style={styles.movieBanner}>
      <LinearGradient
        colors={[theme.colors.background, 'transparent']}
        style={styles.topGradient}
      />
      <Text style={styles.movieInfoText}>{movieInfo}</Text>
      <LinearGradient
        colors={['transparent', theme.colors.background]}
        style={styles.bottomGradient}
      />
    </ImageBackground>
  );
};
