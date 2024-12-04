import LinearGradient from 'react-native-linear-gradient';
import React, {useMemo, useCallback} from 'react';

import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Genre, GenreItemProps, GenreListProps} from './types';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

/**
 * GenreList component that displays a list of genres in a horizontal scrollable format.
 * It allows selecting a genre, and the list is dynamically styled based on the selected genre.
 * @param {GenreListProps} props - The properties passed into this component
 */
const GenreList: React.FC<GenreListProps> = ({genres, onGenreSelect, selectedGenre}) => {
  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  const renderGenreItem = useCallback(
    ({item}: {item: Genre}) => (
      <GenreItem
        item={item}
        onGenreSelect={onGenreSelect}
        isSelected={selectedGenre?.name === item.name}
        styles={styles}
      />
    ),
    [selectedGenre],
  );

  return (
    <View>
      <Text style={styles.exploreText}>Explore Genres</Text>
      <FlatList
        contentContainerStyle={styles.genreList}
        data={genres}
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={renderGenreItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

/**
 * GenreItem component that displays an individual genre button.
 * When clicked, the genre is selected and passed to the parent component.
 * @param {GenreItemProps} props - The properties passed into this component
 * @param data to GenreItem component
 * @param isSelected if this genre is currently selected
 * @param onGenreSelect function to handle genre selection
 */
const GenreItem: React.FC<GenreItemProps> = ({isSelected, item, onGenreSelect}) => {
  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  const handlePress = useCallback(() => {
    onGenreSelect(item);
  }, [item, onGenreSelect]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <LinearGradient
        colors={[theme.colors.charcoalGray, theme.colors.blueGray, theme.colors.gunMetal]}
        style={[styles.genreButton, isSelected && styles.selectedGenreButton]}>
        {/* Display the genre name */}
        <Text style={styles.genreText}>{item.name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GenreList;
