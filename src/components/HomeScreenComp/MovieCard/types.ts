export interface MovieCardProps {
  data: {id: string; title: string; image: string}[]; // Define structure of data
  isContinueWatching: boolean;
  isWatchList: boolean;
  title: string;
}
