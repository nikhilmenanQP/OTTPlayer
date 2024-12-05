/**
 * Define the prop types for MovieContent component
 */
export interface MovieContentProps {
  error: string | null; // Any error message related to the search
  loading: boolean; // Indicates whether the content is being loaded
  movies: Movie[]; // List of movies to be displayed
  searchQuery: string; // Current search query entered by the user
}

/**
 * Movie type definition
 */
export interface Movie {
  contentType: string;
  episode?: string;
  genreIds: string[];
  id: string;
  image: string;
  title: string;
  type?: string;
}
