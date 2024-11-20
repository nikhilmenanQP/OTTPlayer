import React, {useCallback} from 'react';
import {SearchBarProps} from './types';
import {SearchIcon, CloseIcon} from '@assets/images/appIcons';
import {TextInput, View} from 'react-native';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';
/**
 * @type {Component}
 * SearchBar component allows users to search movies.
 * It features a search input with an icon, and a close icon that clears the search.
 */
const SearchBar: React.FC<SearchBarProps> = React.memo(
  ({handleSearch, searchQuery}) => {
    // Get the current theme from the custom hook
    const {theme} = useAppTheme();

    // Create styles based on the current theme. This is memoized for performance.
    const styles = createStyle(theme);

    /**
     * Memoized callback function for handling text input changes.
     * By using `useCallback`, we ensure that the function is not recreated on every render,
     * optimizing performance when passed as a prop.
     */
    const handleSearchChange = useCallback(
      (text: string) => {
        handleSearch(text); // Call the handleSearch function passed in as a prop
      },
      [handleSearch], // The callback depends on `handleSearch`, so it will only change if it does.
    );

    return (
      <View style={styles.container}>
        {/* Search icon always visible */}
        <SearchIcon style={styles.searchIcon} width={20} height={20} />

        {/* TextInput for the search query */}
        <TextInput
          clearButtonMode="while-editing" // Display a clear button when editing
          onChangeText={handleSearchChange} // Trigger the memoized search handler on text change
          placeholder="Search movies..." // Placeholder text for the search input
          placeholderTextColor={theme.colors.standardGray} // Placeholder text color based on theme
          style={styles.searchInput} // Input styling based on the theme
          value={searchQuery} // The current search query value
        />

        {/* Conditional rendering for the close icon */}
        {searchQuery.length > 0 && (
          <CloseIcon
            style={styles.closeIcon} // Close icon styling based on the theme
            width={14}
            height={14}
            onPress={() => handleSearch('')} // Clears the search query when pressed
          />
        )}
      </View>
    );
  },
);

export default SearchBar;
