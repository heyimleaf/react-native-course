import React from 'react';
import {View, StyleSheet} from 'react-native';
import Square from './Square';

export default (props) => {
  return (
    <View style={style.FlexV4}>
      <View style={style.V0} />
      <View style={style.V1} />
      <View style={style.V2} />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV4: {
    backgroundColor: '#000',
    width: 100,
    flex: 1,
  },
  V0: {
    height: 300,
    backgroundColor: '#faf',
  },
  V1: {
    backgroundColor: '#0f0',
    flex: 3,
  },
  V2: {
    backgroundColor: '#00a',
    flex: 1,
  },
});
