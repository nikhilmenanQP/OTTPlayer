import {MovieCardList} from '@components/organisms';

import {useAppTheme} from '@hooks/useAppTheme';
import {Text, View} from 'react-native';
import {RenderExtrasProps} from './types';
import {createStyle} from './styles';

const RenderExtras: React.FC<RenderExtrasProps> = ({data}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  return (
    <>
      <View style={{paddingHorizontal: theme.spacing.sm_lll}}>
        <Text style={styles.moreText}>Extras</Text>
        <View style={styles.horiZontalRule} />
      </View>
      <View style={[{width: '100%'}, {marginVertical: theme.spacing.sm}]}>
        <MovieCardList data={data} sectionContainerStyle={{paddingLeft: theme.spacing.sm_ll}} showMovieDetails={true} />
      </View>
    </>
  );
};

export default RenderExtras;
