import React from 'react';
import {View, StyleSheet} from 'react-native';
import ContV2 from './components/cont/ContV2';
// import Dad from './components/indirect/Dad';
// import Dad from './components/direct/Dad';

// import Cont from './components/Cont';

// import First from './components/First';
// import CompDefault, {Comp1, Comp2} from './components/Multi';
// import MinMax from './components/MinMax';
// import Random from './components/Random';
// import Title from './components/Title';
// import Button from './components/Button';
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
    <ContV2></ContV2>
    {/* <Button /> 
    <Dad />
    <Dad />
    <Cont initial={100} pass={10} />
    <Cont />
    {/* //   <CompDefault />
  //   <Comp1 />
  //   <Comp2 />
  //   <First />
  //   <Random min={10} max={20}></Random>
  //   <MinMax min="3" max="20" />
  //   <MinMax min="1" max="10" /> 
  // <Title main="Sign up" second="Sign screen" /> */}
  </View>
);

const style = StyleSheet.create({
  App: {
    backgroundColor: '#ffffff',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
