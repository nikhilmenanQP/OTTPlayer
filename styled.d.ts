import '@emotion/native';
import {Theme} from './src/styles/theme';

declare module '@emotion/native' {
  export interface DefaultTheme extends Theme {} // Extend DefaultTheme with your custom theme
}
