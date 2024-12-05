/**
 * Define the Genre interface that represents a genre object
 */
export interface Genre {
  id: string;
  name: string;
  // Add more properties if needed...
}

/**
 * Define the props for each GenreItem component
 */
export interface GenreItemProps {
  item: Genre; // The genre data to display
  onGenreSelect: (genre: Genre) => void; // Function to handle the genre selection
  isSelected: boolean; // Whether this genre is currently selected
  styles: any; // Styles applied to this component
}

/**
 * Define the props for the GenreList component
 */
export interface GenreListProps {
  genres: Genre[]; // List of available genres to display
  onGenreSelect: (genre: Genre) => void; // Function to handle genre selection
  selectedGenre: {id: number | string; name: string} | null; // Currently selected genre
}
