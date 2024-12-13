import styled, {css} from '@emotion/native';
import {CardContainerProps, CardImageWideProps, StyleProps} from './types';
import {Theme} from '@context/ThemeProviderContext/types';

export const CardContainer = styled.TouchableOpacity<CardContainerProps>(
  ({theme, marginBottom, marginLeft, marginRight, marginTop}) => ({
    marginBottom: marginBottom ? theme.spacing.sm : undefined,
    marginLeft: marginLeft ? theme.spacing.sm : undefined,
    marginRight: marginRight ? theme.spacing.sm : undefined,
    marginTop: marginTop ? theme.spacing.sm : undefined,
  }),
);

export const CardImage = styled.Image``;

export const cardImageNarrow = ({theme}: {theme: Theme}) => ({
  borderRadius: theme.spacing.sm_xx,
  height: theme.spacing.lg_llll + theme.spacing.lg_lll,
  width: theme.spacing.lg_llll + theme.spacing.sm_lll,
});

export const cardImageWide = ({cardHeight, cardWidth, theme}: CardImageWideProps) =>
  css({
    borderRadius: theme.spacing.sm_xx,
    height: cardHeight || theme.spacing.lg_lll + theme.spacing.sm_lll,
    width: cardWidth || theme.spacing.lg_llll + theme.spacing.lg_lll,
  });

export const CardSubTitle = styled.Text<StyleProps>(({theme}) => ({
  color: theme.colors.bottomNavText,
  fontSize: theme.spacing.sm_ll + 1,
  marginTop: theme.spacing.sm_xxxx,
  textAlign: 'left',
}));

export const CardTitle = styled.Text<StyleProps>(({theme}) => ({
  alignSelf: 'flex-start',
  color: theme.colors.white,
  fontSize: theme.spacing.sm_ll + 1,
  marginTop: theme.spacing.sm_x,
  textAlign: 'left',
  width: theme.spacing.lg_llll + theme.spacing.sm_lll,
}));
