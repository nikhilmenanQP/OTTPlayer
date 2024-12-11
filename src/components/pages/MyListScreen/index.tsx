import React, {memo, useMemo} from 'react';
import MyListScreenTemplate from '@components/templates/MyListScreenTemplate';
import {MyListScreenProps, ListItem} from './types';

const MyListScreen: React.FC<MyListScreenProps> = ({data}: {data: ListItem[]}) => {
  const memoizedData = useMemo(() => data, [data]);

  return <MyListScreenTemplate data={memoizedData} />;
};

export default memo(MyListScreen);
