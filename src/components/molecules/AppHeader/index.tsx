import BackButton from '@components/atoms/BackButton';
import Logo from '@assets/images/appImages/LOGO.svg';
import React from 'react';

import {AppHeaderProps} from './types';
import {Text, View} from 'react-native';

import {createStyles} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ProfileIcon} from '@components/atoms';

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
  onProfileIconHandler,
  profileImage = 'https://picsum.photos/200/300',
  profileName,
  showBackButton = false,
  showLogo = false,
  showMenuButton = false,
}) => {
  const insets = useSafeAreaInsets();
  const {theme} = useAppTheme();
  const styles = createStyles(theme, insets);

  return (
    <View style={[styles.appHeaderContainer, appHeaderContainerStyle]}>
      {/* Back Button */}
      {showBackButton && <BackButton onPressHandler={onBackButtonHandler} />}
      {/* Show Logo */}
      {showLogo && <Logo width={theme.spacing.lg_xxx} height={theme.spacing.lg_xxx} />}
      {/* Profile Name */}
      {profileName && (
        <Text style={styles.profileName} numberOfLines={1}>
          {profileName}
        </Text>
      )}
      {/* Menu Button */}
      {showMenuButton && <ProfileIcon profileImage={profileImage} onPressHandler={onProfileIconHandler} />}
    </View>
  );
};

export default AppHeader;
