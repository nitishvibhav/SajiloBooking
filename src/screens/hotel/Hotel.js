import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const Hotel = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedOption, setSelectedOption] = useState('someOption');

  const handleOptionChange = value => {
    setSelectedOption(value);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          padding: 20,
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={require('../../images/back.png')}
            style={{
              height: 20,
              width: 20,
              tintColor: 'black',
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: 'orange',
            height: 30,
            width: 30,
            borderRadius: 50,
            alignSelf: 'center',
            justifyContent: 'center',
            marginLeft: 20,
          }}>
          <Image
            source={require('../../images/hotel5.png')}
            style={{
              height: 18,
              width: 18,
              tintColor: 'black',
              alignSelf: 'center',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: 'black',
            alignSelf: 'center',
            marginLeft: 10,
          }}>
          Hotels & Homestays
        </Text>
      </View>
      <View
        style={{
          paddingBottom: 20,
          width: '95%',
          backgroundColor: 'white',
          marginTop: 10,
          alignSelf: 'center',
          borderRadius: 6,
        }}>
        <View
          style={{
            backgroundColor: '#c1f0dc',
            width: '95%',
            borderRadius: 6,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Image
            source={require('../../images/discount.png')}
            style={{
              height: 20,
              width: 20,
              tintColor: '#0a6057',
              marginRight: 10,
            }}
          />
          <Text style={{color: '#207e70', fontSize: 12, marginRight: 10}}>
            Get FLAT 13% OFF* on your first flight booking! Use code:
            WELCOMESAJILO{' '}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 4,
            width: '95%',
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#dadada',
            alignItems: 'center',
            backgroundColor: '#f7f7f7',
          }}
          onPress={() => navigation.navigate('FlightSearch')}>
          <Image
            source={require('../../images/search.png')}
            style={{
              height: 18,
              width: 18,
              alignSelf: 'center',
              marginRight: 20,
              tintColor: '#939393',
              marginLeft: 10,
            }}
          />

          <View>
            <Text style={{fontSize: 16, fontWeight: 700, marginRight: 5}}>
              KOLKATA
            </Text>
            <Text style={{fontSize: 12, color: '#5b5b5b'}}>KOL</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            width: '95%',
          }}>
          <TouchableOpacity
            style={{
              height: 45,
              width: '49%',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#dadada',
              alignItems: 'center',
              backgroundColor: '#f7f7f7',
            }}>
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../images/calendar.png')}
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'center',
                  tintColor: '#939393',
                }}
              />
            </View>
            <View style={{marginLeft: 20, justifyContent: 'center'}}>
              <Text style={{color: 'grey', fontSize: 12, fontWeight: 500}}>
                CHECK-IN DATE
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 700, marginRight: 5}}>
                  8 Feb
                </Text>
                <Text style={{fontSize: 12, color: 'grey'}}>Thu, 2024</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 45,
              width: '49%',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#dadada',
              alignItems: 'center',
              backgroundColor: '#f7f7f7',
            }}>
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../images/calendar.png')}
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'center',
                  tintColor: '#939393',
                }}
              />
            </View>
            <View style={{marginLeft: 20, justifyContent: 'center'}}>
              <Text style={{color: 'grey', fontSize: 12, fontWeight: 500}}>
                CHECK-OUT DATE
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 700, marginRight: 5}}>
                  9 Feb
                </Text>
                <Text style={{fontSize: 12, color: 'grey'}}>Thu, 2024</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
            width: '95%',
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#dadada',
            alignItems: 'center',
            backgroundColor: '#f7f7f7',
          }}
          onPress={() => setModalVisible(true)}>
          <Image
            source={require('../../images/user.png')}
            style={{
              height: 18,
              width: 18,
              alignSelf: 'center',
              marginRight: 20,
              tintColor: '#939393',
            }}
          />
          <Text style={{fontSize: 16, fontWeight: 700, marginRight: 5}}>
            2 Rooms, 3 Adult & 1 Child
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 40,
            width: '95%',
            backgroundColor: 'orange',
            marginTop: 20,
            borderRadius: 6,
            alignSelf: 'center',
          }}
          onPress={() => navigation.navigate('HotelList')}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              marginTop: 5,
              fontSize: 20,
              fontWeight: 700,
            }}>
            Search
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalCloseImage: {
    height: 18,
    width: 18,
    marginRight: 10,
    tintColor: '#7b7b7b',
  },
  modalHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    elevation: 2,
    shadowColor: 'grey',
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  pickerView: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  picker: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 100,
  },
  pickerText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  pickerInnerView: {
    borderColor: 'orange',
    borderWidth: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  button: {
    height: 40,
    width: '95%',
    backgroundColor: 'orange',
    marginTop: 20,
    borderRadius: 6,
    alignSelf: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
    fontWeight: '700',
  },
  smallText: {
    fontSize: 12,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 5,
  },
});

export default Hotel;
