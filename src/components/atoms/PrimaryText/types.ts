import {TextStyle, TextProps} from 'react-native';

export interface PrimaryTextProps extends TextProps {
  align?: TextStyle['textAlign'];
  children: React.ReactNode;
  color?: string;
  fontFamily?: any;
  lineHeight?: number;
  size?: number;
  style?: TextStyle | TextStyle[];
}
