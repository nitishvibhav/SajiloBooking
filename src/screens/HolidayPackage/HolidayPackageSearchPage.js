import {
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import CustomButton from '../../components/CustomButton';
import SearchPageOfferBannerCard from '../../components/holidaypackage/SearchPageOfferBannerCard';
import HolidayPackagerecentlyViewCard from '../../components/holidaypackage/HolidayPackagerecentlyViewCard';
import TravelCard from '../../components/holidaypackage/TravelCard';
import HolidayThemeCard from '../../components/holidaypackage/HolidayThemeCard';
import {useNavigation} from '@react-navigation/native';

const listTab = [
  {id: 1, status: 'All'},
  {id: 2, status: 'Goa'},
  {id: 3, status: 'Sri Lanka'},
];

const HolidayPackageSearchPage = () => {
  const [status, setStatus] = useState('All');
  const setStatusfilter = status => {
    setStatus(status);
  };

  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: 'white',
          paddingBottom: 10,
          marginTop: 10,
        }}>
        <CustomTouchableOpacity
          icon={require('../../images/location.png')}
          text="STARTING FROM"
          text2="New Delhi"
          width="95%"
        />
        <CustomTouchableOpacity
          icon={require('../../images/location.png')}
          text="TRAVELING TO"
          text2="Mumbai"
          width="95%"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
          }}>
          <CustomTouchableOpacity
            icon={require('../../images/date.png')}
            text="STARTING DATE"
            text2="12 Apr 2024, friday"
            width="49%"
          />
          <CustomTouchableOpacity
            icon={require('../../images/user.png')}
            text="ROOM & GUESTS"
            text2="2Adult, 1Room"
            width="49%"
          />
        </View>
        <CustomButton
          title="search"
          width="95%"
          onPress={() => navigation.navigate('HolidayPackageListPage')}
        />
        <SearchPageOfferBannerCard />
      </View>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Recently Viewed packages</Text>
      </View>
      <View style={styles.containerCategory}>
        {listTab.map(e => (
          <TouchableOpacity
            key={listTab.id}
            style={[
              styles.category,
              status === e.status && styles.categoryActive,
            ]}
            onPress={() => setStatusfilter()}>
            <Text style={styles.title}>{e.status}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HolidayPackagerecentlyViewCard />
        <HolidayPackagerecentlyViewCard />
      </ScrollView>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Continue Your Search</Text>
      </View>
      <View style={styles.containerCategory}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                marginRight: 10,
                fontWeight: 600,
              }}>
              New Delhi
            </Text>
            <Image
              source={require('../../../assets/Arrow.png')}
              style={{height: 20, width: 20, marginRight: 10}}
            />
            <Text style={{fontSize: 16, color: '#000', fontWeight: 600}}>
              Goa
            </Text>
          </View>
          <Text>12 Apr 2024, 2 traveller</Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 10,
            marginLeft: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                marginRight: 10,
                fontWeight: 600,
              }}>
              New Delhi
            </Text>
            <Image
              source={require('../../../assets/Arrow.png')}
              style={{height: 20, width: 20, marginRight: 10}}
            />
            <Text style={{fontSize: 16, color: '#000', fontWeight: 600}}>
              Goa
            </Text>
          </View>
          <Text>12 Apr 2024, 2 traveller</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.textHeader}>
          Travel ka SEASON SALE: Upto 30% off
        </Text>
      </View>
      <View style={[styles.container, {marginTop: 0}]}>
        <Text style={styles.subheader}>Use Code: TRAVELSEASON</Text>
      </View>
      <ScrollView
        style={{flexDirection: 'row', padding: 10}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}>
          <Image
            style={styles.travelImage}
            source={require('../../../assets/thailand.jpg')}
          />
          <Text style={styles.travelText}>Thailand</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}>
          <Image
            style={styles.travelImage}
            source={require('../../../assets/kashmir.jpg')}
          />
          <Text style={styles.travelText}>Kashmir</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}>
          <Image
            style={styles.travelImage}
            source={require('../../../assets/himachal.jpg')}
          />
          <Text style={styles.travelText}>Himachal</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}>
          <Image
            style={styles.travelImage}
            source={require('../../../assets/kerela.png')}
          />
          <Text style={styles.travelText}>Kerela</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}>
          <Image
            style={styles.travelImage}
            source={require('../../../assets/goa.jpg')}
          />
          <Text style={styles.travelText}>Goa</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}>
          <Image
            style={styles.travelImage}
            source={require('../../../assets/himachal.jpg')}
          />
          <Text style={styles.travelText}>Himachal</Text>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <Text style={styles.textHeader}>International Destinations</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginVertical:10}}>
        <TravelCard
          image={require('../../../assets/thailand.jpg')}
          price="₹ 70,222"
          destination="Thailand"
        />
        <TravelCard
          image={require('../../../assets/singapore.jpg')}
          price="₹ 60,222"
          destination="Singapore"
        />
        <TravelCard
          image={require('../../../assets/spain.jpg')}
          price="₹ 50,222"
          destination="Spain"
        />
        <TravelCard
          image={require('../../../assets/mauritius.jpg')}
          price="₹ 40,222"
          destination="Mauritius"
        />
        <TravelCard
          image={require('../../../assets/bali.jpg')}
          price="₹ 90,222"
          destination="Bali"
        />
      </ScrollView>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Holidays by Theme</Text>
      </View>
      <View style={[styles.container, {marginTop: 0}]}>
        <Text style={styles.subheader}>
          Pick from our specially curated packages
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{width: '100%', marginRight: 20}}>
        <HolidayThemeCard
          icon={require('../../../assets/honeymoon.jpg')}
          theme="Honeymoon"
          filter1="Beaches"
          filter2="Hill Vacays"
          filter3="Adventures"
          filter4="City Escapes"
        />
        <HolidayThemeCard
          icon={require('../../../assets/varanasi.jpg')}
          theme="Pilgrimage"
          filter1="Ayodhya"
          filter2="Banaras"
          filter3="Vaishno Devi"
          filter4="Gujrat"
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
  container: {
    width: '95%',
    marginTop: 20,
    alignSelf: 'center',
  },
  category: {
    borderColor: '#dbddda',
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 6,
    paddingVertical: 5,
    marginRight: 10,
  },
  containerCategory: {
    width: '95%',
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#000',
    fontWeight: '600',
  },
  subTitle: {
    color: '#767676',
    fontFamily: 'Quicksand-Bold',
  },
  categoryActive: {
    bordercolor: 'orange',
    borderWidth: 1,
  },
  travelImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  travelText: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
  },
  subheader: {
    color: '#565855',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default HolidayPackageSearchPage;
