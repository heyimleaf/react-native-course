import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import LoggedUser from './components/LoggedUser';
import User from './components/LoggedUser';
import ProductsList from './components/products/ProductsList';
// import Family from './components/relation/Family';
// import Member from './components/relation/Member';
// import OddEven from './components/OddEven';
// import Differentiate from './components/Differentiate';
// import ContV2 from './components/cont/ContV2';
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
  <SafeAreaView style={style.App}>
    <ProductsList />
    {/* <Button /> 
    <LoggedUser user={{name: 'Luiz', email: 'jobs.lugui@gmail.com'}} />
    <Family>
      <Member name="Luiz" lastname="Carlos" />
      <Member name="Lucas" lastname="Silva" />
    </Family>

    <Family>
      <Member name="João" lastname="Carlos" />
      <Member name="Felipe" lastname="Silva" />
    </Family>
    <OddEven num={3} />
    <Differentiate />
    <ContV2></ContV2>
    <Dad />
    <Dad />
    <Cont initial={100} pass={10} />
    <Cont />
     <CompDefault />
     <Comp1 />
      <Comp2 />
      <First />
      <Random min={10} max={20}></Random>
      <MinMax min="3" max="20" />
      <MinMax min="1" max="10" /> 
    <Title main="Sign up" second="Sign screen" /> */}
  </SafeAreaView>
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
