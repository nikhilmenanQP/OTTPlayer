import {Theme} from '@context/ThemeProviderContext/types';

export interface AudioSubtitleModalProps {
  isFullscreen: boolean;
  onClose: () => void;
  visible: boolean;
}

export interface StyleProps {
  theme?: Theme;
}
