import {
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
} from 'react-native';
import React from 'react';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import CustomButton from '../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import SearchPageOfferBannerCard from '../../components/holidaypackage/SearchPageOfferBannerCard';

const HolidayPackageSearchPage = () => {
  return (
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
      <CustomButton title="search" width="95%" />
      <SearchPageOfferBannerCard icon={require('../../images/goa.jpg')}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HolidayPackageSearchPage;
