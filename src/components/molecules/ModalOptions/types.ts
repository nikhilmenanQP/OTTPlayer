import {Theme} from '@context/ThemeProviderContext/types';
import {TextProps, TouchableOpacityProps} from 'react-native';

export interface OptionContainerProps {
  activeTab: 'audio' | 'subtitles';
  isFullscreen: boolean;
  selectedAudio: string;
  selectedSubtitle: string;
  setSelectedAudio: (option: string) => void;
  setSelectedSubtitle: (option: string) => void;
}

export interface OptionProps {
  justifyContent: 'center' | 'flex-start' | 'space-between';
  theme?: Theme;
}

export interface OptionTextProps extends TextProps {
  marginLeft: any;
  theme?: Theme;
}

export interface OptionItemProps extends TouchableOpacityProps {
  backgroundColor: any;
  theme?: Theme;
}
