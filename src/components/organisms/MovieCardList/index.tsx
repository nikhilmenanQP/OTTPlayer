import MovieCard from '@components/molecules/MovieCard';
import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {MovieCardListProps} from './types';
import {SectionContainer, SectionTitle} from './styles';

const MovieCardList: React.FC<MovieCardListProps> = React.memo(
  ({
    cardHeight,
    cardWidth,
    data = [],
    horizontal = true,
    horizontalCard,
    listContentContainerStyle,
    marginBottom = true,
    marginLeft = true,
    marginRight = true,
    marginTop = true,
    numberOfColumns,
    scrollEnabled = true,
    sectionContainerStyle = {},
    sectionTitleStyle = {},
    showMovieDetails = false,
    showTitle = false,
    title = '',
  }) => {
    const renderItem = useCallback(
      ({item}: {item: {id: string; title: string; image: string}}) => {
        return (
          <MovieCard
            cardHeight={cardHeight}
            cardWidth={cardWidth}
            horizontalCard={horizontalCard}
            marginBottom={marginBottom}
            marginRight={marginRight}
            movieData={item}
            showMovieDetails={showMovieDetails}
            title="Continue Watching"
          />
        );
      },
      [marginBottom, marginLeft, marginRight, marginTop, showMovieDetails, title],
    );

    return (
      <SectionContainer style={sectionContainerStyle}>
        {showTitle && <SectionTitle style={sectionTitleStyle}>{title}</SectionTitle>}
        <FlatList
          contentContainerStyle={[listContentContainerStyle]}
          data={data}
          horizontal={horizontal}
          initialNumToRender={5}
          keyExtractor={item => item.id}
          maxToRenderPerBatch={10}
          numColumns={numberOfColumns}
          renderItem={renderItem}
          scrollEnabled={scrollEnabled}
          windowSize={5}
        />
      </SectionContainer>
    );
  },
);

export default MovieCardList;
