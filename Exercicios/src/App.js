import React from 'react';
import {View} from 'react-native';
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
  <View>
    <CompDefault />
    <Comp1 />
    <Comp2 />
    <First />
  </View>
);
