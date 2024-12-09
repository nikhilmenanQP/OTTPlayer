import AddListIcon from '@assets/images/appIcons/addListIcon.svg';
import DetailScreenTemplate from '@components/templates/DetailScreenTemplate';
import MovieIcon from '@assets/images/appIcons/movieIcon.svg';
import React from 'react';
import ShareIcon from '@assets/images/appIcons/shareIcon.svg';
import {DetailScreenProps} from './types';
import {useAppTheme} from '@hooks/useAppTheme';

const DetailScreen: React.FC<DetailScreenProps> = ({navigation, route}) => {
  const {theme} = useAppTheme();
  const content = route.params?.data || {};

  const actionButtons = [
    {
      icon: <AddListIcon width={theme.spacing.sm_lll} height={theme.spacing.sm_lll} />,
      label: 'My List',
      onPress: () => console.log('Add to List clicked'),
    },
    {
      icon: <MovieIcon width={theme.spacing.sm_lll} height={theme.spacing.sm_lll} />,
      label: 'Trailer',
      onPress: () => console.log('Trailer clicked'),
    },
    {
      icon: <ShareIcon width={theme.spacing.sm_lll} height={theme.spacing.sm_lll} />,
      label: 'Share',
      onPress: () => console.log('Share clicked'),
    },
  ];

  const onWatchNowHandler = () => {
    console.log('Watch now handler...');
    navigation.navigate('PlayerScreen');
  };

  return <DetailScreenTemplate content={content} onWatchNowHandler={onWatchNowHandler} actionButtons={actionButtons} />;
};

export default DetailScreen;
