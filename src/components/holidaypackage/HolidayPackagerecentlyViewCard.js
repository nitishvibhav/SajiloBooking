import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const HolidayPackagerecentlyViewCard = () => {
  return (
    <View
      style={{
        width: 300,
        borderRadius: 6,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#e2e7ed',
        marginLeft: 10,
        marginTop:10
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin:10}}>
        <View>
          <Text style={{color: '#5b5b5b'}}>
            Amazing Goa Flight Inclusive Deal
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 20,
            }}>
            <Text
              style={{
                color: '#000',
                fontWeight: '700',
              }}>
              4N Goa
            </Text>
          </View>
          <Text
            style={{
              color: '#515151',
              fontSize: 14,
              marginTop: 5,
            }}>
            12 Apr, 2024, 2 Traveller
          </Text>
        </View>
        <View>
        <Image
          source={require('../../../assets/goa.jpg')}
          style={{height: 50, width: 50, borderRadius: 6}}
        />
        <View style={{borderColor:'#295886', borderWidth:1, borderRadius:6, alignItems:'center', marginTop:-5, backgroundColor:'white'}}><Text style={{color:'#295886'}}>4N/5D</Text></View>
        </View>
      </View>
      <View
        style={{
          borderStyle: 'dashed',
          borderWidth: 1,
          borderRadius: 1,
          marginHorizontal: 10,
          borderColor: '#ececec',
        }}
      />
      <View style={{marginHorizontal:10}}>
      <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
        9,928
        <Text style={{fontSize: 14, fontWeight: 500, color: '#767676'}}>
          /Person
        </Text>
      </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent:'space-between',
          backgroundColor:'#e6f7ff',
          bottom:0,
          marginTop:10,
          padding:10
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: '#636564',
          }}>
          Viewed by You
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: '#1f70db',
          }}>
          Book Now
        </Text>
      </View>
    </View>
  );
};

export default HolidayPackagerecentlyViewCard;

const styles = StyleSheet.create({});
