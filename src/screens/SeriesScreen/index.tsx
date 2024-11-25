import React from 'react';
import {AppHeader} from '@components/AppComponents';
import {Danger} from '@assets/images/appIcons';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

export default function SeriesScreen() {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollView} stickyHeaderIndices={[0]}>
        <AppHeader showLogo={true} showMenuButton={true} />
        <View style={styles.container}>
          <View style={styles.notification}>
            <Danger style={{marginBottom: theme.spacing.sm}} />
            <Text style={styles.notificationText}>Series UI and Data is not available for now</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
