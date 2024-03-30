import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

const HomeTop = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '94%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        alignSelf: 'center',
       marginBottom:20
      }}>
      <TouchableOpacity
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          alignSelf: 'center',
          elevation: 5,
          shadowColor: 'grey',
          width:'23%'
        }}
        onPress={() => navigation.navigate('Hotel')}>
        <Image
          source={require('../../../assets/hotel.png')}
          style={{
            height: 50,
            width: 50,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 5,
            color: 'black',
            fontSize: 12,
            fontWeight: 600,
          }}>
          Hotels
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          alignSelf: 'center',
          fontSize: 12,
          fontWeight: 600,
          elevation: 5,
          shadowColor: 'grey',
          width:'23%'
        }}
        onPress={() => navigation.navigate('Flight')}>
        <Image
          source={require('../../../assets/flight.png')}
          style={{
            height: 50,
            width: 50,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 5,
            color: 'black',
            fontSize: 12,
            fontWeight: 600,
          }}>
          Flights
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          alignSelf: 'center',
          elevation: 5,
          shadowColor: 'grey',
          width:'23%'
        }}
        onPress={() => navigation.navigate('HolidayPackageSearchPage')}>
        <Image
          source={require('../../../assets/tour.png')}
          style={{
            height: 50,
            width: 50,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 5,
            color: 'black',
            fontSize: 12,
            fontWeight: 600,
          }}>
          Holidays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          alignSelf: 'center',
          elevation: 5,
          shadowColor: 'grey',
          width:'23%'
        }}
        onPress={() => navigation.navigate('Hotel')}>
        <Image
          source={require('../../../assets/cruise.png')}
          style={{
            height: 50,
            width: 50,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 5,
            color: 'black',
            fontSize: 12,
            fontWeight: 600,
          }}>
          Cruise
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeTop;
