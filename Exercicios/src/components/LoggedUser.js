import React from 'react';
import {View, Text} from 'react-native';
import If from './If';
export default (props) => {
  const user = props.user || {};
  return (
    <>
      <If test={user && user.name && user.email}>
        <Text>Logged user: {user.name}</Text>
        <Text>E-mail address: {user.email}</Text>
      </If>
    </>
  );
};
