import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import TrekkingCard from '../../components/trekking/TrekkingCard';
import TrekkingCardCostExcludes from '../../components/trekking/TrekkingCardCostExcludes';
import CustomItinerary from '../../components/trekking/CustomItinerary';
import CustomButton from '../../components/holidaypackage/CustomButton';
import {useNavigation} from '@react-navigation/native'

const TrekkingDetailsPage = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex:1}}>
    <ScrollView>
      <View
        style={{
          height: 200,
          borderRadius: 10,
          width: '95%',
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Image
          style={{
            width: '49%',
            height: '100%',
            resizeMode: 'stretch',
            borderRadius: 10,
          }}
          source={require('../../../assets/everest.jpg')}
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
            source={require('../../../assets/everest2.jpg')}
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
              source={require('../../../assets/everest3.jpg')}
            />
            <Image
              style={{
                width: '48%',
                height: '98%',
                resizeMode: 'stretch',
                borderRadius: 10,
              }}
              source={require('../../../assets/everest4.jpg')}
            />
          </View>
        </View>
      </View>
      <TrekkingCard />
      <TrekkingCardCostExcludes />
      <Image
        source={require('../../../assets/trekkingmap.jpg')}
        style={{
          width: '95%',
          height: 300,
          alignSelf: 'center',
          borderRadius: 10,
          marginVertical:10
        }}
      />
      <CustomItinerary day="Day 1 - Arrival"/>
      <CustomItinerary day="Day 2 - Trek Preparation day"/>
      <CustomItinerary day="Day 3 - Drive to Besisahar(830m)"/>
      <CustomItinerary day="Day 4 - Drive from Besisahar to Chame(2,630 m)"/>
      <CustomItinerary day="Day 5 - Trek from Chame to Pisang (3,300 m)"/>
      <CustomItinerary day="Day 6 - Trek from Pisang to Manang (3,300 m)"/>
      <CustomItinerary day="Day 7 - Acclimatization day in Manang"/>
      <CustomItinerary day="Day 8 - Trek from Manang to Sri Kharka (3,700m)"/>
      <CustomItinerary day="Day 9 - Trek from Sri Kharka to Tilicho Phedi"/>
      <CustomItinerary day="Day 10 - Trek from Tilicho Phedi to Tilicho Lake"/>
      <CustomItinerary day="Day 11 - Trek back from Sri Kharka to Yak Kharka"/>
      <CustomItinerary day="Day 12 - Trek from Yak Kharka to Thorungla"/>
      <CustomItinerary day="Day 13 - Trek from Base Camp to Muktinath"/>
      <CustomItinerary day="Day 14 - Trek from Muktinath to Jomsom"/>
      <CustomItinerary day="Day 15 - Jomsom to Pokhara by flight"/>
      <CustomItinerary day="Day 16 - Rest Day in Pokhara"/>
      <CustomItinerary day="Day 17 - Pokhara to Kathmandu by flight"/>
      <CustomItinerary day="Day 18 - Departure"/>
    </ScrollView>
    <View
    style={{
      bottom: 0,
      position: 'absolute',
      width: '100%',
      backgroundColor: 'black',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 10,
      paddingVertical:5
    }}>
    <View>
      <Text style={{color: '#fff', fontSize: 18, fontWeight: '700'}}>
        ₹ 58,836
      </Text>
      <Text style={{color: '#8b8b8b', fontSize: 12}}>per person</Text>
    </View>
    <View>
      <CustomButton title="Book Now" width="80%" onPress={()=>navigation. navigate('TrekkingReviewPage')}/>
    </View>
  </View>
  </View>
  );
};

export default TrekkingDetailsPage;

const styles = StyleSheet.create({});
