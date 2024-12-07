import {TextStyle, ViewStyle} from 'react-native';

export interface ActionButtonProps {
  buttonStyle: ViewStyle;
  icon: JSX.Element;
  label: string;
  onPress?: () => void;
  textStyle: TextStyle;
}
