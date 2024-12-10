import {TextStyle, ViewStyle} from 'react-native';

export interface ErrorScreenProps {
  isFullscreen?: boolean;
  onModalClose: () => void;
  visible?: boolean;
}

export interface Styles {
  button: ViewStyle;
  container: ViewStyle;
  dangerButtonStyle: ViewStyle;
  tryAgainText: TextStyle;
}
