import {Image, ImageStyle, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';
import {PlayIcon, Search_2} from '@assets/images/appIcons';
import {useAppTheme} from '@hooks/useAppTheme';
import {createStyle} from './styles';
import {useNavigation} from '@react-navigation/native';

interface PrimaryButtonProps {
  onPressHandler?: () => void;
  buttonStyle?: ViewStyle;
  icon?: any;
  textStyle?: TextStyle;
  text?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconStyle?: ImageStyle;
}

const ICON_DEFAULT_SIZE = 20;

export default function PrimaryButton({
  onPressHandler,
  icon,
  buttonStyle,
  text,
  textStyle,
  iconWidth,
  iconHeight,
  iconStyle,
}: PrimaryButtonProps) {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  const ICON_WIDTH = iconWidth || ICON_DEFAULT_SIZE;
  const ICON_HEIGHT = iconHeight || ICON_DEFAULT_SIZE;

  const renderIcon = () => {
    if (typeof icon === 'function') {
      const IconComponent = icon;
      return <IconComponent width={ICON_WIDTH} heigh={ICON_HEIGHT} style={iconStyle} />;
    }
    if (typeof icon === 'number') {
      return (
        <Image
          source={icon}
          style={{
            width: ICON_WIDTH,
            height: ICON_HEIGHT,
            ...iconStyle,
          }}
        />
      );
    }
    return null;
  };

  return (
    <TouchableOpacity style={[styles.watchNowBtn, buttonStyle]} onPress={onPressHandler}>
      {renderIcon()}
      {text && <Text style={[styles.watchNowBtnText, textStyle]}>{text}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
