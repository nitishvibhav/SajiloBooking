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
    <ScrollView style={{flex: 1}}>
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
      <View
        style={{
          paddingBottom: 10,
          width: '100%',
          marginTop: 10,
          alignSelf: 'center',
          borderRadius: 6,
        }}>
        <Text
          style={{
            marginLeft: 10,
            color: '#000',
            fontSize: 16,
            fontWeight: '700',
          }}>
          Offers for you
        </Text>
        <ScrollView horizontal>
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
      <ScrollView horizontal style={{width: '100%'}}>
        <CardHotel />
        <CardHotel />
        <CardHotel />
      </ScrollView>
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
});
