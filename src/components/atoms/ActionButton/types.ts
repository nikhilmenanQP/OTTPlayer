import {TextStyle, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export interface ActionButtonProps {
  buttonStyle?: ViewStyle;
  icon: JSX.Element;
  label: string;
  onPress?: () => void;
  textStyle?: TextStyle;
}

export interface StyleProps {
  theme?: Theme;
}
