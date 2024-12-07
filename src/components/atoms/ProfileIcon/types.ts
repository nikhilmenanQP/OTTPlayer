import {Theme} from '@context/ThemeProviderContext/types';
import {ImageStyle, ViewStyle} from 'react-native';

export interface ProfileIconStyles {
  profileIconStyle: ImageStyle;
  showMenuContainer: ViewStyle;
}

export interface ProfileIconProps {
  onPressHandler?: () => void;
  profileImage?: string;
}
