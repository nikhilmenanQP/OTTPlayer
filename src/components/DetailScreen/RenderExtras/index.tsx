import MovieCard from '@components/HomeScreenComp/MovieCard';

import {useAppTheme} from '@hooks/useAppTheme';
import {Text, View} from 'react-native';
import {RenderExtrasProps} from './types';
import {createStyle} from './styles';

export const RenderExtras: React.FC<RenderExtrasProps> = ({data, onPress = () => {}}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  return (
    <>
      <View style={{paddingHorizontal: theme.spacing.sm_lll}}>
        <Text style={styles.moreText}>Extras</Text>
        <View style={styles.horiZontalRule} />
      </View>
      <View style={[{width: '100%'}, {marginVertical: theme.spacing.sm}]}>
        <MovieCard
          data={data}
          onPressHandler={onPress}
          sectionContainerStyle={{paddingLeft: theme.spacing.sm_ll}}
          showMovieDetails={true}
        />
      </View>
    </>
  );
};
