import AppHeader from '@components/AppComponents/AppHeader';
import {useAppTheme} from '@hooks/useAppTheme';
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createStyle} from './styles';
import {extraData} from '@dummyDataPreProd/DetailScreen';
import AddListIcon from '@assets/images/appIcons/addListIcon.svg';
import MovieIcon from '@assets/images/appIcons/MovieIcon.svg';
import ShareIcon from '@assets/images/appIcons/shareIcon.svg';
import PlayIcon from '@assets/images/appIcons/playIcon.svg';
import MovieCard from '@components/HomeScreenComp/MovieCard';

const DetailScreen = ({}) => {
  const [showMore, setShowMore] = useState(false);
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <AppHeader showBackButton={true} />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollView}>
        <ImageBackground
          source={{uri: 'https://picsum.photos/200/300'}}
          style={styles.movieBanner}>
          <LinearGradient
            colors={[theme.colors.background, 'transparent']}
            style={styles.topGradient}
          />
          <Text style={styles.movieInfoText}>
            PG | 4seasons | 2005-2008 | drama
          </Text>
          <LinearGradient
            colors={['transparent', theme.colors.background]}
            style={styles.bottomGradient}
          />
        </ImageBackground>

        <TouchableOpacity style={styles.watchNowBtn}>
          <PlayIcon />
          <Text style={styles.watchNowBtnText}>Watch Now</Text>
        </TouchableOpacity>

        <View style={styles.actionBtnContainer}>
          <TouchableOpacity style={styles.actionBtn}>
            <AddListIcon
              width={theme.spacing.sm_lll}
              height={theme.spacing.sm_lll}
            />
            <Text style={styles.actionBtnText}>My List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <MovieIcon
              width={theme.spacing.sm_lll}
              height={theme.spacing.sm_lll}
            />
            <Text style={styles.actionBtnText}>Trailer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <ShareIcon
              width={theme.spacing.sm_lll}
              height={theme.spacing.sm_lll}
            />
            <Text style={styles.actionBtnText}>Share</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.descriptionContainer}>
          <Text
            style={styles.descriptionText}
            numberOfLines={showMore ? undefined : 2}>
            On the lush alien world of Pandora, a paraplegic ex-marine finds
            himself torn between following his orders and protecting the Na'vi
          </Text>
          <TouchableOpacity onPress={toggleShowMore}>
            <Text style={styles.showMoreText}>
              {showMore ? 'Show Less' : 'Show More'}
            </Text>
          </TouchableOpacity>
        </View>

        <>
          <Text style={styles.extraSectionText}>Extras</Text>
          <View style={styles.horiZontalRule} />
          <FlatList
            horizontal
            data={extraData}
            contentContainerStyle={{
              paddingLeft: theme.spacing.sm_lll,
            }}
            renderItem={({item}) => (
              <View style={styles.cardContainer}>
                <Image source={{uri: item.image}} style={styles.cardImage} />
                <Text style={styles.cardText_1}>{item.title}</Text>
                <Text style={styles.cardText_2}>{item.duration}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </>
      </ScrollView>
    </>
  );
};

export default DetailScreen;
