import {ActionButtonProps} from './types';
import {ButtonContainer, ButtonText} from './styles';
import {memo} from 'react';

const ActionButton: React.FC<ActionButtonProps> = memo(({buttonStyle, icon, label, onPress, textStyle}) => {
  return (
    <ButtonContainer onPress={onPress} style={buttonStyle}>
      {icon}
      <ButtonText style={textStyle}>{label}</ButtonText>
    </ButtonContainer>
  );
});

export default ActionButton;
