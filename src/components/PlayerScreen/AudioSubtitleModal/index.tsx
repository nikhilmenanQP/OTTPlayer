import BlurBackground from '@components/AppComponents/BlurBackGround'; // Custom background component
import React, {useState, useCallback, useRef, useEffect, useMemo, Component, ComponentElement} from 'react';

import {Check, CloseIcon} from '@assets/images/appIcons'; // Icons for selection and closing modal
import {Modal, View, Text, TouchableOpacity, Animated, Easing, LayoutChangeEvent} from 'react-native';
import {AudioSubtitleModalProps, OptionContainerProps, TabProps} from './types';
import {createStyle, ICON_SIZE} from './styles'; // Styles for modal and components
import {useAppTheme} from '@hooks/useAppTheme'; // Custom hook for theme
import {useSafeAreaInsets} from 'react-native-safe-area-context'; // Safe area support

// Tab options for audio and subtitle settings
const TAB: ['audio', 'subtitles'] = ['audio', 'subtitles'];
// Audio and subtitle options available in the modal
const audioOptions: string[] = ['English', 'Español', 'French', 'German', 'Italian', 'Polish', 'Japanese'];
const subtitleOptions: string[] = ['English', 'Español', 'Off'];

/**
 * @type {Component} AudioSubtitleModal component
 */
const AudioSubtitleModal: React.FC<AudioSubtitleModalProps> = React.memo(
  ({isFullscreen = false, onClose, visible = true}) => {
    const [activeTab, setActiveTab] = useState<'audio' | 'subtitles'>('audio'); // Active tab state
    const [selectedAudio, setSelectedAudio] = useState<string>('English'); // Selected audio option
    const [selectedSubtitle, setSelectedSubtitle] = useState<string>('English'); // Selected subtitle option
    const insets = useSafeAreaInsets(); // Get safe area insets for padding
    const {theme} = useAppTheme(); // Get current theme using custom hook

    const styles = useMemo(() => createStyle(theme), [theme]); // Generate styles based on theme

    // Compute modal padding dynamically based on fullscreen and insets
    const modalPadding = useMemo(
      () => ({
        paddingHorizontal: isFullscreen ? insets.right : theme.spacing.sm_lll + theme.spacing.sm_xxxx, // Adjust horizontal padding
        paddingVertical: isFullscreen ? theme.spacing.sm_lll + theme.spacing.sm_xxxx : insets.top, // Adjust vertical padding
      }),
      [isFullscreen, insets],
    );

    // Handler to change the active tab
    const handleTabChange = useCallback((tab: 'audio' | 'subtitles') => {
      setActiveTab(tab);
    }, []);

    // Reset active tab to 'audio' when modal becomes visible
    useEffect(() => {
      if (visible) {
        setActiveTab('audio');
      }
    }, [visible]);

    return (
      <Modal
        animationType="slide"
        supportedOrientations={['portrait', 'landscape', 'landscape-left', 'landscape-right']}
        transparent
        visible={visible}>
        <View style={[styles.modalContainer, modalPadding]}>
          <BlurBackground /> {/* Background with blur effect */}
          {/* Tabs for audio and subtitle selection */}
          <Tab selectedTab={activeTab} setSelectedTab={handleTabChange} onClose={onClose} />
          {/* Options for audio and subtitle */}
          <OptionContainer
            activeTab={activeTab}
            isFullscreen={isFullscreen}
            selectedAudio={selectedAudio}
            selectedSubtitle={selectedSubtitle}
            setSelectedAudio={setSelectedAudio}
            setSelectedSubtitle={setSelectedSubtitle}
          />
        </View>
      </Modal>
    );
  },
);

/**
 * @type {ComponentElement}
 * Tab component for switching between audio and subtitle options
 */
