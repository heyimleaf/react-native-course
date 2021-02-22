import React from 'react';
import {Button} from 'react-native';

export default (props) => {
  const load = () => {
    console.warn('Executed #01');
  };

  return (
    <>
      <Button onPress={load()} title="Run #01!" />
      <Button
        onPress={function () {
          console.warn('Executed #02');
        }}
        title="Run #02!"
      />
      <Button onPress={() => console.warn('Executed #03')} title="Run #03!" />
    </>
  );
};
