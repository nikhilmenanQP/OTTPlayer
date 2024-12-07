import React from 'react';
import {HorizontalRuleProps} from './types';
import {Container} from './styles';

const HorizontalRule: React.FC<HorizontalRuleProps> = ({style}) => {
  return <Container style={style} />;
};

export default HorizontalRule;
