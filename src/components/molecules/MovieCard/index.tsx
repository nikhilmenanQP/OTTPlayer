import React, {useCallback, useMemo} from 'react';
import {CardContainer, CardImage, cardImageNarrow, cardImageWide, CardSubTitle, CardTitle} from './styles';
import {DetailScreenNavigationProp, ItemProps, MovieCardProps, MovieDetailsProps} from './types';
import {ImageStyle} from 'react-native';
import {useAppTheme} from '@hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';

const MovieCard: React.FC<MovieCardProps> = ({
  cardHeight,
  cardStyle,
  cardSubTitleStyle,
  cardTitleStyle,
  cardWidth,
  horizontalCard,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  movieData,
  showMovieDetails,
  title,
}) => {
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const {theme} = useAppTheme();

  const onCardPress: (movieData: ItemProps) => void = useCallback(() => {
    navigation.navigate('DetailScreen', {data: movieData});
  }, [movieData]);

  const cardImageStyle = useMemo<ImageStyle>(
    () => (horizontalCard ? cardImageWide({theme, cardHeight, cardWidth}) : cardImageNarrow({theme})),
    [horizontalCard, cardHeight, cardWidth],
  );

  return (
    <CardContainer
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      onPress={() => onCardPress(movieData)}
      style={cardStyle}>
      <CardImage source={{uri: movieData.image}} style={cardImageStyle} />
      {showMovieDetails && title === 'Continue Watching' && (
        <MovieDetails
          cardSubTitleStyle={cardSubTitleStyle}
          cardTitleStyle={cardTitleStyle}
          id={movieData.id}
          title={movieData.title}
        />
      )}
    </CardContainer>
  );
};

const MovieDetails: React.FC<MovieDetailsProps> = ({id, title, cardTitleStyle, cardSubTitleStyle}) => {
  return (
    <>
      <CardTitle key={`${id}-title`} style={cardTitleStyle}>
        {title}
      </CardTitle>
      <CardSubTitle key={`${id}-subtitle`} style={[cardSubTitleStyle]}>
        Adventure · Drama
      </CardSubTitle>
    </>
  );
};

export default MovieCard;
