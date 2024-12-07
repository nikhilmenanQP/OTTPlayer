import {ImageStyle, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export interface AppHeaderProps {
  appHeaderContainerStyle?: ViewStyle;
  onBackButtonHandler?: () => void;
  onProfileIconHandler?: () => void;
  profileImage?: string;
  profileName?: string;
  showBackButton?: boolean;
  showLogo?: boolean;
  showMenuButton?: boolean;
}

export interface BackButtonProps {
  handleBackButton: () => void;
  styles: BackButtonStyles;
  theme: Theme;
}

interface BackButtonStyles {
  backButtonContainer: ViewStyle;
}

export interface ProfileIconProps {
  onProfileIconHandler: () => void;
  profileImage: string;
  styles: ProfileIconStyles;
  theme: Theme;
}

export interface ProfileIconStyles {
  profileIconStyle: ImageStyle;
  showMenuContainer: ViewStyle;
}