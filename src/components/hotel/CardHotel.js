import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const CardHotel = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: 220,
        borderRadius: 6,
        backgroundColor: 'white',
        marginLeft: 10,
        marginTop: 10,
        elevation: 5,
        shadowColor: 'grey',
        marginBottom: 10,
      }}
      onPress={() => navigation.navigate('HotelInfo')}>
      <Image
        style={{
          height: 110,
          width: '100%',
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        source={require('../../images/hoteloyo.jpg')}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{width: '60%'}}>
          <Text style={{fontSize: 14, fontWeight: 800, color: '#000'}}>
            Mayfair Palm Beach Resort, Goa
          </Text>
          <Text>Tangra, kolkata</Text>
        </View>
        <View style={{width: '40%'}}>
          <Text
            style={{
              alignSelf: 'flex-end',
              fontSize: 18,
              fontWeight: 800,
              color: '#000',
            }}>
            ₹ 9,120
          </Text>
          <Text style={{alignSelf: 'flex-end'}}>Per night</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#d6d6d6',
          borderBottomWidth: 1,
        }}
      />
      <Text style={{padding:10, color:'#7B3F00'}}>
        Beachfront retreat with sea-view rooms, a spa & recreation area
      </Text>
    </TouchableOpacity>
  );
};

export default CardHotel;

const styles = StyleSheet.create({});
