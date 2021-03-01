import React from 'react';
import {View, Text} from 'react-native';
import style from '../style';

export default (props) => {
  return (
    <>
      <Text style={style.txtL}>{props.a}</Text>
      <Text style={style.txtL}>{props.b}</Text>
    </>
  );
};
