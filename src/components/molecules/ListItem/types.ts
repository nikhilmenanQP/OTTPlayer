import {Theme} from '@context/ThemeProviderContext/types';

export interface ListItem {
  duration?: string;
  id: string;
  image: string;
  rating: string;
  seasons?: string;
  title: string;
}

export interface ListItemProps {
  item: ListItem;
}

export interface StyleProps {
  theme?: Theme;
}
