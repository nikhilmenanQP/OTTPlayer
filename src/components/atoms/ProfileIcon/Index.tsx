import React, {memo, useCallback} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {ProfileIconProps} from './types';
import {createStyles} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';

const ProfileIcon: React.FC<ProfileIconProps> = memo(({profileImage, onPressHandler}) => {
  const {theme} = useAppTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  const onPress =
    onPressHandler ||
    useCallback(() => {
      navigation.navigate('ProfileScreen');
    }, [navigation]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.showMenuContainer}>
      <Image
        height={theme.spacing.md_ll}
        source={{uri: profileImage}}
        style={styles.profileIconStyle}
        width={theme.spacing.md_ll}
      />
    </TouchableOpacity>
  );
});

export default ProfileIcon;
