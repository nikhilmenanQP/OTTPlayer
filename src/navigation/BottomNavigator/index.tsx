import React, {useMemo} from 'react';

import {LinearGradient} from 'react-native-linear-gradient';
import {StackNavigator} from '@navigation/StackNavigator';
import {TabParamList} from './types';
import {Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStyles} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

/**
 * @type {Screens}
 * Import screen components for each tab
 */
import SearchScreen from '@components/pages/SearchScreen';
import SeriesScreen from '@components/pages/SeriesScreen';

/**
 * @type {Icons}
 * Import icons for each tab
 */
import {Home, Movie, Search_2, Series} from '@assets/images/appIcons';

/**
 * Create a bottom tab navigator with specified screen parameters
 */
const Tab = createBottomTabNavigator<TabParamList>();

/**
 * Define a mapping of route names to their respective icons
 */
const ICONS: Record<string, any> = {
  Home: Home,
  Movies: Movie,
  Search: Search_2,
  Series: Series,
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
        colors={[theme.colors.darkCharcoal, theme.colors.blackPear]}
        style={{height: 80, borderRadius: 100}}
      />
    ),
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarBackground: () => tabBarBackground,
        tabBarIcon: ({focused}) => renderTabBarIcon(focused, route?.name),
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarLabel: ({focused}) => renderTabBarLabel(focused, route?.name),
        tabBarStyle: styles.tabBarStyle,
      })}>
      <Tab.Screen name="Home" options={{headerShown: false}}>
        {() => <StackNavigator initialRouteName="HomeScreen" />}
      </Tab.Screen>
      <Tab.Screen name="Movies" options={{headerShown: false}}>
        {() => <StackNavigator initialRouteName="MoviesScreen" />}
      </Tab.Screen>
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

  const iconColor = focused ? theme.colors.white : theme.colors.standardGray;
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
        color: focused ? theme.colors.white : theme.colors.standardGray, // Determine label color based on focus state
      }}>
      {routeName?.toUpperCase()}
    </Text>
  );
};

export default BottomNavigator;
