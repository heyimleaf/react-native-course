import React from 'react';
import {View, StyleSheet} from 'react-native';
import First from './components/First';
import CompDefault, {Comp1, Comp2} from './components/Multi';

// function FirstText(){
//     return <Text>First Component</Text>
// }

// const App = function (){
//     return <Text>First Component</Text>
// }

// export default function(){
//     return <Text>First Component</Text>

// }

export default () => (
  <View style={style.App}>
    <CompDefault />
    <Comp1 />
    <Comp2 />
    <First />
  </View>
);

const style = StyleSheet.create({
  App: {
    backgroundColor: '#ffffff',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
