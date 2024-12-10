import {StyleSheet} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export const ICON_SIZE = 14;

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.modalBackground,
      flex: 1,
    },
    closeButton: {
      alignItems: 'center',
      backgroundColor: theme.colors.standardGray_32,
      borderRadius: theme.spacing.lg_llll,
      justifyContent: 'center',
      marginHorizontal: theme.spacing.null,
      padding: ICON_SIZE,
      position: 'absolute',
      right: theme.spacing.md_xxxx,
    },
  });
