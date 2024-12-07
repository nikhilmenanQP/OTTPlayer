import AppHeader from '@components/molecules/AppHeader';
import React from 'react';
import {AppCarousel} from '@components/molecules';
import {HomeScreenHeaderProps} from './types';
import {styles} from './styles';

const HomeScreenHeader: React.FC<HomeScreenHeaderProps> = ({banners, onProfileClickHandler}) => {
  return (
    <>
      <AppHeader
        appHeaderContainerStyle={styles.appHeaderContainerStyle}
        showLogo={true}
        showMenuButton={true}
        onProfileIconHandler={onProfileClickHandler}
      />
      <AppCarousel banners={banners} />
    </>
  );
};

export default HomeScreenHeader;
