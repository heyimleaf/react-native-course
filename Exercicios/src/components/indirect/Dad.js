import React, {useState} from 'react';
import {Text} from 'react-native';
import Son from './Son';
import Style from '../style';
export default (props) => {
  const [num, setNum] = useState(0);
  function showValue(number) {
    setNum(number);
  }
  return (
    <>
      <Text style={Style.txtL}>{num}</Text>
      <Son min={1} max={60} func={showValue} />
    </>
  );
};
