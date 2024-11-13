import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from '@screens/DetailScreen';
import MoviesScreen from '@screens/MoviesScreen';

const Stack = createStackNavigator();

export const MoviesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Movies" component={MoviesScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
