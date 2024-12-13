import React from 'react';
import {PrimaryTextProps} from './types';
import {Text} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const PrimaryText: React.FC<PrimaryTextProps> = ({
  align,
  children,
  color,
  fontFamily,
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
          lineHeight: lineHeight || theme.spacing.sm_llll,
          textAlign: align || 'left',
        },
        style,
      ]}
      {...restProps}>
      {children}
    </Text>
  );
};

export default PrimaryText;
