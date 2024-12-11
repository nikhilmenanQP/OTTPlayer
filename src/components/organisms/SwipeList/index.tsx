import ListItem from '@components/molecules/ListItem';
import MyListHiddenItem from '@components/molecules/MyListHiddenItem';
import React, {memo, useMemo, useCallback} from 'react';

import {MyListScreenProps, ListItem as ListItemType} from './types';
import {SwipeListView} from 'react-native-swipe-list-view';

import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const SwipeList: React.FC<MyListScreenProps> = ({data}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  const memoizedData = useMemo(() => data, [data]);

  const renderItem = useCallback(({item}: {item: ListItemType}) => <ListItem item={item} />, []);

  const renderHiddenItem = useCallback(() => <MyListHiddenItem />, []);

  return (
    <SwipeListView
      contentContainerStyle={styles.container}
      data={memoizedData}
      keyExtractor={item => item.id}
      renderHiddenItem={renderHiddenItem}
      renderItem={renderItem}
      rightOpenValue={-100}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default memo(SwipeList);
