import {ViewStyle} from 'react-native';

/**
 * Manually define the blur types as a union of string literals
 */
export type BlurType =
  | (
      | 'chromeMaterial'
      | 'chromeMaterialDark'
      | 'chromeMaterialLight'
      | 'dark'
      | 'extraDark'
      | 'light'
      | 'material'
      | 'materialDark'
      | 'materialLight'
      | 'prominent'
      | 'regular'
      | 'thickMaterial'
      | 'thickMaterialDark'
      | 'thickMaterialLight'
      | 'thinMaterial'
      | 'thinMaterialDark'
      | 'thinMaterialLight'
      | 'ultraThinMaterial'
      | 'ultraThinMaterialDark'
      | 'ultraThinMaterialLight'
      | 'xlight'
    )
  | undefined;

/**
 * Define the types for the component's props
 */
export interface BlurBackgroundProps {
  blurAmount?: number; // Intensity of the blur
  blurType?: BlurType; // Available blur types
  style?: ViewStyle; // Optional style to pass custom styles
}
