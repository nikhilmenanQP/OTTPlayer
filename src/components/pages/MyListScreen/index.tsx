import DeleteIcon from '@assets/images/appIcons/delete.svg';
import React, {memo} from 'react';

import {SwipeListView} from 'react-native-swipe-list-view';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';
import {ListItem, MyListScreenProps} from './types';

const MyListScreen: React.FC<MyListScreenProps> = ({data}) => {
  // Get theme and dynamically generated styles
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  // Render function for list items
  const renderItem = ({item}: {item: ListItem}) => (
    <View style={styles.listItem}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.meta}>
          {item.duration || item.seasons} • {item.rating}
        </Text>
      </View>
    </View>
  );

  // Render function for hidden swipeable items
  const renderHiddenItem = () => (
    <View style={styles.hiddenItem}>
      <TouchableOpacity style={styles.deleteButton}>
        <DeleteIcon style={styles.deleteIcon} />
        <Text style={styles.deleteText}>REMOVE</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SwipeListView
      contentContainerStyle={styles.container}
      data={data} // Pass the data array to the SwipeListView
      keyExtractor={item => item.id}
      renderHiddenItem={renderHiddenItem}
      renderItem={renderItem}
      rightOpenValue={-100}
      showsVerticalScrollIndicator={false}
    />
  );
};

// Memoizing the component to prevent unnecessary re-renders
export default memo(MyListScreen);
