import {ImageStyle, ViewStyle} from 'react-native';
import {Theme} from '@styles/theme';

export interface AppHeaderProps {
  appHeaderContainerStyle?: ViewStyle;
  onBackButtonHandler?: () => void;
  profileImage?: string;
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
  profileImage: string;
  styles: ProfileIconStyles;
  theme: Theme;
}

export interface ProfileIconStyles {
  profileIconStyle: ImageStyle;
  showMenuContainer: ViewStyle;
}
