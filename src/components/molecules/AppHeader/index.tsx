import ArrowLeft from '@assets/images/appIcons/ArrowLeft.svg';
import Logo from '@assets/images/appImages/LOGO.svg';
import React, {memo} from 'react';

import {BackButtonProps, AppHeaderProps, ProfileIconProps} from './types';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {createStyles} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

/**
 * @param {appHeaderContainerStyle} // Optional style for the header container
 * @param {onBackButtonHandler} // Handler for back button press, defaults to a no-op function
 * @param {onProfileIconHandler} // Handler for profile icon press, defaults to a no-op function
 * @param {profileImage} // Default profile image URL
 * @param {profileName} // Optional profile name to display
 * @param {showBackButton} // Flag to show/hide back button
 * @param {showLogo} // Flag to show/hide logo
 * @param {showMenuButton} // Flag to show/hide menu/profile button
 * @type {Component} AppHeader component definition
 */
const AppHeader: React.FC<AppHeaderProps> = ({
  appHeaderContainerStyle = {},
  onBackButtonHandler,
  onProfileIconHandler = () => {},
  profileImage = 'https://picsum.photos/200/300',
  profileName,
  showBackButton = false,
  showLogo = false,
  showMenuButton = false,
}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const {theme} = useAppTheme();

  // Creating styles based on the theme and insets
  const styles = createStyles(theme, insets);

  // Handler for back button; uses the provided handler or defaults to going back in navigation
  const handleBackButton = onBackButtonHandler || (() => navigation.goBack());

  return (
    <View style={[styles.appHeaderContainer, appHeaderContainerStyle]}>
      {/* Conditionally rendering the back button */}
      {showBackButton && <BackButton handleBackButton={handleBackButton} styles={styles} theme={theme} />}

      {/* Conditionally rendering the logo */}
      {showLogo && <Logo width={theme.spacing.lg_xxx} height={theme.spacing.lg_xxx} />}

      {/* Conditionally rendering the profile name */}
      {profileName && (
        <Text style={styles.profileName} numberOfLines={1}>
          {profileName}
        </Text>
      )}

      {/* Conditionally rendering the profile icon/menu button */}
      {showMenuButton && (
        <ProfileIcon
          onProfileIconHandler={onProfileIconHandler}
          profileImage={profileImage}
          styles={styles}
          theme={theme}
        />
      )}
    </View>
  );
};

/**
 * @type {Component} BackButton component definition
 */
const BackButton: React.FC<BackButtonProps> = memo(({styles, theme, handleBackButton}) => (
  <TouchableOpacity onPress={handleBackButton} style={styles.backButtonContainer}>
    <ArrowLeft width={theme.spacing.sm_ll} height={theme.spacing.sm_ll} />
  </TouchableOpacity>
));

/**
 * @type {Component} ProfileIcon component definition
 */
const ProfileIcon: React.FC<ProfileIconProps> = memo(({profileImage, styles, theme, onProfileIconHandler}) => (
  <TouchableOpacity onPress={onProfileIconHandler} style={styles.showMenuContainer}>
    <Image
      height={theme.spacing.md_ll}
      source={{uri: profileImage}}
      style={styles.profileIconStyle}
      width={theme.spacing.md_ll}
    />
  </TouchableOpacity>
));

export default AppHeader;
