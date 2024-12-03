import {Theme} from '@styles/theme';

export interface TabProps {
  onClose: () => void;
  selectedTab: 'audio' | 'subtitles';
  setSelectedTab: (tab: 'audio' | 'subtitles') => void;
}

export interface TabTextProps {
  theme: Theme;
  isSelected: boolean;
}
