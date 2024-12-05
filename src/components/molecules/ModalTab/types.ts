// import {Theme} from '@styles/theme';
import {Theme} from '@context/ThemeProviderContext/types';

export interface TabProps {
  onClose: () => void;
  selectedTab: 'audio' | 'subtitles';
  setSelectedTab: (tab: 'audio' | 'subtitles') => void;
}

export interface TabTextProps {
  theme: Theme;
  isSelected: boolean;
}
