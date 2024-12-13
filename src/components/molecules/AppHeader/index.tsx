import BackButton from '@components/atoms/BackButton';
import Logo from '@assets/images/appImages/LOGO.svg';
import React from 'react';

import {AppHeaderProps} from './types';

import {Container, profileNameStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryText, ProfileIcon} from '@components/atoms';

/**
 * @type {Component} AppHeader component definition
 * @param {appHeaderContainerStyle} // Optional style for the header container
 * @param {onBackButtonHandler} // Handler for back button press, defaults to a no-op function
 * @param {onProfileIconHandler} // Handler for profile icon press, defaults to a no-op function
 * @param {profileImage} // Default profile image URL
 * @param {profileName} // Optional profile name to display
 * @param {showBackButton} // Flag to show/hide back button
 * @param {showLogo} // Flag to show/hide logo
 * @param {showMenuButton} // Flag to show/hide menu/profile button
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

  return (
    <Container style={appHeaderContainerStyle} insets={insets}>
      {/* Back Button */}
      {showBackButton && <BackButton onPressHandler={onBackButtonHandler} />}
      {/* Show Logo */}
      {showLogo && <Logo width={theme.spacing.lg_xxx} height={theme.spacing.lg_xxx} />}
      {/* Profile Name */}
      {profileName && (
        <PrimaryText style={profileNameStyle(theme)} numberOfLines={1}>
          {profileName}
        </PrimaryText>
      )}
      {/* Menu Button */}
      {showMenuButton && <ProfileIcon profileImage={profileImage} onPressHandler={onProfileIconHandler} />}
    </Container>
  );
};

export default AppHeader;
