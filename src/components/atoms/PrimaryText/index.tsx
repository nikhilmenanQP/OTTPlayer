import React, {forwardRef} from 'react';
import {PrimaryTextProps} from './types';
import {Text} from 'react-native';
import {useAppTheme} from '@hooks/useAppTheme';

const PrimaryText = forwardRef<Text, PrimaryTextProps>(
  ({align, children, color, fontFamily, lineHeight, size, style, ...restProps}, ref) => {
    const {theme} = useAppTheme();

    return (
      <Text
        ref={ref}
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
  },
);

export default PrimaryText;
