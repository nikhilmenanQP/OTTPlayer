import React, {useState, useCallback} from 'react';
import SearchScreenTemplate from '@components/templates/SearchScreenTemplate';
import {Genre} from '@components/organisms/GenreList/types';
import {Movie} from '@components/organisms/MovieContent/types';
import {genres, popularMovies} from '../../../dummyDataPreProd/PopularMovies';

const DEFAULT_MOVIES: Movie[] = popularMovies[0].data;
const MIN_QUERY_LENGTH = 3;

const SearchScreen: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>(DEFAULT_MOVIES);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const handleSearch = useCallback((query: string): void => {
    setSearchQuery(query);
    if (query.length < MIN_QUERY_LENGTH) {
      setMovies(DEFAULT_MOVIES);
      setError('SEARCH_QUERY_TOO_SHORT');
      return;
    }

    setLoading(true);
    const lowercasedQuery = query.toLowerCase();
    const filteredMovies = DEFAULT_MOVIES.filter(movie => movie.title.toLowerCase().includes(lowercasedQuery));

    setMovies(filteredMovies);
    setError(filteredMovies.length === 0 ? 'No results found' : null);
    setLoading(false);
  }, []);

  const onGenreSelectHandler = useCallback(
    (genre: Genre): void => {
      setSearchQuery('');
      setLoading(true);

      if (selectedGenre?.name === genre.name) {
        setMovies(DEFAULT_MOVIES);
        setSelectedGenre(null);
        setError(null);
      } else {
        const selectedGenreId = genre.name.toLowerCase();
        const filteredMovies = DEFAULT_MOVIES.filter(movie =>
          movie.genreIds.some(genreId => genreId.toLowerCase() === selectedGenreId),
        );

        setMovies(filteredMovies);
        setSelectedGenre(genre);
        setError(filteredMovies.length === 0 ? 'No movies found for this genre' : null);
      }

      setLoading(false);
    },
    [selectedGenre],
  );

  return (
    <SearchScreenTemplate
      searchQuery={searchQuery}
      handleSearch={handleSearch}
      genres={genres}
      selectedGenre={selectedGenre}
      onGenreSelect={onGenreSelectHandler}
      movies={movies}
      loading={loading}
      error={error}
    />
  );
};

export default SearchScreen;
