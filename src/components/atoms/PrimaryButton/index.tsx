import React from 'react';
import {Container, Text} from './styles';
import {Image, ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface PrimaryButtonProps {
  buttonStyle?: ViewStyle;
  icon?: any;
  iconHeight?: number;
  iconStyle?: ImageStyle;
  iconWidth?: number;
  onPressHandler?: () => void;
  text?: string;
  textStyle?: TextStyle;
}

const ICON_DEFAULT_SIZE = 20;

export default function PrimaryButton({
  buttonStyle,
  icon,
  iconHeight,
  iconStyle,
  iconWidth,
  onPressHandler,
  text,
  textStyle,
}: PrimaryButtonProps) {
  const ICON_HEIGHT = iconHeight || ICON_DEFAULT_SIZE;
  const ICON_WIDTH = iconWidth || ICON_DEFAULT_SIZE;

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
            height: ICON_HEIGHT,
            width: ICON_WIDTH,
            ...iconStyle,
          }}
        />
      );
    }
    return null;
  };

  return (
    <Container style={buttonStyle} onPress={onPressHandler}>
      {renderIcon()}
      {text && <Text style={textStyle}>{text}</Text>}
    </Container>
  );
}

const styles = StyleSheet.create({});
