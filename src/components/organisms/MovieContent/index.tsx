import LinearGradient from 'react-native-linear-gradient';
import MovieCardList from '../MovieCardList';

import {ActivityIndicator, Dimensions, Text, View} from 'react-native';
import {Movie, MovieContentProps} from './types';
import {createStyle} from './styles';
import {popularMovies} from '../../../dummyDataPreProd/PopularMovies';
import {useAppTheme} from '@hooks/useAppTheme';

const {width} = Dimensions.get('window');

/**
 * @type {Component} Main functional component for rendering movie content
 * @param param0
 * @returns
 */
const MovieContent: React.FC<MovieContentProps> = ({error, loading, movies, searchQuery}) => {
  const {theme} = useAppTheme();
  // Create styles based on the current theme
  const styles = createStyle(theme);

  /**
   * @type {Function} Function to render a MovieCardList with dynamic data and styling
   * @param data
   * @param title
   * @returns JSX.Element
   */
  const renderMovieCardList = (data: Movie[], title: string): JSX.Element => (
    <MovieCardList
      data={data} // Pass movie data
      horizontal={false} // Display movies in a vertical layout
      numberOfColumns={2} // Display 2 columns of cards
      sectionContainerStyle={styles.sectionContainerStyle} // Apply custom section styling
      cardWidth={width * 0.44} // Set dynamic width of the card based on screen width
      cardHeight={theme.spacing.lg_llll} // Set card height based on theme spacing
      horizontalCard={true} // Display cards horizontally
      marginLeft={false} // Disable left margin
      marginTop={false} // Disable top margin
      showTitle={true} // Show title on the card
      title={title} // Set title of the section
    />
  );

  // If content is still loading, show an ActivityIndicator
  if (loading) {
    return <ActivityIndicator size="large" color={theme.colors.white} />;
  }

  // If no movies are found, show an error message and fallback to popular movies
  if (movies.length === 0) {
    return (
      <>
        <LinearGradient
          colors={[theme.colors.raisinBlack, theme.colors.gunMetal, theme.colors.richBlack]} // Gradient background for the error message
          style={styles.errorGradient}>
          <View style={styles.errorContainer}>
            {/* Display search query */}
            <Text style={styles.noResultsText}>{`"${searchQuery}"`}</Text>
            {/* Display error message or a fallback message */}
            <Text style={styles.errorMessage}>
              {error || "Your search didn't match any titles.\nPlease refine your search and try again."}
            </Text>
          </View>
        </LinearGradient>

        {/* Fallback MovieCardList to show popular movies */}
        {renderMovieCardList(popularMovies[0].data, 'Popular Searches')}
      </>
    );
  }

  // If movies are found, display them using the renderMovieCardList function
  return renderMovieCardList(movies, 'Popular Searches');
};

export default MovieContent;
