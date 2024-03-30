import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HolidayThemeCard = ({icon,theme, filter1,filter2,filter3,filter4}) => {
  return (
    <View>
    <View
      style={{
        width: 300,
        marginLeft: 10,
        backgroundColor: '#fff',
        marginVertical: 20,
        borderRadius: 20,
        marginTop:20,
        paddingBottom:20
      }}>
      <Image
        source={icon}
        style={{
          height: 180,
          width: 300,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: 700,
          color: '#000',
          marginTop: 10,
        }}>
        {theme}
      </Text>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <View
      style={{
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#d8d8d8',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
        marginRight: 10,
        paddingVertical: 5,
      }}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: 500}}>
            {filter1}
          </Text>
        </View>
        <View
        style={{
          borderRadius: 6,
          borderWidth: 1,
          borderColor: '#d8d8d8',
          alignItems: 'center',
          alignSelf: 'center',
          paddingHorizontal: 10,
          marginTop: 10,
          marginRight: 10,
          paddingVertical: 5,
        }}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: 500}}>
            {filter2}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <View
      style={{
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#d8d8d8',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
        marginRight: 10,
        paddingVertical: 5,
      }}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: 500}}>
            {filter3}
          </Text>
        </View>
        <View
          style={{
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#d8d8d8',
            alignItems: 'center',
            alignSelf: 'center',
            paddingHorizontal: 10,
            marginTop: 10,
            marginRight: 10,
           
            paddingVertical: 5,
          }}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: 500}}>
            {filter4}
          </Text>
        </View>
      </View>
    </View>
    <Text
          style={{
            color: "#1499f4",
            fontSize: 16,
            fontWeight: 700,
            marginLeft: 10,
            marginBottom: 10,
            alignSelf:'center'
          }}
        >View More</Text>
    </View>
  );
};

export default HolidayThemeCard;

const styles = StyleSheet.create({});
