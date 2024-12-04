import BottomNavigator from '@navigation/BottomNavigator';
import PlayerScreen from '@screens/PlayerScreen';

import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './types';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();

const stackScreenOptions = () => ({
  headerShown: false,
});

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={stackScreenOptions}>
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
