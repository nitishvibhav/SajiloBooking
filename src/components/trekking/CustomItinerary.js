import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const CustomItinerary = ({day}) => {
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        width: '95%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../../assets/maps.png')}
          style={{height: 16, width: 16, tintColor: 'black'}}
        />
        <Text
          style={{
            marginLeft: 5,
            color: '#000',
            fontWeight: '700',
            fontSize: 14,
          }}>
          {day}
        </Text>
      </View>
      <Image
        source={require('../../../assets/down.png')}
        style={{height: 20, width: 20, tintColor: 'black'}}
      />
    </TouchableOpacity>
  );
};

export default CustomItinerary;
