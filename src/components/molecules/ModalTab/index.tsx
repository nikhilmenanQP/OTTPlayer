import React, {useState, useRef, useEffect, useCallback} from 'react';
import {Animated, Easing, LayoutChangeEvent} from 'react-native';
import {CloseButton, TabButton, TabRow, TabsContainer, TabText, Underline} from './styles';
import {CloseIcon} from '@assets/images/appIcons';
import {TabProps} from './types';
import {useAppTheme} from '@hooks/useAppTheme';

const TAB: ['audio', 'subtitles'] = ['audio', 'subtitles'];

const ModalTab: React.FC<TabProps> = React.memo(({selectedTab, setSelectedTab, onClose}) => {
  const [initialTabWidth, setInitialTabWidth] = useState<number>(0); // Width of the first tab
  const tabWidth = useRef<number>(0); // Current width of the selected tab
  const translateX = useRef(new Animated.Value(0)).current; // Animated translation for underline movement
  const underlineWidth = useRef(new Animated.Value(0)).current; // Animated width of the tab underline
  const {theme} = useAppTheme(); // Get current theme using custom hook

  const getTabTextStyle = (tab: string) => {
    return selectedTab === tab;
  };

  /**
   * Handler to set the tab layout and update underline width and position
   */
  const handleTabLayout = useCallback(
    (event: LayoutChangeEvent, index: number) => {
      const {width} = event.nativeEvent.layout;
      if (index === 0 && initialTabWidth === 0) {
        setInitialTabWidth(width);
        tabWidth.current = width;
        translateX.setValue(0);
        underlineWidth.setValue(width);
      } else if (index !== 0) {
        tabWidth.current = width;
      }
    },
    [initialTabWidth, underlineWidth, translateX],
  );

  /**
   * Animation to move underline when tab is changed
   */
  const startAnimation = useCallback(() => {
    const index = TAB.indexOf(selectedTab);
    Animated.timing(translateX, {
      duration: theme.spacing.lg_llll * 3,
      easing: Easing.out(Easing.ease),
      toValue: index * tabWidth.current,
      useNativeDriver: false,
    }).start();

    Animated.timing(underlineWidth, {
      duration: theme.spacing.lg_llll * 3,
      easing: Easing.out(Easing.ease),
      toValue: tabWidth.current,
      useNativeDriver: false,
    }).start();
  }, [selectedTab, underlineWidth, translateX]);

  useEffect(() => {
    startAnimation();
  }, [selectedTab, startAnimation]);

  return (
    <TabsContainer>
      {/* Tabs */}
      <TabRow>
        {TAB.map((tab, index) => (
          <TabButton
            initialTabWidth={initialTabWidth}
            key={tab}
            onLayout={event => handleTabLayout(event, index)}
            onPress={() => setSelectedTab(tab)}>
            <TabText isSelected={getTabTextStyle(tab)}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</TabText>
          </TabButton>
        ))}
        <Underline style={{width: underlineWidth, transform: [{translateX}]}} />
      </TabRow>
      {/* Close icon to close modal */}
      <CloseButton onPress={onClose}>
        <CloseIcon />
      </CloseButton>
    </TabsContainer>
  );
});

export default ModalTab;
