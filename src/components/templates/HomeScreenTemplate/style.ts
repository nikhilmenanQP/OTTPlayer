import {StyleSheet, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';
import {css} from 'styled-components/native';

export const createStyle = (theme: Theme) => {
  return StyleSheet.create({
    contentContainerStyle: {
      paddingBottom: theme.spacing.lg_llll,
    } as ViewStyle,

    sectionContainer: {
      marginTop: theme.spacing.sm_lll + 2,
      paddingLeft: theme.spacing.sm_ll + 2,
    } as ViewStyle,
  });
};
