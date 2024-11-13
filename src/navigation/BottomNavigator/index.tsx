import React, {useMemo} from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import {TabParamList} from './types';
import {Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStyles} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

/**
 * @type {Screens}
 * Import screen components for each tab
 */
import HomeScreen from '@screens/HomeScreen';
import MoviesScreen from '@screens/MoviesScreen';
import SearchScreen from '@screens/SearchScreen';
import SeriesScreen from '@screens/SeriesScreen';

/**
 * @type {Icons}
 * Import icons for each tab
 */
import HomeIcon from '@assets/images/appIcons/HomeIcon.png';
import MovieIcon from '@assets/images/appIcons/MovieIcon.png';
import SearchIcon from '@assets/images/appIcons/SearchIcon.png';
import SeriesIcon from '@assets/images/appIcons/SeriesIcon.png';

/**
 * Create a bottom tab navigator with specified screen parameters
 */
const Tab = createBottomTabNavigator<TabParamList>();

/**
 * Define a mapping of route names to their respective icons
 */
const ICONS: Record<string, any> = {
  Home: HomeIcon,
  Movies: MovieIcon,
  Search: SearchIcon,
  Series: SeriesIcon,
};

/**
 * @type {Component} Define the BottomNavigator component
 */
const BottomNavigator: React.FC = React.memo(() => {
  const {theme} = useAppTheme();
  const styles = createStyles(theme);

  // Use useMemo to memoize the tab bar background for performance optimization
  const tabBarBackground = useMemo(
    () => (
      <LinearGradient
        colors={['#2d2d2d', '#171c24']}
        style={{height: 80, borderRadius: 100}}
      />
    ),
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        // Set the tab bar background
        tabBarBackground: () => tabBarBackground,
        // Render the icon for the tab based on the focused state
        tabBarIcon: ({focused}) => renderTabBarIcon(focused, route?.name),
        // Style for the tab bar item
        tabBarItemStyle: styles.tabBarItemStyle,
        // Render the label for the tab based on the focused state
        tabBarLabel: ({focused}) => renderTabBarLabel(focused, route?.name),
        // Style for the tab bar
        tabBarStyle: styles.tabBarStyle,
      })}>
      {/* Define the screens for each tab in the navigator */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Series" component={SeriesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
});

/**
 * @type {Function} Function to render the tab bar icon based on the focused state
 * @param focused
 * @param routeName
 * @returns JSX
 */
const renderTabBarIcon = (focused: boolean, routeName: keyof TabParamList) => {
  const {theme} = useAppTheme();
  const styles = createStyles(theme);

  const iconColor = focused ? '#ffffff' : '#808080';
  const IconSource = ICONS[routeName];

  return (
    <Image
      source={IconSource}
      style={
        focused
          ? styles.tabBarIconFocusedStyle // Style for focused icon
          : styles.tabBarIconNotFocusedStyle // Style for not focused icon
      }
      tintColor={iconColor}
    />
  );
};

/**
 * @type {Function} Function to render the tab bar label based on the focused state
 * @param focused
 * @param routeName
 * @returns JSX
 */
const renderTabBarLabel = (focused: boolean, routeName: keyof TabParamList) => {
  const {theme} = useAppTheme();
  const styles = createStyles(theme);

  return (
    <Text
      style={{
        ...styles?.tabBarLabelStyle, // Base style for the label
        color: focused ? '#ffffff' : '#808080', // Determine label color based on focus state
      }}>
      {routeName?.toUpperCase()}
    </Text>
  );
};

export default BottomNavigator;
