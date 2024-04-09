import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React from 'react';

const TrekkingListCard = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: '95%',
        borderRadius: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 10,
        elevation: 5,
        shadowColor: 'grey',
        paddingBottom:10
      }}
      onPress={onPress}
      >
      <Image
        style={{
          height: 200,
          width: '100%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        source={require('../../../assets/annpurna.jpg')}
      />
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text
          style={{
            color: '#000000',
            marginTop: 10,
            fontSize: 20,
            fontWeight: 700,
            marginLeft: 10,
          }}>
          Round Annapurna Trek
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
            height: 24,
          }}>
          <Text style={{color: '#295886'}}>18 Days</Text>
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
        <Text style={{color: '#4a4a4a'}}>Apr 09, 2024 - Apr 26, 2024</Text>
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
          <Text style={{color: '#4a4a4a'}}>Start/End: Kathmandu</Text>
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
          <Text style={{color: '#4a4a4a'}}>Max. Altitude: 5416m</Text>
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
          <Text style={{color: '#4a4a4a'}}>Daily Walking: 5-6 hours</Text>
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
          <Text style={{color: '#4a4a4a'}}>Duration: 18 Days</Text>
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
          <Text style={{color: '#4a4a4a'}}>Everest National Park Fee</Text>
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
          <Text style={{color: '#4a4a4a'}}>TIMS Card</Text>
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
        Arrival/ Departure  transfer
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
          Gorakhsep – Kathmandu helicopter flight fare
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
        Flight fare for Kathmandu-Lukla
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
            ₹58,836
            <Text style={{color: '#717171', fontSize: 14, fontWeight: 400}}>
              /Person
            </Text>
          </Text>
          <Text style={{color: '#717171'}}>Total Price ₹58,836</Text>
        </View>
      </View>
    
      
    </TouchableOpacity>
  )
}

export default TrekkingListCard

const styles = StyleSheet.create({})