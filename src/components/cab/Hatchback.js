import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import CabCard from './CabCard';

const Hatchback = () => {
  return (
    <CabCard
      carname="Toyota Etios or Equivalent"
      price=" ₹ 675"
      distance="23.0 Kms"
      icon={require('../../../assets/etios.jpeg')}
      seat="4 Seater"
      bags="2 Bags"
    />
  );
};

export default Hatchback;
