import ArrowRight from '@assets/images/appIcons/ArrowRight.svg';
import HorizontalRule from '@components/AppComponents/HorizontalRule';
import React, {useMemo} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';
import {AccountInfoSectionProps, SubscriptionSectionProps} from './types';

const AccountScreen: React.FC = () => {
  const {theme} = useAppTheme();
  const hasActivePlan = false;

  const containerStyle = useMemo(
    () => ({
      backgroundColor: theme.colors.background,
      flex: 1,
      padding: 14,
    }),
    [theme.colors.background],
  );

  const onChangePlaneHandler = () => {
    console.log(
      '🚀 ~ file: AccountScreen.tsx:35 ~ onChangePlaneHandler:',
      onChangePlaneHandler,
    );
    // ...Write your code here
  };

  const onEditMailHandler = () => {
    console.log(
      '🚀 ~ file: AccountScreen.tsx:43 ~ onEditMailHandler:',
      onEditMailHandler,
    );
    // ...Write your code here
  };

  const onSubscribeHandler = () => {
    console.log(
      '🚀 ~ file: AccountScreen.tsx:52 ~ onSubscribeHandler:',
      onSubscribeHandler,
    );
    // ...Write your code here
  };

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

const AccountInfoSection: React.FC<AccountInfoSectionProps> = React.memo(
  ({onEditMailHandler}) => {
    const {theme} = useAppTheme();
    const styles = createStyle(theme);

    return (
      <View style={styles.accountSection}>
        <View style={styles.infoRow}>
          <View>
            <Text style={styles.infoText}>SMITH</Text>
            <Text style={styles.infoText}>Johndoe@email.com</Text>
          </View>
          <TouchableOpacity onPress={onEditMailHandler}>
            <Text style={styles.editButton}>EDIT</Text>
          </TouchableOpacity>
        </View>
        <HorizontalRule style={styles.horizontalRule} />
        <TouchableOpacity>
          <Text style={styles.changePasswordText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    );
  },
);

const SubscriptionSection: React.FC<SubscriptionSectionProps> = React.memo(
  ({hasActivePlan, onChangePlaneHandler, onSubscribeHandler}) => {
    const {theme} = useAppTheme();
    const styles = createStyle(theme);

    return (
      <View style={styles.accountSection}>
        {hasActivePlan ? (
          <>
            <Text style={[styles.planText, styles.activePlan]}>
              CURRENT PLAN
            </Text>
            <Text
              style={[
                styles.planText,
                {color: theme.colors.mediumGray, marginTop: 4},
              ]}>
              Billing on 4th of every month
            </Text>
            <TouchableOpacity
              style={[styles.buttonContainer]}
              onPress={onChangePlaneHandler}>
              <Text style={styles.buttonText}>CHANGE PLAN</Text>
              <ArrowRight />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.noActivePlan}>NO ACTIVE PLAN</Text>
            <TouchableOpacity
              style={[styles.buttonContainer]}
              onPress={onSubscribeHandler}>
              <Text style={styles.buttonText}>SUBSCRIBE</Text>
              <ArrowRight
                height={12}
                style={styles.arrowRightIcon}
                width={12}
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  },
);

export default AccountScreen;
