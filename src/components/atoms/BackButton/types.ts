import {Theme} from '@context/ThemeProviderContext/types';
import {ViewStyle} from 'react-native';

export interface BackButtonProps extends BackButtonStyles, StyleProps {
  onPressHandler?: () => void;
}

export interface BackButtonStyles {
  backButtonContainer: ViewStyle;
}

export interface StyleProps {
  theme?: Theme;
}
