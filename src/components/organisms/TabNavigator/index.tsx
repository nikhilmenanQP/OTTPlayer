import React, {useEffect, useMemo, useRef} from 'react';

import {TabNavigatorProps} from './types';
// import {Tab} from '@screens/ProfileScreen/types';
import {Tab} from './types';
import {Animated, Easing, Text, TouchableOpacity, View} from 'react-native';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const TabNavigator: React.FC<TabNavigatorProps> = ({tab, setTab}) => {
  const tabIndicatorPosition = useRef(new Animated.Value(0)).current; // Animated value for the indicator position
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  const tabNames: Tab[] = useMemo(() => ['account', 'myList'], []);

  // Update indicator position when the tab changes
  useEffect(() => {
    const tabIndex = tabNames.indexOf(tab);

    if (tabIndex !== -1) {
      Animated.timing(tabIndicatorPosition, {
        toValue: tabIndex * 100,
        duration: 250,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.ease),
      }).start();
    } else {
      console.error('Invalid tab value: ', tab);
    }
  }, [tab]);

  return (
    <View style={styles.tabContainer}>
      {tabNames.map(tabName => (
        <TouchableOpacity key={tabName} onPress={() => setTab(tabName)} style={styles.tab}>
          <Text
            style={[
              styles.tabText,
              {
                color: tab === tabName ? theme.colors.white : theme.colors.standardGray,
              },
            ]}>
            {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
          </Text>
          <Animated.View
            style={[
              styles.tabIndicator,
              {
                backgroundColor: tab === tabName ? theme.colors.white : theme.colors.standardGray,
                transform: [
                  {
                    translateX: tabIndicatorPosition.interpolate({
                      inputRange: [0, 50],
                      outputRange: [0, 100],
                    }),
                  },
                ],
              },
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabNavigator;
