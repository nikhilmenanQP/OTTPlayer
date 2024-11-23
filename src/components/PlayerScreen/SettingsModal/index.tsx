import BlurBackground from '@components/AppComponents/BlurBackGround'; // Custom background blur component
import React, {useState, useEffect, useRef, Component, ComponentElement, useCallback} from 'react';

import {Check, CloseIcon} from '@assets/images/appIcons'; // Icons for selection and closing modal
import {Modal, View, Text, TouchableOpacity, FlatList, Animated, ViewStyle, Easing, StyleProp} from 'react-native';
import {Option, PlayerSettingsModalProps, SpeedOption, TabProps} from './types'; // Type definitions
import {alignSelf, createStyle} from './styles'; // Function to create styles based on the current theme
import {useAppTheme} from '@hooks/useAppTheme'; // Custom hook for theme management
import {useSafeAreaInsets} from 'react-native-safe-area-context'; // For handling safe area insets

// Constants for video quality and playback speed options
const QUALITY_OPTIONS: Option[] = ['Auto', '4K', '1080p', '720p', '480p', '360p', '240p'];
const SPEED_OPTIONS: SpeedOption[] = ['0.5x', '0.75x', '1x', '1.25x', '1.5x'];
const TAB: ['quality', 'speed'] = ['quality', 'speed'];

/**
 * @type {Component}
 * PlayerSettingsModal component handles the modal's visibility, layout, and rendering of options
 * @param visible To open and close the modal
 * @param onClose Function to close the modal
 * @param isFullscreen Check player is fullScreen mode or not
 * @returns
 */
const PlayerSettingsModal: React.FC<PlayerSettingsModalProps> = ({visible, onClose, isFullscreen}) => {
  const [selectedTab, setSelectedTab] = useState<'quality' | 'speed'>('quality'); // State for the selected tab ('quality' or 'speed')
  const {theme} = useAppTheme(); // Fetch the current theme using custom hook
  const insets = useSafeAreaInsets(); // Get insets for safe areas (e.g., status bar)
  const styles = createStyle(theme); // Generate styles based on the theme

  // Dynamic padding based on whether the modal is fullscreen or not
  const modalPadding = {
    paddingVertical: isFullscreen ? 20 : insets.top,
    paddingHorizontal: isFullscreen ? insets.right : 20,
  };

  return (
    <Modal
      visible={visible} // Modal visibility state
      transparent
      animationType="slide" // Modal transition type
      onRequestClose={onClose} // Callback to close the modal
      supportedOrientations={['portrait', 'landscape', 'landscape-left', 'landscape-right']}>
      <View style={[styles.modalContainer, modalPadding]}>
        <BlurBackground /> {/* Display background blur */}
        <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} onClose={onClose} />{' '}
        {/* Tab for switching between Quality and Speed options */}
        {selectedTab === 'quality' ? (
          <VideoQualityOptions isFullscreen={isFullscreen} />
        ) : (
          <PlaybackSpeedOptions />
        )}{' '}
        {/* Render the appropriate options based on the selected tab */}
      </View>
    </Modal>
  );
};

/**
 * @type {ComponentElement}
 * Tab component for switching between video quality and playback speed options
 * @param selectedTab The currently selected tab
 * @param setSelectedTab Function to update the selected tab
 * @param onClose Function to close the modal
 */
