import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Button from '../../components/holidaypackage/Button';
import Filter from '../../components/holidaypackage/Filter';
import DateWithPrice from '../../components/flight/DateWithPrice';
import LinearGradient from 'react-native-linear-gradient';
import DayWiseDetails from '../../components/holidaypackage/DayWiseDetails';
import DayWisePlanDetails from '../../components/holidaypackage/DayWisePlanDetails';
import DayWisePlanFlightArrival from '../../components/holidaypackage/DayWisePlanFlightArrival';
import Meals from '../../components/holidaypackage/Meals';
import DayWisePlanFlightDeparture from '../../components/holidaypackage/DayWisePlanFlightDeparture';
import { useNavigation } from '@react-navigation/native';

const HolidayPackageDetails = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
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
            source={require('../../../assets/northgoa.jpeg')}
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
                source={require('../../../assets/southgoa.jpg')}
              />
              <Image
                style={{
                  width: '48%',
                  height: '98%',
                  resizeMode: 'stretch',
                  borderRadius: 10,
                }}
                source={require('../../../assets/dolphintrip.jpeg')}
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
                A flight and hotel only package. Customize the package from a
                pool of optional activities to make your holiday memorable! A
                hot favourite of all beach lovers, your next Goa trip is going
                to be unforgettable one!
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
            <Text style={styles.subheader}>
              Day Wise Details of Your Package
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#cce8fe',
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Filter
              category="Day Plan"
              color="white"
              backgroundColor="#0789f9"
            />
            <Filter
              category="2 flights + 2 Transfers"
              color="black"
              backgroundColor="#fff"
            />
            <Filter category="1 Hotels" color="black" backgroundColor="#fff" />
            <Filter
              category="4 Activities"
              color="black"
              backgroundColor="#fff"
            />
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: '#cce8fe',
            flexDirection: 'row',
            paddingVertical: 10,
            paddingLeft: 10,
          }}>
          <View
            style={{
              width: '95%',
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: 'black',
                alignItems: 'center',
                marginRight: 5,
                justifyContent: 'center',
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6,
                paddingVertical: 15,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  transform: 'rotate(270deg)',
                  color: 'white',
                  alignSelf: 'center',
                  fontWeight: 600,
                }}>
                MAY
              </Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.plancontainer}>
                <Text style={styles.dayText}>WED</Text>
                <Text style={styles.dayCount}>1</Text>
              </View>
              <View style={styles.plancontainer}>
                <Text style={styles.dayText}>THU</Text>
                <Text style={styles.dayCount}>2</Text>
              </View>
              <View style={styles.plancontainer}>
                <Text style={styles.dayText}>FRI</Text>
                <Text style={styles.dayCount}>3</Text>
              </View>
              <View style={styles.plancontainer}>
                <Text style={styles.dayText}>SAT</Text>
                <Text style={styles.dayCount}>4</Text>
              </View>
              <View style={styles.plancontainer}>
                <Text style={styles.dayText}>SUN</Text>
                <Text style={styles.dayCount}>5</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <DayWiseDetails Day="Day 1" Activity=" Flight • Transfer • Meals" />
        <DayWisePlanFlightArrival />
        <DayWiseDetails Day="Day 2" Activity=" Hotel • 2Activities • Meals" />
        <DayWisePlanDetails
          Activity="Activity in Goa 9 Hours"
          ActivitHeading="North Goa Sightseeing (Private Tranfers)"
          ActivitySubheading="Tour Fort Aguada, Chapora Fort and Popular Beaches such as
        Candolim, Calanguta, Baga, Anjuna & Vagator."
          Activityicon={require('../../../assets/northgoa.jpeg')}
        />
        <DayWisePlanDetails
          Activity="Activity in Goa 1 Hours"
          ActivitHeading="Dolphin Trip"
          ActivitySubheading="Tour Fort Aguada, Chapora Fort and Popular Beaches such as
        Candolim, Calanguta, Baga, Anjuna & Vagator."
          Activityicon={require('../../../assets/dolphintrip.jpeg')}
        />
        <Meals />
        <DayWiseDetails Day="Day 3" Activity=" Hotel • 1Activities • Meals" />
        <DayWisePlanDetails
          Activity="Activity in Goa 9 Hours"
          ActivitHeading="South Goa Sightseeing (Private Tranfers)"
          ActivitySubheading="Tour Fort Aguada, Chapora Fort and Popular Beaches such as
      Candolim, Calanguta, Baga, Anjuna & Vagator."
          Activityicon={require('../../../assets/southgoa.jpg')}
        />
        <Meals/>
        <DayWiseDetails Day="Day 4" Activity=" Hotel • 1Activities • Meals" />
        <DayWisePlanDetails
          Activity="Activity in Goa 1.5 Hours"
          ActivitHeading="Discover Sailing Goa One Boat Experience"
          ActivitySubheading="Tour Fort Aguada, Chapora Fort and Popular Beaches such as
      Candolim, Calanguta, Baga, Anjuna & Vagator."
          Activityicon={require('../../../assets/sailinggoa.jpeg')}
        />
        <Meals/>
        <DayWiseDetails Day="Day 5" Activity=" Hotel • Transfer • Flight" />
        <DayWisePlanFlightDeparture/>
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
            ₹ 53,909
          </Text>
          <Text style={{color: '#8b8b8b', fontSize: 12}}>per person</Text>
        </View>
        <View>
          <Button title="Book Now" width="80%" onPress={()=>navigation. navigate('ReviewPage')}/>
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
    marginTop: 10,
    paddingBottom: 10,
  },
  plancontainer: {
    borderColor: '#dadee1',
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginRight: 5,
  },
  dayText: {
    color: '#7c7c7c',
  },
  dayCount: {
    color: '#000',
    fontSize: 14,
    fontWeight: '800',
    fontFamily: 'Quicksand-Bold',
  },
});
