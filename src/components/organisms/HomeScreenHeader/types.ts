export interface Banner {
  id: string;
  title: string;
  image: string;
}
[];

export interface HomeScreenHeaderProps {
  onProfileClickHandler: () => void;
  banners: Banner[];
}
