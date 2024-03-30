import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Filter = ({category, color}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, (color = {color})]}>{category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: 'white',
  },
  container: {
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal:10,
    paddingVertical:5,
    marginLeft:10
  },
});

export default Filter;
