import React from 'react';
import {View, Text} from 'react-native';
import First from './components/First';
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
    <Text> {1 + 1} </Text>
    <First />
  </View>
);
