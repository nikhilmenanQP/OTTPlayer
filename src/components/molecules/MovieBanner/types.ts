import {Theme} from '@context/ThemeProviderContext/types';

export interface MovieBannerProps {
  imageUri: string;
  movieInfo: string;
}

export interface StyleProps {
  theme?: Theme;
}
