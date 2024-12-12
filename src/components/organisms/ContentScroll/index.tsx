// @components/organisms/ContentScroll.tsx
import React, {useMemo} from 'react';
import {ScrollView, View} from 'react-native';
import MovieBanner from '@components/molecules/MovieBanner';
import PrimaryButton from '@components/atoms/PrimaryButton';
import RenderExtras from '@components/molecules/RenderExtras';
import {SeasonCardContainer} from '@components/organisms';
import ActionButtonGroup from '@components/molecules/ActionButtonGroup';
import {useAppTheme} from '@hooks/useAppTheme';
import {createStyle} from './styles';
import DescriptionText from '@components/molecules/DescriptionText';

interface ContentScrollProps {
  contentType: string;
  extras: any[];
  seasonsData: any[];
  actionButtons: {
    icon: JSX.Element;
    label: string;
    onPress: () => void;
  }[];
  PlayIcon: any;
  onWatchNowHandler: () => void;
}

const ContentScroll: React.FC<ContentScrollProps> = ({
  contentType,
  extras,
  seasonsData,
  actionButtons,
  PlayIcon,
  onWatchNowHandler,
}) => {
  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollView}>
      <MovieBanner imageUri="https://picsum.photos/200/300" movieInfo="PG | 4seasons | 2005-2008 | drama" />
      <PrimaryButton icon={PlayIcon} text="Watch Now" onPressHandler={onWatchNowHandler} />
      <ActionButtonGroup buttons={actionButtons} />
      <DescriptionText
        containerStyle={styles.descriptionContainer}
        numberOfLines={2}
        showMoreTextStyle={styles.showMoreText}
        text={
          'Map through actionButtons array to generate buttons dynamicallyMap through actionButtons array to generate buttons dynamically'
        }
        textStyle={styles.descriptionText}
      />
      {contentType === 'movie' && <RenderExtras data={extras} onPress={() => console.log('')} />}
      <SeasonCardContainer contentType={contentType} seasonsData={seasonsData} />
    </ScrollView>
  );
};

export default ContentScroll;
