import {StyleProp, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export interface AppModalProps {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  isFullscreen?: boolean;
  onClose?: () => void;
  showCloseButton?: boolean;
  visible: boolean | undefined;
}

export interface StyleProps {
  theme?: Theme;
}
