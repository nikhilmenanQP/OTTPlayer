import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';
import {StackNavigationProp} from '@react-navigation/stack';

export interface BaseCardStyles {
  cardImageStyle?: Partial<ImageStyle>;
  cardStyle?: Partial<ViewStyle>;
  cardSubTitleStyle?: Partial<TextStyle>;
  cardTitleStyle?: Partial<TextStyle>;
}

export interface CardContainerProps extends LayoutProps {
  theme?: Theme;
}

export interface CardImageWideProps extends LayoutProps {
  theme: Theme;
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

export interface MovieCardProps extends LayoutProps, PressablxeProps, BaseCardStyles {
  horizontalCard?: boolean;
  movieData: ItemProps;
  showMovieDetails?: boolean;
  title: string;
}

export interface MovieDetailsProps {
  id: string;
  title: string;
  cardTitleStyle?: TextStyle;
  cardSubTitleStyle?: TextStyle;
}

interface PressableProps {
  onPressHandler?: (item: ItemProps) => void;
}
