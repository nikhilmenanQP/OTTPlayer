/**
 * Props for the SearchBar component.
 * @param handleSearch A callback function that will be triggered whenever the search input changes. It receives the search query as an argument.
 * @param searchQuery The current search query that is being typed by the user. It's a string value.
 */
export interface SearchBarProps {
  /**
   * Callback function to handle search query changes.
   * @param query The query string that the user has entered.
   */
  handleSearch: (query: string) => void;

  /**
   * The current value of the search input field.
   * @example "Inception"
   */
  searchQuery: string;
}
