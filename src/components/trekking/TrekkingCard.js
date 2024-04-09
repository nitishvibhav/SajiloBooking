import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TrekkingCard = () => {
  return (
    <View
      style={{
        width: '95%',
        borderRadius: 6,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 10,
        elevation: 5,
        shadowColor: 'grey',
        marginBottom: 10,
        paddingBottom: 10,
      }}>
      <Text
        style={{
          marginTop: 10,
          fontSize: 18,
          fontWeight: 700,
          marginLeft: 10,
          color: '#000',
        }}>
        Cost Includes :
      </Text>

      <View style={{flexDirection: 'row', width:'90%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
          Accommodation during the trek on a full board basis on the best
          available lodges.
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        accommodation in Kathmandu on B&B basis
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '90%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Everest National Park Fee
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '90%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Gorakhsep – Kathmandu helicopter flight fare
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '86%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Porters Salary
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '86%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Flight fare for Kathmandu-Lukla
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '86%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Flight fare for the guide
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '86%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Arrival/ Departure  transfer
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '86%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Guides Salary
        </Text>
      </View>
    </View>
  );
};

export default TrekkingCard;

const styles = StyleSheet.create({});
