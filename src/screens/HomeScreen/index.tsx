import AppCarousel from '@components/AppComponents/AppCarousel';
import AppHeader from '@components/AppComponents/AppHeader';
import MovieCard from '@components/HomeScreenComp/MovieCard';
import React from 'react';

import {NavigationProp} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import {createStyle} from './styles';
import {homeScreenData, banners} from '@dummyDataPreProd/HomeScreenMovie';
import {mapDataProps} from './types';
import {useAppTheme} from '@hooks/useAppTheme';

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  const onMovieClickHandler = (movie: any) => {
    navigation.navigate('DetailScreen', {
      data: movie,
    });
  };

  const onProfileClickHandler = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.container}>
      {/* AppHeader with extracted style */}
      <AppHeader
        appHeaderContainerStyle={styles.headerContainerStyle}
        showLogo={true}
        showMenuButton={true}
        onProfileIconHandler={onProfileClickHandler}
      />

      {/* AppCarousel for banners */}
      <AppCarousel banners={banners} />

      {/* Map through homeScreenData to render MovieCards */}
      {homeScreenData.map(({data, isContinueWatching, isWatchList, title}: mapDataProps) => (
        <MovieCard
          data={data}
          horizontalCard={(isContinueWatching || isWatchList) && true}
          key={title}
          marginLeft={false}
          marginTop={false}
          onPressHandler={onMovieClickHandler}
          sectionContainerStyle={styles.sectionContainer}
          showMovieDetails={isContinueWatching && true}
          showTitle={true}
          title={title}
        />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
