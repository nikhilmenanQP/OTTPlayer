import React, {useCallback} from 'react';
import {HomeScreenContainer} from './styles';
import {HomeScreenProps} from './types';
import {HomeScreenTemplate} from '@components/templates';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const onProfileClickHandler = useCallback(() => {
    navigation.navigate('ProfileScreen');
  }, [navigation]);

  return (
    <HomeScreenContainer>
      <HomeScreenTemplate onProfileClickHandler={onProfileClickHandler} />
    </HomeScreenContainer>
  );
};

export default HomeScreen;
