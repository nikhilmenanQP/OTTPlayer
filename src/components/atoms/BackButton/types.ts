import {ImageStyle, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export interface BackButtonProps extends BackButtonStyles, StyleProps {
  onPressHandler?: () => void;
}

export interface BackButtonStyles {
  iconContainerStyle?: ViewStyle;
  iconStyle?: ImageStyle;
}

export interface StyleProps {
  theme?: Theme;
}
