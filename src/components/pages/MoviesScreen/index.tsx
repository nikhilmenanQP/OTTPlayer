import React from 'react';

import {AppHeader} from '@components/molecules';
import {MovieCard} from '@components/organisms';
import {ScrollView} from 'react-native';

import {createStyle} from './styles';
import {mapDataProps, MoviesScreenProps} from './types';
import {movieScreenData} from '../../../dummyDataPreProd/MoviesScreen';
import {useAppTheme} from '@hooks/useAppTheme';

const MoviesScreen: React.FC<MoviesScreenProps> = ({navigation}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  const onMovieClickHandler = (movie: any) => {
    navigation.navigate('DetailScreen', {
      data: movie,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.container}>
      {/* App Header */}
      <AppHeader showBackButton={true} />

      {/* Map through movieScreenData to render MovieCards */}
      {movieScreenData.map(({data, isContinueWatching, isWatchList, title}: mapDataProps) => (
        <MovieCard
          data={data}
          horizontalCard={isContinueWatching || isWatchList}
          key={title}
          marginLeft={false}
          marginTop={false}
          onPressHandler={() => onMovieClickHandler(data)} // Pass the movie data when clicked
          sectionContainerStyle={styles.sectionContainer}
          showMovieDetails={isContinueWatching}
          showTitle={true}
          title={title}
        />
      ))}
    </ScrollView>
  );
};

export default MoviesScreen;
