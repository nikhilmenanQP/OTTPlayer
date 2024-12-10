import {TextStyle} from 'react-native';

export interface PrimaryTextProps {
  align?: TextStyle['textAlign'];
  children: React.ReactNode;
  color?: string;
  fontFamily?: any;
  lineHeight?: number;
  size?: number;
  style?: TextStyle | TextStyle[];
}
