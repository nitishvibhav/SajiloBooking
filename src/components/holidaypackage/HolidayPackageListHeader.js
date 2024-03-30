import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const HolidayPackageListHeader = () => {
  return (
    <View
      style={{
        backgroundColor: '#f2f2f2',
        borderColor: '#d8d8d8',
        width: '95%',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignSelf: 'center',
        padding: 10,
        borderRadius:10
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{alignSelf: 'center', marginRight: 20}}>
          <TouchableOpacity>
            <Image
              source={require('../../images/back.png')}
              style={{height: 24, width: 24, tintColor: '#787878'}}
            />
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center', marginRight: 10}}>
          <Text style={{fontSize: 16, fontWeight: 700, color:'#000'}}>New Delhi To Goa</Text>
          <Text style={{fontSize: 12, color: '#404040', marginTop:5}}>
            7 May 2024, Tuesday | 2 Adult
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginRight: 0}}>
        <Image
          source={require('../../images/editing.png')}
          style={{height: 16, width: 16, tintColor: '#0089f8'}}
        />
        <Text
          style={{
            fontSize: 12,
            color: '#0089f8',
            fontWeight: 500,
            marginTop: 5,
          }}>
          Edit
        </Text>
      </View>
    </View>
  );
};

export default HolidayPackageListHeader;

const styles = StyleSheet.create({});
