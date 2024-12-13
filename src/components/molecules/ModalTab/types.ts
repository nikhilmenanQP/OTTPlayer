import {Theme} from '@context/ThemeProviderContext/types';

export interface TabProps {
  onClose: () => void;
  selectedTab: 'audio' | 'subtitles';
  setSelectedTab: (tab: 'audio' | 'subtitles') => void;
}

export interface StyleProps {
  theme?: Theme;
}

export interface TabButtonStyle extends StyleProps {
  initialTabWidth: number;
}

export interface TabTextProps extends StyleProps {
  isSelected: boolean;
}
