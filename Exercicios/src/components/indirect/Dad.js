import React, {useState} from 'react';
import {Text} from 'react-native';
import Son from './Son';
import Style from '../style';
export default (props) => {
  const [num, setNum] = useState(0);
  const [text, setText] = useState('Valor inicial: ');

  function showValue(number, text) {
    setNum(number);
    setText(text);
  }
  return (
    <>
      <Text style={Style.txtL}>
        {text}
        {num}
      </Text>
      <Son min={1} max={60} func={showValue} />
    </>
  );
};
