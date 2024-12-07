import React from 'react';
import {AccountScreenTemplate} from '@components/templates';

const AccountScreen: React.FC = () => {
  const hasActivePlan = false;

  const onChangePlaneHandler = () => {
    console.log('🚀 ~ file: AccountScreen.tsx:35 ~ onChangePlaneHandler:', onChangePlaneHandler);
    // ...Write your code here
  };

  const onEditMailHandler = () => {
    console.log('🚀 ~ file: AccountScreen.tsx:43 ~ onEditMailHandler:', onEditMailHandler);
    // ...Write your code here
  };

  const onSubscribeHandler = () => {
    console.log('🚀 ~ file: AccountScreen.tsx:52 ~ onSubscribeHandler:', onSubscribeHandler);
    // ...Write your code here
  };

  return (
    <AccountScreenTemplate
      hasActivePlan={hasActivePlan}
      onChangePlaneHandler={onChangePlaneHandler}
      onEditMailHandler={onEditMailHandler}
      onSubscribeHandler={onSubscribeHandler}
    />
  );
};

export default AccountScreen;
