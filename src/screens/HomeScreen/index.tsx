import AppCarousel from '@components/AppComponents/AppCarousel';
import AppHeader from '@components/AppComponents/AppHeader';
import MovieCard from '@components/HomeScreenComp/MovieCard';
import React, {useCallback} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {FlatList, View} from 'react-native';
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

  const onMovieClickHandler = useCallback(
    (movie: any) => {
      navigation.navigate('DetailScreen', {
        data: movie,
      });
    },
    [navigation],
  );

  const onProfileClickHandler = useCallback(() => {
    navigation.navigate('ProfileScreen');
  }, [navigation]);

  const renderMovieCard = ({item}: {item: mapDataProps}) => {
    const {data, isContinueWatching, isWatchList, title} = item;
    return (
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
    );
  };

  const renderHeader = () => {
    return (
      <View>
        <AppHeader
          appHeaderContainerStyle={styles.headerContainerStyle}
          showLogo={true}
          showMenuButton={true}
          onProfileIconHandler={onProfileClickHandler}
        />

        <AppCarousel banners={banners} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* FlatList with AppCarousel in ListHeaderComponent */}
      <FlatList
        data={homeScreenData}
        renderItem={renderMovieCard}
        keyExtractor={item => item.title}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

export default HomeScreen;
