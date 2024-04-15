import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const TicketCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('FlightBook')}>
      <View
        style={{
          height: 125,
          width: '95%',
          alignSelf: 'center',
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: 'white',
          elevation: 5,
          shadowColor: 'grey',
        }}>
        <View
          style={{
            height: 20,
            width: 60,
            flexDirection: 'row',
            alignContent: 'center',
            marginLeft: 10,
            marginTop: 5,
          }}>
          <Image
            source={require('../../images/indigologo.png')}
            style={{height: 20, width: 20}}
          />
          <Text style={{marginLeft: 10}}>Indigo</Text>
        </View>
        <View
          style={{
            height: 95,
            width: '95%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <View>
              <Text style={{fontSize: 16, fontWeight: 500, color: 'black'}}>
                DEL
              </Text>
              <Text style={{fontSize: 16, fontWeight: 500, color: 'black'}}>
                06:30
              </Text>
            </View>
            <Text style={{fontSize: 16, fontWeight: 500}}>04h 15m</Text>
            <View>
              <Text style={{fontSize: 16, fontWeight: 500, color: 'black'}}>
                BLR
              </Text>
              <Text style={{fontSize: 16, fontWeight: 500, color: 'black'}}>
                10:45
              </Text>
            </View>
            <Text style={{fontSize: 20, fontWeight: 500, color: 'orange'}}>
              ₹7,319
            </Text>
          </View>
          <Text style={{fontSize: 10, color: 'grey'}}>Free Meal</Text>
          <Text
            style={{
              fontSize: 10,
              color: 'green',
              alignSelf: 'flex-end',
              marginTop: 10,
            }}>
            Use code : FLYAWAY60 and get 60% instant cashback{' '}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TicketCard;
