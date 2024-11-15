import CloseIcon from '@assets/images/appIcons/close.svg';
import LinearGradient from 'react-native-linear-gradient';
import PlayIcon from '@assets/images/appIcons/playIcon.svg';
import React, {useState, useMemo, useCallback} from 'react';

import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';
import {
  FlatList,
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Episode,
  Season,
  SeasonSelectorModalProps,
  SeriesCardProps,
} from './types';

export const SeriesCard: React.FC<SeriesCardProps> = ({
  data,
  isScrollable = false,
}) => {
  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedSeason, setSelectedSeason] = useState<number>(1);

  const filteredEpisodes = useMemo(() => {
    const season = data.find(season => season.seasonNumber === selectedSeason);
    return season ? season.episodes : [];
  }, [data, selectedSeason]);

  const onSelectSeasonHandler = useCallback((season: Season) => {
    setSelectedSeason(season.seasonNumber);
    setModalVisible(false);
  }, []);

  const renderItem = useCallback(
    ({item}: {item: Episode}) => renderEpisode({item}, styles, theme),
    [styles, theme],
  );

  const ListHeader = () => (
    <>
      <Text style={styles.moreText}>Episodes</Text>
      <View style={styles.horiZontalRule} />
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.episodePickerBtnContainer}>
        <Text style={styles.episodePickerBtnText}>Season {selectedSeason}</Text>
        <PlayIcon />
      </TouchableOpacity>
    </>
  );

  const ListFooter = () => <View style={{height: 20}} />;

  return (
    <>
      <FlatList
        data={filteredEpisodes}
        contentContainerStyle={{paddingHorizontal: theme.spacing.sm_lll}}
        getItemLayout={(_, index) => ({
          length: 250,
          offset: 250 * index,
          index,
        })}
        initialNumToRender={5}
        keyExtractor={item => item.id}
        ListFooterComponent={ListFooter}
        ListHeaderComponent={ListHeader}
        renderItem={renderItem} // Now this works without memo
        scrollEnabled={isScrollable}
      />

      <SeasonSelectorModal
        data={data}
        onClose={() => setModalVisible(false)}
        onSeasonSelect={onSelectSeasonHandler}
        selectedSeason={selectedSeason}
        theme={theme}
        visible={modalVisible}
      />
    </>
  );
};

// Move renderEpisode outside of the component
const renderEpisode = (
  {item}: {item: Episode},
  styles: ReturnType<typeof createStyle>,
  theme: ReturnType<typeof useAppTheme>['theme'],
) => {
  return (
    <View style={styles.episodeContainer}>
      <ImageBackground source={{uri: item.image}} style={styles.episodeImage}>
        <View style={styles.episodeTextContainer}>
          <Text style={styles.episodeTitle}>
            Episode {item.episodeNumber} {item.title}
          </Text>
          <Text style={styles.episodeMeta}>
            Episode {item.episodeNumber} • {item.duration} • {item.releaseDate}
          </Text>
          <Text style={styles.episodeDescription}>{item.description}</Text>
        </View>
        <LinearGradient
          colors={['transparent', theme.colors.background]}
          style={[styles.bottomGradient, {height: '40%'}]}
        />
      </ImageBackground>
    </View>
  );
};

const SeasonSelectorModal: React.FC<SeasonSelectorModalProps> = ({
  data,
  onClose,
  onSeasonSelect,
  theme,
  visible,
}) => {
  const styles = createStyle(theme);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
      visible={visible}>
      <View style={styles.seasonSelectorContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitleText}>Select Season</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <CloseIcon height={14} width={14} />
          </TouchableOpacity>
        </View>

        {data.map(item => (
          <React.Fragment key={item.seasonNumber}>
            <TouchableOpacity
              onPress={() => onSeasonSelect(item)}
              style={styles.titleContainer}>
              <Text style={styles.titleText}>Season {item.seasonNumber}</Text>
            </TouchableOpacity>
            <View style={[styles.horiZontalRule, {opacity: 0.4}]} />
          </React.Fragment>
        ))}
      </View>
    </Modal>
  );
};

export default SeriesCard;
