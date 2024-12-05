import {ViewStyle} from 'react-native';

/**
 * Manually define the blur types as a union of string literals
 */
export type BlurType =
  | (
      | 'dark'
      | 'light'
      | 'xlight'
      | 'prominent'
      | 'regular'
      | 'extraDark'
      | 'chromeMaterial'
      | 'material'
      | 'thickMaterial'
      | 'thinMaterial'
      | 'ultraThinMaterial'
      | 'chromeMaterialDark'
      | 'materialDark'
      | 'thickMaterialDark'
      | 'thinMaterialDark'
      | 'ultraThinMaterialDark'
      | 'chromeMaterialLight'
      | 'materialLight'
      | 'thickMaterialLight'
      | 'thinMaterialLight'
      | 'ultraThinMaterialLight'
    )
  | undefined;

/**
 * Define the types for the component's props
 */
export interface BlurBackgroundProps {
  blurType?: BlurType; // Available blur types
  blurAmount?: number; // Intensity of the blur
  style?: ViewStyle; // Optional style to pass custom styles
}
