import React from 'react';
import {FlatList} from 'react-native';
import {HomeScreenHeader, MovieCardList} from '@components/organisms';
import {HomeScreenProps, mapDataProps} from './types';
import {banners, homeScreenData} from '../../../dummyDataPreProd/HomeScreenMovie';
import {createStyle} from './style';
import {useAppTheme} from '@hooks/useAppTheme';

const HomeScreenTemplate: React.FC<HomeScreenProps> = ({onProfileClickHandler}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  const MovieList = ({item}: {item: mapDataProps}) => {
    const {data, isContinueWatching, isWatchList, title} = item;
    return (
      <MovieCardList
        data={data}
        horizontalCard={(isContinueWatching || isWatchList) && true}
        key={title}
        marginLeft={false}
        marginTop={false}
        sectionContainerStyle={styles.sectionContainer}
        showMovieDetails={isContinueWatching && true}
        showTitle={true}
        title={title}
      />
    );
  };

  const Header = () => <HomeScreenHeader banners={banners} onProfileClickHandler={onProfileClickHandler} />;

  return (
    <FlatList
      ListHeaderComponent={Header}
      contentContainerStyle={styles.contentContainerStyle}
      data={homeScreenData}
      keyExtractor={item => item.title}
      renderItem={MovieList}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreenTemplate;
