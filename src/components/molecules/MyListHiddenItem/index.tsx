import DeleteIcon from '@assets/images/appIcons/delete.svg';
import PrimaryText from '@components/atoms/PrimaryText';
import React, {memo} from 'react';
import {Container, DeleteButton, deleteIconStyle, deleteTextStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const MyListHiddenItem: React.FC = () => {
  const {theme} = useAppTheme();

  return (
    <Container>
      <DeleteButton activeOpacity={0.7}>
        <DeleteIcon style={deleteIconStyle(theme)} />
        <PrimaryText style={deleteTextStyle(theme)}>REMOVE</PrimaryText>
      </DeleteButton>
    </Container>
  );
};

export default memo(MyListHiddenItem);
