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
import LinearGradient from 'react-native-linear-gradient';
import SearchPageOfferBannerCard from '../../components/holidaypackage/SearchPageOfferBannerCard';
import HolidayPackagerecentlyViewCard from '../../components/holidaypackage/HolidayPackagerecentlyViewCard';

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
  return (
    <View>
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
          <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:16, color:'#000', marginRight:10, fontWeight:600}}>New Delhi</Text>
          <Image source={require('../../../assets/Arrow.png')}
          style={{height:20, width:20, marginRight:10}}/>
          <Text style={{fontSize:16, color:'#000', fontWeight:600}}>Goa</Text>
          </View>
          <Text>12 Apr 2024, 2 traveller</Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 10,
            marginLeft:10
          }}>
          <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:16, color:'#000', marginRight:10, fontWeight:600}}>New Delhi</Text>
          <Image source={require('../../../assets/Arrow.png')}
          style={{height:20, width:20, marginRight:10}}/>
          <Text style={{fontSize:16, color:'#000', fontWeight:600}}>Goa</Text>
          </View>
          <Text>12 Apr 2024, 2 traveller</Text>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
    fontWeight: '700',
  },
  container: {
    width: '95%',
    marginTop: 10,
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
});

export default HolidayPackageSearchPage;
