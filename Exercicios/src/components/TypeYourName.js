import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';

export default (props) => {
  const [name, setName] = useState('Test');

  return (
    <View>
      <Text>Name value: {name}</Text>
      <TextInput
        placeholder="Type your name"
        value={name}
        onChangeText={(name) => setName(name)}
      />
    </View>
  );
};
