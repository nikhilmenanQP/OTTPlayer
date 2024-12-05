import {useEffect} from 'react';

import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {configureReanimatedLogger, ReanimatedLogLevel} from 'react-native-reanimated';
import Orientation from 'react-native-orientation-locker';
import BottomNavigator from '@navigation/BottomNavigator';
import {ThemeProviderContext} from '@context/ThemeProviderContext';
import {MainNavigator} from '@navigation/MainNavigator';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

export default function App() {
  useEffect(() => {
    // Lock orientation to portrait on app startup
    Orientation.lockToPortrait();

    return () => {
      // Optional: Unlock all orientations when app is closed
      Orientation.unlockAllOrientations();
    };
  });
  return (
    <SafeAreaProvider>
      <ThemeProviderContext>
        <MainNavigator />
      </ThemeProviderContext>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
