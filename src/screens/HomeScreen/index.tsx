import AppCarousel from '@components/AppComponents/AppCarousel';
import AppHeader from '@components/AppComponents/AppHeader';
import MovieCard from '@components/HomeScreenComp/MovieCard';
import React from 'react';

import {ScrollView} from 'react-native';
import {createStyle} from './styles';
import {homeScreenData, banners} from '@dummyDataPreProd/HomeScreenMovie';
import {useAppTheme} from '@hooks/useAppTheme';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  const onMovieClickHandler = (movie: any) => {
    console.log('Hello', movie);
    navigation.navigate('DetailScreen');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
      {/* AppHeader with extracted style */}
      <AppHeader
        appHeaderContainerStyle={styles.headerContainerStyle}
        showBackButton={false}
      />

      {/* AppCarousel for banners */}
      <AppCarousel banners={banners} />

      {/* Map through homeScreenData to render MovieCards */}
      {homeScreenData.map(
        ({
          data,
          isContinueWatching,
          isWatchList,
          title,
        }: {
          data: {id: string; title: string; image: string}[];
          isContinueWatching: boolean;
          isWatchList: boolean;
          title: string;
        }) => (
          <MovieCard
            data={data}
            isContinueWatching={isContinueWatching}
            isWatchList={isWatchList}
            key={title}
            title={title}
            onPressHandler={onMovieClickHandler}
          />
        ),
      )}
    </ScrollView>
  );
};

export default HomeScreen;
