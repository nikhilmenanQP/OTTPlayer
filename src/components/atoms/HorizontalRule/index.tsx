import React from 'react';
import {Container} from './styles';
import {HorizontalRuleProps} from './types';

const HorizontalRule: React.FC<HorizontalRuleProps> = ({style}) => {
  return <Container style={style} />;
};

export default HorizontalRule;
