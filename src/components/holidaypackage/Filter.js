import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Filter = ({category, color,backgroundColor}) => {
  return (
    <View style={[styles.container, (backgroundColor={backgroundColor})]}>
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
    borderColor: '#dbe3e8',
    paddingHorizontal:10,
    paddingVertical:5,
    marginLeft:10,
    backgroundColor:"white"
  },
});

export default Filter;