const Tab: React.FC<TabProps> = React.memo(({selectedTab, setSelectedTab, onClose}) => {
  const {theme} = useAppTheme(); // Fetch the theme
  const styles = createStyle(theme); // Apply theme-based styles

  const underlineWidth = useRef(new Animated.Value(0)).current; // Animated underline width for tab transition
  const translateX = useRef(new Animated.Value(0)).current; // Animated translation for the underline position
  const [initialTabWidth, setInitialTabWidth] = useState(0); // Store initial width of tab for animation consistency
  const tabWidth = useRef(0); // Store tab width for calculations

  // Effect for updating tab animation whenever the selected tab changes
  useEffect(() => {
    const index = TAB.indexOf(selectedTab); // Find the index of the selected tab
    Animated.timing(translateX, {
      toValue: index === 0 ? index * tabWidth.current : index * tabWidth.current,
      duration: theme.spacing.lg_llll * 3,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();

    Animated.timing(underlineWidth, {
      toValue: tabWidth.current,
      duration: theme.spacing.lg_llll * 3,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [selectedTab]);

  // Effect for set tab to quality whenever use close the modal
  useEffect(() => {
    return () => setSelectedTab('quality');
  }, []);

  // Handle layout measurement of tabs to update the underline width and position
  const handleTabLayout = (event: any, index: number) => {
    const {width} = event.nativeEvent.layout;
    if (index === 0 && initialTabWidth === 0) {
      setInitialTabWidth(width);
      tabWidth.current = width;
      underlineWidth.setValue(width);
      translateX.setValue(0);
    } else if (index !== 0) {
      tabWidth.current = width;
    }
  };

  return (
    <View style={styles.tabsContainer}>
      <View style={styles.tabRow}>
        {TAB.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)} // Change selected tab on press
            style={[styles.tabButton, {width: initialTabWidth !== 0 ? initialTabWidth : undefined}]}
            onLayout={event => handleTabLayout(event, index)}>
            <Text style={[selectedTab === tab ? styles.tabSelectedText : styles.tabText]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>{' '}
            {/* Capitalize the tab text */}
          </TouchableOpacity>
        ))}
        {/* Animated underline under the active tab */}
        <Animated.View
          style={[
            styles.underline,
            {
              width: underlineWidth,
              transform: [{translateX}],
            },
          ]}
        />
      </View>
      {/* Close button */}
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <CloseIcon /> {/* Display the close icon */}
      </TouchableOpacity>
    </View>
  );
});

/**
 * @type {ComponentElement}
 * VideoQualityOptions component for displaying quality options
 * @param isFullscreen Check player is fullScreen mode or not
 */
const VideoQualityOptions: React.FC<{isFullscreen: boolean}> = React.memo(({isFullscreen}) => {
  const [selectedQuality, setSelectedQuality] = useState<Option>('Auto'); // Track selected quality
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  const handlePress = (item: Option) => setSelectedQuality(item); // Handle selection of quality option

  // Adjust FlatList styling based on fullscreen state
  const flatListContainerStyle: ViewStyle = {
    justifyContent: !isFullscreen ? 'space-between' : 'flex-start',
  };

  return (
    <FlatList
      data={QUALITY_OPTIONS} // Video quality options data
      keyExtractor={item => item}
      contentContainerStyle={[styles.flatListContainer, flatListContainerStyle]}
      initialNumToRender={5}
      windowSize={3}
      removeClippedSubviews
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => handlePress(item)} // Update selected quality on press
          style={selectedQuality === item ? styles.selectedOption : styles.option}>
          {selectedQuality === item && <Check width={14} height={14} />} {/* Show check icon for selected option */}
          <Text style={[styles.optionText, selectedQuality === item && styles.selectedText]}>{item}</Text>{' '}
          {/* Highlight selected option */}
        </TouchableOpacity>
      )}
    />
  );
});

/**
 * @type {ComponentElement}
 * PlaybackSpeedOptions component for displaying playback speed options
 */
const PlaybackSpeedOptions: React.FC = React.memo(() => {
  const [selectedSpeed, setSelectedSpeed] = useState<SpeedOption>('1x'); // Track selected playback speed
  const {theme} = useAppTheme(); // Fetch the theme
  const styles = createStyle(theme); // Apply styles

  // Optimized handlePress with useCallback to avoid unnecessary re-renders
  const handlePress = useCallback((item: SpeedOption) => {
    setSelectedSpeed(item); // Handle speed option selection
  }, []);

  // Function to render the ListHeaderComponent, now moved outside of JSX
  const renderListHeader = () => <View />;

  // Memoized renderItem function moved outside JSX, avoiding inline function
  const renderItem = useCallback(
    ({item, index}: {item: SpeedOption; index: number}) => {
      const isSelected = selectedSpeed === item;
      const isFirst = index === 0;
      const isLast = index === SPEED_OPTIONS.length - 1;

      // Pre-calculate the alignment style for optimization
      const alignSelfStyle = isSelected ? 'center' : alignSelf(isFirst, isLast);

      // Pre-calculate the selected styles to avoid ternary in JSX
      const outerCircleStyle = isSelected ? styles.outerCheckCircle : styles.outerUncheckCircle;
      const innerCircleStyle: StyleProp<ViewStyle> = isSelected
        ? [styles.innerCheckCircle, {alignSelf: alignSelfStyle}]
        : [styles.innerUncheckCircle, {alignSelf: alignSelfStyle}];

      return (
        <TouchableOpacity
          onPress={() => handlePress(item)} // Update selected speed on press
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={outerCircleStyle}>
            {isSelected && <BlurBackground />}
            <View style={innerCircleStyle} />
          </View>
          <Text style={[isSelected ? styles.selectedText : styles.optionText, {marginLeft: 0}]}>{item}</Text>
          {/* Highlight selected option */}
        </TouchableOpacity>
      );
    },
    [selectedSpeed, handlePress, styles], // Only re-render when selectedSpeed or styles change
  );

  return (
    <FlatList
      data={SPEED_OPTIONS} // Playback speed options data
      horizontal
      keyExtractor={item => item}
      contentContainerStyle={styles.playbackContentContainer}
      initialNumToRender={3}
      windowSize={2}
      removeClippedSubviews
      ListHeaderComponent={renderListHeader} // Use the extracted function here
      ListHeaderComponentStyle={styles.playbackListHeader}
      renderItem={renderItem} // Use the extracted memoized renderItem
    />
  );
});

// Memoize the PlayerSettingsModal to optimize performance (avoids unnecessary re-renders)
export default React.memo(PlayerSettingsModal);
