import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import TravellerDetails from '../../components/holidaypackage/TravellerDetails';
import CustomButton from '../../components/CustomButton';

const ReviewPage = () => {
  return (
    <View>
      <View style={styles.mainContainer}>
        <Text style={styles.textHeading}>
          Amazing Goa Flight Inclusive Deal 3N
        </Text>
        <Text style={styles.text}>3N Goa</Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#e3e3e3',
            marginVertical: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 10,
            alignItems: 'center',
          }}>
          <View>
            <Text style={styles.textHeading}>Apr 30,2024</Text>
            <Text style={styles.text}>Tuesday</Text>
          </View>
          <View
            style={{
              backgroundColor: '#f2f2f2',
              padding: 5,
              paddingHorizontal: 10,
              borderRadius: 50,
            }}>
            <Text>4D/3N</Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.textHeading}>May 3, 2024</Text>
            <Text style={styles.text}>Friday</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#e3e3e3',
            marginVertical: 10,
          }}
        />
        <View style={{paddingHorizontal: 10}}>
          <Text style={{fontSize: 14, color: '#000', fontWeight: '700'}}>
            2 Travellers:{' '}
            <Text style={{color: '#555555', fontWeight: '400'}}>
              2 Adults/From New Delhi
            </Text>
          </Text>
         <Text class="text-sm text-blue mx-12">Helloo</Text>
        </View>
      </View>
      <TravellerDetails />
      <View style={styles.container}>
        <Text style={styles.textHeading}>2/4 Package inclusions</Text>
        <Image
          source={require('../../../assets/draw.png')}
          style={{height: 18, width: 18, tintColor: '#1691ef'}}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textHeading}>3/4 Cancellation & Date Change</Text>
        <Image
          source={require('../../../assets/draw.png')}
          style={{height: 18, width: 18, tintColor: '#1691ef'}}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textHeading}>4/4 Coupons & Offers</Text>
        <Image
          source={require('../../../assets/draw.png')}
          style={{height: 18, width: 18, tintColor: '#1691ef'}}
        />
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.textHeading}>Important Information</Text>
        <Text
          style={{
            margin: 10,
            marginHorizontal: 10,
            color: '#515151',
            fontSize: 14,
          }}>
          By clicking on the continue button below to proceed with the booking,
          I confirm that I have read and accept the{' '}
          <Text style={{color: '#2baeff'}}>Fare Rules</Text>, the{' '}
          <Text style={{color: '#2baeff'}}>Privacy Policy</Text>, the{' '}
          <Text style={{color: '#2baeff'}}>User Agreement</Text> and{' '}
          <Text style={{color: '#2baeff'}}>Terms of Service</Text> of Sajilo
        </Text>
      </View>
      <View
        style={{
          bottom: 0,
          position: 'absolute',
          width: '100%',
          backgroundColor: 'black',
          paddingVertical: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 10,
        }}>
        <View>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: '700'}}>
            ₹ 53,909
          </Text>
          <Text style={{color: '#8b8b8b', fontSize: 12}}>per person</Text>
        </View>
        <View>
          <CustomButton title="Book Now" width="80%" />
        </View>
      </View>
    </View>
  );
};

export default ReviewPage;

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  text: {
    color: '#555555',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  container: {
    width: '95%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  mainContainer: {
    width: '95%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    paddingVertical: 10,
  },
});