const Tab: React.FC<TabProps> = React.memo(({selectedTab, setSelectedTab, onClose}) => {
  const [initialTabWidth, setInitialTabWidth] = useState<number>(0); // Width of the first tab
  const tabWidth = useRef<number>(0); // Current width of the selected tab
  const translateX = useRef(new Animated.Value(0)).current; // Animated translation for underline movement
  const underlineWidth = useRef(new Animated.Value(0)).current; // Animated width of the tab underline
  const {theme} = useAppTheme(); // Get current theme using custom hook

  const styles = useMemo(() => createStyle(theme), [theme]); // Generate styles based on theme

  // Handler to set the tab layout and update underline width and position
  const handleTabLayout = useCallback(
    (event: LayoutChangeEvent, index: number) => {
      const {width} = event.nativeEvent.layout;
      if (index === 0 && initialTabWidth === 0) {
        setInitialTabWidth(width); // Set width for first tab
        tabWidth.current = width;
        translateX.setValue(0); // Set underline position
        underlineWidth.setValue(width); // Set underline width
      } else if (index !== 0) {
        tabWidth.current = width; // Update width for other tabs
      }
    },
    [initialTabWidth, underlineWidth, translateX],
  );

  // Animation to move underline when tab is changed
  const startAnimation = useCallback(() => {
    const index = TAB.indexOf(selectedTab); // Get index of selected tab
    Animated.timing(translateX, {
      duration: theme.spacing.lg_llll * 3, // Animation duration
      easing: Easing.out(Easing.ease), // Easing function
      toValue: index * tabWidth.current, // Move underline to the selected tab
      useNativeDriver: false, // Use native driver for better performance
    }).start();

    Animated.timing(underlineWidth, {
      duration: theme.spacing.lg_llll * 3, // Animation duration
      easing: Easing.out(Easing.ease), // Easing function
      toValue: tabWidth.current, // Update underline width
      useNativeDriver: false, // Use native driver for better performance
    }).start();
  }, [selectedTab, underlineWidth, translateX]);

  useEffect(() => {
    startAnimation(); // Start animation on tab change
  }, [selectedTab, startAnimation]);

  return (
    <View style={styles.tabsContainer}>
      <View style={styles.tabRow}>
        {TAB.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            onLayout={event => handleTabLayout(event, index)} // Capture layout information for the tab
            onPress={() => setSelectedTab(tab)} // Switch to selected tab
            style={[styles.tabButton, {width: initialTabWidth !== 0 ? initialTabWidth + 50 : undefined}]}>
            <Text style={selectedTab === tab ? styles.tabSelectedText : styles.tabText}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>{' '}
            {/* Display tab name */}
          </TouchableOpacity>
        ))}
        {/* Animated underline */}
        <Animated.View style={[styles.underline, {width: underlineWidth, transform: [{translateX}]}]} />{' '}
      </View>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <CloseIcon /> {/* Close icon to close modal */}
      </TouchableOpacity>
    </View>
  );
});

/**
 * @type {ComponentElement}
 * OptionContainer component to render audio or subtitle options based on the active tab
 */
const OptionContainer: React.FC<OptionContainerProps> = React.memo(
  ({selectedAudio, selectedSubtitle, activeTab, setSelectedAudio, setSelectedSubtitle, isFullscreen}) => {
    const {theme} = useAppTheme(); // Get current theme using custom hook
    const styles = createStyle(theme); // Generate styles based on theme
    // Simplified justifyContent logic based on fullscreen mode
    const justifyContent = isFullscreen ? 'flex-start' : 'space-between';

    // Memoize options and handlers based on the active tab
    const {handleSelection, options, selectedOption} = useMemo(() => {
      if (activeTab === 'audio') {
        return {
          handleSelection: setSelectedAudio, // Function to select audio
          options: audioOptions, // Audio options
          selectedOption: selectedAudio, // Currently selected audio
        };
      }
      return {
        handleSelection: setSelectedSubtitle, // Function to select subtitle
        options: subtitleOptions, // Subtitle options
        selectedOption: selectedSubtitle, // Currently selected subtitle
      };
    }, [activeTab, selectedAudio, selectedSubtitle, setSelectedAudio, setSelectedSubtitle]);

    // Handle option selection
    const handleSelectOption = useCallback(
      (option: string) => {
        handleSelection(option); // Set selected option
      },
      [handleSelection],
    );

    // Memoized style for option item based on selection
    const memoizedStyles = useCallback(
      (option: string) => ({
        backgroundColor: selectedOption === option ? theme.colors.bootstrapBlue : undefined, // Highlight selected option
        marginLeft: selectedOption === option ? theme.spacing.sm_x : undefined, // Adjust margin for selected option
      }),
      [selectedOption],
    );

    return (
      <View style={[styles.optionContainer, {justifyContent}]}>
        {options.map(option => {
          const {backgroundColor, marginLeft} = memoizedStyles(option); // Get styles for option
          return (
            <TouchableOpacity
              key={option}
              onPress={() => handleSelectOption(option)} // Select option on press
              style={[styles.optionItem, {backgroundColor}]} // Apply dynamic background color
            >
              {/* Display check icon if selected */}
              {selectedOption === option && <Check width={ICON_SIZE} height={ICON_SIZE} />}
              <Text style={[styles.optionText, {marginLeft}]}>{option}</Text> {/* Display option text */}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  },
);

export default AudioSubtitleModal; // Export the AudioSubtitleModal component
