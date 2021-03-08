import React from 'react';
import {View, Text, FlatList} from 'react-native';
import products from './products';
export default (props) => {
  const productRender = ({item: p}) => {
    return (
      <Text>
        {p.id} - {p.name}: $ {p.price}
      </Text>
    );
  };

  return (
    <>
      <Text>Products List V2 (FlatList)</Text>

      <FlatList
        data={products}
        keyExtractor={(i) => `${i.id}`}
        renderItem={productRender}
      />
    </>
  );
};
