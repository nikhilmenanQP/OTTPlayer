import React from 'react';

import {createStyle} from './styles';
import {HorizontalRuleProps} from './types';
import {useAppTheme} from '@hooks/useAppTheme';
import {View} from 'react-native';

const HorizontalRule: React.FC<HorizontalRuleProps> = ({style}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  return <View style={[styles.horiZontalRule, style]} />;
};

export default HorizontalRule;
