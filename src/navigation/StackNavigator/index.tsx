import DetailScreen from '@screens/DetailScreen';
import HomeScreen from '@screens/HomeScreen';
import MoviesScreen from '@screens/MoviesScreen';
import ProfileScreen from '@screens/ProfileScreen';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

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
