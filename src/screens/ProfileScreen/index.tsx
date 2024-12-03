import AccountScreen from '@screens/AccountScreen';
import AppHeader from '@components/AppComponents/AppHeader';
import MyListScreen from '@screens/MyListScreen';
import React, {useState} from 'react';
import TabNavigator from '@components/ProfileScreenComp/TabNavigator';

import {View} from 'react-native';
import {createStyle} from './styles';
import {data} from '@dummyDataPreProd/ProfileScreen';
import {useAppTheme} from '@hooks/useAppTheme';
import {Tab} from './types';

export default function ProfileScreen(): JSX.Element {
  const [tab, setTab] = useState<Tab>('account');
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  // Tab content mapping with type inference
  const tabContent: Record<Tab, JSX.Element | null> = {
    account: <AccountScreen />,
    myList: <MyListScreen data={data} />,
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
      {/* App Header Component */}
      <AppHeader showBackButton={true} profileName="John Doe" />
      {/* Tab Navigation Component */}
      <TabNavigator tab={tab} setTab={setTab} />
      {/* Render active screen based on selected tab */}
      {tabContent[tab] || null}
    </View>
  );
}
