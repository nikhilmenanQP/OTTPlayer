import React, {useCallback, useMemo} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {MovieCardProps} from './types';
import {createStyles} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const MovieCard: React.FC<MovieCardProps> = React.memo(
  ({title, data, isContinueWatching, isWatchList}) => {
    const {theme} = useAppTheme();
    const styles = createStyles(theme);

    const cardStyle = useMemo(
      () =>
        isContinueWatching || isWatchList ? styles.cardWide : styles.cardNarrow,
      [isContinueWatching, isWatchList],
    );

    const renderItem = useCallback(
      ({item}: {item: {id: string; title: string; image: string}}) => (
        <View style={[styles.card]}>
          <Image source={{uri: item.image}} style={[cardStyle]} />
          {title === 'Continue Watching' && (
            <>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubTitle}>Adventure · Drama</Text>
            </>
          )}
        </View>
      ),
      [cardStyle, title],
    );

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <FlatList
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
