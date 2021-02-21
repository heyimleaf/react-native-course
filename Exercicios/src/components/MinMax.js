import React from 'react';
import {Text} from 'react-native';
import Style from './style';

export default (props) => (
  <Text style={Style.txtL}>
    O valor {props.max} é maior que o valor de {props.min}.
  </Text>
);
