import ArrowRight from '@assets/images/appIcons/ArrowRight.svg';
import Logo from '@assets/images/appImages/LOGO.svg';
import React, {memo} from 'react';

import {BackButtonProps, AppHeaderProps, ProfileIconProps} from './types';
import {Image, TouchableOpacity, View} from 'react-native';
import {createStyles} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const AppHeader: React.FC<AppHeaderProps> = ({
  appHeaderContainerStyle = {},
  profileImage = 'https://picsum.photos/200/300',
  showBackButton = true,
  showLogo = true,
  showMenuButton = true,
  onBackButtonHandler,
}) => {
  const {theme} = useAppTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme, insets);
  const navigation = useNavigation();

  const handleBackButton = onBackButtonHandler || (() => navigation.goBack());

  return (
    <View style={[styles.appHeaderContainer, appHeaderContainerStyle]}>
      {showBackButton && (
        <BackButton
          styles={styles}
          theme={theme}
          handleBackButton={handleBackButton}
        />
      )}
      {showLogo && (
        <Logo width={theme.spacing.lg_xxx} height={theme.spacing.lg_xxx} />
      )}
      {showMenuButton && (
        <ProfileIcon
          profileImage={profileImage}
          styles={styles}
          theme={theme}
        />
      )}
    </View>
  );
};

const BackButton: React.FC<BackButtonProps> = memo(
  ({styles, theme, handleBackButton}) => (
    <TouchableOpacity
      style={styles.backButtonContainer}
      onPress={handleBackButton}>
      <ArrowRight width={theme.spacing.sm_lll} height={theme.spacing.sm_lll} />
    </TouchableOpacity>
  ),
);

const ProfileIcon: React.FC<ProfileIconProps> = memo(
  ({profileImage, styles, theme}) => (
    <View style={styles.showMenuContainer}>
      <Image
        height={theme.spacing.md_ll}
        source={{uri: profileImage}}
        style={styles.profileIconStyle}
        width={theme.spacing.md_ll}
      />
    </View>
  ),
);

export default AppHeader;
