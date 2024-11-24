import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import {createStyles} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const PlayerLoader = () => {
  const {theme} = useAppTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.loaderContainer}>
      <LottieView
        autoPlay
        loop
        source={require('@assets/loader.json')} // path to your loader animation
      />
    </View>
  );
};

export default PlayerLoader;
