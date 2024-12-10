import React from 'react';
import {PrimaryTextProps} from './types';
import {Text} from 'react-native';
import {useAppTheme} from '@hooks/useAppTheme';

const PrimaryText: React.FC<PrimaryTextProps> = ({
  align = 'left',
  children,
  color,
  fontFamily = 'normal',
  lineHeight,
  size,
  style,
  ...restProps
}) => {
  const {theme} = useAppTheme();

  return (
    <Text
      style={[
        {
          color: color || theme.colors.white,
          fontFamily: fontFamily || theme.fontFamily.inter_regular,
          fontSize: size || theme.fontSize.medium,
          lineHeight: lineHeight,
          textAlign: align,
        },
        style,
      ]}
      {...restProps}>
      {children}
    </Text>
  );
};

export default PrimaryText;
