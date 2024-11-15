import React, {useCallback, useMemo} from 'react';

import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {MovieCardProps} from './types';
import {createStyles} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const MovieCard: React.FC<MovieCardProps> = React.memo(
  ({
    cardHeight,
    cardSubTitleStyle,
    cardTitleStyle,
    cardWidth,
    data = [],
    horizontalCard,
    listContentContainerStyle,
    marginBottom = true,
    marginLeft = true,
    marginRight = true,
    marginTop = true,
    onPressHandler = () => {},
    sectionContainerStyle = {},
    sectionTitleStyle = {},
    showMovieDetails = false,
    showTitle = false,
    title = '',
  }) => {
    const {theme} = useAppTheme();
    const styles = createStyles({
      cardHeight,
      cardWidth,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      theme,
    });

    const cardImageStyle = useMemo(
      () => (horizontalCard ? styles.cardImageWide : styles.cardImageNarrow),
      [horizontalCard],
    );

    const renderItem = useCallback(
      ({item}: {item: {id: string; title: string; image: string}}) => {
        return (
          <TouchableOpacity
            style={[styles.card]}
            onPress={() => onPressHandler(item)}>
            <Image source={{uri: item.image}} style={[cardImageStyle]} />
            {(showMovieDetails || title === 'Continue Watching') && (
              <>
                <Text
                  key={`${item.id}-title`}
                  style={[styles.cardTitle, cardTitleStyle]}>
                  {item.title}
                </Text>
                <Text
                  key={`${item.id}-subtitle`}
                  style={[styles.cardSubTitle, cardSubTitleStyle]}>
                  Adventure · Drama
                </Text>
              </>
            )}
          </TouchableOpacity>
        );
      },
      [
        cardImageStyle,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        showMovieDetails,
        title,
      ],
    );

    return (
      <View style={[styles.section, sectionContainerStyle]}>
        {showTitle && (
          <Text style={[styles.sectionTitle, sectionTitleStyle]}>{title}</Text>
        )}

        <FlatList
          contentContainerStyle={[listContentContainerStyle]}
          data={data}
          horizontal
          initialNumToRender={5}
          keyExtractor={item => item.id}
          maxToRenderPerBatch={10}
          renderItem={renderItem}
          windowSize={5}
        />
      </View>
    );
  },
);

export default MovieCard;
