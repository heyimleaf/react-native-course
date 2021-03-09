import React from 'react';
import {View, StyleSheet} from 'react-native';
import Square from './Square';

export default (props) => {
  return (
    <View style={style.FlexV3}>
      <Square color="#455" side={20} />
      <Square color="#900" side={30} />
      <Square color="#090" side={40} />
      <Square color="#009" side={50} />
      <Square color="#990" side={60} />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: 350,
    width: '100%',
    backgroundColor: '#000',
  },
});
