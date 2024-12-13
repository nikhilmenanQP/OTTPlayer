import {TextStyle, ViewStyle} from 'react-native';
import {Theme} from '@context/ThemeProviderContext/types';

export interface Button {
  icon: JSX.Element;
  label: string;
  onPress: () => void;
}

export interface ActionButtonGroupProps {
  buttonStyle?: ViewStyle;
  buttons: Button[];
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export interface StyledProps {
  theme?: Theme;
}
