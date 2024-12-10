import {StyleProp, ViewStyle} from 'react-native';

export interface AppModalProps {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  isFullscreen?: boolean;
  onClose?: () => void;
  showCloseButton?: boolean;
  visible: boolean | undefined;
}
