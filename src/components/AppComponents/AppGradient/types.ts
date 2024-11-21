import {StyleProp, ViewStyle} from 'react-native';

// Interface to define the expected props for the GradientSeparator component
export interface GradientSeparatorProps {
  position: 'top' | 'bottom'; // Determines whether the gradient should appear at the top or bottom
  style?: StyleProp<ViewStyle>; // Optional additional styles to be applied to the gradient container
}
