import React from 'react';
import { Text } from 'react-native';

const MyAppText = ({ children, ...props }) => (
  <Text style={{ fontFamily: 'Quicksand-Bold' }} {...props}>
    {children}
  </Text>
);

export default MyAppText;
