import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const DayWisePlanFlightDeparture = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#d6d6d6',
        marginBottom: 70,
      }}>
      <View style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 10, alignItems:'center'}}>
        <Image source={require('../../../assets/hotel5.png')}
        style={{ height:16, width:16, marginRight:10}}/>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: '#000',
          }}>
          Check-Out from Hotel in Goa
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: '#d6d6d6',
          borderBottomWidth: 1,
          marginTop: 20,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: '#000',
          marginTop: 20,
          marginHorizontal: 10,
        }}>
        Transfer from Hotel to Goa Airport
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: '#535353',
          marginHorizontal: 10,
        }}>
        Private Transfer
      </Text>
      <View
        style={{
          marginTop: 20,
          marginLeft: 10,
        }}>
        <Image
          source={require('../../../assets/transfer.png')}
          style={{
            height: 80,
            width: '35%',
            borderRadius: 10,
            borderColor: 'grey',
            borderWidth: 1,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          marginHorizontal: 10,
        }}>
        <View>
          <Text style={{color: '#0086fc', fontSize: 14, fontWeight: '600'}}>
            Remove <Text style={{color: '#d9d9d9'}}>|</Text> Change
          </Text>
        </View>
        <Text style={{color: '#0086fc', fontSize: 14, fontWeight: '600'}}>
          View Details
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: '#d6d6d6',
          borderBottomWidth: 1,
          marginTop: 20,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: '#000',
          marginHorizontal: 10,
          marginTop: 20,
        }}>
        Departure from Goa(North) via flight - 2h 30m
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginHorizontal: 10,
          marginRight: 20,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/indigo-logo.png')}
              style={{height: 40, width: 40, borderRadius: 10}}
            />
            <Text style={{color: '#000'}}>6E-2107</Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '700'}}>
              10:30
            </Text>
            <Text style={{color: '#696969', fontSize: 14, fontWeight: '600'}}>
              Sat, 4 May
            </Text>
            <Text style={{color: '#555555', fontSize: 14}}>Goa</Text>
          </View>
        </View>
        <Image
          style={{height: 16, width: 16}}
          source={require('../../../assets/black-plane.png')}
        />
        <View style={{marginLeft: 20}}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: '700'}}>
            13:00
          </Text>
          <Text style={{color: '#696969', fontSize: 14, fontWeight: '600'}}>
            Sat, 4 May
          </Text>
          <Text style={{color: '#555555', fontSize: 14}}>New Delhi</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          marginHorizontal: 10,
          marginBottom: 20,
        }}>
        <View>
          <Text style={{color: '#0086fc', fontSize: 14, fontWeight: '600'}}>
            Remove <Text style={{color: '#d9d9d9'}}>|</Text> Change
          </Text>
        </View>
        <Text style={{color: '#0086fc', fontSize: 14, fontWeight: '600'}}>
          View Details
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
        }}>
        <Text style={{color: '#0086fc', fontSize: 16, fontWeight: '600'}}>
          Summary
        </Text>
        <Image
          source={require('../../../assets/arrowdown.png')}
          style={{height: 16, width: 16, marginRight: 10, tintColor: '#0086fc'}}
        />
      </View>
      <View
        style={{
          borderBottomColor: '#d6d6d6',
          borderBottomWidth: 1,
          marginTop: 10,
          marginHorizontal: 20,
        }}
      />
      <View
        style={{
          padding: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
        }}>
        <Text style={{color: '#0086fc', fontSize: 16, fontWeight: '600'}}>
          Terms & Conditions
        </Text>
        <Image
          source={require('../../../assets/arrowdown.png')}
          style={{height: 16, width: 16, marginRight: 10, tintColor: '#0086fc'}}
        />
      </View>
      <View
        style={{
          borderBottomColor: '#d6d6d6',
          borderBottomWidth: 1,
          marginTop: 10,
          marginHorizontal: 20,
        }}
      />
      <View
        style={{
          padding: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
          marginBottom: 20,
        }}>
        <Text style={{color: '#0086fc', fontSize: 16, fontWeight: '600'}}>
          Policies
        </Text>
        <Image
          source={require('../../../assets/arrowdown.png')}
          style={{height: 16, width: 16, marginRight: 10, tintColor: '#0086fc'}}
        />
      </View>
    </View>
  );
};

export default DayWisePlanFlightDeparture;

const styles = StyleSheet.create({});
