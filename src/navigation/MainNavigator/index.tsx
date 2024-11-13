import BottomNavigator from '@navigation/BottomNavigator';
import DummyScreen from '@screens/DummyScreen';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from '@screens/DetailScreen';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // Hide the header for the tabs
          headerShown: false,
        }}>
        <Stack.Screen name="HomeTabs" component={BottomNavigator} />
        <Stack.Screen name="DummyScreen" component={DummyScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
