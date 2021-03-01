import React, {useState} from 'react';
import {Text, Button, View} from 'react-native';
import Style from './style';

export default ({initial = 0, pass = 1}) => {
  // let num = pro/ps.initial;
  const [num, setNumber] = useState(initial);

  const inc = () => setNumber(num + pass);
  const dec = () => setNumber(num - pass);

  return (
    <>
      <Text style={Style.txtL}>{num}</Text>
      <View>
        <Button title="+" onPress={inc} />
        <Button title="-" onPress={dec} />
      </View>
    </>
  );
};
