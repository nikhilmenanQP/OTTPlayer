import {memo} from 'react';
import {ButtonContainer, ButtonText} from './styles';
import {ActionButtonProps} from './types';

export const ActionButton: React.FC<ActionButtonProps> = memo(({icon, label, onPress}) => {
  return (
    <ButtonContainer onPress={onPress}>
      {icon}
      <ButtonText>{label}</ButtonText>
    </ButtonContainer>
  );
});
