import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

/**
 * Creates styles based on the provided theme.
 * Memoized styles help improve performance by avoiding recalculation on each render.
 */
export const createStyle = (theme: Theme) => {
  const {blueGray, white} = theme.colors;
  const {sm, sm_lll} = theme.spacing;
  const {sm_lll: fontSize} = theme.fontSize;

  // Defining shared properties to reduce repetition
  const sharedStyles = {
    backgroundColor: blueGray,
    color: white,
  } as ViewStyle;

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      ...sharedStyles,
      borderRadius: sm,
      flexDirection: 'row',
      overflow: 'hidden',
    } as ViewStyle,

    closeIcon: {
      marginRight: sm_lll,
    } as ImageStyle,

    searchIcon: {
      marginLeft: sm,
    } as ImageStyle,

    searchInput: {
      ...sharedStyles,
      flex: 1,
      fontSize,
      padding: sm,
    } as TextStyle,
  });
};
