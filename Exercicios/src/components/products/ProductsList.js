import React from 'react';
import {View, Text} from 'react-native';
import products from './products';
export default (props) => {
  function list() {
    return products.map((p) => {
      return (
        <Text key={p.id}>
          {p.id} - {p.name} - $ {p.price}
        </Text>
      );
    });
  }
  return (
    <>
      <Text>Products List</Text>
      {list()}
    </>
  );
};
