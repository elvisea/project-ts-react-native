import React from 'react';
import {TextInputProps} from 'react-native';

import {Container} from './styles';

const Input: React.FC<TextInputProps> = ({...rest}) => {
  return <Container placeholderTextColor="#787878" {...rest} />;
};

export default Input;
