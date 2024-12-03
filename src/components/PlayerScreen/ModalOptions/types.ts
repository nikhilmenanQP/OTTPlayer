import {Theme} from '@styles/theme';
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
  theme: Theme;
  justifyContent: string;
}

export interface OptionItemProps extends TouchableOpacityProps {
  backgroundColor: any;
}

export interface OptionTextProps extends TextProps {
  marginLeft: any;
}
