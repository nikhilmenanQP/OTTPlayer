import {Theme} from '@context/ThemeProviderContext/types';

export interface AppCarouselProps {
  banners: BannerProps[];
}

export interface BannerProps {
  id: string;
  image: string;
  title: string;
}
[];

export interface StyleProps {
  theme?: Theme;
}
