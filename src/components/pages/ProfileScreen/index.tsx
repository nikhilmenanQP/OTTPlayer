import ProfileScreenTemplate from '@components/templates/ProfileScreenTemplate';
import React, {useState} from 'react';
import {Tab} from './types';

const ProfileScreen: React.FC = () => {
  const [tab, setTab] = useState<Tab>('account');

  return <ProfileScreenTemplate tab={tab} setTab={setTab} />;
};

export default ProfileScreen;
