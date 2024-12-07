import {SeriesCard} from '@components/organisms';

import {SeasonCardContainerProps} from './types';
import {useMemo} from 'react';

const SeasonCardContainer: React.FC<SeasonCardContainerProps> = ({contentType, seasonsData}) => {
  const renderSeasonCard = useMemo(() => {
    return contentType === 'series' ? <SeriesCard data={seasonsData} /> : null;
  }, [contentType, seasonsData]);

  return <>{renderSeasonCard}</>;
};

export default SeasonCardContainer;
