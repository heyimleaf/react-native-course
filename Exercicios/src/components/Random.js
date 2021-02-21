import React from 'react';
import {Text} from 'react-native';
import Style from './style';

export default ({min, max}) => {
  const delta = max - min + 1;
  const random = parseInt(Math.random() * delta) + min;
  return <Text style={Style.txtL}>O valor aleatório é {random} </Text>;
};
