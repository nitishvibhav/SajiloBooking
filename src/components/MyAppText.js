import React from 'react';
import { Text } from 'react-native';

const MyAppText = ({ children, ...props }) => (
  <Text style={{ fontFamily: 'Quicksand-Bold' , color:'#000'}} {...props}>
    {children}
  </Text>
);

export default MyAppText;
