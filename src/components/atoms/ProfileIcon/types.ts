import {StackNavigationProp} from '@react-navigation/stack';
import {ImageStyle, ViewStyle} from 'react-native';

export interface ProfileIconProps {
  imageContainerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  onPressHandler?: () => void;
  profileImage?: string;
}

export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProfileScreen'>;
