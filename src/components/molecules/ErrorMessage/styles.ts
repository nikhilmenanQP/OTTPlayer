import {StyleSheet} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export const createStyle = (theme: Theme) => {
  const {colors, fontSize, fontFamily, spacing} = theme;

  const mdXxSpacing = spacing.md_xx;
  const smLLSpacing = spacing.sm_ll;

  return StyleSheet.create({
    titleText: {
      color: colors.white,
      fontFamily: fontFamily.inter_medium,
      fontSize: fontSize.sm_llll,
      marginBottom: smLLSpacing,
      textAlign: 'center',
    },

    descriptionText: {
      color: colors.standardGray,
      fontSize: fontSize.sm_lll,
      marginBottom: mdXxSpacing,
      textAlign: 'center',
    },
  });
};
