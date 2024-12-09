import {Image, ImageStyle, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';
import {PlayIcon, Search_2} from '@assets/images/appIcons';
import {useAppTheme} from '@hooks/useAppTheme';
import {createStyle} from './styles';
import {useNavigation} from '@react-navigation/native';

interface PrimaryButtonProps {
  onPressHandler?: () => void;
  buttonStyle?: ViewStyle;
  icon: any;
  textStyle?: TextStyle;
  text: string;
}

const ICON_SIZE = 20;

export default function PrimaryButton({onPressHandler, icon, buttonStyle, text, textStyle}: PrimaryButtonProps) {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  const renderIcon = () => {
    if (typeof icon === 'function') {
      const IconComponent = icon;
      return <IconComponent width={ICON_SIZE} heigh={ICON_SIZE} />;
    }
    if (typeof icon === 'number') {
      return (
        <Image
          source={icon}
          style={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        />
      );
    }
    return null;
  };

  return (
    <TouchableOpacity style={[styles.watchNowBtn, buttonStyle]} onPress={onPressHandler}>
      {renderIcon()}
      <Text style={[styles.watchNowBtnText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
