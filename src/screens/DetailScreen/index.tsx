import AddListIcon from '@assets/images/appIcons/addListIcon.svg';
import AppHeader from '@components/AppComponents/AppHeader';
import MovieIcon from '@assets/images/appIcons/movieIcon.svg';
import PlayIcon from '@assets/images/appIcons/playIcon.svg';
import React, {useMemo} from 'react';
import ShareIcon from '@assets/images/appIcons/shareIcon.svg';

import {ActionButton} from '@components/DetailScreen/ActionButton';
import {DescriptionText} from '@components/DetailScreen/DescriptionText';
import {DetailScreenProps} from './types';
import {MovieBanner} from '@components/DetailScreen/MovieBanner';
import {RenderExtras} from '@components/DetailScreen/RenderExtras';
import {SeasonCardContainer} from '@components/DetailScreen/SeasonCardContainer';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const DetailScreen: React.FC<DetailScreenProps> = ({navigation, route}) => {
  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  const content = route.params?.data || {};
  const {contentType = 'movie', seasonsData = [], extras = []} = content;

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

  return (
    <>
      <AppHeader showBackButton={true} />
      <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollView}>
        <MovieBanner imageUri="https://picsum.photos/200/300" movieInfo="PG | 4seasons | 2005-2008 | drama" />

        <TouchableOpacity style={styles.watchNowBtn} onPress={onWatchNowHandler}>
          <PlayIcon />
          <Text style={styles.watchNowBtnText}>Watch Now</Text>
        </TouchableOpacity>

        <View style={styles.actionBtnContainer}>
          {actionButtons.map((button, index) => (
            <ActionButton icon={button.icon} key={index} label={button.label} onPress={button.onPress} />
          ))}
        </View>

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
    </>
  );
};

export default DetailScreen;
