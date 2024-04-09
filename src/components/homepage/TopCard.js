import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const TopCard = ({firstname, secondname, localImage, onPress}) => {
  return (
    <View
      style={{
        height: 90,
        width: '80',
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 45,
        alignItems: 'center',
      }}>
      <TouchableOpacity style={{alignItems: 'center'}} onPress={onPress}>
        <Image source={localImage} style={{height: 40, width: 40}} />
        <View style={{marginTop: 5, alignItems: 'center'}}>
          <Text style={{fontSize: 10, fontWeight: 600, color: '#000'}}>
            {firstname}
          </Text>
          <Text style={{fontSize: 10, fontWeight: 600, color: '#000'}}>
            {secondname}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TopCard;
