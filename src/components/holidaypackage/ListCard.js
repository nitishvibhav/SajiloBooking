import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const ListCard = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={{
        width: '95%',
        borderRadius: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 20,
        elevation: 5,
        shadowColor: 'grey',
      }}
      onPress={()=>navigation.navigate("HolidayPackageDetails")}>
      <Image
        style={{
          height: 200,
          width: '100%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        source={require('../../../assets/holidaypackage2.jpg')}
      />
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text
          style={{color: '#000000', marginTop: 10, fontSize: 20, fontWeight: 700, marginLeft:10}}>
          Holiday Package to Goa
        </Text>
        <View
          style={{
            borderColor: '#295886',
            borderWidth: 1,
            borderRadius: 6,
            alignItems: 'center',
            marginTop: 10,
            backgroundColor: 'white',
            justifyContent: 'center',
            paddingHorizontal: 5,
            marginRight: 20,
            height:24
          }}>
          <Text style={{color: '#295886'}}>4N/5D</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 20,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>4N Goa</Text>
      </View>
      <View
        style={{
          borderBottomColor: '#d6d6d6',
          borderBottomWidth: 1,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
          <Text
            style={{
              marginLeft: 20,
              marginRight: 10,
              fontSize: 20,
              color: '#4a4a4a',
            }}>
            •
          </Text>
          <Text style={{color: '#4a4a4a'}}>Round Trip Flights</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
          <Text
            style={{
              marginLeft: 20,
              marginRight: 10,
              fontSize: 20,
              color: '#4a4a4a',
            }}>
            •
          </Text>
          <Text style={{color: '#4a4a4a'}}>Airport Pickup & Drop</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
          <Text
            style={{
              marginLeft: 20,
              marginRight: 10,
              fontSize: 20,
              color: '#4a4a4a',
            }}>
            •
          </Text>
          <Text style={{color: '#4a4a4a'}}>4 Star Hotel</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
          <Text
            style={{
              marginLeft: 20,
              marginRight: 10,
              fontSize: 20,
              color: '#4a4a4a',
            }}>
            •
          </Text>
          <Text style={{color: '#4a4a4a'}}>4 Activities</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
          <Text
            style={{
              marginLeft: 20,
              marginRight: 10,
              fontSize: 20,
              color: '#4a4a4a',
            }}>
            •
          </Text>
          <Text style={{color: '#4a4a4a'}}>Airport Transfers </Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
          <Text
            style={{
              marginLeft: 20,
              marginRight: 10,
              fontSize: 20,
              color: '#4a4a4a',
            }}>
            •
          </Text>
          <Text style={{color: '#4a4a4a'}}>Selected Meals</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Image
          style={{
            marginLeft: 20,
            marginRight: 10,
            tintColor: '#266d67',
            height: 16,
            width: 16,
          }}
          source={require('../../../assets/check2.png')}
        />
        <Text style={{color: '#266d67', fontSize: 14, fontWeight: '600'}}>
          Dolphin Trip
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Image
          style={{
            marginLeft: 20,
            marginRight: 10,
            tintColor: '#266d67',
            height: 16,
            width: 16,
          }}
          source={require('../../../assets/check2.png')}
        />
        <Text style={{color: '#266d67', fontSize: 14, fontWeight: '600'}}>
          Boating
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Image
          style={{
            marginLeft: 20,
            marginRight: 10,
            tintColor: '#266d67',
            height: 16,
            width: 16,
          }}
          source={require('../../../assets/check2.png')}
        />
        <Text style={{color: '#266d67', fontSize: 14, fontWeight: '600'}}>
          Goa Sightseeing
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#f2f2f2',
          borderColor: '#cfcfcf',
          borderWidth: 1,
          width: '95%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          padding: 20,
          borderRadius: 10,
          marginTop: 10,
          flexDirection: 'row',
        }}>
        <View style={{width: '50%'}}>
          <Text style={{color: '#000', fontSize: 15}}>
            Book Now, price is below May average
          </Text>
        </View>
        <View>
          <Text style={{color: '#000', fontSize: 20, fontWeight: 700}}>
            ₹28,836
            <Text style={{color: '#717171', fontSize: 14, fontWeight: 400}}>
              /Person
            </Text>
          </Text>
          <Text style={{color: '#717171'}}>Total Price ₹57,672</Text>
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
          padding: 10,
          marginBottom: 10,
        }}>
        <Image
          source={require('../../images/discount8.png')}
          style={{
            height: 20,
            width: 20,
            tintColor: '#0a6057',
            marginRight: 20,
          }}
        />
        <Text style={{color: '#207e70', fontSize: 12, marginRight: 10}}>
          Get Extra ₹5,757 OFF. Use CODE: GOASALE
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListCard;

const styles = StyleSheet.create({});
