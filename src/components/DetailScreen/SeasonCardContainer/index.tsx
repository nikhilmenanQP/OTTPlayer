import SeriesCard from '../SeriesCard';

import {SeasonCardContainerProps} from './types';
import {useMemo} from 'react';

export const SeasonCardContainer: React.FC<SeasonCardContainerProps> = ({contentType, seasonsData}) => {
  const renderSeasonCard = useMemo(() => {
    return contentType === 'series' ? <SeriesCard data={seasonsData} /> : null;
  }, [contentType, seasonsData]);

  return <>{renderSeasonCard}</>;
};
