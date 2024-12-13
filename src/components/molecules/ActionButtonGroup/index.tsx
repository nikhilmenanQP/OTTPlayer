import React, {useCallback} from 'react';
import {ActionButtonGroupProps, Button} from './types';
import {ActionButton} from '@components/atoms';
import {Container} from './styles';

const ActionButtonGroup: React.FC<ActionButtonGroupProps> = React.memo(
  ({buttons, containerStyle, buttonStyle, textStyle}) => {
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

    /**
     * Used Map instead of FlatList to avoid nested VirtualizedLists error.
     */
    return <Container style={containerStyle}>{buttons.map(renderActionButton)}</Container>;
  },
);

export default ActionButtonGroup;
