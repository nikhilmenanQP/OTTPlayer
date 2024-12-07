import {Theme} from '@context/ThemeProviderContext/types';
import {ViewStyle} from 'react-native';

export interface BackButtonStyles {
  backButtonContainer: ViewStyle;
}

export interface BackButtonProps {
  onPressHandler?: () => void;
  styles?: BackButtonStyles;
  theme?: Theme;
}
