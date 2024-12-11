import React from 'react';
import {AppHeader} from '@components/molecules';
import {GenreList, MovieContent} from '@components/organisms';
import {SearchBar} from '@components/molecules';
import {View} from 'react-native';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

interface SearchTemplateProps {
  error: string | null;
  genres: any[];
  handleSearch: (query: string) => void;
  loading: boolean;
  movies: any[];
  onGenreSelect: (genre: any) => void;
  searchQuery: string;
  selectedGenre: any;
}

const SearchScreenTemplate: React.FC<SearchTemplateProps> = ({
  error,
  genres,
  handleSearch,
  loading,
  movies,
  onGenreSelect,
  searchQuery,
  selectedGenre,
}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  return (
    <View style={styles.container}>
      <AppHeader appHeaderContainerStyle={styles.appHeaderStyle} showLogo />
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      {searchQuery === '' && <GenreList genres={genres} onGenreSelect={onGenreSelect} selectedGenre={selectedGenre} />}
      <MovieContent loading={loading} movies={movies} searchQuery={searchQuery} error={error} />
    </View>
  );
};

export default SearchScreenTemplate;
