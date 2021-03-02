import React, {useState} from 'react';
import {Text} from 'react-native';
import style from '../style';
import ContDisplay from './ContDisplay';
import ContButtons from './ContButtons';

export default (props) => {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <>
      <Text style={style.txtL}>Counter</Text>
      <ContDisplay num={num} />
      <ContButtons dec={dec} inc={inc} />
    </>
  );
};
