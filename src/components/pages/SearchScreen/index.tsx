import React, {useState, useCallback, useMemo} from 'react';
import {SearchBar} from '@components/molecules';

import {AppHeader} from '@components/molecules';
import {GenreList, MovieContent} from '@components/organisms';
import {Genre} from '@components/SearchScreen/GenreList/types';
import {Movie} from '@components/SearchScreen/MovieContent/types';
import {View} from 'react-native';

import {createStyle} from './styles';
import {genres, popularMovies} from '../../../dummyDataPreProd/PopularMovies';
import {useAppTheme} from '@hooks/useAppTheme';

// Default movies to be displayed if no search query is made
const DEFAULT_MOVIES: Movie[] = popularMovies[0].data;
// Minimum length for search query before triggering a search
const MIN_QUERY_LENGTH = 3;

/**
 * SearchScreen component that handles search functionality, genre filtering, and displays movie content.
 * @type {Component}
 * @returns JSX
 */
const SearchScreen: React.FC = () => {
  // Access the current theme for styling and apply it dynamically
  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  // State management for error messages, loading status, movie list, search query, and selected genre
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>(DEFAULT_MOVIES);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  /**
   * Handles changes in the search query.
   * - Updates the movie list based on the query.
   * - Displays an error message if the query is too short or yields no results.
   * @type {Function}
   * @param query - The search input from the user.
   */
  const handleSearch = useCallback((query: string): void => {
    setSearchQuery(query);
    if (query.length < MIN_QUERY_LENGTH) {
      setMovies(DEFAULT_MOVIES); // Show default movies if the query is too short
      setError('SEARCH_QUERY_TOO_SHORT'); // Error if query is too short
      return;
    }

    setLoading(true);
    const lowercasedQuery = query.toLowerCase();
    // Filter movies based on the search query (case-insensitive)
    const filteredMovies = DEFAULT_MOVIES.filter(movie => movie.title.toLowerCase().includes(lowercasedQuery));

    setMovies(filteredMovies);
    setError(filteredMovies.length === 0 ? 'No results found' : null); // Display an error if no movies match
    setLoading(false);
  }, []);

  /**
   * Handles genre selection and updates the movie list accordingly.
   * - If a genre is already selected, it resets the movie list and clears the selected genre.
   * - Filters the movie list based on the selected genre.
   * @type {Function}
   * @param genre - The selected genre object.
   */
  const onGenreSelectHandler = useCallback(
    (genre: Genre): void => {
      setSearchQuery(''); // Clear the search query when selecting a genre
      setLoading(true);

      // Reset if the selected genre is the same as the previous one
      if (selectedGenre?.name === genre.name) {
        setMovies(DEFAULT_MOVIES);
        setSelectedGenre(null);
        setError(null);
      } else {
        const selectedGenreId = genre.name.toLowerCase();
        // Filter movies based on the selected genre
        const filteredMovies = DEFAULT_MOVIES.filter(movie =>
          movie.genreIds.some(genreId => genreId.toLowerCase() === selectedGenreId),
        );

        setMovies(filteredMovies);
        setSelectedGenre(genre);
        setError(
          filteredMovies.length === 0 ? 'No movies found for this genre' : null, // Error if no movies for the genre
        );
      }

      setLoading(false);
    },
    [selectedGenre],
  );

  /**
   * JSX representation of the SearchScreen component.
   * It includes the AppHeader, SearchBar, GenreList, and MovieContent.
   * @type {JSX}
   */
  return (
    <View style={styles.container}>
      {/* Display the app header with a logo */}
      <AppHeader appHeaderContainerStyle={styles.appHeaderStyle} showLogo />

      {/* Search bar component to handle search queries */}
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />

      {/* If there is no active search query, display the genre selection list */}
      {searchQuery === '' && (
        <GenreList genres={genres} onGenreSelect={onGenreSelectHandler} selectedGenre={selectedGenre} />
      )}

      {/* Display the movie content, handling loading state, movie list, errors, and theme */}
      <MovieContent loading={loading} movies={movies} searchQuery={searchQuery} error={error} />
    </View>
  );
};

export default SearchScreen;
