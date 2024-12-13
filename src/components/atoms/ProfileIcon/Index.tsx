import React, {memo, useCallback} from 'react';
import {Container, ProfileImage} from './styles';
import {ProfileIconProps, ProfileScreenNavigationProp} from './types';
import {useAppTheme} from '@hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';

const ProfileIcon: React.FC<ProfileIconProps> = memo(({profileImage, onPressHandler}) => {
  const {theme} = useAppTheme();
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const onPress =
    onPressHandler ||
    useCallback(() => {
      navigation.navigate('ProfileScreen');
    }, [navigation]);

  return (
    <Container onPress={onPress}>
      <ProfileImage height={theme.spacing.md_ll} source={{uri: profileImage}} width={theme.spacing.md_ll} />
    </Container>
  );
});

export default ProfileIcon;
