import React, {memo, useMemo} from 'react';
import SwipeList from '@components/organisms/SwipeList';
import {MyListScreenTemplateProps} from './types';

const MyListScreenTemplate: React.FC<MyListScreenTemplateProps> = ({data}) => {
  const memoizedData = useMemo(() => data, [data]);

  return <SwipeList data={memoizedData} />;
};

export default memo(MyListScreenTemplate);
