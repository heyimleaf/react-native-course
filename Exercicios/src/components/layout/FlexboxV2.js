import React from 'react';
import {View, StyleSheet} from 'react-native';
import Square from './Square';

export default (props) => {
  return (
    <View style={style.FlexV2}>
      <Square color="#455" />
      <Square color="#900" />
      <Square color="#090" />
      <Square color="#009" />
      <Square color="#990" />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV2: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    backgroundColor: '#000',
  },
});
