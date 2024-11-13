import MainNavigator from '@navigation/MainNavigator';
import React from 'react';

import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProviderContext} from '@context/ThemeProviderContext';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProviderContext>
        <MainNavigator />
      </ThemeProviderContext>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
