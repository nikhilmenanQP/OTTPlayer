import React from 'react';

import {AccountScreen, MyListScreen} from '@components/pages';
import {AppHeader} from '@components/molecules';
import {TabNavigator} from '@components/organisms';
import {ProfileScreenContentProps, Tab} from './type';
import {View} from 'react-native';

import {createStyle} from './styles';
import {data} from '../../../dummyDataPreProd/ProfileScreen';
import {useAppTheme} from '@hooks/useAppTheme';

const ProfileScreenTemplate: React.FC<ProfileScreenContentProps> = ({tab, setTab}) => {
  const {theme} = useAppTheme();
  const styles = createStyle();

  const tabContent: Record<Tab, JSX.Element | null> = {
    account: <AccountScreen />,
    myList: <MyListScreen data={data} />,
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <AppHeader showBackButton={true} profileName="John Doe" />
      <TabNavigator tab={tab} setTab={setTab} />
      {tabContent[tab] || null}
    </View>
  );
};

export default ProfileScreenTemplate;
