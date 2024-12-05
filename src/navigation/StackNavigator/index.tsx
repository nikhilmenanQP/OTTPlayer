import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@components/pages/HomeScreen';
import MoviesScreen from '@components/pages/MoviesScreen';
import DetailScreen from '@components/pages/DetailScreen';
import ProfileScreen from '@components/pages/ProfileScreen';

const Stack = createStackNavigator<RootStackParamList>();

const stackScreenOptions = () => ({
  headerShown: false,
});

export const StackNavigator: React.FC<SharedStackProps> = ({initialRouteName}) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName} screenOptions={stackScreenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
