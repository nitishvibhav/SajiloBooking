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
          localImage={require('../../assets/hourlystay2.png')}
        />
        <TopCard
          firstname="Holiday"
          secondname="Package"
          localImage={require('../../assets/luggage5.png')}
        />
        <TopCard
          firstname="Cab"
          secondname="Booking"
          localImage={require('../../assets/taxi2.png')}
        />
        <TopCard
          firstname="Travel"
          secondname="Insurance"
          localImage={require('../../assets/insurance.png')}
        />
        <TopCard
          firstname="Gift"
          secondname="Cards"
          localImage={require('../../assets/giftcard.png')}
        />
        <TopCard
          firstname="Cab"
          secondname="Booking"
          localImage={require('../../assets/taxi2.png')}
        />
        <TopCard
          firstname="Houly"
          secondname="Stays"
          localImage={require('../../assets/hourlystay2.png')}
        />
      </ScrollView>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>Offers For you</Text>
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
          <OfferHomeCard2
            category="Hotels"
            date="April 5, 2024"
            offerImage={require('../../assets/offerimage4.png')}
          />
          <OfferHomeCard2
            category="Flights"
            date="April 15, 2024"
            offerImage={require('../../assets/offerimage.jpg')}
          />
          <OfferHomeCard2
            category="Holiday Package"
            date="April 8, 2024"
            offerImage={require('../../assets/offerimage3.jpg')}
          />
          <OfferHomeCard2
            category="Hourly stays"
            date="30 March, 2024"
            offerImage={require('../../assets/offerimage5.png')}
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
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  textHeaderRight: {
    fontSize: 12,
    color: '#488bf0',
    fontWeight: '700',
  },
  ImageRight: {
    height: 16,
    width: 16,
    tintColor: 'white',
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
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: 'grey',

    paddingBottom: 10,
  },
});

export default HomePage;
