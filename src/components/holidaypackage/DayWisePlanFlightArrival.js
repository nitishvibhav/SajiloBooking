import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const DayWisePlanFlightArrival = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#d6d6d6',
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: '#000',
          marginHorizontal: 10,
          marginTop: 20,
        }}>
        Arrival in Goa - Dabolim Airport via flight - 2h 35m
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginHorizontal: 10,
          marginRight:20,
          justifyContent:'space-around',
          alignItems:'center'
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/indigo-logo.png')}
              style={{height: 40, width: 40, borderRadius: 10}}
            />
            <Text style={{color: '#000'}}>6E-2277</Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '700'}}>
              09:55
            </Text>
            <Text style={{color: '#696969', fontSize: 14, fontWeight: '600'}}>
              Tue, 30 Apr
            </Text>
            <Text style={{color: '#555555', fontSize: 14}}>New Delhi</Text>
          </View>
        </View>
        <Image style={{height:16, width:16}}
        source={require('../../../assets/black-plane.png')}/>
        <View style={{marginLeft: 20}}>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '700'}}>
              12:30
            </Text>
            <Text style={{color: '#696969', fontSize: 14, fontWeight: '600'}}>
              Tue, 30 Apr
            </Text>
            <Text style={{color: '#555555', fontSize: 14}}>Goa</Text>
          </View>
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
          marginTop: 20,
          marginHorizontal: 10,
        }}>
        Transfer from Airport to hotel in Goa
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

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginTop: 20,
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/hotel5.png')}
          style={{height: 16, width: 16, marginRight: 10}}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: '#000',
          }}>
          Check-in to Hotel in Goa
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 10,
        }}>
        <Image
          source={require('../../../assets/goa.jpg')}
          style={{height: 100, width: '25%', borderRadius: 10, marginLeft: 30}}
        />
        <View style={{marginLeft: 10, width: '65%'}}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: '700'}}>
            Resort Terra Paraiso - A beach property
          </Text>
          <Text style={{marginTop: 5, color: '#717171'}}>Calangute</Text>
          <Text style={{marginTop: 5, color: '#717171'}}>
            1-2 minutes walk from Calangute Beach
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: '#000',
              fontSize: 14,
              marginRight: 10,
            }}>
            Tue, 1 May 2024 - Sat, 4 May 2024
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              marginRight: 10,
            }}>
            <View>
              <Text style={{color: '#0086fc', fontSize: 14, fontWeight: '600'}}>
                {' '}
                Change
              </Text>
            </View>
            <Text style={{color: '#0086fc', fontSize: 14, fontWeight: '600'}}>
              View Details
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '95%',
          backgroundColor: '#f2f2f2',
          borderRadius: 10,
          padding: 10,
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <Text style={{fontSize: 16, color: '#000', fontWeight: '500'}}>
          Deluxe Room
        </Text>
        <Text style={{fontSize: 14, color: '#000'}}>Meal Plan: Breakfast</Text>
        <Text
          style={{
            fontSize: 14,
            color: '#585858',
            marginTop: 10,
            fontWeight: '500',
          }}>
          Room Inclusion :
        </Text>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text
            style={{
              fontSize: 14,
              color: '#555555',
              marginRight: 10,
            }}>
            •
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#555555',
              marginRight: 10,
            }}>
            Spa Inclusions : INR 400 credit on minimum spend INR 1099 with
            complimentary steam bath
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 4}}>
          <Text
            style={{
              fontSize: 14,
              color: '#555555',
              marginRight: 10,
            }}>
            •
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#555555',
            }}>
            Complimentary Breakfast is Available
          </Text>
        </View>
        <Text
          style={{
            color: '#0086fc',
            fontSize: 14,
            fontWeight: '600',
            marginTop: 10,
          }}>
          Change Room
        </Text>
      </View>

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#eaf1d2', '#e7f6e3', '#e6faf8']}
        style={styles.containerGradient}>
        <Text style={{color: '#52584c'}}>
          Spend time at leisure or add an activity to your day!
        </Text>
      </LinearGradient>
      <TouchableOpacity
        style={{
          borderWidth: 1.5,
          borderColor: '#3d7fb9',
          width: '60%',
          alignSelf: 'center',
          alignItems: 'center',
          borderRadius: 6,
          paddingVertical: 10,
          marginTop: -20,
          backgroundColor: 'white',
          marginBottom: 20,
        }}>
        <Text style={{color: '#3d7fb9', fontSize: 16, fontWeight: '700'}}>
          ADD ACTIVITY TO DAY
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DayWisePlanFlightArrival;

const styles = StyleSheet.create({
  containerGradient: {
    width: '100%',
    marginTop: 20,
    paddingBottom: 25,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#d6d6d6',
    alignItems: 'center',
  },
});
