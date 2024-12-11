import PrimaryText from '@components/atoms/PrimaryText';
import React, {memo} from 'react';

import {Image, View} from 'react-native';

import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const ListItem: React.FC<ListItemProps> = ({item}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  return (
    <View style={styles.listItem}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.details}>
        <PrimaryText style={styles.title}>{item.title}</PrimaryText>
        <PrimaryText style={styles.meta}>
          {item.duration || `${item.seasons} seasons`} • {item.rating}
        </PrimaryText>
      </View>
    </View>
  );
};

// Memoizing the ListItem to prevent unnecessary re-renders
export default memo(ListItem);
