import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import HolidayPackageListHeader from '../../components/holidaypackage/HolidayPackageListHeader';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/CustomButton';
import Hatchback from '../../components/cab/Hatchback';
import Sedan from '../../components/cab/Sedan';
import Crysta from '../../components/cab/Crysta';
import Suv from '../../components/cab/Suv';
import CabFairs from '../../components/cab/CabFairs';

const CabList = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HolidayPackageListHeader
        TripName="KolKata - Pickup from Airport"
        dateTime="11-04-2024 | 6:00 PM"
      />
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          paddingHorizontal: 30,
          justifyContent: 'space-between',
        }}>
        <View style={styles.container}>
          <Text style={styles.textCar}>Hatchback</Text>
          <View
            style={[
              styles.imageTopView,
              {borderColor: selectedTab == 0 ? 'orange' : 'black'},
            ]}>
            <TouchableOpacity onPress={() => setSelectedTab(0)}>
              <Image
                style={styles.imageTop}
                source={require('../../../assets/hatchback.jpeg')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>₹ 675</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.textCar}>Sedan</Text>
          <View
            style={[
              styles.imageTopView,
              {borderColor: selectedTab == 1 ? 'orange' : 'black'},
            ]}>
            <TouchableOpacity onPress={() => setSelectedTab(1)}>
              <Image
                style={styles.imageTop}
                source={require('../../../assets/sedan.jpg')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>₹ 875</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.textCar}>SUV</Text>
          <View
            style={[
              styles.imageTopView,
              {borderColor: selectedTab == 2 ? 'orange' : 'black'},
            ]}>
            <TouchableOpacity onPress={() => setSelectedTab(2)}>
              <Image
                style={styles.imageTop}
                source={require('../../../assets/suv.jpeg')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>₹ 1575</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.textCar}>Crysta</Text>
          <View
            style={[
              styles.imageTopView,
              {borderColor: selectedTab == 3 ? 'orange' : 'black'},
            ]}>
            <TouchableOpacity onPress={() => setSelectedTab(3)}>
              <Image
                style={styles.imageTop}
                source={require('../../../assets/crysta.jpg')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>₹ 2175</Text>
        </View>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#FFA500', '#FF6347']}
        style={styles.maincontainer}>
        <Text style={styles.buttonText}>
          Price Inclusive of All Taxes & Tolls
        </Text>
      </LinearGradient>
      {selectedTab == 0 ? (
        <Hatchback />
      ) : selectedTab == 1 ? (
        <Sedan />
      ) : selectedTab == 2 ? (
        <Suv />
      ) : (
        <Crysta />
      )}
      <CabFairs/>
    </ScrollView>
  );
};

export default CabList;

const styles = StyleSheet.create({
  imageTop: {
    height: 55,
    width: 55,
    borderRadius: 50,
  },
  imageTopView: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    marginVertical: 2,
  },
  container: {
    alignItems: 'center',
  },
  textCar: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    fontFamily: 'Quicksand-Bold',
  },
  price: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  buttonText: {
    fontSize: 16,
    color: '#fafafa',
    alignSelf: 'center',
    fontWeight: '800',
    fontFamily: 'Quicksand-Regular',
    textTransform: 'uppercase',
  },
  maincontainer: {
    width: '100%',
    paddingVertical: 5,
    marginVertical: 10,
  },
  miniContainer: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'grey',
    padding: 10,
  },
  mainImage: {
    height: 120,
    width: '100%',
    borderRadius: 10,
  },
  RightView: {
    width: '65%',
  },
  LeftView: {
    width: '35%',
  },
  imageView: {
    height: 16,
    width: 16,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    marginRight: 5,
  },
  imagesmall: {
    height: 12,
    width: 12,
    borderRadius: 50,
    tintColor: 'orange',
    alignSelf: 'center',
  },
  textsmall: {
    fontSize: 12,
    color: 'black',
    fontWeight: '500',
  },
});
