import PrimaryText from '@components/atoms/PrimaryText';
import React, {memo} from 'react';
import {Container, Details, metaStyle, Thumbnail, titleStyle} from './styles';
import {ListItemProps} from './types';
import {useAppTheme} from '@hooks/useAppTheme';

const ListItem: React.FC<ListItemProps> = ({item}) => {
  const {theme} = useAppTheme();

  return (
    <Container>
      <Thumbnail source={{uri: item.image}} />
      <Details>
        <PrimaryText style={titleStyle(theme)}>{item.title}</PrimaryText>
        <PrimaryText style={metaStyle(theme)}>
          {item.duration || `${item.seasons} seasons`} • {item.rating}
        </PrimaryText>
      </Details>
    </Container>
  );
};

// Memoizing the ListItem to prevent unnecessary re-renders
export default memo(ListItem);
