import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '@styles/theme';

/**
 * @type {Styles}
 */
export interface createStylesProps {
  cardHeight?: number;
  cardWidth?: number;
  marginBottom?: boolean | number;
  marginLeft?: boolean | number;
  marginRight?: boolean | number;
  marginTop?: boolean | number;
  theme: Theme;
}

export interface createStyleReturnProps {
  card?: ViewStyle;
  cardImageNarrow?: ImageStyle;
  cardImageWide?: ImageStyle;
  cardSubTitle?: TextStyle;
  cardTitle?: TextStyle;
  section?: ViewStyle;
  sectionTitle?: TextStyle;
}

/**
 * @type {Props}
 */
export interface MovieCardProps {
  cardHeight?: number;
  cardSubTitleStyle?: TextStyle;
  cardTitleStyle?: TextStyle;
  cardWidth?: number;
  data: any;
  horizontalCard?: boolean;
  listContentContainerStyle?: ViewStyle;
  marginBottom?: boolean;
  marginLeft?: boolean;
  marginRight?: boolean;
  marginTop?: boolean;
  onPressHandler: (item: any) => any;
  sectionContainerStyle?: ViewStyle;
  sectionTitleStyle?: TextStyle;
  showMovieDetails?: boolean;
  showTitle?: boolean;
  title?: string;
}
