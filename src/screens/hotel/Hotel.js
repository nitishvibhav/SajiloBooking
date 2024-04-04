import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import CustomButton from '../../components/CustomButton';
import SmallCard from '../../components/hotel/SmallCard';
import CardHotel from '../../components/hotel/CardHotel';

const Hotel = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingBottom: 10,
          width: '100%',
          backgroundColor: 'white',
          marginTop: 10,
          alignSelf: 'center',
          borderRadius: 6,
        }}>
        <SmallCard />
        <CustomTouchableOpacity
          onPress={() => navigation.navigate('FlightSearch')}
          width="95%"
          text="KOL"
          text2="KOLKATA"
          icon={require('../../../assets/search_icon.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
            alignSelf: 'center',
          }}>
          <CustomTouchableOpacity
            icon={require('../../../assets/checkin_icon.png')}
            text="CHECK-IN DATE"
            text2="12 Apr 2024, Friday"
            width="49%"
          />
          <CustomTouchableOpacity
            icon={require('../../../assets/checkout_icon.png')}
            text="CHECK-OUT DATE"
            text2="2Adult, 1Room"
            width="49%"
          />
        </View>
        <CustomTouchableOpacity
          icon={require('../../../assets/room&guests_icon.png')}
          text="ROOM & GUESTS"
          text2="2Adult, 3Room, 1Child"
          width="95%"
        />
        <CustomButton
          width="95%"
          title="SEARCH"
          onPress={() => navigation.navigate('HotelList')}
        />
      </View>
      <View style={styles.containerOffer}>
        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>Offers For You</Text>
          <View style={styles.rightHeader}>
            <Text
              style={{
                fontSize: 12,
                color: '#488bf0',
                fontWeight: '700',
                marginRight: 10,
              }}>
              View All
            </Text>
            <Image
              style={styles.ImageRight}
              source={require('../../../assets/next2.png')}
            />
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={require('../../../assets/hotel_inside_banner.png')}
            style={styles.offerBanner}
          />
          <Image
            source={require('../../../assets/hotel_inside_banner.png')}
            style={styles.offerBanner}
          />
          <Image
            source={require('../../../assets/hotel_inside_banner.png')}
            style={styles.offerBanner}
          />
          <Image
            source={require('../../../assets/hotel_inside_banner.png')}
            style={styles.offerBanner}
          />
        </ScrollView>
      </View>
      <View style={styles.containerOffer}>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>Hotels For You</Text>
        <View style={styles.rightHeader}>
          <Text
            style={{
              fontSize: 12,
              color: '#488bf0',
              fontWeight: '700',
              marginRight: 10,
            }}>
            View All
          </Text>
          <Image
            style={styles.ImageRight}
            source={require('../../../assets/next2.png')}
          />
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
       <CardHotel/>
       <CardHotel/>
       <CardHotel/>
      </ScrollView>
    </View>
    </ScrollView>
  );
};

export default Hotel;
const styles = StyleSheet.create({
  offerBanner: {
    height: 150,
    width: 350,
    marginLeft: 10,
    resizeMode: 'contain',
    borderRadius: 10,
    marginTop: 10,
  },
  textContainer: {
    width: '95%',
    paddingLeft: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  textHeaderRight: {
    fontSize: 12,
    color: '#488bf0',
    fontWeight: '700',
  },
  ImageRight: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  rightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageView: {
    height: 16,
    width: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#488bf0',
    marginLeft: 10,
    borderRadius: 10,
  },
  container: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
    shadowColor: 'grey',
    paddingBottom: 10,
  },
  container2: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
    shadowColor: 'grey',
    marginTop: 10,
  },
  offerBanner: {
    height: 150,
    width: 350,
    marginLeft: 10,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  containerOffer: {
    width: '100%',
    alignSelf: 'center',
    shadowColor: 'grey',
    paddingBottom: 10,
    marginTop: 10,
  },
});
