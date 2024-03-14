import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HotelCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: '95%',
        borderRadius: 6,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 10,
        elevation: 5,
        shadowColor: 'grey',
      }}
      onPress={() => navigation.navigate('HotelInfo')}>
      <Image
        style={{
          height: 200,
          width: '100%',
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        source={require('../../images/hoteloyo.jpg')}
      />
      <View style={{flexDirection: 'row', marginTop: 5, marginLeft: 10}}>
        <View
          style={{
            height: 20,
            width: 30,
            backgroundColor: '#1057b1',
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 14}}>4.5</Text>
        </View>
        <View style={{marginLeft: 5, marginRight: 5}}>
          <Text style={{color: '#1953a7', fontWeight: 700}}>Excellent</Text>
        </View>
        <View>
          <Text>(2255 Ratings)</Text>
        </View>
      </View>
      <Text
        style={{color: '#000000', margin: 10, fontSize: 20, fontWeight: 700}}>
        THE WESTIN KOLKATA RAJARHAT
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 12}}>New Town | 9.3 km from</Text>
            <Text style={{fontSize: 12}}>
              Netaji Subhash Chandra Bose In....
            </Text>
          </View>
          <View style={{marginLeft: 10, marginTop: 10, flexDirection: 'row'}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#dadada',
                borderRadius: 6,
                padding: 3,
                marginRight: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 12, marginLeft: 5, marginRight: 5}}>
                Swimming Pool
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#dadada',
                borderRadius: 6,
                padding: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 12, marginLeft: 5, marginRight: 5}}>
                Restaurant
              </Text>
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'flex-end'}}>
          <View style={{marginRight: 10, alignItems: 'flex-end'}}>
            <Text style={{fontSize: 20, fontWeight: 700}}>₹ 20,998</Text>
          </View>
          <View style={{marginRight: 10, alignItems: 'flex-end'}}>
            <Text style={{fontSize: 12, color: '#626262'}}>
              +₹ 3,780 taxes & fees
            </Text>
            <Text style={{fontSize: 12, color: '#626262'}}>
              Per Night for 2 Rooms
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#e6fff9',
          width: '95%',
          borderRadius: 6,
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 20,
          justifyContent: 'space-between',
          padding: 10,
          marginBottom: 10,
        }}>
        <Image
          source={require('../../images/discount8.png')}
          style={{
            height: 20,
            width: 20,
            tintColor: '#0a6057',
            marginRight: 10,
          }}
        />
        <Text style={{color: '#207e70', fontSize: 12, marginRight: 10}}>
          Get FLAT 13% OFF* on your first flight booking! Use code:
          WELCOMESAJILO{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;
