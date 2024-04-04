import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const CustomTouchableOpacity = ({onPress, icon, text, text2, width}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {width: width}]}
      onPress={onPress}>
      <Image
        source={icon}
        style={{
          height: 18,
          width: 18,
          alignSelf: 'center',
          marginRight: 10,
        }}
      />

      <View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 500,
            marginRight: 5,
            color: '#7b7d7a',
            fontFamily: 'Quicksand-Bold',
          }}>
          {text}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#000',
            fontWeight: 700,
            fontFamily: 'Quicksand-Bold',
          }}>
          {text2}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dadada',
    alignItems: 'center',
    backgroundColor: '#eef3ef',
    padding: 10,
  },
});

export default CustomTouchableOpacity;
