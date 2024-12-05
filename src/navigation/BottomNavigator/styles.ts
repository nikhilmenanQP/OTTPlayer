import {StyleSheet} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    tabBarIconFocusedStyle: {
      height: 24,
      width: 24,
    },
    tabBarIconNotFocusedStyle: {
      height: 20,
      width: 20,
    },
    tabBarItemStyle: {
      paddingTop: 10,
      paddingBottom: 8,
    },
    tabBarLabelStyle: {
      color: theme.colors.standardGray,
      fontSize: 10,
      fontWeight: '700',
      marginTop: 8,
    },
    tabBarStyle: {
      backgroundColor: theme.colors.darkCharcoal,
      borderRadius: 100,
      bottom: 20,
      height: 80,
      marginHorizontal: 20,
      position: 'absolute',
    },
  });
};
