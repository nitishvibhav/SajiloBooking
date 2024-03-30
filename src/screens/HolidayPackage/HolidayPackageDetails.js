import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import Filter from '../../components/flight/Filter';

const HolidayPackageDetails = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
          marginHorizontal: 20,
        }}>
        <Image
          source={require('../../../assets/back.png')}
          style={{height: 20, width: 20}}
        />
        <Image
          source={require('../../../assets/search.png')}
          style={{height: 20, width: 20}}
        />
      </View>
      <View
        style={{
          height: 200,
          borderRadius: 10,
          width: '95%',
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{
            width: '49%',
            height: '100%',
            resizeMode: 'stretch',
            borderRadius: 10,
          }}
          source={require('../../../assets/holidaypackage2.jpg')}
        />
        <View
          style={{
            width: '49%',
            height: '100%',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{
              width: '100%',
              height: '47%',
              resizeMode: 'stretch',
              borderRadius: 10,
            }}
            source={require('../../../assets/holidaypackage2.jpg')}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: '49%',
              justifyContent: 'space-between',
            }}>
            <Image
              style={{
                width: '48%',
                height: '98%',
                resizeMode: 'stretch',
                borderRadius: 10,
              }}
              source={require('../../../assets/holidaypackage2.jpg')}
            />
            <Image
              style={{
                width: '48%',
                height: '98%',
                resizeMode: 'stretch',
                borderRadius: 10,
              }}
              source={require('../../../assets/holidaypackage2.jpg')}
            />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.filter}>
          <Text style={{color: '#44484b'}}>4N/5D</Text>
        </View>
        <View style={styles.filter}>
          <Text style={{color: '#44484b'}}>Customizable</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Amazing Goa flight Inclusive Deal 4N
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.subheader}>4N Goa</Text>
      </View>
      <View
        style={{
          borderBottomColor: '#238ddb',
          borderBottomWidth: 1,
          marginTop: 30,
          marginBottom: 10,
        }}
      />
      <View
        style={{
          borderColor: '#238ddb',
          borderWidth: 1,
          borderRadius: 20,
          width: '90%',
          alignSelf: 'center',
          padding: 10,
          alignItems: 'center',
          marginTop: -30,
          backgroundColor: '#fff',
        }}>
        <Text style={{color: '#525252', fontSize: 16, fontWeight: 500}}>
          New Delhi • 2 Travellers • 7-11 May
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: '#fff',
          marginTop: 10,
          paddingBottom: 10,
        }}>
        <View style={styles.container2}>
          <View style={{width: '70%'}}>
            <Text style={{color: '#4a4a4a', fontSize: 14}}>
              A flight and hotel only package. Customize the package from a pool
              of optional activities to make your holiday memorable! A hot
              favourite of all beach lovers, your next Goa trip is going to be
              unforgettable one!
            </Text>
          </View>
          <View style={{borderRadius: 50, backgroundColor: 'white'}}>
            <Image
              source={require('../../../assets/vk.jpeg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 50,
                backgroundColor: '#fff',
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Itinerary</Text>
        </View>
        <View style={styles.containerSubheader}>
          <Text style={styles.subheader}>Day Wise Details of Your Package</Text>
        </View>
      </View>
      <View style={{backgroundColor:'#cce8fe', padding:10}}>
      <Filter category="Day Plan" color="black"/>
      </View>
      <View
        style={{
          bottom: 0,
          position: 'absolute',
          width: '100%',
          backgroundColor: 'black',
          left: 0,
          right: 0,
          height: 80,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 5,
        }}>
        <View>
          <Text style={{color: 'white', fontSize: 14, fontWeight: 700}}>
            ₹ 6,294
          </Text>
          <Text style={{color: 'white', fontSize: 10, fontWeight: 400}}>
            + ₹755 taxes and fees
          </Text>
          <Text style={{color: 'white', fontSize: 10, fontWeight: 400}}>
            Per Night for 2 Rooms & 3 Guest
          </Text>
        </View>
        <View>
          <CustomButton title="Book Now" width="80%" />
        </View>
      </View>
    </View>
  );
};

export default HolidayPackageDetails;

const styles = StyleSheet.create({
  filter: {
    borderColor: '#797d80',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  container: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  subheader: {
    color: '#525252',
    fontSize: 14,
  },
  container2: {
    width: '95%',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  containerSubheader: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  mainContainer: {
    backgroundColor: '#fff',
    marginTop:10
  },
});
