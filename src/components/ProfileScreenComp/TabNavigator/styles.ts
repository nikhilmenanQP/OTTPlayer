import {Theme} from '@styles/theme';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    tab: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 150,
    },
    tabIndicator: {
      alignSelf: 'center',
      height: 2,
      width: '100%',
    },
    tabText: {
      fontFamily: 'inter_semiBold',
      fontSize: 15,
      letterSpacing: 1,
      paddingVertical: 12,
      textTransform: 'uppercase',
    },
  });
