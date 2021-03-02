import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

export default (props) => {
  return (
    <>
      <View style={estilo.Buttons}>
        <Button title="+" onPress={props.inc} />
        <Button title="-" onPress={props.dec} />
      </View>
    </>
  );
};

const estilo = StyleSheet.create({
  Buttons: {
    flexDirection: 'row',
  },
});
