import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Theme} from '@context/ThemeProviderContext/types';

export interface BaseCardStyles {
  cardImageStyle?: Partial<ImageStyle>;
  cardStyle?: Partial<ViewStyle>;
  cardSubTitleStyle?: Partial<TextStyle>;
  cardTitleStyle?: Partial<TextStyle>;
}

export interface CardContainerProps extends LayoutProps, StyleProps {}

export interface CardImageWideProps extends LayoutProps {
  theme: Theme;
}

export interface MovieCardProps extends LayoutProps, PressableProps, BaseCardStyles {
  horizontalCard?: boolean;
  movieData: ItemProps;
  showMovieDetails?: boolean;
  title: string;
}

export type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DetailScreen'>;

export interface ItemProps {
  id: string;
  image: string;
  title: string;
}

interface LayoutProps {
  cardHeight?: number;
  cardWidth?: number;
  marginBottom?: boolean;
  marginLeft?: boolean;
  marginRight?: boolean;
  marginTop?: boolean;
}

export interface MovieDetailsProps {
  cardSubTitleStyle?: TextStyle;
  cardTitleStyle?: TextStyle;
  id: string;
  title: string;
}

export interface PressableProps {
  onPressHandler?: (item: ItemProps) => void;
}

export interface StyleProps {
  theme?: Theme;
}
