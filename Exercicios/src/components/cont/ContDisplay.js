import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import style from '../style';

export default (props) => {
  return (
    <View style={estilo.Display}>
      <Text style={([style.txtL], [estilo.DisplayText])}>{props.num}</Text>
    </View>
  );
};

const estilo = StyleSheet.create({
  Display: {
    backgroundColor: '#000',
    padding: 20,
    width: 300,
    marginTop: 20,
  },

  DisplayText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  },
});
