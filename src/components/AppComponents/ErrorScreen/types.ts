import {TextStyle, ViewStyle} from 'react-native';

/**
 * Props for the ErrorScreen component.
 * These define the expected properties that can be passed into the component.
 */
export interface ErrorScreenProps {
  /**
   * Controls whether the error modal is visible or not.
   * Default value is `true` if not provided.
   */
  visible?: boolean;

  /**
   * Determines whether the modal should take up the full screen.
   * Default value is `true` if not provided.
   */
  isFullscreen?: boolean;

  /**
   * Callback function to close the error modal.
   * This function should be passed by the parent component to handle modal closure.
   */
  onErrorModalClose: () => void;
}

/**
 * Defines the shape of the styles used in the ErrorScreen component.
 * This interface ensures that each style property is correctly typed
 * and mapped to a corresponding `ViewStyle` or `TextStyle`.
 */
export interface Styles {
  /**
   * Style for the container of the modal.
   * It holds all the content in the modal and positions it correctly on the screen.
   */
  container: ViewStyle;

  /**
   * Style for the error icon (e.g., danger or warning icon) in the modal.
   * This style controls the layout and positioning of the icon.
   */
  icon: ViewStyle;

  /**
   * Style for the title text in the modal.
   * Typically displayed in large font to emphasize the error message.
   */
  titleText: TextStyle;

  /**
   * Style for the description text that provides additional information about the error.
   * Usually displayed in smaller font size compared to the title.
   */
  descriptionText: TextStyle;

  /**
   * Style for the 'Try again' button.
   * It contains both an icon and a text label, prompting the user to retry the action.
   */
  button: ViewStyle;

  /**
   * Style for the 'Try again' text inside the button.
   * This is usually the label next to the retry icon.
   */
  tryAgainText: TextStyle;

  /**
   * Style for the close button of the modal (typically located in the top-right corner).
   * This button allows the user to close the modal and dismiss the error.
   */
  closeButton: ViewStyle;
}
