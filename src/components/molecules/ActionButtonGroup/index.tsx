import React, {useCallback} from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import {ActionButton} from '@components/atoms';
import {useAppTheme} from '@hooks/useAppTheme';
import {createStyle} from './styles';

interface Button {
  icon: JSX.Element;
  label: string;
  onPress: () => void;
}

interface ActionButtonGroupProps {
  buttons: Button[];
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const ActionButtonGroup: React.FC<ActionButtonGroupProps> = React.memo(
  ({buttons, containerStyle, buttonStyle, textStyle}) => {
    const {theme} = useAppTheme();
    const styles = createStyle(theme);

    const renderActionButton = useCallback(
      (button: Button) => (
        <ActionButton
          icon={button.icon}
          key={button.label}
          label={button.label}
          onPress={button.onPress}
          buttonStyle={buttonStyle}
          textStyle={textStyle}
        />
      ),
      [buttonStyle, textStyle],
    );

    // Used Map instead of FlatList to avoid nested VirtualizedLists error.
    return <View style={[styles.actionBtnContainer, containerStyle]}>{buttons.map(renderActionButton)}</View>;
  },
);

export default ActionButtonGroup;
