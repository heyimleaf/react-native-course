import React, {Fragment} from 'react';
import {Text} from 'react-native';
import Style from './style';

export default (props) => {
  return (
    <Fragment>
      <Text style={Style.txtL}>{props.main}</Text>
      <Text>{props.second}</Text>
    </Fragment>
  );
};
