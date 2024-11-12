import MainNavigator from '@navigation/MainNavigator';
import React from 'react';

import {StyleSheet} from 'react-native';
import {ThemeProviderContext} from '@context/ThemeProviderContext';

export default function App() {
  return (
    <ThemeProviderContext>
      <MainNavigator />
    </ThemeProviderContext>
  );
}

const styles = StyleSheet.create({});
