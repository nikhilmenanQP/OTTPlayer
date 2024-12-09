import React from 'react';
import {AppHeader} from '@components/molecules';
import ContentScroll from '@components/organisms/ContentScroll';
import PlayIcon from '@assets/images/appIcons/playIcon.svg';
import {DetailScreenProps} from './types';

const DetailScreenTemplate: React.FC<DetailScreenProps> = ({actionButtons, onWatchNowHandler, content}) => {
  const {contentType = 'movie', seasonsData = [], extras = []} = content;

  return (
    <>
      <AppHeader showBackButton={true} />
      <ContentScroll
        PlayIcon={PlayIcon}
        actionButtons={actionButtons}
        contentType={contentType}
        extras={extras}
        seasonsData={seasonsData}
        onWatchNowHandler={onWatchNowHandler}
      />
    </>
  );
};

export default DetailScreenTemplate;
