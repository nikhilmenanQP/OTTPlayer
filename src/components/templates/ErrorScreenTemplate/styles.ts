import {StyleSheet} from 'react-native';
import {Styles} from './types';
import {Theme} from '@context/ThemeProviderContext/types';

export const ICON_SIZE: {[key: string]: number} = {
  refresh: 18,
  danger: 50,
};

export const createStyle = (theme: Theme): Styles => {
  const {colors, fontSize, fontFamily, spacing} = theme;

  const smSpacing = spacing.sm;
  const smLLLLSpacing = spacing.sm_llll;

  return StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: colors.bootstrapBlue,
      borderRadius: spacing.sm_xx,
      flexDirection: 'row',
      justifyContent: 'center',
      marginHorizontal: theme.spacing.null,
      padding: theme.spacing.null,
      paddingHorizontal: smLLLLSpacing,
      paddingVertical: smSpacing,
    },

    container: {
      alignItems: 'center',
      backgroundColor: colors.black_95,
      flex: 1,
      justifyContent: 'center',
    },

    dangerButtonStyle: {
      backgroundColor: 'transparent',
    },

    tryAgainText: {
      color: colors.white,
      fontFamily: fontFamily.inter_medium,
      fontSize: fontSize.sm_ll + 3,
      marginLeft: smSpacing,
      textTransform: 'capitalize',
    },
  });
};
