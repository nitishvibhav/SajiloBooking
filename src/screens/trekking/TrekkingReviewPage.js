import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import TravellerDetails from '../../components/holidaypackage/TravellerDetails';
import CustomButton from '../../components/holidaypackage/CustomButton';

const TrekkingReviewPage = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Text style={styles.textHeading}>Round Annapurna Trek</Text>
          <Text style={styles.text}> 18 Days</Text>
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
              <Text style={styles.textHeading}>Apr 10, 2024</Text>
              <Text style={styles.text}>WEDNESDAY</Text>
            </View>
            <View
              style={{
                backgroundColor: '#f2f2f2',
                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 50,
              }}>
              <Text>18 Days</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.textHeading}>Apr 28, 2024</Text>
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
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              source={require('../../../assets/walking.png')}
              style={{height: 16, width: 16, marginRight: 10}}
            />
            <Text style={{fontSize: 16, fontWeight: 700, color: 'black'}}>
              Daily Walking :<Text style={styles.text}> 5-6 Hours</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              source={require('../../../assets/altitude.png')}
              style={{height: 16, width: 16, marginRight: 10}}
            />
            <Text style={{fontSize: 16, fontWeight: 700, color: 'black'}}>
              Max. Altitude :<Text style={styles.text}> 5416m</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              source={require('../../../assets/exchange.png')}
              style={{height: 16, width: 16, marginRight: 10}}
            />
            <Text style={{fontSize: 16, fontWeight: 700, color: 'black'}}>
              Start/End :<Text style={styles.text}> Kathmandu</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              source={require('../../../assets/difficulties.png')}
              style={{height: 16, width: 16, marginRight: 10}}
            />
            <Text style={{fontSize: 16, fontWeight: 700, color: 'black'}}>
              Difficulty Level :<Text style={styles.text}> HARD</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              source={require('../../../assets/user.png')}
              style={{height: 16, width: 16, marginRight: 10}}
            />
            <Text style={{fontSize: 16, fontWeight: 700, color: 'black'}}>
              Group Size :<Text style={styles.text}> 1</Text>
            </Text>
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
            By clicking on the continue button below to proceed with the
            booking, I confirm that I have read and accept the{' '}
            <Text style={{color: '#2baeff'}}>Fare Rules</Text>, the{' '}
            <Text style={{color: '#2baeff'}}>Privacy Policy</Text>, the{' '}
            <Text style={{color: '#2baeff'}}>User Agreement</Text> and{' '}
            <Text style={{color: '#2baeff'}}>Terms of Service</Text> of Sajilo
          </Text>
        </View>
      </ScrollView>
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
            ₹ 58,836
          </Text>
          <Text style={{color: '#8b8b8b', fontSize: 12}}>per person</Text>
        </View>
        <View>
          <CustomButton title="Continue" width="80%" />
        </View>
      </View>
    </View>
  );
};

export default TrekkingReviewPage;

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
    fontSize:14
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
