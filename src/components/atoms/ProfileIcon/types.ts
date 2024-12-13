import {StackNavigationProp} from '@react-navigation/stack';

export interface ProfileIconProps {
  onPressHandler?: () => void;
  profileImage?: string;
}

export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProfileScreen'>;
