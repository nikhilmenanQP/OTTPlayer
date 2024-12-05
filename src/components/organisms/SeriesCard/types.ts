// Type definitions for episodes and seasons
export interface Episode {
  description: string;
  duration: string;
  episodeNumber: string;
  id: string;
  image: string;
  releaseDate: string;
  title: string;
}

export interface Season {
  episodes: Episode[];
  seasonNumber: number;
}

export interface SeasonSelectorModalProps {
  data: Season[];
  onClose: () => void;
  onSeasonSelect: (season: Season) => void;
  selectedSeason: number;
  theme: any; // Theme prop to pass styles
  visible: boolean;
}

export interface SeriesCardProps {
  data: Season[];
  isScrollable?: boolean;
}
