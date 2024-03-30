import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import OfferCard from '../components/homepage/OfferCard';
import TopCard from '../components/homepage/TopCard';
import {useNavigation} from '@react-navigation/native';
import OfferHomeCard2 from '../components/homepage/OfferHomeCard2';
import HomeTop from '../components/homepage/HomeTop';
import TravelCard from '../components/holidaypackage/TravelCard';
import Filter from '../components/flight/Filter';

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <StatusBar style={{backgroundColor: 'orange'}} />
      <View style={{height: 160, backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: 'orange',
            top: 0,
            position: 'absolute',
            width: '100%',
            height: 130,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <View
            style={{
              width: '100%',
              top: 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Image
                source={require('../../assets/menu.png')}
                style={{
                  height: 24,
                  width: 24,
                  marginLeft: 20,
                  tintColor: 'white',
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  marginLeft: 10,
                  fontWeight: '600',
                }}>
                Menu
              </Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/wallet.png')}
                  style={{
                    height: 24,
                    width: 24,
                    marginRight: 20,
                    tintColor: 'white',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
                <Image
                  source={require('../../assets/notification.png')}
                  style={{
                    height: 24,
                    width: 24,
                    marginRight: 20,
                    tintColor: 'white',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <HomeTop />
        </View>
      </View>

      <ScrollView
        horizontal
        style={{height: 90, width: '100%'}}
        showsHorizontalScrollIndicator={false}>
        <TopCard
          firstname="Houly"
          secondname="Stays"
          localImage={require('../../assets/houly_stay.png')}
        />
        <TopCard
          firstname="Holiday"
          secondname="Package"
          localImage={require('../../assets/holiday_pakage.png')}
        />
        <TopCard
          firstname="Cab"
          secondname="Booking"
          localImage={require('../../assets/car_booking.png')}
        />
        <TopCard
          firstname="Travel"
          secondname="Insurance"
          localImage={require('../../assets/travel_insurane.png')}
        />
        <TopCard
          firstname="Gift"
          secondname="Cards"
          localImage={require('../../assets/gift_card.png')}
        />
        <TopCard
          firstname="Travel"
          secondname="Insurance"
          localImage={require('../../assets/travel_insurane.png')}
        />
        <TopCard
          firstname="Gift"
          secondname="Cards"
          localImage={require('../../assets/gift_card.png')}
        />
      </ScrollView>
      <View style={styles.containerOffer}>
        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>Offers For you</Text>
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
              source={require('../../assets/next.png')}
            />
          </View>
        </View>
        <ScrollView
          horizontal
          style={{flexDirection: 'row', marginBottom: 10, width: '95%'}}
          showsHorizontalScrollIndicator={false}>
          <Filter category="Flight" color="black" />
          <Filter category="Hotel" color="black" />
          <Filter category="Holiday Package" color="black" />
          <Filter category="Offer" color="black" />
          <Filter category="Cab" color="black" />
          <Filter category="Cruise" color="black" />
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={require('../../assets/hotel_banner.png')}
            style={styles.offerBanner}
          />
          <Image
            source={require('../../assets/flight_banner.png')}
            style={styles.offerBanner}
          />
          <Image
            source={require('../../assets/hotel_banner.png')}
            style={styles.offerBanner}
          />
          <Image
            source={require('../../assets/hotel_banner.png')}
            style={styles.offerBanner}
          />
        </ScrollView>
      </View>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>Popular Destination</Text>
          <View style={styles.rightHeader}>
            <Text style={styles.textHeaderRight}>View All</Text>
            <View style={styles.imageView}>
              <Image
                style={styles.ImageRight}
                source={require('../../assets/next.png')}
              />
            </View>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <OfferCard
            place="Kathmandu"
            date="March 22, 2024"
            imagePlace={require('../../assets/nepal.jpg')}
          />
          <OfferCard
            place="Mumbai"
            date="March 29, 2024"
            imagePlace={require('../../assets/mumbai.jpg')}
          />
          <OfferCard
            place="Delhi"
            date="March 25, 2024"
            imagePlace={require('../../assets/delhi.jpg')}
          />
          <OfferCard
            place="Goa"
            date="April 22, 2024"
            imagePlace={require('../../assets/goa.jpg')}
          />
          <OfferCard
            place="Lakshadweep"
            date="March 8, 2024"
            imagePlace={require('../../assets/lakshadweep.jpg')}
          />
        </ScrollView>
      </View>

      <View style={styles.container2}>
        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>International Destination</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TravelCard
            image={require('../../assets/thailand.jpg')}
            price="₹ 70,222"
            destination="Thailand"
          />
          <TravelCard
            image={require('../../assets/singapore.jpg')}
            price="₹ 60,222"
            destination="Singapore"
          />
          <TravelCard
            image={require('../../assets/spain.jpg')}
            price="₹ 50,222"
            destination="Spain"
          />
          <TravelCard
            image={require('../../assets/mauritius.jpg')}
            price="₹ 40,222"
            destination="Mauritius"
          />
          <TravelCard
            image={require('../../assets/bali.jpg')}
            price="₹ 90,222"
            destination="Bali"
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    width: '95%',
    paddingHorizontal: 10,
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
    height: 12,
    width: 12,
    resizeMode: 'contain',
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
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: 'grey',
    paddingBottom: 10,
  },
  container2: {
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: 'grey',
   
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
  },
});

export default HomePage;
