import {TextStyle, ViewStyle} from 'react-native';

export interface MovieCardListProps {
  cardHeight?: number;
  cardStyle?: ViewStyle;
  cardSubTitleStyle?: TextStyle;
  cardTitleStyle?: TextStyle;
  cardWidth?: number;
  data: any;
  horizontal?: boolean;
  horizontalCard?: boolean;
  listContentContainerStyle?: ViewStyle;
  marginBottom?: boolean;
  marginLeft?: boolean;
  marginRight?: boolean;
  marginTop?: boolean;
  numberOfColumns?: number;
  scrollEnabled?: boolean;
  sectionContainerStyle?: ViewStyle;
  sectionTitleStyle?: TextStyle;
  showMovieDetails?: boolean;
  showTitle?: boolean;
  title?: string;
}
