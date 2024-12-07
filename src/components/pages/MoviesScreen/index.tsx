import React, {useMemo} from 'react';

import {AppHeader} from '@components/molecules';
import {FlatList, View} from 'react-native';
import {MovieCardList} from '@components/organisms';

import {createStyle} from './styles';
import {mapDataProps, MoviesScreenProps} from './types';
import {movieScreenData} from '../../../dummyDataPreProd/MoviesScreen';
import {useAppTheme} from '@hooks/useAppTheme';

const MoviesScreen: React.FC<MoviesScreenProps> = ({}) => {
  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  const renderMovieCardList = ({item}: {item: mapDataProps}) => (
    <MovieCardList
      data={item.data}
      horizontalCard={item.isContinueWatching || item.isWatchList}
      key={item.title}
      marginLeft={false}
      marginTop={false}
      sectionContainerStyle={styles.sectionContainer}
      showMovieDetails={item.isContinueWatching}
      showTitle={true}
      title={item.title}
    />
  );

  return (
    <View style={styles.container}>
      {/* App Header */}
      <AppHeader showBackButton={true} />

      {/* FlatList to render MovieCardLists */}
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={movieScreenData}
        initialNumToRender={5}
        keyExtractor={item => item.title}
        maxToRenderPerBatch={10}
        removeClippedSubviews={true}
        renderItem={renderMovieCardList}
        showsVerticalScrollIndicator={false}
        windowSize={10}
      />
    </View>
  );
};

export default MoviesScreen;
