import React, {useMemo} from 'react';

import {AccountScreenProps} from './types';
import {View} from 'react-native';
import {useAppTheme} from '@hooks/useAppTheme';
import {AccountInfoSection, SubscriptionSection} from '@components/organisms';

const AccountScreenTemplate: React.FC<AccountScreenProps> = ({
  hasActivePlan,
  onChangePlaneHandler,
  onEditMailHandler,
  onSubscribeHandler,
}) => {
  const {theme} = useAppTheme();

  const containerStyle = useMemo(
    () => ({
      backgroundColor: theme.colors.background,
      flex: 1,
      padding: 14,
    }),
    [theme.colors.background],
  );

  return (
    <View style={containerStyle}>
      <AccountInfoSection onEditMailHandler={onEditMailHandler} />
      <SubscriptionSection
        hasActivePlan={hasActivePlan}
        onChangePlaneHandler={onChangePlaneHandler}
        onSubscribeHandler={onSubscribeHandler}
      />
    </View>
  );
};

export default AccountScreenTemplate;
